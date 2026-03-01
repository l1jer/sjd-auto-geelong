import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react"

export function Topbar() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-black/60 backdrop-blur-sm text-[0.8rem]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-2 px-4 py-2">

        {/* Left: primary contact actions */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Mobile: both phone numbers displayed */}
          <div className="flex items-center gap-2 sm:hidden">
            <span className="text-white/60 text-[0.78rem]">03 5242 8307</span>
            <span className="text-white/25">·</span>
            <span className="text-white/60 text-[0.78rem]">0404 724 145</span>
            <span className="text-white/25">·</span>
            <a
              href="mailto:sjd.autotrust@gmail.com"
              className="text-white/60 hover:text-brand transition-colors"
              aria-label="Email SJD Automotive"
            >
              <Mail className="size-3.5" />
            </a>
            <span className="text-white/25">·</span>
            <a
              href="https://goo.gl/maps/HbCyurbJjYym9eZf9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand transition-colors"
              aria-label="Get directions to SJD Automotive"
            >
              <MapPin className="size-3.5" />
            </a>
          </div>

          {/* Desktop: full contact info with labels */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0352428307"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-brand transition-colors shrink-0"
              aria-label="Call SJD Automotive main line"
            >
              <Phone className="size-3.5 shrink-0" />
              <span>03 5242 8307</span>
            </a>

            <span className="text-white/25">·</span>
            <a
              href="tel:0404724145"
              className="text-white/60 hover:text-brand transition-colors"
            >
              0404 724 145
            </a>

            <span className="text-white/25">·</span>
            <a
              href="https://goo.gl/maps/HbCyurbJjYym9eZf9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-brand transition-colors min-w-0"
              aria-label="Get directions to SJD Automotive"
            >
              <MapPin className="size-3.5 shrink-0" />
              <span className="truncate">1/25 Rodney Rd, North Geelong VIC</span>
            </a>

            <span className="text-white/25">·</span>
            <a
              href="mailto:sjd.autotrust@gmail.com"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-brand transition-colors"
              aria-label="Email SJD Automotive"
            >
              <Mail className="size-3.5 shrink-0" />
              <span>sjd.autotrust@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right: social icons — always visible */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.facebook.com/SJD-Automotive-108170801468329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SJD Automotive on Facebook"
            className="text-white/50 hover:text-brand transition-colors"
          >
            <Facebook className="size-3.5" />
          </a>
          <a
            href="https://www.instagram.com/sjd_automotive/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SJD Automotive on Instagram"
            className="text-white/50 hover:text-brand transition-colors"
          >
            <Instagram className="size-3.5" />
          </a>
        </div>

      </div>
    </div>
  )
}
