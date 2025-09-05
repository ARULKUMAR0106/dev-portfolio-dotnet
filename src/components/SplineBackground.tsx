import React from "react";

const SplineBackground: React.FC = () => {
  return (
    <spline-viewer
      url="https://prod.spline.design/L3vpuIq8q1AXkk0O/scene.splinecode"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
        zIndex: -1, // 👈 stays behind your app
      }}
    ></spline-viewer>
  );
};

export default SplineBackground;