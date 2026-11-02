import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const dynamic = "force-static";

// Image metadata
export const alt = "TriventX Energy LLP — Solar Engineering Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0A0E1A",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "160px",
            height: "160px",
            backgroundColor: "#FF8A00",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(45deg)",
            boxShadow: "0 0 80px rgba(255, 138, 0, 0.4)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100px",
              height: "100px",
              transform: "rotate(-45deg)",
            }}
          >
            <path
              d="M7 8V6H17V8M12 6V18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12L16 18M16 12L8 18"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: "bold",
            color: "white",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          Trivent<span style={{ color: "#FF8A00" }}>X</span>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#FF8A00",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: "12px",
          }}
        >
          Energy LLP
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#94A3B8",
            marginTop: "40px",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Engineering smarter. Delivering faster. Helping solar businesses
          scale.
        </div>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
