import React from "react";

interface SymbolProps {
  className?: string;
  size?: number;
  color?: string;
}

export const GaneshIcon: React.FC<SymbolProps> = ({
  className = "w-10 h-10",
  size = 40,
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stylized Modern Auspicious Ganesha Motif */}
    <path
      d="M50 15 C58 15 65 20 65 28 C65 36 58 40 50 40 C42 40 35 36 35 28 C35 20 42 15 50 15 Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M50 40 C54 48 55 58 52 68 C49 78 40 82 36 78 C32 74 34 68 40 66 C46 64 48 54 47 48"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ears */}
    <path
      d="M36 24 C26 22 20 28 22 38 C24 48 32 50 38 46"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M64 24 C74 22 80 28 78 38 C76 48 68 50 62 46"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Tilak / Trishul Crown */}
    <path
      d="M50 12 L50 24"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M45 18 Q50 22 55 18"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="50" cy="8" r="2.5" fill={color} />
    {/* Modak */}
    <circle cx="68" cy="62" r="4.5" fill={color} />
  </svg>
);

export const OmIcon: React.FC<SymbolProps> = ({
  className = "w-10 h-10",
  size = 40,
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Auspicious Sacred Om */}
    <path
      d="M32 30 C32 22 42 18 48 24 C54 30 50 40 42 44 C54 44 62 52 58 64 C54 74 38 74 32 66"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M44 43 C52 40 68 40 74 54 C78 64 74 72 68 76"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M58 26 C68 24 76 28 80 34"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="70" cy="18" r="3.5" fill={color} />
  </svg>
);

export const SwastikIcon: React.FC<SymbolProps> = ({
  className = "w-10 h-10",
  size = 40,
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Traditional Auspicious Swastika */}
    <path
      d="M50 18 L50 82 M18 50 L82 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
    />
    <path
      d="M50 18 L76 18 M82 50 L82 76 M50 82 L24 82 M18 50 L18 24"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="square"
    />
    <circle cx="34" cy="34" r="2.5" fill={color} />
    <circle cx="66" cy="34" r="2.5" fill={color} />
    <circle cx="34" cy="66" r="2.5" fill={color} />
    <circle cx="66" cy="66" r="2.5" fill={color} />
  </svg>
);

export const KalashIcon: React.FC<SymbolProps> = ({
  className = "w-10 h-10",
  size = 40,
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Sacred Kalash with Coconut and Mango Leaves */}
    <path
      d="M30 50 C26 62 28 78 40 84 C46 87 54 87 60 84 C72 78 74 62 70 50 Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M32 50 L68 50"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Base */}
    <path
      d="M38 85 L62 85"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Coconut */}
    <circle cx="50" cy="38" r="14" stroke={color} strokeWidth="3.5" />
    <path
      d="M50 20 L50 26"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Mango Leaves */}
    <path
      d="M32 46 C24 38 28 28 36 34 C40 38 42 44 42 46"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M68 46 C76 38 72 28 64 34 C60 38 58 44 58 46"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const LotusIcon: React.FC<SymbolProps> = ({
  className = "w-10 h-10",
  size = 40,
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Auspicious Padma / Lotus */}
    <path
      d="M50 22 C46 38 44 58 50 72 C56 58 54 38 50 22 Z"
      stroke={color}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M50 44 C38 44 26 54 30 68 C36 74 46 72 50 72"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M50 44 C62 44 74 54 70 68 C64 74 54 72 50 72"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M36 58 C22 62 18 72 26 78 C34 82 44 76 50 72"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M64 58 C78 62 82 72 74 78 C66 82 56 76 50 72"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CornerOrnament: React.FC<{
  className?: string;
  color?: string;
  flipX?: boolean;
  flipY?: boolean;
}> = ({ className = "w-12 h-12", color = "#C5A059", flipX = false, flipY = false }) => {
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: transform || undefined }}
    >
      <path
        d="M5 55 L5 15 C5 9.477 9.477 5 15 5 L55 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 55 L12 20 C12 15.58 15.58 12 20 12 L55 12"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <circle cx="5" cy="5" r="3" fill={color} />
      <path
        d="M18 18 C24 18 28 22 28 28 C28 34 22 34 18 28 Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const FiligreeCorner: React.FC<{
  className?: string;
  color?: string;
  flipX?: boolean;
  flipY?: boolean;
}> = ({ className = "w-16 h-16", color = "#C5A059", flipX = false, flipY = false }) => {
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: transform || undefined }}
    >
      {/* Outer borders */}
      <path d="M4 96 L4 12 C4 7.58 7.58 4 12 4 L96 4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 96 L10 18 C10 13.58 13.58 10 18 10 L96 10" stroke={color} strokeWidth="1" strokeDasharray="2 3" />
      
      {/* Corner baroque scrolls */}
      <path d="M4 4 C16 16 28 28 36 18 C44 8 36 2 24 6 C12 10 10 24 20 36 C30 48 48 44 48 30 C48 16 34 14 26 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 60 C14 42 26 34 38 42 C50 50 44 64 32 64 C20 64 18 52 28 42" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M60 14 C42 14 34 26 42 38 C50 50 64 44 64 32 C64 20 52 18 42 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Corner florets */}
      <circle cx="28" cy="28" r="3.5" fill={color} />
      <circle cx="8" cy="8" r="2.5" fill={color} />
      <circle cx="48" cy="10" r="2" fill={color} />
      <circle cx="10" cy="48" r="2" fill={color} />
    </svg>
  );
};

export const MangoToran: React.FC<{ className?: string }> = ({ className = "w-full h-12" }) => (
  <svg
    viewBox="0 0 600 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    {/* Rope / Thread */}
    <path d="M0 8 Q 150 14 300 8 Q 450 14 600 8" stroke="#8E6D2E" strokeWidth="2.5" />
    <path d="M0 6 Q 150 12 300 6 Q 450 12 600 6" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" />
    
    {/* Hanging Mango Leaves (Paithani Green & Gold) */}
    {[30, 80, 130, 180, 230, 280, 330, 380, 430, 480, 530, 570].map((x, i) => (
      <g key={i}>
        {/* Leaf */}
        <path
          d={`M${x - 14} 10 C${x - 16} 24 ${x - 8} 38 ${x} 42 C${x + 8} 38 ${x + 16} 24 ${x + 14} 10 Z`}
          fill="#1E5C32"
          stroke="#C5A059"
          strokeWidth="0.8"
        />
        {/* Leaf vein */}
        <path d={`M${x} 10 L${x} 40`} stroke="#2B7F47" strokeWidth="0.8" />
        
        {/* Marigold Flower (झेंडू फूल) */}
        <circle cx={x} cy="10" r="5.5" fill="#E67E22" />
        <circle cx={x} cy="10" r="3.5" fill="#F39C12" />
        <circle cx={x} cy="10" r="1.5" fill="#F1C40F" />
      </g>
    ))}
  </svg>
);

export const TempleHeaderArt: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full h-28",
  color = "#84301D",
}) => (
  <svg
    viewBox="0 0 800 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Soft architectural temple background */}
    <g opacity="0.35" stroke={color} strokeWidth="1.2">
      {/* Central Majestic Shikhara / Gopuram */}
      <path d="M400 6 L400 135" strokeWidth="1.5" />
      {/* Kalash on spire */}
      <circle cx="400" cy="10" r="4" fill={color} />
      <path d="M396 14 L404 14 L400 6 Z" fill={color} />
      <path d="M392 20 L408 20 L405 14 L395 14 Z" />
      
      {/* Tiered Temple Tower Layers */}
      <path d="M388 28 L412 28 L408 20 L392 20 Z" />
      <path d="M382 38 L418 38 L412 28 L388 28 Z" />
      <path d="M375 50 L425 50 L418 38 L382 38 Z" />
      <path d="M368 64 L432 64 L425 50 L375 50 Z" />
      <path d="M360 80 L440 80 L432 64 L368 64 Z" />
      <path d="M350 100 L450 100 L440 80 L360 80 Z" />
      <path d="M340 125 L460 125 L450 100 L350 100 Z" />
      <path d="M330 135 L470 135 L460 125 L340 125 Z" />
      
      {/* Mandapa Pillars and arches */}
      <path d="M370 135 L370 100 M430 135 L430 100" strokeWidth="1.8" />
      <path d="M380 135 C380 115 420 115 420 135" strokeWidth="1.5" />
      
      {/* Left Minor Shikhara */}
      <path d="M280 40 L280 135" />
      <circle cx="280" cy="42" r="3" fill={color} />
      <path d="M272 52 L288 52 L285 45 L275 45 Z" />
      <path d="M266 66 L294 66 L288 52 L272 52 Z" />
      <path d="M260 82 L300 82 L294 66 L266 66 Z" />
      <path d="M250 102 L310 102 L300 82 L260 82 Z" />
      <path d="M240 135 L320 135 L310 102 L250 102 Z" />

      {/* Right Minor Shikhara */}
      <path d="M520 40 L520 135" />
      <circle cx="520" cy="42" r="3" fill={color} />
      <path d="M512 52 L528 52 L525 45 L515 45 Z" />
      <path d="M506 66 L534 66 L528 52 L512 52 Z" />
      <path d="M500 82 L540 82 L534 66 L506 66 Z" />
      <path d="M490 102 L550 102 L540 82 L500 82 Z" />
      <path d="M480 135 L560 135 L550 102 L490 102 Z" />

      {/* Outer Columns */}
      <path d="M160 70 L240 135 M640 70 L560 135" strokeDasharray="3 3" />
    </g>

    {/* Hanging Temple Bells on Left and Right */}
    {/* Left Bell */}
    <g transform="translate(60, 10)">
      <line x1="15" y1="0" x2="15" y2="40" stroke="#C29B38" strokeWidth="2" strokeDasharray="2 3" />
      <path d="M5 40 C5 34 25 34 25 40 L28 55 C28 60 2 60 2 55 Z" fill="#C29B38" stroke="#84301D" strokeWidth="1.2" />
      <circle cx="15" cy="62" r="3" fill="#84301D" />
      <line x1="15" y1="58" x2="15" y2="62" stroke="#84301D" strokeWidth="1.5" />
    </g>

    {/* Right Bell */}
    <g transform="translate(710, 10)">
      <line x1="15" y1="0" x2="15" y2="40" stroke="#C29B38" strokeWidth="2" strokeDasharray="2 3" />
      <path d="M5 40 C5 34 25 34 25 40 L28 55 C28 60 2 60 2 55 Z" fill="#C29B38" stroke="#84301D" strokeWidth="1.2" />
      <circle cx="15" cy="62" r="3" fill="#84301D" />
      <line x1="15" y1="58" x2="15" y2="62" stroke="#84301D" strokeWidth="1.5" />
    </g>
  </svg>
);

export const PeacockMotif: React.FC<{ className?: string; color?: string }> = ({
  className = "w-44 h-44",
  color = "#D4AF37",
}) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Peacock Body & Crest */}
    <g transform="translate(30, 20)">
      {/* Crown / Kalgi */}
      <path d="M42 22 L40 12 M44 20 L45 10 M46 22 L50 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="40" cy="10" r="1.8" fill={color} />
      <circle cx="45" cy="8" r="1.8" fill={color} />
      <circle cx="50" cy="12" r="1.8" fill={color} />
      
      {/* Head and Graceful Neck */}
      <path
        d="M40 25 C38 28 40 34 44 36 C48 38 49 46 46 54 C43 62 44 72 50 78 C56 84 66 86 70 82 C74 76 72 68 64 62 C58 58 56 46 54 38 C52 30 46 22 40 25 Z"
        fill="#0D5C75"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Eye */}
      <circle cx="43" cy="27" r="1.5" fill="#FFF" />
      <circle cx="43" cy="27" r="0.8" fill="#000" />
      {/* Beak */}
      <path d="M38 27 L32 29 L38 31 Z" fill={color} />
      
      {/* Wing */}
      <path
        d="M52 64 C56 58 68 56 74 62 C80 68 78 80 68 84 C60 88 52 78 52 64 Z"
        fill="#0A7E64"
        stroke={color}
        strokeWidth="1.2"
      />
      
      {/* Legs */}
      <path d="M60 86 L58 108 L52 112 M66 84 L68 106 L74 110" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Sweeping Fan of Feathers (Plumage) */}
    <g stroke={color} strokeWidth="1.2" opacity="0.9">
      {[
        { endX: 135, endY: 30, cx: 85, cy: 45, eyeX: 125, eyeY: 35 },
        { endX: 148, endY: 55, cx: 95, cy: 60, eyeX: 138, eyeY: 58 },
        { endX: 152, endY: 85, cx: 100, cy: 78, eyeX: 142, eyeY: 84 },
        { endX: 146, endY: 115, cx: 98, cy: 94, eyeX: 136, eyeY: 112 },
        { endX: 130, endY: 140, cx: 90, cy: 110, eyeX: 120, eyeY: 134 },
        { endX: 105, endY: 154, cx: 80, cy: 118, eyeX: 96, eyeY: 146 },
        { endX: 75, endY: 156, cx: 70, cy: 120, eyeX: 70, eyeY: 148 },
      ].map((feather, idx) => (
        <g key={idx}>
          {/* Feather Stem */}
          <path
            d={`M 90 90 Q ${feather.cx} ${feather.cy} ${feather.endX} ${feather.endY}`}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Feather Eye (Ocellus) */}
          <ellipse
            cx={feather.eyeX}
            cy={feather.eyeY}
            rx="9"
            ry="7"
            transform={`rotate(${idx * 18 - 45} ${feather.eyeX} ${feather.eyeY})`}
            fill="#0A7E64"
            stroke={color}
            strokeWidth="1.5"
          />
          <ellipse
            cx={feather.eyeX}
            cy={feather.eyeY}
            rx="5.5"
            ry="4.5"
            transform={`rotate(${idx * 18 - 45} ${feather.eyeX} ${feather.eyeY})`}
            fill="#0D5C75"
          />
          <circle cx={feather.eyeX} cy={feather.eyeY} r="2.2" fill={color} />
        </g>
      ))}
    </g>
  </svg>
);

export const BloomingLotus: React.FC<{ className?: string }> = ({ className = "w-20 h-16" }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer Lotus Petals */}
    <path d="M50 70 C30 68 10 52 16 34 C22 20 38 32 46 54 Z" fill="#F8B4C0" stroke="#8B263E" strokeWidth="1" />
    <path d="M50 70 C70 68 90 52 84 34 C78 20 62 32 54 54 Z" fill="#F8B4C0" stroke="#8B263E" strokeWidth="1" />
    
    {/* Intermediate Petals */}
    <path d="M50 68 C34 62 20 40 28 24 C36 12 44 26 48 50 Z" fill="#F48CA0" stroke="#8B263E" strokeWidth="1.2" />
    <path d="M50 68 C66 62 80 40 72 24 C64 12 56 26 52 50 Z" fill="#F48CA0" stroke="#8B263E" strokeWidth="1.2" />
    
    {/* Center High Petal */}
    <path d="M50 10 C42 24 38 46 50 66 C62 46 58 24 50 10 Z" fill="#E85D7A" stroke="#8B263E" strokeWidth="1.5" />
    <path d="M50 16 C45 28 42 46 50 60 C58 46 55 28 50 16 Z" fill="#FCE4EC" opacity="0.6" />

    {/* Green Base & Pad */}
    <path d="M35 70 C45 74 55 74 65 70 C68 76 32 76 35 70 Z" fill="#2E7D32" />
  </svg>
);

export const BotanicalSprig: React.FC<{
  className?: string;
  color?: string;
  flipX?: boolean;
  flipY?: boolean;
}> = ({ className = "w-20 h-20", color = "#4A6B5B", flipX = false, flipY = false }) => {
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: transform || undefined }}
    >
      {/* Main graceful curved stem */}
      <path d="M10 90 C30 75 55 55 85 15" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Side Branchlets & Leaf Pairs */}
      <path d="M32 72 C22 66 18 56 24 50 C30 46 38 56 34 70" fill={`${color}30`} stroke={color} strokeWidth="1.2" />
      <path d="M42 66 C46 54 56 50 62 56 C66 64 54 70 44 68" fill={`${color}30`} stroke={color} strokeWidth="1.2" />
      <path d="M54 50 C46 42 42 32 48 26 C56 22 62 34 56 48" fill={`${color}30`} stroke={color} strokeWidth="1.2" />
      <path d="M66 42 C70 30 80 26 86 32 C90 40 80 46 68 44" fill={`${color}30`} stroke={color} strokeWidth="1.2" />
      {/* Terminal tip leaf */}
      <path d="M85 15 C82 6 90 2 96 8 C100 16 92 20 85 15" fill={`${color}30`} stroke={color} strokeWidth="1.2" />
    </svg>
  );
};

export const RoseVineCorner: React.FC<{
  className?: string;
  color?: string;
  flipX?: boolean;
  flipY?: boolean;
}> = ({ className = "w-24 h-24", color = "#B87282", flipX = false, flipY = false }) => {
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: transform || undefined }}
    >
      {/* Vine curves */}
      <path d="M4 110 C8 65 35 35 110 4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 95 C25 80 40 70 85 30" stroke={color} strokeWidth="0.9" strokeDasharray="3 3" />
      
      {/* Corner Rose Flower */}
      <g transform="translate(24, 24)">
        <circle cx="16" cy="16" r="12" fill={`${color}20`} stroke={color} strokeWidth="1.2" />
        <path d="M12 12 C16 8 20 8 22 12 C24 16 20 22 14 20 C10 18 10 14 14 12" stroke={color} strokeWidth="1.2" />
        <path d="M8 16 C8 22 14 26 20 24 C26 22 26 12 20 8" stroke={color} strokeWidth="1" />
      </g>
      
      {/* Leaves along vine */}
      <path d="M15 75 C8 68 12 58 20 62 C26 68 20 76 15 75 Z" fill={`${color}35`} stroke={color} strokeWidth="1" />
      <path d="M75 15 C68 8 58 12 62 20 C68 26 76 20 75 15 Z" fill={`${color}35`} stroke={color} strokeWidth="1" />
      <path d="M42 56 C34 52 36 42 45 44 C52 48 48 56 42 56 Z" fill={`${color}35`} stroke={color} strokeWidth="1" />
      <path d="M56 42 C52 34 42 36 44 45 C48 52 56 48 56 42 Z" fill={`${color}35`} stroke={color} strokeWidth="1" />
    </svg>
  );
};

