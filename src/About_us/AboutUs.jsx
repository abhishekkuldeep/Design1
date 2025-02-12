import Hero from "./Pages/Hero/Hero"
import Mission from './Pages/Mission/Mission'
import Info from "./Pages/Info/Info"
import Team from "./Pages/Team/Team"
import Header from './Pages/Header/Header'
import { useEffect } from "react"

function AboutUs() {
  useEffect( ()=>{
    window.scrollTo(0,0);
  },[] );
  
  return (
    <>
    <Header/>
    <Hero/>
    <Mission/>
    <Info/>
    <Info/>
    <Info/>
    <Info/>
    <Team/>

    </>
  )
}

export default AboutUs