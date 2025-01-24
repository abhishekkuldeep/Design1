import Heading from "./Heading"
function Cards() {
  return (
    <>
    <div className="p-4 m-4">
        <h1 className="text-2xl font-semibold">Intelligent Responses</h1>
        <p className="font-extralight">Using Machine Learning, AI and NLP technology Our Talented Teams Develop Dynamic Solutions That</p>

        <div className="p-2">
            <Heading text="INTELLIGENT RESPONSES"/>
        </div>

        
        <ul className="list-disc p-3">
            <li className="p-2">Lorem, ipsum.</li>
            <li className="p-2">Lorem, ipsum.</li>
            <li className="p-2">Lorem, ipsum.</li>
        </ul>
    </div>
    </>

  )
}

export default Cards