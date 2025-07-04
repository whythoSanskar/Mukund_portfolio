import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import End from './components/Ending'
import './App.css'

function App() {
  return (
    <>
    <div className="min-w-[360px] w-full container mx-auto ">
      <Navbar />
      <Hero />
      
    </div>
      <Work/>
      <End />
    </>
  )
}

export default App
