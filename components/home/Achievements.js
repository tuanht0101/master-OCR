import React from 'react'
import Link from 'next/link'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Achievements = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>{t.homePage.achievements.title}</h2>
                    <div className="bar"></div>
                    <p>{t.homePage.achievements.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>{t.homePage.achievements.milion}</h3>
                            <p>{t.homePage.achievements.registered}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>100.000</h3>
                            <p>{t.homePage.achievements.digitalized}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>50.000</h3>
                            <p>{t.homePage.achievements.recognized}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>70%</h3>
                            <p>{t.homePage.achievements.cutOff}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="map-bg">
                    <img src="../../static/images/map.png" alt="map" />
                </div> */}
            </div>
        </div>
    )
}

export default Achievements
