import { useTranslation } from "react-i18next"
import { dburger, github, grayson, vector, vue } from "../utils/images"

const Projects = () => {

    const {t} = useTranslation()


    const projects = [
        {
            url: 'https://github.com/loliamacop/GRAYSON',
            name: t("name"),
            descr: t("descr"),
            img: grayson
        },
        {
            url: 'https://github.com/loliamacop/VUE',
            name: t("name2"),
            descr: t("descr"),
            img: vue
        },
        {
            url: 'https://github.com/loliamacop/dBurger',
            name: t("name3"),
            descr: t("descr"),
            img: dburger
        }
    ]

    return (
        <>
            <div className="works" id="works">
                <div className="container">
                    <div className="works__section">
                        <h2 className="works__section_title">
                            {t("projectstitle")}
                        </h2>
                        <p className="works__section_txt">
                            {t("projectstxt")}
                        </p>
                        {projects.map((projects) => (
                            <div className="projects" key={projects.url}>
                                <div className="projects__left">
                                    <a href={projects.url}>
                                        <img src={projects.img} alt="" className="projects__left_img" />
                                    </a>
                                </div>
                                <div className="projects__right">
                                    <h3 className="projects__right_title">
                                        {projects.name}
                                    </h3>
                                    <p className="projects__right_txt">
                                        {projects.descr}
                                    </p>
                                    <h4 className="projects__right_bottomTitle">
                                        {t("info")}
                                    </h4>
                                    <div className="projects__right_info">
                                        <ul className="projects__right_info_list">
                                            <li className="projects__right_info_list_li">{t("year")}</li>
                                            <li className="projects__right_info_list_li grey">2023</li>
                                        </ul>
                                        <ul className="projects__right_info_list">
                                            <li className="projects__right_info_list_li">{t("role")}</li>
                                            <li className="projects__right_info_list_li grey">{t("rol")}</li>
                                        </ul>
                                    </div>
                                    <a href={projects.url} className="projects__right_link">{t("projectlink")}<img src={github} alt="" /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects