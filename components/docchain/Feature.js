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
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 col-md-12 services-content">
                <div className="section-title">
                    <h2>{t.docchain.extension.title}</h2>
                    <div className="bar"></div>
                    <p>{t.docchain.extension.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Database /> {t.docchain.extension.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Globe /> {t.docchain.extension.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.File /> {t.docchain.extension.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.TrendingUp /> {t.docchain.extension.feat4}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 docchain-offer-img services-image">
                <LazyLoadImage
                    src="../../static/images/docchain-image/Many Application included.svg"
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

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-12 docchain-offer-img services-image">
                <LazyLoadImage
                    src="../../static/images/docchain-image/Many Application included.svg"
                    className="animate__animated animate__fadeInRight animate__delay-0.2s"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-7 col-md-12 services-content">
                <div className="section-title">
                    <h2>{t.docchain.extension.title}</h2>
                    <div className="bar"></div>
                    <p>{t.docchain.extension.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Database /> {t.docchain.extension.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.Globe /> {t.docchain.extension.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.File /> {t.docchain.extension.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div
                            className={
                                t === vi ? 'box vietnamese-align' : 'box'
                            }
                        >
                            <Icon.TrendingUp /> {t.docchain.extension.feat4}
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
                        <div className="col-lg-5 col-md-12 services-image">
                            <LazyLoadImage
                                src="../../static/images/docchain-image/Our AI Ops Platform power our DocChain Solution3.svg"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s"
                                alt="smart-security-image"
                            />
                        </div>

                        <div className="col-lg-7 col-md-12 services-content">
                            <div className="section-title">
                                <h2>{t.docchain.powered.title}</h2>
                                <div className="bar"></div>
                                <p style={{maxWidth: "none"}}>{t.docchain.powered.desc}</p>
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
                                        <Icon.Layout />{' '}
                                        {t.docchain.powered.feat1}
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
                                        <Icon.Code /> {t.docchain.powered.feat2}
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
                                        <Icon.Smartphone />{' '}
                                        {t.docchain.powered.feat3}
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
                                        <Icon.Cloud />{' '}
                                        {t.docchain.powered.feat4}
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
