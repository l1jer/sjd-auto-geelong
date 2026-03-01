import { useRef, useEffect, useState, useCallback } from "react"
import { Star } from "lucide-react"

const REVIEWS = [
  { name: "Olugbenga Akala", initials: "OA", role: "Customer", text: "They are professionals here. Calm, respectful and trustworthy. I always service my family\u2019s cars here, not minding the distance from West to North Geelong." },
  { name: "H Yi", initials: "HY", role: "Customer", text: "Daniel is truly a professional mechanic. He identified the issue quickly and helped me get back on the road with no worries. Highly recommended mechanic in Geelong." },
  { name: "Chloe Bowman", initials: "CB", role: "Customer", text: "Daniel and his staff are friendly, professional and do great work. It is always a positive and easy experience." },
  { name: "Li Shuang", initials: "LS", role: "Customer", text: "I really trust this shop. Everyone is very professional and carefully analyses vehicle issues. Very grateful for their excellent service." },
  { name: "Hongzhang Li", initials: "HL", role: "Car Owner", text: "I had emergency repairs fixed by Dan. The team arranged parts quickly and solved a cylinder misfire issue that another mechanic missed. Highly recommend." },
  { name: "Yang Wenqi", initials: "YW", role: "Customer", text: "Fantastic service, very friendly, professional and efficient. Daniel and the team made the whole process smooth and stress-free." },
  { name: "K Chen", initials: "KC", role: "Car Owner", text: "The team is professional, knowledgeable, and genuinely cares about the car. Clear explanations, no unnecessary upsell, and quick turnaround." },
  { name: "Sebatian Spano", initials: "SS", role: "Car Owner", text: "Daniel was professional, quick and reasonably priced. Honest advice and excellent workmanship." },
  { name: "Nithin J Vattappara", initials: "NV", role: "Customer", text: "Reliable workshop to depend on. They fitted me in several times and handled timing belt and brake pad work with great care." },
  { name: "Tanya Rossiter", initials: "TR", role: "Customer", text: "Great communication, fair pricing and quality work. Really happy with the service and roadworthy support." },
  { name: "Craig Harris", initials: "CH", role: "Car Owner", text: "Absolute gentlemen to deal with. Very fair and professional roadworthy process. Highly recommended." },
  { name: "Kitt Parker", initials: "KP", role: "Customer", text: "They squeezed me in on short notice and patched a major steering fluid issue so I could travel safely. Life savers." },
  { name: "DaDaMi Deus", initials: "DD", role: "Customer", text: "Quick and excellent service. Will be back next time when I visit Geelong." },
  { name: "Kyle Wang", initials: "KW", role: "Customer", text: "Great people, great company, great service." },
]

const TOTAL = REVIEWS.length
// Triple-clone for seamless infinite loop: [clone-tail | originals | clone-head]
const SLIDES = [...REVIEWS, ...REVIEWS, ...REVIEWS]

const GAP = 16 // px between cards
const AUTO_INTERVAL = 5000
const TRANSITION_MS = 500

function getPerPage(width: number) {
  if (width >= 1440) return 5
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand">
      {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div className="reviews-card card-spotlight flex flex-col gap-5 p-8 h-full">
      <Stars />
      <p className="flex-1 text-foreground text-[1rem] leading-relaxed">{review.text}</p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/15 text-brand text-[1.1rem] font-bold tracking-wide">
          {review.initials}
        </span>
        <div>
          <strong className="block text-[1.1rem] font-semibold leading-tight">{review.name}</strong>
        </div>
      </div>
    </div>
  )
}

export function Reviews() {
  const viewportRef = useRef<HTMLDivElement>(null)
  // Measured viewport width in px
  const [vpWidth, setVpWidth] = useState(0)
  // index into SLIDES; start at TOTAL = first real card
  const [index, setIndex] = useState(TOTAL)
  const [isAnimating, setIsAnimating] = useState(true)
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStart = useRef<number | null>(null)
  const dragDelta = useRef(0)
  const isDragging = useRef(false)

  // Measure viewport once mounted + on resize
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) setVpWidth(viewportRef.current.offsetWidth)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const perPage = getPerPage(vpWidth)
  // Each card occupies: (totalWidth - gaps) / perPage
  const cardWidth = vpWidth > 0 ? (vpWidth - GAP * (perPage - 1)) / perPage : 0
  // Step per slide advance = cardWidth + gap
  const step = cardWidth + GAP

  const translateFor = (i: number) => -(i * step)

  const next = useCallback(() => {
    setIndex((p) => p + 1)
    setIsAnimating(true)
  }, [])

  const resetAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current)
    autoTimer.current = setInterval(next, AUTO_INTERVAL)
  }, [next])

  useEffect(() => {
    resetAuto()
    return () => { if (autoTimer.current) clearInterval(autoTimer.current) }
  }, [resetAuto])

  // On perPage change snap without animation so cards stay in sync
  useEffect(() => {
    setIsAnimating(false)
  }, [perPage])

  // Infinite loop: after transition ends, teleport silently at clone boundaries
  const handleTransitionEnd = useCallback(() => {
    setIndex((prev) => {
      if (prev >= TOTAL * 2) {
        setIsAnimating(false)
        return TOTAL
      }
      if (prev < TOTAL) {
        setIsAnimating(false)
        return TOTAL * 2 - 1
      }
      return prev
    })
  }, [])

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX
    dragDelta.current = 0
    isDragging.current = false
    if (autoTimer.current) clearInterval(autoTimer.current)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart.current === null) return
    dragDelta.current = e.clientX - dragStart.current
    isDragging.current = Math.abs(dragDelta.current) > 6
    if (isDragging.current) {
      const track = viewportRef.current?.firstElementChild as HTMLElement | null
      if (track) {
        track.style.transition = "none"
        track.style.transform = `translateX(${translateFor(index) + dragDelta.current}px)`
      }
    }
  }

  const onPointerUp = () => {
    if (dragStart.current === null) return
    const threshold = step * 0.25
    const track = viewportRef.current?.firstElementChild as HTMLElement | null
    if (isDragging.current && track) {
      track.style.transition = ""
      if (dragDelta.current < -threshold) {
        next()
      } else if (dragDelta.current > threshold) {
        setIndex((p) => p - 1)
        setIsAnimating(true)
      } else {
        track.style.transform = `translateX(${translateFor(index)}px)`
      }
    }
    dragStart.current = null
    isDragging.current = false
    resetAuto()
  }

  const dotIndex = ((index - TOTAL) % TOTAL + TOTAL) % TOTAL

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-[clamp(4.5rem,8vw,8rem)] overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-[1.5rem]">
        <div className="reveal mb-5 text-center">
          <span className="section-label">Customer Reviews</span>
          <h2 id="reviews-heading" className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold tracking-tight">
            Loved by Drivers Across Geelong
          </h2>
        </div>
        <p className="reveal text-center text-muted-foreground mb-12 mx-auto max-w-[52ch]">
          Real customer feedback from the SJD Automotive workshop — unedited and direct from Google Reviews.
        </p>
      </div>

      <div className="reveal px-[1.5rem]">
        {/* Viewport: clips overflow, receives pointer events */}
        <div
          ref={viewportRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* Track: absolute pixel positioning so cardWidth is exact */}
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateFor(index)}px)`,
              transition: isAnimating
                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`
                : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {SLIDES.map((r, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
              >
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(TOTAL + i); setIsAnimating(true); resetAuto() }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === dotIndex ? "w-8 bg-brand" : "w-3 bg-white/25 hover:bg-white/40"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
