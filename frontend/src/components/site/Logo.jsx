import { Link } from "react-router-dom";
import { CONFIG } from "@/config/business";

export const LogoMark = ({ size = 40, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="42" height="42" rx="7" stroke="currentColor" strokeWidth="2.4" />
    <path d="M31 15c-4-2.5-11-2-11 3.2 0 5 11 4 11 9.2 0 5.4-7.4 5.6-11.4 3"
      stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
    <path d="M17 33c3.5 2.5 8 2.6 12 .4" stroke="#B96545" strokeWidth="2.6" strokeLinecap="round" fill="none" />
  </svg>
);

export const Logo = ({ light = false, showDescriptor = true, className = "", testId = "site-logo" }) => (
  <Link to="/" className={`flex items-center gap-3 group ${className}`} data-testid={testId} aria-label={`${CONFIG.BUSINESS_NAME} home`}>
    <span className={light ? "text-white" : "text-brand-charcoal"}>
      <LogoMark size={40} />
    </span>
    <span className="flex flex-col leading-none">
      <span className={`font-heading font-bold tracking-tight text-[15px] sm:text-[17px] ${light ? "text-white" : "text-brand-charcoal"}`}>
        SRI SAI BALAJI
        <span className="hidden sm:inline"> ASSOCIATES</span>
      </span>
      {showDescriptor && (
        <span className={`text-[9px] sm:text-[10px] tracking-[0.22em] font-medium mt-1 ${light ? "text-white/60" : "text-brand-muted"}`}>
          {CONFIG.BUSINESS_DESCRIPTOR}
        </span>
      )}
    </span>
  </Link>
);
