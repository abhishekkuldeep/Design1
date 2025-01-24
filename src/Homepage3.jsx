import Heading from "./Heading"
import Cards from "./Cards"

function Homepage3() {
  return (
    <>
    <div className="mx-8">
        <Heading text="SERVICES"/>
    </div>
    <div className="w-full px-8 flex flex-row ">
    <div className="w-[30%] h-screen"></div>


    <div className="w-[70%] h-fit flex flex-wrap">
    <div className="basis-[45%] p-4 bg-blue-200 m-5"><Cards/></div>
    <div className="basis-[45%] p-4 bg-blue-200 m-5"><Cards/></div>
    <div className="basis-[45%] p-4 bg-blue-200 m-5"><Cards/></div>
    <div className="basis-[45%] p-4 bg-blue-200 m-5"><Cards/> </div>

    </div>


    </div>
    
    
    </>

  )
}

export default Homepage3