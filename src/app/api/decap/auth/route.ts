import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

function getBaseUrl(request: Request): string {
  const envBaseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envBaseUrl) return envBaseUrl.replace(/\/$/, "");

  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

export async function GET(request: Request) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json(
      { error: "Missing GITHUB_OAUTH_CLIENT_ID environment variable." },
      { status: 500 }
    );
  }

  const state = randomUUID();
  const baseUrl = getBaseUrl(request);
  const redirectUri = `${baseUrl}/api/decap/callback`;

  const githubUrl = new URL("https://github.com/login/oauth/authorize");
  githubUrl.searchParams.set("client_id", clientId);
  githubUrl.searchParams.set("redirect_uri", redirectUri);
  githubUrl.searchParams.set("scope", "repo");
  githubUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(githubUrl);
  response.cookies.set("decap_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10
  });

  return response;
}
