import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg, #102b40 0%, #124734 60%, #0a2e25 100%)",
          color: "#eaf2fb",
          padding: "64px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 99,
              background: "#57b890"
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700 }}>NATURCHEM, s.r.o.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 54, lineHeight: 1.16, fontWeight: 700 }}>
            Akreditovaná měření a odborné podklady pro praxi i úřady
          </div>
          <div style={{ fontSize: 28, opacity: 0.92 }}>
            Emise | Pracovní prostředí | Hluk | Rozptylové studie | EIA
          </div>
        </div>

        <div style={{ fontSize: 24, opacity: 0.88 }}>
          Akreditovaná zkušební laboratoř č. 1599 | ČSN EN ISO/IEC 17025
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
