import React from 'react'
import en from '../../locales/en'
import vi from '../../locales/vi'

export default function About({language}) {
    
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
        <section className="about-area ptb-80 pt-160">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-sm-1"></div>
                    <div className="col-lg-10 col-sm-10">
                        <div className=" about-us-2">
                            <div className="section-title aboutus-title">
                                <h2>{t.aboutUs.mainBanner.title}</h2>
                                <div className="bar"></div>
                            </div>
                            <div className="about-content">
                                <p>{t.aboutUs.mainBanner.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-sm-1"></div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="../../static/images/shape1.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="../../static/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="../../static/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="../../static/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="../../static/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="../../static/images/shape2.svg" alt="shape" />
                </div>
            </div>
        </section>
    )
}
