import { Link } from "react-router-dom"
import "./login.css"
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="login">
      <span className="loginTitle">{t("login")}</span>
      <form className="loginForm">
        <label>{t("email")}</label>
        <input type="text" className="loginInput" placeholder={t("enterE")}/>
        <label>{t("password")}</label>
        <input type="password" className="loginInput"  placeholder={t("enterP")} />
        <button className="loginButton">{t("login")}</button>
      </form>
      <button className="loginRegisterButton">
      <Link className="link" to='/register'>{t("registerTitle")}</Link>
      </button>
    </div>
  )
}

export default Login