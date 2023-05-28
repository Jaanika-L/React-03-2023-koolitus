import { useTranslation } from "react-i18next";
import "./sidebar.css"

function Sidebar() {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">{t("about")}</span>
        <img src="https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">{t("categories")}</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">{t("style")}</li>
          <li className="sidebarListItem">{t("design")}</li>
          <li className="sidebarListItem">{t("food")}</li>
          <li className="sidebarListItem">{t("relationships")}</li>
          <li className="sidebarListItem">{t("travel")}</li>
          <li className="sidebarListItem">{t("motherhood")}</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">{t("follow")}</span>
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