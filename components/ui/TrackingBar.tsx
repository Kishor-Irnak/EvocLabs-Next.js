"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TrackingItem {
  label: string;
  value: number;
  percentage: string;
  color: string;
}

interface TrackingBarProps {
  items: TrackingItem[];
  className?: string;
}

export const TrackingBar: React.FC<TrackingBarProps> = ({
  items,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col justify-center gap-2 text-xs",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                item.color.replace("text-", "bg-"),
              )}
            />
            <span className="font-medium text-white">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-zinc-500 mt-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={idx === 1 ? "text-blue-500 font-medium" : ""}
          >
            {item.value}{" "}
            <span className="text-[10px] opacity-60">{item.percentage}</span>
          </div>
        ))}
      </div>

      <div className="h-4 w-full rounded-sm bg-white/5 overflow-hidden flex">
        {items.map((item, idx) => {
          const width = parseFloat(item.percentage);
          if (width === 0) return null;
          return (
            <div
              key={idx}
              className={cn("h-full", item.color.replace("text-", "bg-"))}
              style={{ width: `${width}%` }}
            />
          );
        })}
      </div>
    </div>
  );
};
