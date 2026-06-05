import { NextResponse } from "next/server";

function renderCallbackPage(body: string): string {
  return `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Authentication complete</title></head>
  <body>
    <script>
      (function () {
        ${body}
      })();
    </script>
  </body>
</html>`;
}

function jsonResponseScript(payload: Record<string, unknown>, success: boolean): string {
  const status = success ? "success" : "error";
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `
const msg = ${JSON.stringify(message)};
function sendResult(origin) {
  if (window.opener) {
    window.opener.postMessage(msg, origin || "*");
  }
  window.close();
}
window.addEventListener("message", function (e) {
  if (e.data === "authorizing:github") {
    sendResult(e.origin);
  }
}, false);
if (window.opener) {
  window.opener.postMessage("authorizing:github", "*");
}
`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const cookieHeader = request.headers.get("cookie") || "";
  const stateCookie = cookieHeader
    .split(";")
    .map((v) => v.trim())
    .find((v) => v.startsWith("decap_oauth_state="))
    ?.split("=")[1];

  if (!code || !state || !stateCookie || state !== stateCookie) {
    return new NextResponse(
      renderCallbackPage(
        jsonResponseScript({ error: "Invalid OAuth state or missing code." }, false)
      ),
      {
        status: 400,
        headers: { "content-type": "text/html; charset=utf-8" }
      }
    );
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse(
      renderCallbackPage(
        jsonResponseScript(
          {
            error:
              "Missing GITHUB_OAUTH_CLIENT_ID or GITHUB_OAUTH_CLIENT_SECRET environment variable."
          },
          false
        )
      ),
      {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" }
      }
    );
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      state
    })
  });

  const tokenData = (await tokenResponse.json()) as {
    access_token?: string;
    token_type?: string;
    scope?: string;
    error?: string;
    error_description?: string;
  };

  if (!tokenResponse.ok || !tokenData.access_token) {
    return new NextResponse(
      renderCallbackPage(
        jsonResponseScript(
          {
            error: tokenData.error || "OAuth token exchange failed.",
            error_description: tokenData.error_description || "No access token returned."
          },
          false
        )
      ),
      {
        status: 502,
        headers: { "content-type": "text/html; charset=utf-8" }
      }
    );
  }

  return new NextResponse(
    renderCallbackPage(
      jsonResponseScript(
        {
          token: tokenData.access_token,
          provider: "github"
        },
        true
      )
    ),
    {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "set-cookie":
          "decap_oauth_state=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax"
      }
    }
  );
}
