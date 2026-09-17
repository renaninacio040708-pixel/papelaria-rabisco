import { MotionConfig } from "motion/react"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Diferenciais } from "./components/Diferenciais"
import { Catalogo } from "./components/Catalogo"
import { Oficinas } from "./components/Oficinas"
import { Depoimentos } from "./components/Depoimentos"
import { FAQ } from "./components/FAQ"
import { Contato } from "./components/Contato"
import { Localizacao } from "./components/Localizacao"
import { Footer } from "./components/Footer"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Diferenciais />
        <Catalogo />
        <Oficinas />
        <Depoimentos />
        <FAQ />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
