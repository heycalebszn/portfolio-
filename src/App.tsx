import Home from "./pages/Home";
import Services from "./pages/Services";
import RecentWorks from "./pages/RecentWorks";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Home />
      <Services />
      <RecentWorks />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
