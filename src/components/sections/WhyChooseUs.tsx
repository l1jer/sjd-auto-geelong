import { ShieldCheck, BadgeDollarSign, Zap, Users } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Certified Experience",
    stat: "10+",
    statLabel: "Years in the trade",
    desc: "Our mechanics bring over a decade of hands-on expertise covering petrol, diesel, hybrid and electric platforms. From routine services to complex fault diagnosis, we approach every job with technical precision and care.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    stat: "0",
    statLabel: "Hidden fees, ever",
    desc: "You receive a clear, itemised quote before any work begins. We explain exactly what is needed and why — no pressure upsells, no surprise invoices. What we quote is what you pay.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    stat: "Same",
    statLabel: "Day service available",
    desc: "We respect your time. Most standard services and repairs are completed the same day. For more involved jobs we keep you updated with realistic timelines so you can plan around your schedule.",
  },
  {
    icon: Users,
    title: "Trusted Locally",
    stat: "100+",
    statLabel: "Customers served",
    desc: "Since 2021, thousands of drivers across North Geelong, Corio, Norlane and beyond have trusted SJD Automotive. Our reputation is built entirely on word-of-mouth and five-star reviews.",
  },
]

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-heading" className="py-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-[1.5rem]">
        <div className="reveal mb-14 text-center">
          <span className="section-label">Why Choose Us</span>
          <h2 id="why-choose-heading" className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold tracking-tight">
            The SJD Automotive Difference
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-[56ch] mx-auto leading-relaxed">
            Four principles that guide every job in our workshop — from a simple oil change to a full engine rebuild.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <SpotlightCard
                key={r.title}
                className={`reveal ${i === 1 ? "reveal--delay-1" : i === 2 ? "reveal--delay-2" : ""} p-10 flex flex-col gap-6`}
                spotlightColor="rgba(255, 122, 0, 0.14)"
              >
                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand/10 border border-brand/20 text-brand shrink-0">
                    <Icon className="size-7" />
                  </span>
                  <div className="text-right">
                    <p className="text-[2rem] font-extrabold leading-none text-brand">{r.stat}</p>
                    <p className="text-[0.75rem] text-muted-foreground uppercase tracking-wider mt-0.5">{r.statLabel}</p>
                  </div>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="text-[1.25rem] font-extrabold text-foreground mb-3">{r.title}</h3>
                  <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{r.desc}</p>
                </div>

                {/* Decorative divider */}
                <div className="mt-auto pt-4 border-t border-white/8">
                  <span className="text-[0.78rem] text-brand/70 font-semibold uppercase tracking-widest">SJD Automotive</span>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
