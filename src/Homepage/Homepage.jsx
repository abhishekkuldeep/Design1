import Hero from './Pages/Hero/Hero'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Process from './Pages/Process/Process'
import Partners from './Pages/Partners/Partners'
import Articles from './Pages/Articles_and_News/Articles'
import Info from './Pages/Info/Info'


function Homepage() {
  return (
    <>
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