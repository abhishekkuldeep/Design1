import { useState } from 'react'
import style from '../Css_file/Dropdown.module.css'

function DropdownMenu({number}) {
  const [menu,setMenu] = useState(false)

  return (
    <>
      <div className={style.main} onMouseEnter={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)} >
        <div className={style.header}  >
          <div className={style.serialNo}>
            <p>{number}</p>
          </div>
          <div className={style.title} >
            <p>Responsible Tech Use</p>
          </div>
        </div>

        { menu &&
        <div className={style.body}>
          <p>Using Machine Learning AI and NLP Technology Our Talanted Teams Develop Dynamic Solutions That</p>

         <div className={style.points}>
          <div className={style.content}>
            <div className={style.tickMark}> </div>
            <p>Using Machine Learning AI and NLP Technology Our Talanted Teams Develop Dynamic Solutions That</p>

          </div>

         </div>

         <div className={style.points}>
          <div className={style.content}>
            <div className={style.tickMark}> </div>
            <p>Using Machine Learning AI and NLP Technology Our Talanted Teams Develop Dynamic Solutions That</p>

          </div>

         </div>

         <div className={style.points}>
          <div className={style.content}>
            <div className={style.tickMark}> </div>
            <p>Using Machine Learning AI and NLP Technology Our Talanted Teams Develop Dynamic Solutions That</p>

          </div>

         </div>


        </div>
        }

      </div>

    </>
  )
}

export default DropdownMenu