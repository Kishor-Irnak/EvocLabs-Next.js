"use client";

import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { cn } from "@/lib/utils";

interface ChartRadialProps {
  value: number;
  label?: string;
  subLabel?: string;
  color?: string;
  className?: string;
}

export const ChartRadial: React.FC<ChartRadialProps> = ({
  value,
  label,
  subLabel,
  color = "#3b82f6",
  className,
}) => {
  const data = [{ value }];

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: "rgba(255,255,255,0.05)" }}
            dataKey="value"
            cornerRadius={10}
            fill={color}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {label && (
          <span className="text-xl md:text-2xl font-oswald text-white uppercase">
            {label}
          </span>
        )}
        {subLabel && (
          <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-widest mt-1">
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
};
