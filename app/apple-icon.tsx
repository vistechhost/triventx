import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const dynamic = "force-static";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background: "#FF8A00",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "40px",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "120px",
          height: "120px",
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
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
