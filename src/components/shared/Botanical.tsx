interface BotanicalProps {
  size?: number;
  opacity?: number;
  style?: React.CSSProperties;
}

export default function Botanical({ size = 90, opacity = 0.5, style }: BotanicalProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.33)}
      viewBox="0 0 90 120"
      fill="none"
      aria-hidden="true"
      style={style}
    >
      {/* Main stem */}
      <path
        d="M45 118 C44 90, 43 68, 40 48 C38 34, 42 20, 45 10"
        stroke="#3D3830"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      {/* Left leaf */}
      <ellipse
        cx="28" cy="54" rx="28" ry="20"
        transform="rotate(-20 28 54)"
        fill="#7A9E78" opacity={opacity * 0.44}
        stroke="#5A7A58" strokeWidth="0.5"
      />
      <path d="M28 54 C20 46, 12 40, 6 36" stroke="#5A7A58" strokeWidth="0.4" fill="none" opacity={opacity * 0.7} />
      <path d="M28 54 C24 44, 20 32, 22 22" stroke="#5A7A58" strokeWidth="0.4" fill="none" opacity={opacity * 0.6} />
      {/* Right branch */}
      <path d="M42 40 C50 34, 60 30, 68 28" stroke="#3D3830" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity={opacity} />
      <ellipse
        cx="72" cy="26" rx="18" ry="13"
        transform="rotate(10 72 26)"
        fill="#7A9E78" opacity={opacity * 0.4}
        stroke="#5A7A58" strokeWidth="0.4"
      />
      {/* Bud */}
      <path
        d="M44 22 C41 16, 40 10, 43 6 C45 3, 48 4, 48 8 C48 13, 46 18, 44 22Z"
        fill="#F0D0CC" opacity={opacity * 1.1}
        stroke="#C4908A" strokeWidth="0.4"
      />
    </svg>
  );
}
