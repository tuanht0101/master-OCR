import React, { Component } from 'react'
import * as Icon from 'react-feather'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Header = dynamic(() => import('../../components/Layouts/Header'))
const Footer = dynamic(() => import('../../components/Layouts/Footer'))
const GoTop = dynamic(() => import('../../components/Layouts/GoTop'))

import { NextSeo } from 'next-seo'
import Head from 'next/head'
const WhyChoose = dynamic(() => import('../../components/careers/WhyChoose'))
const Pictures = dynamic(() => import('../../components/careers/Pictures'))
const Contact = dynamic(() => import('../../components/home/Contact'))
import en from '../../locales/en'
import vi from '../../locales/vi'
import PricingStyleOne from '../../components/PricingPlans/PricingStyleOne'
import OurFeatures from '../../components/Features/OurFeatures'
import PricingStyleTwo from '../../components/PricingPlans/PricingStyleTwo'
import PricingStyleFour from '../../components/PricingPlans/PricingStyleFour'
import PricingStyleThree from '../../components/PricingPlans/PricingStyleThree'
import TechnicalSupport from '../../components/TechnicalSupport/TechnicalSupport'

function PricePage() {
    const [language, setLanguage] = React.useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    return (
        <>
            <NextSeo
                title="Master OCR"
                description="Master OCR"
                openGraph={{
                    type: 'website',
                    url: 'techainer-public-website-staging.vercel.app/docchain',
                    title: 'Master OCR',
                    description: 'Master OCR',
                    images: [
                        {
                            url: 'https://www.linkpicture.com/q/DocChain.png',
                            alt: 'DocChain logo',
                            width: 200,
                            height: 100,
                            type: 'image/png',
                        },
                    ],
                }}
            />
            <Head>
                <meta property="fb:app_id" content="317583313678324" />
                <meta
                    property="og:image"
                    content="https://www.linkpicture.com/q/DocChain.png"
                />
            </Head>
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header getLanguage={getLanguage} />
                <OurFeatures language={language} />
                <PricingStyleTwo language={language} />
                <TechnicalSupport language={language} />
                <Footer language={language} />
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </Preloader>
        </>
    )
}

export default PricePage
