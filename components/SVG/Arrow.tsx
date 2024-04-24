export default function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 6 3">
      <path
        d="M0 0L3 3L6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
