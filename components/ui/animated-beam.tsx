"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useRef } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = React.useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  return (
    <svg
      ref={svgRef}
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      width="100%"
      height="100%"
      style={{
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient id={`gradient-${id}`} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop offset="50%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        ref={pathRef}
        d=""
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d=""
        fill="none"
        stroke={`url(#gradient-${id})`}
        strokeWidth={pathWidth}
        strokeOpacity="1"
        strokeLinecap="round"
        initial={{
          strokeDasharray: 0,
          strokeDashoffset: 0,
        }}
        animate={{
          strokeDasharray: 0,
          strokeDashoffset: 0,
        }}
        transition={{
          duration: 0,
        }}
      />
    </svg>
  );
};
