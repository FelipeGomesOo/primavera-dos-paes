export default function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <path
        d="M0 0L3 3L6 0"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>
    </svg>
  );
}
