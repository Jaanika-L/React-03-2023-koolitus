import { Link } from 'react-router-dom'
import './topbar.css'

function TopBar() {

  return (
    <div className='top'>
      <div className='topLeft'>
        <a className="topIcon fa-brands fa-square-facebook" href="https://www.facebook.com/"></a>
        <a className="topIcon fa-brands fa-square-twitter" href="https://www.twitter.com/"></a>
        <a className="topIcon fa-brands fa-square-pinterest" href="https://www.pinterest.com/"></a>
        <a className="topIcon fa-brands fa-square-instagram" href="https://www.instagram.com/"></a>

      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link  className='link' to="/" >AVALEHT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/lisa-postitus">LISA POSTITUS</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/contact">KONTAKT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/vali-postitus">VALITUD POSTITUS</Link>
          </li>
          <li className='topListItem'>

          </li>
        </ul>
      </div>
      <div className='topRight'>

        <img
          className='topImg '
          src="https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
          alt="" />

        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/login'>LOGIN</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/register'>REGISTER</Link>
          </li>

        </ul>


        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

export default TopBar