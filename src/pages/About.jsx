import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const About = () => {
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
        <button 
        className="lang"
        onClick={() => changeLanguage()}
        >
          {lang == 'en' ? 'ru' : 'en'}
        </button>
      </nav>
      <h2 className="title">
        {t("titlee")}
      </h2>
    </>
  )
}

export default About