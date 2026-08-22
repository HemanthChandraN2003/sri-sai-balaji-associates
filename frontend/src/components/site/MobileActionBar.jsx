import { Phone, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";
import {
  CONFIG, telHref, whatsappHref, directionsHref, hasPhone, hasWhatsapp,
} from "@/config/business";

const Item = ({ icon: Icon, label, href, onClick, accent, testId }) => {
  const cls = `flex-1 flex flex-col items-center justify-center gap-1 py-2.5 min-h-[56px] text-[11px] font-semibold tracking-wide transition-colors ${accent ? "bg-brand-terracotta text-white" : "text-brand-charcoal hover:text-brand-terracotta"}`;
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls} data-testid={testId}>
      <Icon size={20} strokeWidth={2} /><span>{label}</span>
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls} data-testid={testId}>
      <Icon size={20} strokeWidth={2} /><span>{label}</span>
    </button>
  );
};

const pending = (l) => toast.info(`${l} pending verification`);

export const MobileActionBar = () => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-ivory/95 backdrop-blur-md border-t border-brand-line flex divide-x divide-brand-line shadow-[0_-8px_30px_-20px_rgba(0,0,0,0.4)]" data-testid="mobile-action-bar">
    {hasPhone()
      ? <Item icon={Phone} label="Call" href={telHref()} testId="bar-call" />
      : <Item icon={Phone} label="Call" onClick={() => pending("Phone number")} testId="bar-call" />}
    {hasWhatsapp()
      ? <Item icon={MessageCircle} label="WhatsApp" href={whatsappHref()} accent testId="bar-whatsapp" />
      : <Item icon={MessageCircle} label="WhatsApp" onClick={() => pending("WhatsApp number")} accent testId="bar-whatsapp" />}
    <Item icon={MapPin} label="Directions" href={directionsHref()} testId="bar-directions" />
  </div>
);

export { CONFIG };
