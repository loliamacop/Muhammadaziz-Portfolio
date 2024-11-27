import { useTranslation } from "react-i18next"
import { github, insta } from "../utils/images"

const Contacts = () => {

  const { t } = useTranslation()

  const form = [
    {
      span: t("span"),
      placeholder: t("placeholder")
    },
    {
      span: t("span2"),
      placeholder: t("placeholder2")
    },
    {
      span: t("span3"),
      placeholder: ""
    },
    {
      span: t("span4"),
      placeholder: t("placeholder3")
    }
  ]
  return (
    <>
      <footer className="footer" id="contacts">
        <div className="container">
          <div className="foot">
            <div className="foot__left">
              <h2 className="foot__left_title">
                {t("contactstitle")}
              </h2>
              <p className="foot__left_txt">
              {t("contactstxt")} <a href="" className="foot__left_email">hosimzonvmuhammadaziz@gmail.com</a>
              </p>
              <div className="foot__left_socials">
                <a href="">
                  <img src={github} alt="" />
                </a>
                <a href="">
                  <img src={insta} alt="" />
                </a>
              </div>
            </div>
            <div className="foot__right">
              <form className="foot__right_form">
                {form.map((form) => (
                  <label key={form.placeholder}>
                    <span className="foot__right_form_span">{form.span}</span>
                    <input
                      type="text"
                      placeholder={form.placeholder}
                      className="foot__right_form_input"
                    />
                  </label>
                ))}
                <button className="head__right_btns_btnContact">
                  {t("contactsbtn")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contacts