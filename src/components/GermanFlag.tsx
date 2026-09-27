type GermanFlagProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function GermanFlag({
  width = 60,
  height = 40,
  className = ""
}: GermanFlagProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="60" height="13.33" fill="#000000" />
      <rect y="13.33" width="60" height="13.33" fill="#DD0000" />
      <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
    </svg>
  );
}
