import { useEffect } from "react";

function SplineBackground() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <spline-viewer
      url="https://prod.spline.design/L3vpuIq8q1AXkk0O/scene.splinecode"
      style={{
        width: "100%", // ✅ Fix width for mobile
        height: "calc(var(--vh) * 100)", // ✅ Fix height for mobile
        position: "fixed",
        inset: 0,
        zIndex: -1, // stays behind your app
      }}
    ></spline-viewer>
  );
}

export default SplineBackground;
