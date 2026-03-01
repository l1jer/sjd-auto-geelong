import { useState, useEffect } from "react"
import { GlassSurface } from "@/components/ui/glass-surface"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#service", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") return
    const el = document.querySelector(href)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-40">
      <div
        className={cn(
          "mx-auto px-4 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          scrolled ? "max-w-[1100px] pt-2" : "max-w-[1180px] pt-3"
        )}
      >
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={999}
          borderWidth={0.04}
          brightness={40}
          opacity={0.95}
          blur={14}
          backgroundOpacity={scrolled ? 0.35 : 0}
          saturation={1.2}
          className={cn(
            "transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
            scrolled ? "glass-active shadow-[0_8px_32px_rgba(0,0,0,0.3)]" : "!shadow-none"
          )}
          style={{ borderRadius: 999 }}
        >
          <div
            className={cn(
              "flex items-center w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
              scrolled ? "px-5 py-2.5" : "px-6 py-4",
              "md:justify-between justify-center" // Center logo on mobile, space-between on desktop
            )}
          >
            <a href="#hero" aria-label="SJD Automotive home" onClick={(e) => handleNavClick(e, "#hero")}>
              <img
                src="/img/logo.png"
                alt="SJD Automotive"
                className={cn(
                  "transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                  scrolled ? "h-8" : "h-11"
                )}
              />
            </a>

            {/* Remove mobile menu button - no menu on mobile */}

            <nav className="hidden md:block" aria-label="Primary menu">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "relative inline-flex items-center px-3.5 py-2 font-semibold uppercase tracking-wider text-foreground transition-all duration-500 hover:text-brand after:absolute after:left-3.5 after:right-3.5 after:bottom-1 after:h-px after:bg-brand after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100",
                        scrolled ? "text-[0.78rem]" : "text-[0.88rem]"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </GlassSurface>
      </div>

    </header>
  )
}
