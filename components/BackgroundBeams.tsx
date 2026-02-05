"use client";

import React, { useEffect, useState } from "react";

const BackgroundBeams: React.FC = () => {
  const [lines, setLines] = useState<
    Array<{ left: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate lines on client side only to avoid hydration mismatch
    const lineCount = 20;
    const newLines = [];
    for (let i = 1; i <= lineCount; i++) {
      newLines.push({
        left: i * (100 / lineCount) + Math.random() * 5 - 5,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 10, // Negative delay to start mid-animation
      });
    }
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-black">
      {/* Dynamic Beams */}
      {lines.map((line, index) => (
        <div
          key={index}
          className="absolute top-0 w-[1px] h-full bg-white/10"
          style={{
            left: `${line.left}%`,
          }}
        >
          <div
            className="absolute left-0 w-full h-[20vh] bg-gradient-to-b from-transparent to-[#00e6fa]/80"
            style={{
              animation: `fall ${line.duration}s ${line.delay}s linear infinite`,
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            top: -20%;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundBeams;
