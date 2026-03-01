import { ExternalLink, Droplets, Settings2, ShieldCheck } from "lucide-react"

const BRAND_ITEMS = [
  {
    icon: Droplets,
    title: "Fuchs Engine Oil",
    desc: "We exclusively use Fuchs TITAN engine oils — a premium German brand engineered to meet the demands of modern petrol, diesel and turbocharged engines. Fuchs lubricants are specified by leading vehicle manufacturers worldwide and deliver superior protection under high-temperature, high-stress conditions.",
  },
  {
    icon: Settings2,
    title: "OEM-Grade Parts & Filters",
    desc: "For every service and repair, we source OEM-equivalent parts and filters that meet or exceed the original manufacturer's specifications. This is especially important for newer vehicles under manufacturer's warranty — using substandard parts can void coverage and compromise safety.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Verify",
    desc: "We retain all part numbers and supplier receipts. If you ever want to know exactly what went into your vehicle, just ask. Transparency is built into how we work — there are no mystery parts or inflated consumable charges.",
  },
]

export function Brands() {
  return (
    <section id="brands" aria-labelledby="brands-heading" className="py-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-[1.5rem]">
        <div className="reveal mb-14 text-center">
          <span className="section-label">Our Brands &amp; Parts</span>
          <h2 id="brands-heading" className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold tracking-tight">
            Quality Products, Every Time
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-[54ch] mx-auto leading-relaxed">
            The parts and fluids we fit to your vehicle are selected for reliability and compatibility — never chosen on price alone.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-2">
          <div className="reveal reveal--delay-1 flex flex-col gap-5">
            {BRAND_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/70 p-7"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 border border-brand/20 text-brand mt-0.5">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-extrabold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-[0.93rem] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 pl-1">
              <span className="text-muted-foreground text-[0.93rem]">Fuchs official product range:</span>
              <a
                href="https://www.fuchs.com/group/products-industries/product-program/automotive-lubricants/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand font-semibold text-[0.93rem] hover:opacity-80 transition-opacity"
                aria-label="Visit the FUCHS Automotive Lubricants website (opens in new tab)"
              >
                FUCHS Automotive Lubricants
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-3 rounded-3xl bg-brand/5 blur-2xl pointer-events-none" />
            <img
              src="/img/fuchs-oil.jpg"
              alt="Fuchs TITAN engine oil products used at SJD Automotive"
              width={454}
              height={212}
              loading="lazy"
              className="relative w-full rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/70 p-6">
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Why does oil quality matter?</strong>{" "}
                Engine oil breaks down over time through heat, contamination and oxidation. Using a premium oil like Fuchs TITAN extends the service interval, reduces internal wear and maintains fuel efficiency — all of which protect your engine's long-term health and resale value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
