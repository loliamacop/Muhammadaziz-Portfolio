import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react"


const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en')
  const changeLanguage = () => {
    const currentLang = lang == 'en' ? 'ru' : 'en'
    setLang(currentLang)
    i18n.changeLanguage(currentLang)
  }

  return (
    <>
      <nav className="nav">
        <Link to='/' className="nav__logo">
          Muhammad Aziz
        </Link>
        <ul className="nav__list">
        <button 
        className="lang"
        onClick={() => changeLanguage()}
        >
          {lang == 'en' ? 'ru' : 'en'}
        </button>
          <li><a href="#works" className="nav__list_link">{t("navlink1")}</a></li>
          <li>
            <Link to='/about' className="nav__list_link">{t("navlink2")}</Link>
          </li>
          <li><a href="#contacts" className="nav__list_link">{t("navlink3")}</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar