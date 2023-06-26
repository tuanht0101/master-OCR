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
        <div className="why-choose-us ptb-80 pt-0 feedback-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 title-col">
                        <div className="section-title">
                            <h2>{t.career.whyChoose.title}</h2>
                            <div className="bar"></div>
                            <p>{t.career.whyChoose.desc}</p>
                        </div>

                        <div className="why-choose-us-image">
                            <LazyLoadImage
                                src="../../static/images/career-image/career.svg"
                                className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                                alt="meeting"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 item-col">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-team"></i>
                                    </div>
                                    <h3>{t.career.whyChoose.growth.title}</h3>

                                    <p>{t.career.whyChoose.growth.desc}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-rocket"></i>
                                    </div>
                                    <h3>
                                        {t.career.whyChoose.competitive.title}
                                    </h3>
                                    <p>{t.career.whyChoose.competitive.desc}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-shield"></i>
                                    </div>
                                    <h3>
                                        {t.career.whyChoose.constructive.title}
                                    </h3>
                                    <p>
                                        {t.career.whyChoose.constructive.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-diamond"></i>
                                    </div>
                                    <h3>{t.career.whyChoose.core.title}</h3>

                                    <p>{t.career.whyChoose.core.desc}</p>
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
