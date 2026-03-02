import { Phone, MapPin, Mail, MessageSquare } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { contact } from "@/lib/contact"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto max-w-[1180px] px-[1.5rem]">
        <div className="reveal mb-10 text-center">
          <span className="section-label" id="contact-heading">Get In Touch</span>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold tracking-tight">
            Visit or Contact Us Today
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-[50ch] mx-auto leading-relaxed">
            Drop in, call ahead or send us an email. We are open Monday to Saturday and happy to discuss any vehicle concerns.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mb-6 md:grid-cols-4">
          <SpotlightCard className="reveal p-7 text-center" spotlightColor="rgba(255, 122, 0, 0.15)">
            <span className="mx-auto mb-2.5 grid size-[50px] place-items-center rounded-full border-[1.5px] border-brand text-brand text-lg">
              <Phone className="size-5" />
            </span>
            <h3 className="text-lg font-bold">Phone</h3>
            <p className="mt-1.5 text-muted-foreground text-sm">
              <a href={contact.phone1.href} className="text-brand hover:opacity-80 block">{contact.phone1.display}</a>
              <a href={contact.phone2.href} className="text-brand hover:opacity-80 block">{contact.phone2.display}</a>
            </p>
          </SpotlightCard>
          <SpotlightCard className="reveal reveal--delay-1 p-7 text-center" spotlightColor="rgba(255, 122, 0, 0.15)">
            <span className="mx-auto mb-2.5 grid size-[50px] place-items-center rounded-full border-[1.5px] border-brand text-brand text-lg">
              <MessageSquare className="size-5" />
            </span>
            <h3 className="text-lg font-bold">SMS</h3>
            <p className="mt-1.5 text-muted-foreground text-sm">
              <a href={contact.sms.href} className="text-brand hover:opacity-80">
                {contact.phone2.display}
              </a>
            </p>
          </SpotlightCard>
          <SpotlightCard className="reveal reveal--delay-2 p-7 text-center" spotlightColor="rgba(255, 122, 0, 0.15)">
            <span className="mx-auto mb-2.5 grid size-[50px] place-items-center rounded-full border-[1.5px] border-brand text-brand text-lg">
              <Mail className="size-5" />
            </span>
            <h3 className="text-lg font-bold">Email</h3>
            <p className="mt-1.5 text-muted-foreground text-sm">
              <a href={contact.email.href} className="text-brand hover:opacity-80 break-all">
                {contact.email.display}
              </a>
            </p>
          </SpotlightCard>
          <SpotlightCard className="reveal reveal--delay-2 p-7 text-center" spotlightColor="rgba(255, 122, 0, 0.15)">
            <span className="mx-auto mb-2.5 grid size-[50px] place-items-center rounded-full border-[1.5px] border-brand text-brand text-lg">
              <MapPin className="size-5" />
            </span>
            <h3 className="text-lg font-bold">Location</h3>
            <p className="mt-1.5 text-muted-foreground text-sm">
              <a
                href={contact.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to SJD Automotive at 1/25 Rodney Road, North Geelong (opens Google Maps)"
                className="text-brand hover:opacity-80 transition-opacity"
              >
                {contact.maps.display}
              </a>
            </p>
          </SpotlightCard>
        </div>
        <p className="reveal text-center text-muted-foreground mb-6">
          We are open from <strong className="text-foreground">Monday to Saturday</strong>, from <strong className="text-foreground">8:30am to 5:30pm</strong>
        </p>
        <div className="reveal overflow-hidden rounded-2xl border border-white/10 relative aspect-[1/1] md:aspect-video">
          <iframe
            src={contact.maps.embed}
            title="1/25 Rodney Road, North Geelong"
            aria-label="1/25 Rodney Road, North Geelong"
            className="border-0 w-full h-full"
            style={{
              filter: "invert(0.9) hue-rotate(180deg) contrast(1.1) saturate(0.75)",
              background: "#0f0f0f"
            }}
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(15, 15, 25, 0.3) 0%, rgba(25, 25, 35, 0.2) 50%, rgba(15, 15, 25, 0.3) 100%)",
              mixBlendMode: "multiply"
            }}
          />
        </div>
      </div>
    </section>
  )
}
