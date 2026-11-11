import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Route segment config: rendered once at build time.
export const dynamic = "force-static";

export const alt = "TriventX Energy — Solar PV Design & Engineering Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/triventx-logo-large.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px 40px",
        }}
      >
        <img src={logoSrc} width={820} height={222} alt="" />
        <div
          style={{
            marginTop: "36px",
            fontSize: 34,
            fontWeight: 600,
            color: "#03184a",
            textAlign: "center",
          }}
        >
          Solar PV Design &amp; Engineering Drawing Services
        </div>
      </div>
      <div
        style={{
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#03184a",
          borderTop: "8px solid #028182",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}
      >
        Engineering Smarter.&nbsp;<span style={{ color: "#3ec4bc" }}>Delivering Faster.</span>
      </div>
    </div>,
    { ...size },
  );
}
