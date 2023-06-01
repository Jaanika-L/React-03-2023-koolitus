import { useTranslation } from "react-i18next";
// import Sidebar from "../sidebar/Sidebar"
import "./header.css"

function Header() {
  const { t } = useTranslation();

  return (

    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleLr">{t("blog")}</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" alt="" />
    </div>

  )
}
export default Header