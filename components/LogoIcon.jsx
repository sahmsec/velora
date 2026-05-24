export default function LogoIcon({ className }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 2h6l7 20h-6L3 2z" fill="currentColor" opacity="0.9"/>
      <path d="M21 2h-6l-7 20h6l7-20z" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}
