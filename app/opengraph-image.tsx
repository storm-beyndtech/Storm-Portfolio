import { ImageResponse } from "next/og"

export const alt = "Storm / Victor Nwachukwu, Software Engineer and Product Designer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          padding: "64px 72px",
          background: "#171513",
          color: "#f2eee6",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 18, letterSpacing: "0.18em", fontWeight: 700 }}>
            STORM <span style={{ width: 8, height: 8, background: "#c45f3f" }} />
          </div>
          <div style={{ display: "flex", fontSize: 16, letterSpacing: "0.12em", color: "#817a71", textTransform: "uppercase" }}>
            Software engineer · Product designer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 0.95, letterSpacing: "-0.055em", fontWeight: 700 }}>
            Building high-trust systems under uncertainty.
          </div>
          <div style={{ display: "flex", marginTop: 30, maxWidth: 860, fontSize: 23, lineHeight: 1.45, color: "#bcb5aa" }}>
            Backend infrastructure, behavioral intelligence, financial systems, and product UX.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #403a34", paddingTop: 22 }}>
          <div style={{ display: "flex", fontSize: 19, fontWeight: 600 }}>Victor Nwachukwu</div>
          <div style={{ display: "flex", fontSize: 15, letterSpacing: "0.1em", color: "#817a71", textTransform: "uppercase" }}>
            Go · TypeScript · React · PostgreSQL · Product
          </div>
        </div>
      </div>
    ),
    size,
  )
}
