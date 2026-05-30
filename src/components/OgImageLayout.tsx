type Props = {
  title: string;
  subtitle: string;
  footer?: string;
};

export function OgImageLayout({ title, subtitle, footer }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #071827 0%, #0b1f35 55%, #2f6f5e 100%)",
        color: "#f4f8fb",
        padding: "56px 64px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 14,
            height: 14,
            background: "#8aa18f",
            transform: "rotate(45deg)"
          }}
        />
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>NATURCHEM, s.r.o.</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
        <div style={{ fontSize: 52, lineHeight: 1.12, fontWeight: 700, letterSpacing: "-0.03em" }}>{title}</div>
        <div style={{ fontSize: 26, lineHeight: 1.35, color: "#dce7f2" }}>{subtitle}</div>
      </div>

      <div style={{ fontSize: 22, color: "#b8d6ca" }}>
        {footer ?? "Akreditovaná zkušební laboratoř č. 1599 · ČSN EN ISO/IEC 17025"}
      </div>
    </div>
  );
}
