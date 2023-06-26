import React, { useState, useEffect } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import vendorContent from '../constants/vendorContent'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))
const MainBanner = dynamic(() => import('../components/home/MainBanner'))
const WhatWeOffer = dynamic(() => import('../components/home/WhatWeOffer2'))
const Partner = dynamic(() => import('../components/home/Partner'))
const WhyChoose = dynamic(() => import('../components/home/WhyChoose'))
const Contact = dynamic(() => import('../components/home/Contact'))
const Achievements = dynamic(() => import('../components/home/Achievements'))
const News = dynamic(() => import('../components/home/News'))
const Bootcamp = dynamic(() => import('../components/home/Bootcamp'))
// const Feedback = dynamic(() => import('../components/home/Feedback'))
const AboutUsContent = dynamic(() =>
    import('../components/home/AboutUsContent')
)
const Products = () => {
    const [language, setLanguage] = useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    return (
        <>
            <NextSeo
                title={vendorContent[0].seo.title}
                description={vendorContent[0].seo.description}
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: `${vendorContent[0].seo.openGraph.url}`,
                    site_name: `${vendorContent[0].seo.openGraph.site_name}`,
                    image: [
                        {
                            url: 'https://www.linkpicture.com/q/sharing-image.png',
                            width: 200,
                            height: 200,
                            alt: 'Techainer Logo',
                            type: 'image/png',
                        },
                    ],
                }}
            />

            <Head>
                <meta property="fb:app_id" content="317583313678324" />
                <meta
                    property="og:image"
                    content="https://www.linkpicture.com/q/sharing-image.png"
                />
            </Head>
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header getLanguage={getLanguage} />
                <Bootcamp language={language} />
                <MainBanner language={language} />
                <Partner />
                <WhatWeOffer language={language} />
                <Achievements language={language} />
                <AboutUsContent language={language} />
                <WhyChoose language={language} />
                <News language={language} />
                <Contact language={language} />
                <Footer language={language} />
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </Preloader>
        </>
    )
}

export default Products
