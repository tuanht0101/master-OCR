import React from 'react'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Link from 'next/link'
import en from '../../locales/en'
import vi from '../../locales/vi'

const HorusInfo = ({ language }) => {
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
            <div className="col-lg-7 col-md-12 banner-content">
                <div className="ml-banner-content offer-title vietnamese-align">
                    <h1>{t.homePage.whatWeOffer.horus.title}</h1>
                    <p>{t.homePage.whatWeOffer.horus.desc}</p>
                    <p>
                        <b>{t.useCase}: </b>
                        {t.homePage.whatWeOffer.horus.useCase}
                    </p>
                    <Link href="/horus">
                        <a className="btn btn-secondary">{t.button.explore}</a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 services-image">
                <LazyLoadImage
                    src="../../static/images/offer-image/Horus.svg"
                    className="animate__animated animate__fadeInUp animate__delay-0.5s"
                    alt="horus"
                />
            </div>
        </div>
    )
}

const MlChainInfo = ({ language }) => {
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
            <div className="col-lg-7 col-md-12 banner-content">
                <div className="ml-banner-content offer-title vietnamese-align">
                    <h1>{t.homePage.whatWeOffer.mlchain.title}</h1>

                    <p>{t.homePage.whatWeOffer.mlchain.desc}</p>
                    <p>
                        <b>{t.useCase}: </b>
                        {t.homePage.whatWeOffer.mlchain.useCase}
                    </p>
                    <Link href="/coming-soon">
                        <a className="btn btn-secondary">{t.button.explore}</a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 services-image">
                <LazyLoadImage
                    src="../../static/images/offer-image/MLChain.svg"
                    className="animate__animated animate__fadeInUp animate__delay-0.5s"
                    alt="mlchain"
                />
            </div>
        </div>
    )
}

const EkycInfo = ({ language }) => {
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
            <div className="col-lg-7 col-md-12 banner-content">
                <div className="ml-banner-content offer-title vietnamese-align">
                    <h1>{t.homePage.whatWeOffer.ekyc.title}</h1>
                    <p>{t.homePage.whatWeOffer.ekyc.desc}</p>
                    <p>
                        <b>{t.useCase}: </b>
                        {t.homePage.whatWeOffer.ekyc.useCase}
                    </p>
                    <Link href="/ekyc">
                        <a className="btn btn-secondary">{t.button.explore}</a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 services-image">
                <LazyLoadImage
                    src="../../static/images/offer-image/eKYC.svg"
                    className="animate__animated animate__fadeInUp animate__delay-0.5s"
                    alt="ekyc"
                />
            </div>
        </div>
    )
}

const DocchainInfo = ({ language }) => {
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
            <div className="col-lg-7 col-md-12 banner-content">
                <div className="ml-banner-content offer-title vietnamese-align">
                    {t === en ? (
                        <>
                            <h1>{t.homePage.whatWeOffer.docchain.title}</h1>
                            <p>{t.homePage.whatWeOffer.docchain.desc}</p>
                            <p>
                                <b>{t.useCase}: </b>
                                {t.homePage.whatWeOffer.docchain.useCase}
                            </p>
                        </>
                    ) : (
                        <>
                            <h1>
                                Giải pháp hệ thống quản lý và số hóa <br />
                                tài liệu
                            </h1>
                            <p>
                                AI hỗ trợ số hóa, lưu trữ, quản lý và truy xuất
                                tài liệu của doanh nghiệp giúp tiết <br />
                                kiệm thời gian, không gian lưu trữ và nguồn lực.
                            </p>
                            <p>
                                <b>{t.useCase}: </b>
                                Nhập dữ liệu, Tự động hóa yêu cầu bảo hiểm, Xác
                                thực sao <br />
                                kê ngân hàng
                            </p>
                        </>
                    )}

                    <Link href="/docchain">
                        <a className="btn btn-secondary">{t.button.explore}</a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 services-image">
                <LazyLoadImage
                    src="../../static/images/docchain-image/OCR hero.svg"
                    className="animate__animated animate__fadeInUp animate__delay-0.5s"
                    alt="docchain"
                />
            </div>
        </div>
    )
}

const Offer = ({ language }) => {
    const [state, setState] = React.useState({
        currentInfo: 'horus',
        activeHorus: true,
        activeMlChain: false,
        activeEkyc: false,
        activeDocchain: false,
    })

    const toggleClassHorus = () => {
        setState({
            currentInfo: 'horus',
            activeHorus: true,
            activeEkyc: false,
            activeDocchain: false,
            activeMlChain: false,
        })
    }

    const toggleClassMlchain = () => {
        setState({
            currentInfo: 'mlchain',
            activeHorus: false,
            activeEkyc: false,
            activeDocchain: false,
            activeMlChain: true,
        })
    }

    const toggleClassEkyc = () => {
        setState({
            currentInfo: 'ekyc',
            activeHorus: false,
            activeEkyc: true,
            activeDocchain: false,
            activeMlChain: false,
        })
    }

    const toggleClassDocchain = () => {
        setState({
            currentInfo: 'docchain',
            activeHorus: false,
            activeEkyc: false,
            activeDocchain: true,
            activeMlChain: false,
        })
    }

    const currentInfo = state.currentInfo
    let banner = <HorusInfo language={en} />

    if (currentInfo == 'horus') {
        banner = <HorusInfo language={language} />
    } else if (currentInfo == 'mlchain') {
        banner = <MlChainInfo language={language} />
    } else if (currentInfo == 'ekyc') {
        banner = <EkycInfo language={language} />
    } else {
        banner = <DocchainInfo language={language} />
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

    return (
        <div className="feedback-area ptb-80 bg-f7fafd offer-area">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        {t.homePage.whatWeOffer.tag}
                    </span>
                    <h2>{t.homePage.whatWeOffer.title}</h2>
                    <div className="bar"></div>
                </div>
                <div className="offer-button-area row justify-content-center">
                    <div
                        className={
                            state.activeHorus
                                ? 'offer-button col-lg-3 col-sm-6 active-button'
                                : 'offer-button col-lg-3 col-sm-6'
                        }
                        onClick={toggleClassHorus}
                    >
                        Master ORC
                    </div>
                    <div
                        className={
                            state.activeEkyc
                                ? 'offer-button col-lg-3 col-sm-6 active-button'
                                : 'offer-button col-lg-3 col-sm-6'
                        }
                        onClick={toggleClassEkyc}
                    >
                        Master eKYC
                    </div>
                    {/* <div
                        className={
                            state.activeDocchain
                                ? 'offer-button col-lg-3 col-sm-6 active-button'
                                : 'offer-button col-lg-3 col-sm-6'
                        }
                        onClick={toggleClassDocchain}
                    >
                        DocChain
                    </div> */}
                    {/* <div
                        className={
                            state.activeMlChain
                                ? 'offer-button col-lg-3 col-sm-6 active-button'
                                : 'offer-button col-lg-3 col-sm-6'
                        }
                        onClick={toggleClassMlchain}
                    >
                        MLChain
                    </div> */}
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
