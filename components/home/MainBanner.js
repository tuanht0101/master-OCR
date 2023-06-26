import React from 'react'
import Link from 'next/link'
import en from '../../locales/en'
import vi from '../../locales/vi'

const MainBanner = ({ language }) => {
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
        <div className="ml-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div
                            className={
                                t === vi
                                    ? 'vietnamese-align ml-banner-content pt-80'
                                    : 'ml-banner-content pt-80'
                            }
                        >
                            <div className="tag-banner ">
                                <img
                                    src="../../static/images/logo_techainer_small.png"
                                    alt="Techainer logo"
                                    className="tag-img"
                                />
                                <a
                                    href="https://ai.vsvfoundation.com/"
                                    target="_blank"
                                >
                                    <b>Top 10</b> StartUp Vietnam
                                </a>
                            </div>
                            <h1>{t.homePage.mainBanner.title}</h1>
                            <p>{t.homePage.mainBanner.desc}</p>

                            <Link href="/contact">
                                <a className="btn btn-secondary">
                                    {t.button.contactUs}
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="ml-banner-single-image">
                            <img
                                src="../../static/images/home-page-logo/hero.svg"
                                className="animate__animated animate__fadeInRight animate__delay-0.5s"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            {/* <div className="shape1">
                <img src="../../static/images/shape1.png" alt="shape" />
            </div> */}
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

export default MainBanner
