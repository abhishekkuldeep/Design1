import DropdownMenu from '../../../Components/DropdownMenu'
import style from './Process.module.css'
import poster from '../../../Assets/Images/meet.jpeg'

function Process() {

  return (
    <>
      <div className={style.main}>
        <div className={style.left}>
          <img src={poster} alt="" />
          <p>Our Process</p>

        </div>

        <div className={style.right}>
          <DropdownMenu number="01"/>
          <DropdownMenu number="02"/>
          <DropdownMenu number="03"/>

        </div>

      </div>
    </>
  )
}

export default Process