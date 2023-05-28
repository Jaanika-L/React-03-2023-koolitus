import { Link } from "react-router-dom"
import "./register.css"
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();

  return (
    <div className="register">
      <span className="registerTitle">{t("registerTitle")}</span>
      <form className="registerForm">
        <label>{t("email")}</label>
        <input type="text" className="registerInput" placeholder={t("enterE")} />
        <label>{t("password")}</label>
        <input type="password" className="registerInput"  placeholder={t("enterP")} />
        <button className="registerButton">{t("registerTitle")}</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to='/login'>{t("login")}</Link>
        </button>
    </div>
  )
}

export default Register