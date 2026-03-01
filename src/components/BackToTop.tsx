import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 bottom-5 z-50 grid size-[46px] place-items-center rounded-full border border-brand/45 bg-brand/90 text-black shadow-xl hover:bg-brand cursor-pointer transition-all duration-300 ease-out ${
        visible 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="size-5" />
    </button>
  )
}
