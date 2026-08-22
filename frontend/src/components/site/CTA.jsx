import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import {
  CONFIG, telHref, whatsappHref, directionsHref, hasPhone, hasWhatsapp,
} from "@/config/business";

// Generic CTA. `to` = internal route, `href` = external, else onClick.
export const CTA = ({ children, variant = "primary", to, href, onClick, arrow = false, className = "", testId, ...rest }) => {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={17} className="arrow" strokeWidth={2.2} />}
    </>
  );
  if (to) return <Link to={to} className={cls} data-testid={testId} {...rest}>{inner}</Link>;
  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls} data-testid={testId} {...rest}>{inner}</a>;
  return <button type="button" onClick={onClick} className={cls} data-testid={testId} {...rest}>{inner}</button>;
};

const pending = (label) =>
  toast.info(`${label} pending verification`, {
    description: "Add the verified number in the site configuration to activate this.",
  });

export const WhatsAppCTA = ({ variant = "accent", msg, className = "", testId = "whatsapp-cta", label = "WhatsApp Us" }) =>
  hasWhatsapp() ? (
    <CTA variant={variant} href={whatsappHref(msg)} className={className} testId={testId}>{label}</CTA>
  ) : (
    <CTA variant={variant} onClick={() => pending("WhatsApp number")} className={className} testId={testId}>{label}</CTA>
  );

export const CallCTA = ({ variant = "outline", className = "", testId = "call-cta", label = "Call Showroom" }) =>
  hasPhone() ? (
    <CTA variant={variant} href={telHref()} className={className} testId={testId}>{label}</CTA>
  ) : (
    <CTA variant={variant} onClick={() => pending("Phone number")} className={className} testId={testId}>{label}</CTA>
  );

export const DirectionsCTA = ({ variant = "outline", className = "", testId = "directions-cta", label = "Get Directions", arrow = true }) => (
  <CTA variant={variant} href={directionsHref()} arrow={arrow} className={className} testId={testId}>{label}</CTA>
);

export { CONFIG };
