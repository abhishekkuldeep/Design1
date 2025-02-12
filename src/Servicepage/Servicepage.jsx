import Hero from "./Pages/Hero/Hero"
import Information from "./Pages/Info/Information"
import Response from "./Pages/Response/Response"
import Header from "../Header/Header"
import { useEffect } from "react"


function Servicepage() {
    useEffect( ()=>{
      window.scrollTo(0,0);
    },[] );

    
  return (
    <>
        <Header/>
        <Hero/>
        <Information/>
        <Response/>
        <Response/>
        <Response/>
        <Response/>
    </>
  )
}

export default Servicepage