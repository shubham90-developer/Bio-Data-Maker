import React from "react";
import Image from "next/image";
import { GaneshIcon, OmIcon, SwastikIcon, KalashIcon, LotusIcon } from "../common/AuspiciousSymbols";

interface FieldRowProps {
  label: string;
  value?: string | number;
  labelWidth?: string;
  className?: string;
  accentColor?: string;
  dotColor?: string;
}

export const FieldRow: React.FC<FieldRowProps> = ({
  label,
  value,
  labelWidth = "w-36 sm:w-44",
  className = "py-1 text-xs sm:text-sm",
  accentColor,
}) => {
  if (!value || value === "०" || value === "0") return null;

  return (
    <div className={`flex items-start ${className}`}>
      <span
        className={`font-semibold shrink-0 text-charcoal-700 flex items-center justify-between ${labelWidth}`}
        style={{ color: accentColor }}
      >
        <span>{label}</span>
        <span className="mx-1 text-charcoal-400">:</span>
      </span>
      <span className="text-charcoal-900 font-medium break-words flex-1 pl-1">
        {value}
      </span>
    </div>
  );
};

export const SectionTitle: React.FC<{
  title: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
}> = ({
  title,
  color = "#722F37",
  bgColor,
  borderColor,
  className = "",
}) => {
  return (
    <div
      className={`my-3 pb-1 border-b flex items-center gap-2 ${className}`}
      style={{
        borderColor: borderColor || `${color}30`,
        backgroundColor: bgColor || "transparent",
      }}
    >
      <span
        className="w-1.5 h-4 rounded-full inline-block"
        style={{ backgroundColor: color }}
      />
      <h3
        className="text-sm sm:text-base font-bold tracking-wide uppercase font-serif"
        style={{ color }}
      >
        {title}
      </h3>
    </div>
  );
};

export const DeityHeader: React.FC<{
  symbol: string;
  title: string;
  color?: string;
  className?: string;
}> = ({ symbol, title, color = "#C5A059", className = "my-2" }) => {
  const renderIcon = () => {
    switch (symbol) {
      case "ganesh":
        return <GaneshIcon size={34} color={color} className="mx-auto" />;
      case "om":
        return <OmIcon size={34} color={color} className="mx-auto" />;
      case "swastik":
        return <SwastikIcon size={34} color={color} className="mx-auto" />;
      case "kalash":
        return <KalashIcon size={34} color={color} className="mx-auto" />;
      case "lotus":
        return <LotusIcon size={34} color={color} className="mx-auto" />;
      default:
        return null;
    }
  };

  return (
    <div className={`text-center ${className}`}>
      {renderIcon()}
      {title && (
        <p
          className="text-xs sm:text-sm font-semibold tracking-wider mt-1"
          style={{ color }}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export const TemplatePhoto: React.FC<{
  url?: string;
  shape?: "rounded" | "circle" | "square";
  borderColor?: string;
  className?: string;
}> = ({
  url,
  shape = "rounded",
  borderColor = "#C5A059",
  className = "",
}) => {
  if (!url) {
    return (
      <div
        className={`w-28 h-36 sm:w-32 sm:h-40 bg-cream-surface border-2 flex flex-col items-center justify-center p-2 text-center text-charcoal-400 ${
          shape === "circle"
            ? "rounded-full w-28 h-28 sm:w-32 sm:h-32"
            : shape === "rounded"
            ? "rounded-xl"
            : "rounded-none"
        } ${className}`}
        style={{ borderColor }}
      >
        <span className="text-2xl">👤</span>
        <span className="text-[10px] mt-1">फोटो / Photo</span>
      </div>
    );
  }

  const shapeClass =
    shape === "circle"
      ? "rounded-full aspect-square"
      : shape === "rounded"
      ? "rounded-xl"
      : "rounded-none";

  return (
    <div
      className={`relative overflow-hidden w-28 h-36 sm:w-32 sm:h-40 border-2 shadow-sm ${shapeClass} ${className}`}
      style={{ borderColor }}
    >
      <Image
        src={url}
        alt="Profile"
        fill
        className="object-cover"
        sizes="160px"
        unoptimized
      />
    </div>
  );
};
