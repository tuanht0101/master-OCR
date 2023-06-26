import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const FeatureBig = ({ language }) => {
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
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12 services-image">
                <LazyLoadImage
                    src="../../static/images/horus-image/Smart Security.svg"
                    className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                    alt="smart-security-image"
                />
            </div>

            <div className="col-lg-7 col-md-12 services-content">
                <div className="section-title">
                    <h2>{t.horus.smart.title}</h2>
                    <div className="bar"></div>
                    <p style={{ maxWidth: 'none' }}>{t.horus.smart.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Layout />
                            {t.horus.smart.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Code />
                            {t.horus.smart.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Smartphone />
                            {t.horus.smart.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Cloud />
                            {t.horus.smart.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeatureSmall = ({ language }) => {
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
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-12 services-content">
                <div className="section-title">
                    <h2>{t.horus.smart.title}</h2>
                    <div className="bar"></div>
                    <p style={{ maxWidth: 'none' }}>{t.horus.smart.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Layout />
                            {t.horus.smart.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Code />
                            {t.horus.smart.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Smartphone />
                            {t.horus.smart.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Cloud />
                            {t.horus.smart.feat4}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 services-image">
                <LazyLoadImage
                    src="../../static/images/horus-image/Smart Security.svg"
                    className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                    alt="smart-security-image"
                />
            </div>
        </div>
    )
}

let feature2 = <FeatureBig language={en} />

const handleSize = (language) => {
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

    if (windowWidth < 1000) feature2 = <FeatureSmall language={language} />
    else feature2 = <FeatureBig language={language} />

    return feature2
}

const Feature = ({ language }) => {
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
            <div className="services-area ptb-80 bg-f7fafd feedback-area " style={{zIndex: "0"}}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>{t.horus.accessControl.title}</h2>
                                <div className="bar"></div>
                                <p>{t.horus.accessControl.desc}</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.Database />{' '}
                                        {t.horus.accessControl.feat1}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.Globe />
                                        {t.horus.accessControl.feat2}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.File />{' '}
                                        {t.horus.accessControl.feat3}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.TrendingUp />{' '}
                                        {t.horus.accessControl.feat4}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-image">
                            <LazyLoadImage
                                src="../../static/images/horus-image/FacialBase.svg"
                                className="animate__animated animate__fadeInRight animate__delay-0.2s"
                                alt="facial-base-image"
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

            <div className="services-area ptb-80 feedback-area" style={{zIndex: "0"}}>
                <div className="container">{feature2}</div>

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

            <div className="services-area ptb-80 bg-f7fafd feedback-area" style={{zIndex: "0"}}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-12 services-content">
                            <div className="section-title">
                                <h2>{t.horus.management.title}</h2>
                                <div className="bar"></div>
                                <p style={{ maxWidth: 'none' }}>
                                    {t.horus.management.desc}
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.Database />
                                        {t.horus.management.feat1}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.Globe />
                                        {t.horus.management.feat2}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.File />
                                        {t.horus.management.feat3}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className={
                                            t === vi
                                                ? 'box vietnamese-align'
                                                : 'box'
                                        }
                                    >
                                        <Icon.TrendingUp />
                                        {t.horus.management.feat4}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 services-image">
                            <LazyLoadImage
                                src="../../static/images/horus-image/Centralize Remote.svg"
                                className="animate__animated animate__fadeInRight animate__delay-0.2s"
                                alt="centralize-remote-image"
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
        </>
    )
}

export default Feature
