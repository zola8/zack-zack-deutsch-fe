export default function Logo({ size = "w-12 h-12" }: { size?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={`${size} flex-shrink-0`}
    >
      <defs>
        <clipPath id="pill">
          <rect x="6" y="22" width="52" height="20" rx="10" />
        </clipPath>
      </defs>
      <rect width="64" height="64" rx="14" fill="#EEF0E0" />
      <g clipPath="url(#pill)">
        <rect x="6" y="22" width="52" height="20" fill="#000000" />
        <rect x="23.33" y="22" width="17.34" height="20" fill="#DD0000" />
        <rect x="40.67" y="22" width="17.33" height="20" fill="#FFCE00" />
      </g>
    </svg>
  );
}
