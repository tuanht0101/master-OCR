import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const CoreValueSmall = ({ language }) => {
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
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
                <LazyLoadImage
                    src="../../static/images/about-us-image/CoreValue1.svg"
                    className="animate__animated animate__fadeInDown animate__delay-0.2s"
                    alt="robot-ahttps://ibb.co/KrTKK5Znd-phone"
                />
            </div>

            <div className="col-lg-6 col-md-12 services-content">
                <div className="section-title core-value-content">
                    <h3>{t.aboutUs.coreValue.imperfection.title}</h3>
                    <p className="value-text">
                        {t.aboutUs.coreValue.imperfection.desc}
                    </p>
                </div>

                <div className="section-title core-value-content">
                    <h3>{t.aboutUs.coreValue.positiveness.title}</h3>
                    <p className="value-text">
                        {t.aboutUs.coreValue.positiveness.desc1}
                    </p>
                    <p className="value-text">
                        {t.aboutUs.coreValue.positiveness.desc2}
                    </p>
                </div>
            </div>
        </div>
    )
}

const CoreValueBig = ({ language }) => {
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
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
                <div className="section-title core-value-content">
                    <h3>{t.aboutUs.coreValue.imperfection.title}</h3>
                    <p className="value-text">
                        {t.aboutUs.coreValue.imperfection.desc}
                    </p>
                </div>

                <div className="section-title core-value-content">
                    <h3>{t.aboutUs.coreValue.positiveness.title}</h3>
                    <p className="value-text">
                        {t.aboutUs.coreValue.positiveness.desc1}
                    </p>
                    <p className="value-text">
                        {t.aboutUs.coreValue.positiveness.desc2}
                    </p>
                </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <LazyLoadImage
                    src="../../static/images/about-us-image/CoreValue1.svg"
                    className="animate__animated animate__fadeInDown animate__delay-0.2s"
                    alt="robot-ahttps://ibb.co/KrTKK5Znd-phone"
                />
            </div>
        </div>
    )
}

let core_value = <CoreValueBig language={en} />

const handleSize = (lang) => {
    const [windowWidth, setWindowWidth] = useState(undefined)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            const handleResize = () => {
                // Set window width/height to state
                setWindowWidth(window.innerWidth)
            }

            // Add event listener
            window.addEventListener('resize', handleResize)

            // Call handler right away so state gets updated with initial window size
            handleResize()

            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (windowWidth < 1000) core_value = <CoreValueSmall language={lang} />
    else core_value = <CoreValueBig language={lang} />

    return core_value
}

const CoreValue = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    handleSize(language)

    return (
        <>
            <div className="services-area ptb-80 bg-f7fafd feedback-area">
                <div className="section-title core">
                    <h2>{t.aboutUs.coreValue.title}</h2>
                    <div className="bar"></div>
                </div>
                <div className="container">{core_value}</div>

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

            <div className="services-area ptb-80 feedback-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <LazyLoadImage
                                src="../../static/images/about-us-image/CoreValue2.svg"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s"
                                alt="man-stand"
                            />
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title core-value-content">
                                <h3>{t.aboutUs.coreValue.ownership.title}</h3>
                                <p className="value-text">
                                    {t.aboutUs.coreValue.ownership.desc}
                                </p>
                            </div>

                            <div className="section-title core-value-content">
                                <h3>{t.aboutUs.coreValue.support.title}</h3>
                                <p className="value-tex">
                                    {t.aboutUs.coreValue.support.desc1}
                                </p>
                                <p className="value-text">
                                    {t.aboutUs.coreValue.support.desc2}
                                </p>
                            </div>
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
        </>
    )
}

export default CoreValue
