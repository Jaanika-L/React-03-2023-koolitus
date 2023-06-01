import { useTranslation } from "react-i18next";
import "./sidebar.css"

function Sidebar() {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">{t("about")}</span>
        <img src="https://cdn.pixabay.com/photo/2020/04/02/22/05/home-office-4996834_1280.jpg" alt="" />
        <p className="nimi">Jaanika Luik</p>
      </div>
      <div className="sidebarItem">
        <ul className="sidebarList">

        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarSocial">
          <a className="sidebarIcon fa-brands fa-square-facebook" href="https://www.facebook.com/"></a>
          <a className="sidebarIcon fa-brands fa-square-twitter" href="https://www.twitter.com/"></a>
          <a className="sidebarIcon fa-brands fa-square-pinterest" href="https://www.pinterest.com/"></a>
          <a className="sidebarIcon fa-brands fa-square-instagram" href="https://www.instagram.com/"></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar