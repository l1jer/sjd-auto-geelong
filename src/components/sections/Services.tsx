import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const SERVICES = [
  { num: "001", title: "Servicing", desc: "Regular and logbook servicing to keep your vehicle running reliably and maintain warranty compliance." },
  { num: "002", title: "Full Inspection", desc: "Roadworthy certificate (RWC) inspections available, covering brakes, tyres, suspension, lighting and structural integrity." },
  { num: "003", title: "Battery", desc: "Battery health testing and replacement with quality units suited to your vehicle specifications." },
  { num: "004", title: "Tyre Patch & Replacement", desc: "Puncture repairs, tyre fitting and balancing with a range of quality tyre brands available." },
  { num: "005", title: "On-Board Diagnostics", desc: "ECU fault code scanning, live data analysis and diagnostic trouble-shooting across all major vehicle systems." },
  { num: "006", title: "Electronic Circuit System", desc: "Electrical system fault diagnosis and repair including wiring, sensors, alternators and starter motors." },
  { num: "007", title: "24/7 Towing", desc: "Tow truck assistance available around the clock for breakdowns and accident recovery across the Geelong region." },
  { num: "008", title: "Mechanical Repair", desc: "Engine, transmission, suspension and brake repairs for sedans, hatches, trucks, trailers and caravans." },
  { num: "009", title: "Pre-Purchase Inspection", desc: "Comprehensive used vehicle checks before you buy, covering mechanical condition, body integrity and safety systems." },
  { num: "010", title: "Used Car Trading", desc: "Certified used car trading support with mechanical assessment and advisory services." },
]

export function Services() {
  return (
    <section id="service" aria-labelledby="services-heading" className="py-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-[1.5rem]">
        <div className="reveal mb-10 text-center">
          <span className="section-label" id="services-heading">Our Services</span>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold tracking-tight">
            What We Fix &amp; Service
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-[54ch] mx-auto leading-relaxed">
            From a simple battery swap to a full mechanical overhaul — every job gets the same attention to detail.
          </p>
        </div>
        <SpotlightCard
          className="reveal w-full !rounded-2xl !p-0"
          spotlightColor="rgba(255, 122, 0, 0.12)"
        >
          <Accordion type="single" collapsible className="w-full">
            {SERVICES.map((svc) => (
              <AccordionItem key={svc.num} value={svc.num} className="border-white/10 px-0">
                <AccordionTrigger className="px-6 py-5 text-[1.1rem] font-semibold hover:no-underline hover:text-brand gap-5 [&>svg]:text-white/40 text-left justify-start">
                  <span className="text-muted-foreground text-[0.88rem] font-normal min-w-[2.4rem]">{svc.num}</span>
                  <span className="flex-1 text-left">{svc.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pl-[4.8rem] text-muted-foreground text-[0.95rem] leading-relaxed text-left">
                  {svc.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SpotlightCard>
      </div>
    </section>
  )
}
