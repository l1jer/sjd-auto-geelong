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
    <header className="sticky top-[40px] z-40">
      <div
        className={cn(
          "mx-auto px-4 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          scrolled ? "max-w-[1100px] pt-2" : "max-w-[1180px] pt-3"
        )}
      >
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={30}
          borderWidth={0.07}
          brightness={50}
          opacity={0.5}
          blur={11}
          displace={2}
          distortionScale={-300}
          redOffset={0}
          greenOffset={10}
          blueOffset={15}
          mixBlendMode="screen"
          backgroundOpacity={scrolled ? 0.075 : 0}
          saturation={1}
          className="transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ borderRadius: 30 }}
        >
          <div
            className={cn(
              "flex items-center w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
              scrolled ? "px-5 py-1" : "px-6 py-2",
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
