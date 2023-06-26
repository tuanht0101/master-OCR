import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const AboutUsContent = ({ language }) => {
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
        <div className="about-area pt-0 ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-img">
                            <LazyLoadImage
                                src="../../static/images/home-page-logo/SmarterThanToday.svg"
                                className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-content">
                            <span className="sub-title">
                                {t.homePage.aboutUs.tag}
                            </span>
                            <h2>{t.homePage.aboutUs.title}</h2>
                            <div className="bar"></div>
                            <p className="about-content-text">
                                {t.homePage.aboutUs.desc1}
                            </p>
                            <p className="about-content-text">
                                {t.homePage.aboutUs.desc2}
                            </p>
                            <Link href="/about">
                                <a className="btn btn-secondary">
                                    {t.button.discover}
                                </a>
                            </Link>
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

export default AboutUsContent
