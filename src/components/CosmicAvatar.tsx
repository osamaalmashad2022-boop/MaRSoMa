interface CosmicAvatarProps {
  seed: number;
  size?: number;
}

const CosmicAvatar = ({ seed, size = 64 }: CosmicAvatarProps) => {
  // Each member gets a unique generative cosmic avatar (rings, orbits, shapes)
  const configs = [
    {
      // Planet with rings
      bg: "url(#grad1)",
      shapes: (
        <>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(262, 83%, 58%)" />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
            </linearGradient>
            <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(262, 83%, 68%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(187, 92%, 42%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="18" fill="url(#grad1)" />
          <circle cx="26" cy="27" r="5" fill="white" opacity="0.15" />
          <circle cx="36" cy="35" r="3" fill="white" opacity="0.1" />
          <ellipse cx="32" cy="32" rx="28" ry="8" fill="none" stroke="url(#ring1)" strokeWidth="2.5" transform="rotate(-20, 32, 32)" />
          <circle cx="8" cy="12" r="1.5" fill="white" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="52" cy="18" r="1" fill="white" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="54" cy="48" r="1.2" fill="white" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </>
      ),
    },
    {
      // Nebula / Galaxy spiral
      bg: "url(#grad2)",
      shapes: (
        <>
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(187, 92%, 42%)" />
              <stop offset="100%" stopColor="hsl(152, 69%, 41%)" />
            </linearGradient>
            <radialGradient id="nebula2">
              <stop offset="0%" stopColor="hsl(187, 92%, 52%)" />
              <stop offset="60%" stopColor="hsl(152, 69%, 41%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="20" fill="url(#nebula2)" />
          <path d="M32,32 C26,22 18,24 16,32 C14,40 22,46 32,42" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
          <path d="M32,32 C38,42 46,40 48,32 C50,24 42,18 32,22" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
          <circle cx="32" cy="32" r="6" fill="white" opacity="0.25" />
          <circle cx="32" cy="32" r="3" fill="white" opacity="0.4" />
          <circle cx="10" cy="8" r="1.2" fill="white" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="1" fill="white" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="10" r="1.3" fill="white" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </>
      ),
    },
    {
      // Constellation / Diamond
      bg: "url(#grad3)",
      shapes: (
        <>
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(292, 84%, 61%)" />
              <stop offset="100%" stopColor="hsl(262, 83%, 58%)" />
            </linearGradient>
          </defs>
          <polygon points="32,10 50,32 32,54 14,32" fill="url(#grad3)" opacity="0.9" />
          <polygon points="32,14 47,32 32,50 17,32" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          <polygon points="32,20 40,32 32,44 24,32" fill="white" opacity="0.15" />
          <line x1="8" y1="14" x2="18" y2="22" stroke="white" strokeWidth="0.8" opacity="0.25" />
          <line x1="46" y1="22" x2="56" y2="14" stroke="white" strokeWidth="0.8" opacity="0.25" />
          <line x1="8" y1="50" x2="18" y2="42" stroke="white" strokeWidth="0.8" opacity="0.25" />
          <line x1="46" y1="42" x2="56" y2="50" stroke="white" strokeWidth="0.8" opacity="0.25" />
          <circle cx="8" cy="14" r="2" fill="white" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="56" cy="14" r="1.5" fill="white" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="8" cy="50" r="1.5" fill="white" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="56" cy="50" r="2" fill="white" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.7s" repeatCount="indefinite" />
          </circle>
        </>
      ),
    },
  ];

  const config = configs[seed % configs.length];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className="drop-shadow-lg"
      style={{ filter: "drop-shadow(0 0 8px hsl(262 83% 58% / 0.3))" }}
    >
      <rect width="64" height="64" rx="16" fill="hsl(240, 20%, 15%)" />
      {config.shapes}
    </svg>
  );
};

export default CosmicAvatar;
