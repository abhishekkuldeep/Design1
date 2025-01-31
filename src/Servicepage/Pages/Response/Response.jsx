import style from './Response.module.css'
import img from '../../../Assets/Images/dot-logo.png'

function Response() {
  return (
    <>
    <div className={style.main}>
      <div className={style.left}>
        <p>Intelligent Response</p>
        <img src={img} alt="" />


      </div>

      <div className={style.right}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, temporibus? Perspiciatis, quis possimus? Quis repellendus maxime totam aspernatur dignissimos repudiandae cupiditate ratione cum possimus! Accusantium, nesciunt voluptas! Ut accusantium repudiandae aliquam nemo!</p>
        <div className={style.points}>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus veritatis optio nam voluptate ut ea reprehenderit, ipsam veniam aut iusto?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus veritatis optio nam voluptate ut ea reprehenderit, ipsam veniam aut iusto?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus veritatis optio nam voluptate ut ea reprehenderit, ipsam veniam aut iusto?</li>
        </div>

      </div>

    </div>
    <hr />
    </>
  )
}

export default Response