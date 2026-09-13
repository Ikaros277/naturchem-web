/** Decorative technical motifs, not measurements, maps or project results. */
export function HomeStudyGraphic({ kind }: { kind: "noise" | "air" | "plan" }) {
  return (
    <svg viewBox="0 0 240 110" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1" opacity=".12">
        <path d="M0 25H240M0 55H240M0 85H240M30 0V110M60 0V110M90 0V110M120 0V110M150 0V110M180 0V110M210 0V110" />
      </g>
      {kind === "noise" ? (
        <g stroke="currentColor" strokeWidth="1.8">
          <path d="M20 83 56 65 81 78 119 59 152 76 213 45" opacity=".2" />
          <path d="M106 38C84 33 66 42 65 60S93 84 114 79 156 70 151 53 125 43 106 38Z" fill="currentColor" fillOpacity=".08" />
          <path d="M109 26C78 18 45 31 45 59S90 101 122 92 180 75 173 47 135 32 109 26Z" opacity=".65" />
          <path d="M112 12C75 1 26 21 25 58s52 59 98 47 80-21 76-56S149 19 112 12Z" opacity=".35" />
          <path d="m92 51 14-7 18 10v13l-14 7-18-10V51Zm0 0 18 10 14-7m-14 7v13" />
          <circle cx="177" cy="83" r="3" fill="currentColor" />
          <path d="M177 75V64h29" strokeDasharray="3 3" />
        </g>
      ) : kind === "air" ? (
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M41 91V53h21v38m-31 0h55V71H62M45 45h13M48 38h7" />
          <path d="M76 35c22-24 45 14 70-2s39-7 61-17M74 49c22-24 45 14 70-2s39-7 61-17M78 63c22-24 45 14 70-2s39-7 61-17" opacity=".7" />
          <path d="m199 15 9 1-3 8m-5 5 8 1-3 8m-5 5 8 1-3 8" />
          <path d="M114 83h61m-9-6 10 6-10 6" opacity=".35" />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="m48 65 59 31 87-43M48 76l59 31 87-43" opacity=".35" />
          <path d="m48 52 60-35 86 24-87 44-59-33Z" fill="currentColor" fillOpacity=".06" />
          <path d="m77 49 32-18 49 14-32 18-49-14Zm31-17 1 25m-17-16 48 14M133 71l19-10m-64 4 15 8" />
          <circle cx="192" cy="81" r="15" fill="var(--home-study-bg, #edf4f1)" />
          <path d="m185 81 5 5 9-10" />
        </g>
      )}
    </svg>
  );
}
