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

    handleSize(language)

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 col-md-12 services-content">
                <div className="section-title">
                    <h2>{t.ekyc.effort.title}</h2>
                    <div className="bar"></div>
                    <p>{t.ekyc.effort.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Database />
                            {t.ekyc.effort.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Globe />
                            {t.ekyc.effort.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.File />
                            {t.ekyc.effort.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.TrendingUp />
                            {t.ekyc.effort.feat4}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 docchain-offer-img services-image">
                <LazyLoadImage
                    src="../../static/images/ekyc-image/Our AI Ops Platform power our eKYC Solution 3.svg"
                    className="animate__animated animate__fadeInRight animate__delay-0.2s"
                    alt="facial-base-image"
                />
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

    handleSize(language)

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 docchain-offer-img services-image">
                <LazyLoadImage
                    src="../../static/images/ekyc-image/Our AI Ops Platform power our eKYC Solution 3.svg"
                    className="animate__animated animate__fadeInRight animate__delay-0.2s"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
                <div className="section-title">
                    <h2>{t.ekyc.effort.title}</h2>
                    <div className="bar"></div>
                    <p>{t.ekyc.effort.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Database />
                            {t.ekyc.effort.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Globe />
                            {t.ekyc.effort.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File />
                            {t.ekyc.effort.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.TrendingUp />
                            {t.ekyc.effort.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let feature1 = <FeatureBig language={en} />

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

    if (windowWidth < 1000) feature1 = <FeatureSmall language={lang} />
    else feature1 = <FeatureBig language={lang} />

    return feature1
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
            <div className="services-area ptb-80 bg-f7fafd feedback-area">
                <div className="container">{feature1}</div>

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
                        <div className="col-lg-6 col-md-12 docchain-offer-img services-image">
                            <LazyLoadImage
                                src="../../static/images/ekyc-image/Our AI Ops Platform Power Our EKYC Solution.svg"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                                alt="smart-security-image"
                            />
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>{t.ekyc.platform.title}</h2>
                                <div className="bar"></div>
                                <p>{t.ekyc.platform.desc}</p>
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
                                        <Icon.Layout />
                                        {t.ekyc.platform.feat1}
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
                                        <Icon.Code />
                                        {t.ekyc.platform.feat2}
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
                                        <Icon.Smartphone />
                                        {t.ekyc.platform.feat3}
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
                                        <Icon.Cloud />
                                        {t.ekyc.platform.feat4}
                                    </div>
                                </div>
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

export default Feature
