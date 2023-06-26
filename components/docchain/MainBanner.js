import React from 'react'
import Link from 'next/link'
import 'animate.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const MainBanner = ({ language }) => {
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
        <div className="iot-main-banner docchain-main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-sm-7 banner-content vietnamese-align">
                        <h2>{t.docchain.mainBanner.title}</h2>
                        {t === en ? (
                            <p>
                                We not only help businesses take care of manual
                                work of data entry and <br /> administrative
                                tasks but also create a platform that aims to
                                promote.
                            </p>
                        ) : (
                            <p>{t.docchain.mainBanner.desc}</p>
                        )}

                        {/* <div>
                            <Link href="/contact">
                                <a className="btn btn-primary">Watch Demo</a>
                            </Link>
                        </div> */}
                    </div>

                    <div className="col-lg-5 col-sm-5">
                        <img
                            src="../../static/images/docchain-image/OCR hero.svg"
                            className="animate__animated animate__fadeInUp animate__delay-0.8s"
                            alt="image"
                        />
                    </div>
                </div>
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
    )
}

export default MainBanner
