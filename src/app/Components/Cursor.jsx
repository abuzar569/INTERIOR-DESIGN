"use client";

import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const isMobileDevice = () => {
      return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth <= 768;
    };

    const updateCursorVisibility = () => {
      setShowCursor(!isMobileDevice());
    };

    updateCursorVisibility();
    window.addEventListener("resize", updateCursorVisibility);

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverEffect = () => setHovering(true);
    const removeHoverEffect = () => setHovering(false);

    if (showCursor) {
      document.addEventListener("mousemove", moveCursor);

      const hoverTargets = document.querySelectorAll("a, button, .hover-target");
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", addHoverEffect);
        el.addEventListener("mouseleave", removeHoverEffect);
      });

      return () => {
        document.removeEventListener("mousemove", moveCursor);
        hoverTargets.forEach((el) => {
          el.removeEventListener("mouseenter", addHoverEffect);
          el.removeEventListener("mouseleave", removeHoverEffect);
        });
      };
    }

    return () => {
      window.removeEventListener("resize", updateCursorVisibility);
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? "hovering" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
