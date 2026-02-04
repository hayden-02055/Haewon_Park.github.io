import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Competencies from './components/Competencies'
import Experience from './components/Experience'
import ProblemSolving from './components/ProblemSolving'
import TechStack from './components/TechStack'
import Decisions from './components/Decisions'
import Learnings from './components/Learnings'
import Future from './components/Future'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Competencies />
        <Experience />
        <ProblemSolving />
        <TechStack />
        <Decisions />
        <Learnings />
        <Future />
      </main>
      <Footer />
    </div>
  )
}

export default App
