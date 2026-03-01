import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/14 py-8">
      <div className="mx-auto max-w-[1180px] px-[1.5rem] text-center text-muted-foreground text-[0.88rem]">
        <div className="flex justify-center gap-3.5 mb-3">
          <a
            href="https://www.facebook.com/SJD-Automotive-108170801468329/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="grid size-[38px] place-items-center rounded-full border border-white/10 text-foreground hover:text-brand hover:border-brand/40 transition-colors"
          >
            <Facebook className="size-4" />
          </a>
          <a
            href="https://www.instagram.com/sjd_automotive/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="grid size-[38px] place-items-center rounded-full border border-white/10 text-foreground hover:text-brand hover:border-brand/40 transition-colors"
          >
            <Instagram className="size-4" />
          </a>
        </div>
        <p>
          All rights reserved &copy;{new Date().getFullYear()} SJD Automotive. Powered by{" "}
          <a href="https://digolasforge.com/" target="_blank" rel="noopener" className="text-brand hover:opacity-80 transition-opacity">
            Digolas Forge
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
