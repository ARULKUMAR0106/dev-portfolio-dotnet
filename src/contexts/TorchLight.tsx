import React, { useEffect, useRef, useState } from "react";

const TorchLight: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (overlayRef.current) {
        const size = 200; // torch radius
        const gradient = `radial-gradient(circle ${size}px at ${e.clientX}px ${e.clientY}px, transparent 80%, rgba(0,0,0,0.9) 100%)`;
        overlayRef.current.style.background = gradient;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
};

export default TorchLight;
