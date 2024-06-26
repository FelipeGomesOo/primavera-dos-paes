export default function ExternalLink({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0  24 24"
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
      <path d="M15 3h6v6"></path>
      <path d="M10 14L21 3"></path>
    </svg>
  );
}
