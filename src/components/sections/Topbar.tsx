import { Phone, MapPin, Mail, MessageSquare} from "lucide-react"
import { contact } from "@/lib/contact"

export function Topbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-sm text-[1rem]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-2 px-4 py-2">

          {/* Mobile layout: phones fill left, icons pinned right */}
          <div className="flex w-full items-center justify-between gap-2 sm:hidden">
            <div className="flex items-center gap-2 min-w-0">
              <a href={contact.phone1.href} className="text-brand hover:opacity-80 transition-opacity shrink-0" aria-label="Call SJD Automotive main line">
                {contact.phone1.display}
              </a>
              <span className="text-white/25">·</span>
              <a href={contact.phone2.href} className="text-brand hover:opacity-80 transition-opacity shrink-0" aria-label="Call SJD Automotive mobile">
                {contact.phone2.display}
              </a>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a href={contact.sms.href} className="text-brand hover:opacity-80 transition-opacity" aria-label="Send SMS to SJD Automotive">
                <MessageSquare className="size-4" />
              </a>
              <a href={contact.email.href} className="text-brand hover:opacity-80 transition-opacity" aria-label="Email SJD Automotive">
                <Mail className="size-4" />
              </a>
              <a href={contact.maps.link} target="_blank" rel="noopener noreferrer" className="text-brand hover:opacity-80 transition-opacity" aria-label="Get directions to SJD Automotive">
                <MapPin className="size-4" />
              </a>
            </div>
          </div>

          {/* Desktop layout */}
          {/* Left side: phones and SMS */}
          <div className="hidden sm:flex items-center gap-3">
            <a href={contact.phone1.href} className="inline-flex items-center gap-1.5 text-brand hover:opacity-80 transition-opacity shrink-0" aria-label="Call SJD Automotive main line">
              <Phone className="size-3.5 shrink-0" />
              <span>{contact.phone1.display}</span>
            </a>

            <span className="text-white/25">·</span>
            <a href={contact.phone2.href} className="text-brand hover:opacity-80 transition-opacity" aria-label="Call SJD Automotive mobile">
              {contact.phone2.display}
            </a>

            <span className="text-white/25">·</span>
            <a href={contact.sms.href} className="inline-flex items-center gap-1.5 text-brand hover:opacity-80 transition-opacity" aria-label="Send SMS to SJD Automotive">
              <MessageSquare className="size-3.5 shrink-0" />
              <span>SMS US</span>
            </a>
          </div>

          {/* Right side: email and address */}
          <div className="hidden sm:flex items-center gap-3">
            <a href={contact.email.href} className="inline-flex items-center gap-1.5 text-brand hover:opacity-80 transition-opacity" aria-label="Email SJD Automotive">
              <Mail className="size-3.5 shrink-0" />
              <span>{contact.email.display}</span>
            </a>

            <span className="text-white/25">·</span>
            <a href={contact.maps.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand hover:opacity-80 transition-opacity min-w-0" aria-label="Get directions to SJD Automotive">
              <MapPin className="size-3.5 shrink-0" />
              <span className="truncate">{contact.maps.display}</span>
            </a>
          </div>
        </div>

      </div>
  )
}
