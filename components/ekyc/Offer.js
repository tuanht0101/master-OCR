import React from 'react'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Link from 'next/link'
import * as Icon from 'react-feather'
import en from '../../locales/en'
import vi from '../../locales/vi'

const IdCard = ({ language }) => {
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
        <div className="row">
            <div className="col-lg-6 col-md-12 docchain-offer-img services-image">
                <img
                    src="../../static/images/ekyc-image/OCR.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content banner-content">
                {/* <div className="section-title">
                <h2>Many Appilication Included</h2>
                <div className="bar"></div>
                <p>
                    Create more value by add more apllication, not just
                    extract data entry
                </p>
            </div> */}
                <div className="offer-box-title">
                    <p style={{ maxWidth: 'none' }}>{t.ekyc.fraud.card.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database /> {t.ekyc.fraud.card.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Globe />
                            {t.ekyc.fraud.card.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File /> {t.ekyc.fraud.card.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp /> {t.ekyc.fraud.card.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Face = ({ language }) => {
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
        <div className="row">
            <div className="col-lg-6 col-md-12 docchain-offer-img services-image">
                <img
                    src="../../static/images/ekyc-image/Faceliveness.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content banner-content">
                {/* <div className="section-title">
                    <h2>Many Appilication Included</h2>
                    <div className="bar"></div>
                    <p>
                        Create more value by add more apllication, not just
                        extract data entry
                    </p>
                </div> */}
                <div className="offer-box-title">
                    <p style={{ maxWidth: 'none' }}>{t.ekyc.fraud.face.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database />
                            {t.ekyc.fraud.face.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Globe />
                            {t.ekyc.fraud.face.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File /> {t.ekyc.fraud.face.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp />
                            {t.ekyc.fraud.face.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SDK = ({ language }) => {
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
        <div className="row">
            <div className="col-lg-6 col-md-12 docchain-offer-img services-image">
                <img
                    src="../../static/images/ekyc-image/SDK.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content banner-content">
                {/* <div className="section-title">
                <h2>Many Appilication Included</h2>
                <div className="bar"></div>
                <p>
                    Create more value by add more apllication, not just
                    extract data entry
                </p>
            </div> */}
                <div className="offer-box-title">
                    <p>{t.ekyc.fraud.sdk.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database /> {t.ekyc.fraud.sdk.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Globe /> {t.ekyc.fraud.sdk.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File /> {t.ekyc.fraud.sdk.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp /> {t.ekyc.fraud.sdk.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Offer = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
        let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const [state, setState] = React.useState({
        currentInfo: 'diff-case',
        activeIdCard: true,
        activeFace: false,
        activeSDK: false,
    })

    const toggleClassIdCard = () => {
        setState({
            currentInfo: 'diff-case',
            activeIdCard: true,
            activeFace: false,
            activeSDK: false,
        })
    }

    const toggleClassFace = () => {
        setState({
            currentInfo: 'sophis-case',
            activeIdCard: false,
            activeFace: true,
            activeSDK: false,
        })
    }

    const toggleClassSDK = () => {
        setState({
            currentInfo: 'SDK',
            activeIdCard: false,
            activeFace: false,
            activeSDK: true,
        })
    }

    const currentInfo = state.currentInfo
    let banner
    if (currentInfo == 'diff-case') {
        banner = <IdCard language={language} />
    } else if (currentInfo == 'sophis-case') {
        banner = <Face language={language} />
    } else if (currentInfo == 'SDK') {
        banner = <SDK language={language} />
    }
    return (
        <div className="feedback-area ptb-80 bg-f7fafd offer-area">
            <div className="container">
                <div className="section-title">
                    <h2>{t.ekyc.fraud.title}</h2>
                    <div className="bar"></div>
                    <p>{t.ekyc.fraud.desc}</p>
                </div>
                <div className="offer-button-area ekyc-button row justify-content-center">
                    <div
                        className={
                            state.activeIdCard
                                ? 'offer-button col-lg-4 col-sm-4 active-button'
                                : 'offer-button col-lg-4 col-sm-4'
                        }
                        onClick={toggleClassIdCard}
                    >
                        {t.ekyc.fraud.card.title}
                    </div>
                    <div
                        className={
                            state.activeFace
                                ? 'offer-button col-lg-4 col-sm-4 active-button'
                                : 'offer-button col-lg-4 col-sm-4'
                        }
                        onClick={toggleClassFace}
                    >
                        {t.ekyc.fraud.face.title}
                    </div>
                    <div
                        className={
                            state.activeSDK
                                ? 'offer-button col-lg-4 col-sm-4 active-button'
                                : 'offer-button col-lg-4 col-sm-4'
                        }
                        onClick={toggleClassSDK}
                    >
                        {t.ekyc.fraud.sdk.title}
                    </div>
                </div>

                <div className="solution-banner iot-main-banner">
                    <div className="container">{banner}</div>
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

export default Offer
