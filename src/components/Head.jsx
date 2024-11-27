import React from 'react'
import { foto, github, insta } from '../utils/images'
import { useTranslation } from 'react-i18next'

const Head = () => {

    const { t } = useTranslation()

    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="head">
                        <div className="head__right">
                            <h1 className="head__right_title">
                                {t("title")}
                            </h1>
                            <p className="head__right_txt">
                                {t("headtxt")}
                            </p>
                            <div className="head__right_btns">
                                <button className="head__right_btns_btnContact">
                                    {t("headbtn")}
                                </button>
                                <button className="head__right_btns_btn">
                                    <a href="https://www.instagram.com/aziiz.0422/">
                                        <img src={insta} alt="" />
                                    </a>
                                </button>
                                <button className="head__right_btns_btn">
                                    <a href="https://github.com/loliamacop">
                                        <img src={github} alt="" />
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="head__left">
                            <img src={foto} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Head