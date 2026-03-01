import { useEffect, useState, useRef } from "react"
// @ts-ignore
import Beams from "./Beams.jsx"

export function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('resize', checkMobile)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Calculate background position and opacity based on scroll
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
  const scrollProgress = Math.min(scrollY / maxScroll, 1)
  
  // Create multiple gradient layers that shift with scroll
  const gradient1Opacity = Math.max(0.18 - (scrollProgress * 0.08), 0.05) // Fade from 0.18 to 0.05
  const gradient2Opacity = Math.min(0.09 + (scrollProgress * 0.12), 0.25) // Grow from 0.09 to 0.25
  
  // Add a third gradient that appears later in the scroll
  const gradient3Opacity = scrollProgress > 0.4 ? Math.min((scrollProgress - 0.4) * 0.3, 0.15) : 0
  
  // Movement calculations with easing
  const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  const easedProgress = easeInOut(scrollProgress)
  
  const gradient1X = 12 + (easedProgress * 35) // Move from 12% to 47%
  const gradient1Y = -10 + (easedProgress * 45) // Move from -10% to 35%
  const gradient2X = 90 - (easedProgress * 30) // Move from 90% to 60%
  const gradient2Y = 16 + (easedProgress * 50) // Move from 16% to 66%
  const gradient3X = 50 + (Math.sin(scrollProgress * Math.PI) * 20) // Oscillate around center
  const gradient3Y = 80 - (scrollProgress * 30) // Move from 80% to 50%

  // Background color transition with more variety
  const getBackgroundColor = (progress: number) => {
    if (progress < 0.3) {
      return {
        start: '#0d0d0e',
        mid: '#101114',
        end: '#0b0c0d'
      }
    } else if (progress < 0.6) {
      return {
        start: '#0e0f12',
        mid: '#141418',
        end: '#0f1012'
      }
    } else {
      return {
        start: '#0f1013',
        mid: '#16171c',
        end: '#101114'
      }
    }
  }

  const bgColors = getBackgroundColor(scrollProgress)

  return (
    <div className="site-bg">
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(1200px 800px at ${gradient1X}% ${gradient1Y}%, rgba(255, 122, 0, ${gradient1Opacity}), transparent 65%),
            radial-gradient(800px 500px at ${gradient2X}% ${gradient2Y}%, rgba(255, 122, 0, ${gradient2Opacity}), transparent 70%),
            ${gradient3Opacity > 0 ? `radial-gradient(600px 400px at ${gradient3X}% ${gradient3Y}%, rgba(255, 180, 39, ${gradient3Opacity}), transparent 60%),` : ''}
            linear-gradient(180deg, ${bgColors.start} 0%, ${bgColors.mid} 55%, ${bgColors.end} 100%)
          `
        }}
      />
      
      {/* Beams effect - only on desktop for performance */}
      {!isMobile && (
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.2 + (scrollProgress * 0.3),
          mixBlendMode: 'screen'
        }}>
          <Beams
            beamWidth={4.2}
            beamHeight={30}
            beamNumber={12}
            lightColor="#FFB627"
            speed={0.6 + (scrollProgress * 0.4)}
            noiseIntensity={1.5}
            scale={0.18}
            rotation={20 + (scrollProgress * 15)}
          />
        </div>
      )}
    </div>
  )
}