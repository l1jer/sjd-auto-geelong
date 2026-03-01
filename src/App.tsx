import { useReveal } from "@/hooks/use-reveal"
// @ts-ignore -- JSX component from react-bits
import Beams from "@/components/Beams.jsx"
import { Topbar } from "@/components/sections/Topbar"
import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { Services } from "@/components/sections/Services"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { About } from "@/components/sections/About"
import { Brands } from "@/components/sections/Brands"
import { Reviews } from "@/components/sections/Reviews"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { BackToTop } from "@/components/BackToTop"

export default function App() {
  useReveal()

  return (
    <>
      <div className="beams-bg">
        <Beams
          beamWidth={4.7}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffdf0f"
          speed={1}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <About />
        <Brands />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
