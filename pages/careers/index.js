import React, { Component } from 'react'
import * as Icon from 'react-feather'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Header = dynamic(() => import('../../components/Layouts/Header'))
const Footer = dynamic(() => import('../../components/Layouts/Footer'))
const GoTop = dynamic(() => import('../../components/Layouts/GoTop'))
const OpenPositions = dynamic(() =>
    import('../../components/careers/OpenPositions')
)
import { NextSeo } from 'next-seo'
import Head from 'next/head'
const WhyChoose = dynamic(() => import('../../components/careers/WhyChoose'))
const Pictures = dynamic(() => import('../../components/careers/Pictures'))
const Contact = dynamic(() => import('../../components/careers/Contact'))
import en from '../../locales/en'
import vi from '../../locales/vi'

const Careers = () => {
    const [language, setLanguage] = React.useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
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
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header getLanguage={getLanguage} />
            <div className="iot-main-banner partnership-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-sm-7 partnership-banner-content">
                            <h3>{t.career.mainBanner.title}</h3>
                            {t === en ? (
                                <p>
                                    We believe that innovation comes from
                                    dreamers aiming to build a new world. Let's{' '}
                                    <br /> work together to make the world a
                                    better place!
                                </p>
                            ) : (
                                <p>{t.career.mainBanner.desc}</p>
                            )}

                            <div>
                                <Link href="#career-contact-area">
                                    <a className="btn btn-secondary">
                                        {t.button.contactUs}
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-xl-5 col-sm-5">
                            <div>
                                <img src="../../static/images/career-image/why chus us.svg" />
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
            <OpenPositions language={language} />
            <WhyChoose language={language} />
            <Pictures language={language} />
            <div id="career-contact-area">
                <Contact language={language} />
            </div>
            <Footer language={language} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </Preloader>
    )
}

export default Careers
