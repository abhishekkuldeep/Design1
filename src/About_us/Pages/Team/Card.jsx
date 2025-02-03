import style from './Card.module.css'

function Card() {
  return (
    <>
    <div className={style.main}>
        <div className={style.image}>
        </div>

        <div className={style.texts}>
            <h1>POST</h1>
            <h2>Name</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis numquam impedit possimus, excepturi fugit totam voluptatibus consectetur sint ab.</h3>

        </div>

    </div>
    </>
    
  )
}

export default Card