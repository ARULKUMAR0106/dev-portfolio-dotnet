import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 400);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      style={{
        left: coords.x,
        top: coords.y,
        transform: "translate(-50%, -50%)",
      }}
 className={`
  fixed rounded-full pointer-events-none z-[9999] 
  transition-all duration-300 ease-out
  ${clicking ? "w-20 h-20 opacity-30 blur-2xl" : "w-10 h-10 opacity-70 blur-lg"}
  bg-white/70
`}
    />
  );
};

export default CustomCursor;
