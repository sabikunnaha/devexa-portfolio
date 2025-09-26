import './App.css'
import About from './Components/About'
import Header from './Components/Header'
import Hero from './Components/Hero'
import OurTeam from './Components/OurTeam'
import Services from './Components/Services'

function App() {

  return (
    <>
      
    <div className='h-16'>
      <Header></Header>
    </div>
   <div className=''>
     <Hero></Hero>
   </div>
    <About></About>
    <Services></Services>
    <OurTeam></OurTeam>
      
    </>
  )
}

export default App
