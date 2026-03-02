import { Phone, MessageSquare } from "lucide-react"
import { contact } from "@/lib/contact"

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col overflow-hidden rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <a
        href={contact.phone1.href}
        aria-label="Call SJD Automotive"
        className="flex flex-col items-center justify-center gap-1 bg-brand px-4 py-3 text-black hover:brightness-110 transition-[filter] border-b border-black/15"
      >
        <Phone className="size-5" />
        <span className="text-[0.65rem] font-bold uppercase tracking-widest leading-none">Call</span>
      </a>
      <a
        href={contact.sms.href}
        aria-label="SMS SJD Automotive"
        className="flex flex-col items-center justify-center gap-1 bg-brand px-4 py-3 text-black hover:brightness-110 transition-[filter]"
      >
        <MessageSquare className="size-5" />
        <span className="text-[0.65rem] font-bold uppercase tracking-widest leading-none">SMS</span>
      </a>
    </div>
  )
}
