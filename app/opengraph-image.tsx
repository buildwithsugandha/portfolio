import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sugandha Vashishtha – Cloud & SRE Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0d1526",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #00FFD1, #00B4FF, #9D4EDD)",
          }}
        />

        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(0,255,209,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(157,78,221,0.07)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "60px 80px",
            flex: 1,
          }}
        >
          {/* Avatar + Name row */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px", marginBottom: "32px" }}>
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00FFD1, #00B4FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "800",
                color: "#0d1526",
              }}
            >
              SV
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "52px",
                  fontWeight: "800",
                  color: "#ffffff",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                Sugandha Vashishtha
              </span>
              <span style={{ fontSize: "24px", color: "#00FFD1", marginTop: "6px" }}>
                Cloud & Site Reliability Engineer
              </span>
            </div>
          </div>

          {/* Badges row */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "36px" }}>
            {[
              { label: "Tech Mahindra · Jul 2025–Present", bg: "rgba(0,180,255,0.12)", color: "#00B4FF", border: "rgba(0,180,255,0.3)" },
              { label: "📍 Noida, India", bg: "rgba(0,255,209,0.08)", color: "#00FFD1", border: "rgba(0,255,209,0.25)" },
              { label: "9+ Years Exp", bg: "rgba(157,78,221,0.1)", color: "#9D4EDD", border: "rgba(157,78,221,0.3)" },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  background: b.bg,
                  color: b.color,
                  border: `1px solid ${b.border}`,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {b.label}
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
            {["AWS", "Azure", "Kubernetes", "Terraform", "Dynatrace", "SRE / DRI", "Linux", "GitHub Actions"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "6px 16px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "17px",
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Cert pills */}
          <div style={{ display: "flex", gap: "12px" }}>
            {["✅ AWS Solutions Architect – Associate", "✅ AWS Cloud Practitioner", "✅ Red Hat RH124"].map((c) => (
              <div
                key={c}
                style={{
                  padding: "6px 16px",
                  borderRadius: "8px",
                  background: "rgba(255,153,0,0.1)",
                  border: "1px solid rgba(255,153,0,0.3)",
                  color: "#FF9900",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 80px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "16px", fontFamily: "monospace" }}>
            sugandha.dev
          </span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "16px" }}>
            Open to SRE · Cloud · DevOps · Infrastructure Roles
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
