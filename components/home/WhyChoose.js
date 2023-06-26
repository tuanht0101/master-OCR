import React from 'react'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const WhyChoose = ({ language }) => {
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
        <div className="why-choose-us ptb-80 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 title-col">
                        <div
                            className={
                                t === vi
                                    ? 'vietnamese-align section-title'
                                    : 'section-title'
                            }
                        >
                            <h2>{t.homePage.whyChoose.title}</h2>
                            <div className="bar"></div>
                            <p>{t.homePage.whyChoose.desc}</p>
                        </div>

                        <div className="why-choose-us-image">
                            <LazyLoadImage
                                src="../../static/images/home-page-logo/WhyChooseUs.svg"
                                className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 item-col">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <LazyLoadImage
                                            src="../../static/images/why-choose-icon/Build World.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <h3>
                                        {/* {t.homePage.whyChoose.worldClass.title} */}
                                        {language == 'en' ? (
                                            'WORLD-CLASS AI MODELS'
                                        ) : (
                                            <>
                                                Mô hình AI cấp tiến, <br />
                                                hiện đại
                                            </>
                                        )}
                                    </h3>
                                    <p>
                                        {t.homePage.whyChoose.worldClass.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <LazyLoadImage
                                            src="../../static/images/why-choose-icon/Industrial Leading AIOPS Syss.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <h3>
                                        {t.homePage.whyChoose.industrial.title}
                                    </h3>
                                    <p>
                                        {t.homePage.whyChoose.industrial.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <LazyLoadImage
                                            src="../../static/images/why-choose-icon/Highly EXP Team.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <h3>{t.homePage.whyChoose.team.title}</h3>
                                    <p>{t.homePage.whyChoose.team.desc}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <LazyLoadImage
                                            src="../../static/images/why-choose-icon/Customer Centric Culture.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <h3>
                                        {language == 'en' ? (
                                            'CUSTOMER-CENTRIST CULTURE'
                                        ) : (
                                            <>
                                                Lấy khách hàng làm <br /> trọng
                                                tâm
                                            </>
                                        )}
                                    </h3>
                                    <p>{t.homePage.whyChoose.culture.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shape Images */}
            <div className="shape1">
                <LazyLoadImage
                    src="../../static/images/shape1.png"
                    alt="shape"
                />
            </div>
            <div className="shape2 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape2.svg"
                    alt="shape"
                />
            </div>
            <div className="shape3">
                <LazyLoadImage
                    src="../../static/images/shape3.svg"
                    alt="shape"
                />
            </div>
            <div className="shape4">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape6 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape7">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape8 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape2.svg"
                    alt="shape"
                />
            </div>
        </div>
    )
}

export default WhyChoose
