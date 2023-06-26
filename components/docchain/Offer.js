import React from 'react'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Link from 'next/link'
import * as Icon from 'react-feather'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Diverse = ({ language }) => {
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
                    src="../../static/images/docchain-image/OCR.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content banner-content">
                <div className="offer-box-title">
                    <p>{t.docchain.robust.input.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database />
                            {t.docchain.robust.input.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Globe /> {t.docchain.robust.input.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File />
                            {t.docchain.robust.input.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp /> {t.docchain.robust.input.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TextExtraction = ({ language }) => {
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
                    src="../../static/images/docchain-image/Text extraction.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content banner-content">
                <div className="offer-box-title">
                    <p>{t.docchain.robust.text.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database /> {t.docchain.robust.text.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Globe /> {t.docchain.robust.text.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File /> {t.docchain.robust.text.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp /> {t.docchain.robust.text.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ObjectExtraction = ({ language }) => {
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
                    src="../../static/images/docchain-image/Object Extraction.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-6 col-md-12 services-content banner-content">
                <div className="offer-box-title">
                    <p>{t.docchain.robust.object.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database /> {t.docchain.robust.object.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Globe /> {t.docchain.robust.object.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File /> {t.docchain.robust.object.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp /> {t.docchain.robust.object.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Customized = ({ language }) => {
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
            <div className="col-lg-5 col-md-12 docchain-offer-img services-image">
                <img
                    src="../../static/images/docchain-image/Template config.svg"
                    className="animate__animated animate__fadeInLeft"
                    alt="facial-base-image"
                />
            </div>
            <div className="col-lg-7 col-md-12 services-content banner-content">
                <div className="offer-box-title">
                    <p>{t.docchain.robust.workflow.desc}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.Database /> {t.docchain.robust.workflow.feat1}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 docchain-offer-img">
                        <div className="box">
                            <Icon.Globe /> {t.docchain.robust.workflow.feat2}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.File /> {t.docchain.robust.workflow.feat3}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="box">
                            <Icon.TrendingUp />{' '}
                            {t.docchain.robust.workflow.feat4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Offer = ({ language }) => {
    const [state, setState] = React.useState({
        currentInfo: 'diverse',
        activeDiverse: true,
        activeText: false,
        activeObject: false,
        activeCustomized: false,
    })

    const toggleClassDiverse = () => {
        setState({
            currentInfo: 'diverse',
            activeDiverse: true,
            activeText: false,
            activeObject: false,
            activeCustomized: false,
        })
    }

    const toggleClassText = () => {
        setState({
            currentInfo: 'text',
            activeDiverse: false,
            activeText: true,
            activeObject: false,
            activeCustomized: false,
        })
    }

    const toggleClassObject = () => {
        setState({
            currentInfo: 'object',
            activeDiverse: false,
            activeText: false,
            activeObject: true,
            activeCustomized: false,
        })
    }

    const toggleClassCustomized = () => {
        setState({
            currentInfo: 'customized',
            activeDiverse: false,
            activeText: false,
            activeObject: false,
            activeCustomized: true,
        })
    }

    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const currentInfo = state.currentInfo
    let banner
    if (currentInfo == 'diverse') {
        banner = <Diverse language={language} />
    } else if (currentInfo == 'text') {
        banner = <TextExtraction language={language} />
    } else if (currentInfo == 'object') {
        banner = <ObjectExtraction language={language} />
    } else {
        banner = <Customized language={language} />
    }

    return (
        <div className="feedback-area bg-f7fafd offer-area docchain-pad">
            <div className="container">
                <div className="section-title">
                    <h2>{t.docchain.robust.title}</h2>
                    <div className="bar"></div>
                    <p>{t.docchain.robust.desc}</p>
                </div>
                <div className="offer-button-area docchain-area row justify-content-center">
                    <div
                        className={
                            state.activeDiverse
                                ? 'offer-button col-lg-3 col-sm-6 active-button doc-button'
                                : 'offer-button col-lg-3 col-sm-6 doc-button'
                        }
                        onClick={toggleClassDiverse}
                    >
                        {t.docchain.robust.input.title}
                    </div>
                    <div
                        className={
                            state.activeCustomized
                                ? 'offer-button col-lg-3 col-sm-6 active-button doc-button'
                                : 'offer-button col-lg-3 col-sm-6 doc-button'
                        }
                        onClick={toggleClassCustomized}
                    >
                        {t === vi ? (
                            <p>
                                Quy trình làm việc <br />
                                tùy chỉnh
                            </p>
                        ) : (
                            
                            <p>{t.docchain.robust.workflow.title}</p>
                        )}
                    </div>
                    <div
                        className={
                            state.activeText
                                ? 'offer-button col-lg-3 col-sm-4 active-button doc-button'
                                : 'offer-button col-lg-3 col-sm-4 doc-button'
                        }
                        onClick={toggleClassText}
                    >
                        {t.docchain.robust.text.title}
                    </div>
                    <div
                        className={
                            state.activeObject
                                ? 'offer-button col-lg-3 col-sm-4 active-button doc-button'
                                : 'offer-button col-lg-3 col-sm-4 doc-button'
                        }
                        onClick={toggleClassObject}
                    >
                        {t.docchain.robust.object.title}
                    </div>
                </div>

                <div className="why-choose-us">
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
