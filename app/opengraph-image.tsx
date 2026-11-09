import { ImageResponse } from "next/og";

export const alt = "AiAiAiRouter — one API for Kimi, ChatGPT, GLM and 99+ models";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0c0b", color: "#f1f2eb", padding: "64px", fontFamily: "monospace", border: "24px solid #191b18" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "30px", fontWeight: 650 }}>
        <div style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", background: "#e2ec62", color: "#11130d", fontSize: "25px" }}>A3</div>
        AiAiAiRouter
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ maxWidth: "1000px", color: "#e2ec62", fontSize: "64px", lineHeight: 1.1, letterSpacing: "-4px", fontWeight: 650 }}>One API for Kimi, ChatGPT, GLM and 99+ models.</div>
        <div style={{ fontSize: "25px", color: "#a0a59b" }}>OpenAI-compatible / One key / Transparent usage</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#e2ec62", fontSize: "22px" }}>
        <div style={{ width: "38px", height: "3px", background: "#e2ec62" }} />
        Developed by GonidonCloud
      </div>
    </div>,
    size,
  );
}
