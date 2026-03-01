import { useEffect, useRef, useState } from "react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

interface StatProps {
  value: number | null
  suffix: string
  label: string
  description: string
  delay?: string
}

function AnimatedCounter({ value, suffix }: { value: number | null; suffix: string }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!ref.current || !value) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.7 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value, started])

  useEffect(() => {
    if (!started || !value || !ref.current) return
    const node = ref.current
    const duration = 900
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      node.textContent = Math.round(progress * value).toLocaleString("en-AU") + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, value, suffix])

  return (
    <h2 ref={ref} className="text-brand text-[clamp(1.8rem,3.6vw,2.8rem)] font-extrabold leading-none">
      {value ? `${value.toLocaleString("en-AU")}${suffix}` : suffix}
    </h2>
  )
}

function StatCard({ value, suffix, label, description, delay }: StatProps) {
  return (
    <SpotlightCard
      className={`reveal ${delay ?? ""} p-7`}
      spotlightColor="rgba(255, 122, 0, 0.15)"
    >
      {value !== null ? (
        <AnimatedCounter value={value} suffix={suffix} />
      ) : (
        <h2 className="text-brand text-[clamp(1.8rem,3.6vw,2.8rem)] font-extrabold leading-none">{suffix}</h2>
      )}
      <h3 className="mt-2.5 text-lg font-bold">{label}</h3>
      <p className="mt-1 text-muted-foreground text-[0.95rem]">{description}</p>
    </SpotlightCard>
  )
}

export function Stats() {
  return (
    <section className="pt-6 pb-[clamp(4.5rem,8vw,8rem)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 px-[1.5rem] md:grid-cols-3">
        <StatCard value={100} suffix="+" label="Happy Customers" description="Long-term clients across Geelong trust our workmanship and straightforward advice." />
        <StatCard value={10} suffix="+" label="Years Experience" description="Hands-on mechanical expertise across sedan, hatch, truck, trailer and caravan platforms." delay="reveal--delay-1" />
        <StatCard value={null} suffix={"Mon \u2013 Sat"} label="8:30am to 5:30pm" description="Practical workshop hours so you can drop in before or after work." delay="reveal--delay-2" />
      </div>
    </section>
  )
}
