import React, { useState, useEffect } from "react";
import "../styles/cursorAnimation.css";

function CursorAnimation() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPos({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-animation"
      style={{ left: cursorPos.x, top: cursorPos.y }}
    />
  );
}

export default CursorAnimation;
