import DropdownMenu from '../../Components/DropdownMenu'
import style from '../Process/process.module.css'

function Homepage4() {

  return (
    <>
        <div className={style.body}>
          <div className={style.main}>
            <div className={style.image}>
              <p>Our Process</p>
            </div>

            <div className={style.dropDown}>
              <DropdownMenu number="01"/>
              <DropdownMenu number="02"/>
              <DropdownMenu number="03"/>

            </div>

          </div>

        </div>
    </>
  )
}

export default Homepage4