import React from 'react'
import Link from 'next/link'
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
        <div className="iot-main-banner" style={{zIndex: "0"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-sm-6 banner-content vietnamese-align">
                        <h2>{t.horus.mainBanner.title}</h2>
                        <p style={{maxWidth: "535px"}}>{t.horus.mainBanner.desc1}</p>
                        <p>
                            <b>{t.horus.mainBanner.desc2}</b>
                        </p>


                        {/* <Link href="#">
                            <a className="btn btn-primary">Watch Demo</a>
                        </Link> */}
                    </div>

                    <div className="col-xl-6 col-sm-6">
                        <div>
                            <img
                                src="../../static/images/horus-image/Define What Camera Can See.svg"
                                className="animate__animated animate__fadeInRight animate__delay-0.8s"
                                alt="image"
                            />
                        </div>
                        {/* <div className="row">
                            <div className="col-12">
                                <div className="repair-about-content">
                                    <h2
                                        style={{ textAlign: 'center' }}
                                        className="mb-4"
                                    >
                                        See Our Video Demo
                                    </h2>
                                    <div className="row justify-content-center">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/p3kBhyB9_fQ"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
