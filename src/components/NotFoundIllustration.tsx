type Props = {
  className?: string;
};

/** Lightweight line illustration — page “lost in the field” during survey. */
export function NotFoundIllustration({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 320"
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="not-found-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef5f2" />
          <stop offset="100%" stopColor="#f4f6f8" />
        </linearGradient>
        <linearGradient id="not-found-hill-far" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8e8e0" />
          <stop offset="100%" stopColor="#c5ddd2" />
        </linearGradient>
        <linearGradient id="not-found-hill-near" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8d6ca" />
          <stop offset="100%" stopColor="#8fb5a4" />
        </linearGradient>
      </defs>

      <rect width="480" height="320" fill="url(#not-found-sky)" rx="16" />

      <path
        d="M0 210 C70 170, 120 185, 190 165 S310 145, 480 175 L480 320 L0 320 Z"
        fill="url(#not-found-hill-far)"
      />
      <path
        d="M0 245 C90 220, 170 235, 255 215 S390 200, 480 230 L480 320 L0 320 Z"
        fill="url(#not-found-hill-near)"
        opacity="0.92"
      />

      <path
        d="M48 248 C110 238, 150 252, 210 242 S300 228, 360 238"
        fill="none"
        stroke="#2f6f5e"
        strokeWidth="2"
        strokeDasharray="7 8"
        opacity="0.55"
      />
      <circle cx="360" cy="238" r="10" fill="#fff" stroke="#2f6f5e" strokeWidth="2" />
      <text x="360" y="242" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2f6f5e">
        ?
      </text>

      <g transform="translate(118 156)">
        <line x1="34" y1="78" x2="34" y2="18" stroke="#0b1f35" strokeWidth="3" strokeLinecap="round" />
        <line x1="18" y1="30" x2="50" y2="30" stroke="#0b1f35" strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="42" x2="46" y2="42" stroke="#0b1f35" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="24" y="10" width="20" height="14" rx="3" fill="#2f6f5e" />
        <path d="M8 78 L34 58 L60 78 Z" fill="#0b1f35" opacity="0.12" />
      </g>

      <g transform="translate(248 168)">
        <circle cx="0" cy="52" r="14" fill="#0b1f35" />
        <path
          d="M-18 52 C-18 34, -8 24, 0 24 C8 24, 18 34, 18 52"
          fill="#2f6f5e"
        />
        <rect x="-16" y="52" width="32" height="34" rx="6" fill="#0b1f35" />
        <rect x="14" y="58" width="18" height="24" rx="3" fill="#fff" stroke="#0b1f35" strokeWidth="2" />
        <line x1="18" y1="64" x2="28" y2="64" stroke="#2f6f5e" strokeWidth="1.5" />
        <line x1="18" y1="70" x2="28" y2="70" stroke="#2f6f5e" strokeWidth="1.5" />
        <line x1="18" y1="76" x2="24" y2="76" stroke="#2f6f5e" strokeWidth="1.5" />
      </g>

      <g transform="translate(392 118)" opacity="0.85">
        <circle cx="0" cy="0" r="28" fill="#fff" stroke="#d8dee6" strokeWidth="2" />
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#2f6f5e" />
        <text x="0" y="42" textAnchor="middle" fontSize="10" fontWeight="600" fill="#536273">
          N
        </text>
      </g>

      <text x="28" y="34" fontSize="13" fontWeight="700" letterSpacing="0.12em" fill="#2f6f5e">
        404
      </text>
      <text x="28" y="52" fontSize="11" fill="#536273">
        souřadnice mimo rozsah
      </text>
    </svg>
  );
}
