import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #0b1120 0%, #152238 100%)",
        borderRadius: "7px",
        border: "1.5px solid rgba(56, 189, 248, 0.55)",
        boxShadow: "inset 0 0 4px rgba(96, 150, 180, 0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 900,
          fontSize: 20,
          letterSpacing: "-0.5px",
          color: "#ffffff",
        }}
      >
        <span>R</span>
        <span
          style={{
            width: 3.5,
            height: 3.5,
            borderRadius: "50%",
            backgroundColor: "#38bdf8",
            marginLeft: 1.5,
            boxShadow: "0 0 3px #38bdf8",
          }}
        />
      </div>
    </div>,
    {
      ...size,
    }
  );
}
