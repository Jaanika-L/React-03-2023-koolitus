import { Link } from 'react-router-dom'
import './topbar.css'
import { useTranslation } from 'react-i18next';


function TopBar() {
  const { t, i18n } = useTranslation();
  const updateLanguage = (newLang) => {
    i18n.changeLanguage(newLang)
    localStorage.setItem("language", newLang)

  }


  return (
    <div className='top'>

      <div className='topLeft'>
        <img className='lang' src="/estonia.png" alt="" onClick={() => updateLanguage("ee")} />
        <img className='lang' src="/united-kingdom.png" alt="" onClick={() => updateLanguage("en")} />
        <a className="topIcon fa-brands fa-square-facebook" href="https://www.facebook.com/"></a>
        <a className="topIcon fa-brands fa-square-twitter" href="https://www.twitter.com/"></a>
        <a className="topIcon fa-brands fa-square-pinterest" href="https://www.pinterest.com/"></a>
        <a className="topIcon fa-brands fa-square-instagram" href="https://www.instagram.com/"></a>

      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to="/" >{t("homepage")}</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/lisa-postitus">{t("add-post")}</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/contact">{t("contact")}</Link>
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
            <Link className='link' to='/login'>{t("login")}</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/register'>{t("register")}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar