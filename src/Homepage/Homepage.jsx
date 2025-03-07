import Hero from './Pages/Hero/Hero'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Process from './Pages/Process/Process'
import Partners from './Pages/Partners/Partners'
import Articles from './Pages/Articles_and_News/Articles'
import Info from './Pages/Info/Info'
import Header from '../Header/Header'
import { useEffect } from 'react'


function Homepage() {
  useEffect( ()=>{
    window.scrollTo(0,0);
  },[] );
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Process/>  
      <Partners/>
      <Articles/>
      <Info/>
    </>
  )
}

export default Homepage