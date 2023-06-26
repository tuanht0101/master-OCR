import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import en from '../../locales/en'
import vi from '../../locales/vi'

const AboutSubtitle = ({ language }) => {
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
        <div className="iot-services-area pt-50 pb-50">
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-repair-services about-sub-box">
                            <div className="icon">
                                <img src="../../static/images/about-us-image/Mission.svg" />
                            </div>

                            <h3>{t.aboutUs.sub.mission.title}</h3>
                            <p>{t.aboutUs.sub.mission.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-repair-services about-sub-box">
                            <div className="icon">
                                <img src="../../static/images/about-us-image/Vision.svg" />
                            </div>

                            <h3>{t.aboutUs.sub.vision.title}</h3>
                            <p>{t.aboutUs.sub.vision.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSubtitle
