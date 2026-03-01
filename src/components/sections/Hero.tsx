import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="pt-[clamp(4.5rem,9vw,8rem)] pb-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[clamp(2rem,4vw,4rem)] px-[1.5rem] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <p className="text-brand text-[0.88rem] font-bold uppercase tracking-widest">
            Trusted Automotive Workshop in North Geelong
          </p>
          <h1 className="mt-2 text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight">
            Your Car Deserves<br />Expert Care
          </h1>
          <p className="mt-5 max-w-[42ch] text-muted-foreground text-base">
            From routine servicing to diagnostics and mechanical repairs, SJD Automotive delivers reliable workmanship, fair pricing, and practical advice you can trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button asChild className="h-[50px] rounded-full px-6 text-[0.95rem] font-bold bg-gradient-to-r from-[#ff7a00] to-[#ff8f24] hover:opacity-90 text-white">
              <a href="#contact">Book A Service</a>
            </Button>
            <Button variant="outline" asChild className="h-[50px] rounded-full px-6 text-[0.95rem] font-bold border-white/14 bg-white/4 text-foreground hover:bg-white/8">
              <a href="#service">View Services</a>
            </Button>
          </div>
        </div>
        <div className="reveal reveal--delay-1 overflow-hidden rounded-3xl border border-white/8 shadow-[0_20px_48px_rgba(0,0,0,0.35)]">
          <img
            src="/img/promises.jpg"
            alt="A car being serviced at SJD Automotive workshop in North Geelong, VIC"
            width={1400}
            height={937}
            fetchPriority="high"
            className="w-full min-h-[clamp(280px,38vw,560px)] object-cover saturate-[1.04] contrast-[1.05]"
          />
        </div>
      </div>
    </section>
  )
}
