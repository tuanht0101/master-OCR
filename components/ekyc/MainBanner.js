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
        <div className="iot-main-banner ekyc-banner">
            <div className="container">
                <div className="row">
                    <div
                        className={
                            t === vi
                                ? 'col-xl-7 col-sm-7 banner-content vietnamese-align'
                                : 'col-xl-6 col-sm-6 banner-content'
                        }
                    >
                        {/* <div className="horus-logo-img">
                            <img src="../../static/images/ekyc-image/Logo-color.svg" />
                        </div> */}
                        <h2>{t.ekyc.mainBanner.title}</h2>
                        <p>{t.ekyc.mainBanner.desc}</p>

                        {/* <Link href="/contact">
                            <a className="btn btn-primary">Watch Demo</a>
                        </Link> */}
                    </div>

                    <div className={
                            t === vi
                                ? 'col-xl-5 col-sm-7'
                                : 'col-xl-6 col-sm-6'
                        }>
                        <img
                            src="../../static/images/offer-image/eKYC.svg"
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
