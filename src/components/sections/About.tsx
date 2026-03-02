import { Wrench, Clock, Star, MapPin } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const HIGHLIGHTS = [
  { icon: Wrench, label: "Full-service mechanical workshop" },
  { icon: Clock, label: "10+ years hands-on experience" },
  { icon: Star, label: "100+ satisfied customers" },
  { icon: MapPin, label: "Conveniently located in North Geelong" },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-[1.5rem]">
        <div className="reveal mb-14 text-center">
          <span className="section-label">Who Are We</span>
          <h2 id="about-heading" className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold tracking-tight">
            Your Local Geelong Mechanics
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-2">
          <div className="reveal relative order-last lg:order-first">
            <div className="absolute -inset-3 rounded-3xl bg-brand/5 blur-2xl pointer-events-none" />
            <img
              src="/img/about-1.jpg"
              alt="Inside the SJD Automotive workshop in North Geelong"
              width={750}
              height={500}
              loading="lazy"
              className="relative rounded-2xl border border-white/10 w-full object-cover shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            />
          </div>
          <SpotlightCard
            className="reveal reveal--delay-1 flex flex-col gap-7 p-8 md:p-10"
            spotlightColor="rgba(255, 122, 0, 0.12)"
          >
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-3">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                SJD Automotive opened its doors in North Geelong in June 2021 with a clear mission: deliver honest, high-quality mechanical service without the dealership price tag. What started as a small independent workshop has grown into one of the area's most trusted automotive service centres, serving thousands of drivers across Geelong, Corio, Norlane, Lara and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-3">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are a genuine one-stop shop — logbook servicing, roadworthy certificates, engine diagnostics, brake and suspension work, electrical repairs, tyres, batteries, 24/7 towing and pre-purchase inspections are all handled in-house. Our team uses advanced OBD scanning equipment alongside traditional workshop expertise to find the right solution the first time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-3">Why Drivers Stay</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe a mechanic should be someone you can trust for life, not just for the next service. Straightforward communication, fair pricing and consistent quality mean our customers come back year after year — and send their family and friends our way too.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1" aria-label="Workshop highlights">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand/10 border border-brand/20 text-brand">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-[0.93rem] font-medium text-foreground/90">{label}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
