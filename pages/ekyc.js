import React, { Component } from 'react'
import { NextSeo } from 'next-seo'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const MainBanner = dynamic(() => import('../components/ekyc/MainBanner'))
const Partners = dynamic(() => import('../components/ekyc/Partners'))
const Feature = dynamic(() => import('../components/ekyc/Feature'))
const Offer = dynamic(() => import('../components/ekyc/Offer'))
const UseCase = dynamic(() => import('../components/ekyc/UseCase'))
const Contact = dynamic(() => import('../components/home/Contact'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))

const Ekyc = () => {
    const [language, setLanguage] = React.useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    let x = `
        <!-- Load Facebook SDK for JavaScript -->
                    <div id="fb-root"></div>
                    <script>
                        window.fbAsyncInit = function() {
                        FB.init({
                            xfbml            : true,
                            version          : 'v7.0'
                        });
                        };
                        (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));</script>
        <div class="fb-share-button"
        data-href="https://www.techainer.com/ekyc"
        data-layout="button_count">
        </div>`
    return (
        <>
            <NextSeo
                title="Master eKYC - Leading Biometric-based Fraud Detection"
                description="Master eKYC not only protects major banks and fintech from frauds and criminals but also streamlines customer onboarding processes."
                openGraph={{
                    type: 'website',
                    url: 'techainer-public-website-staging.vercel.app/ekyc',
                    title: 'Master eKYC - Leading Biometric-based Fraud Detection',
                    description:
                        'Master eKYC not only protects major banks and fintech from frauds and criminals but also streamlines customer onboarding processes.',
                    images: [
                        {
                            url: 'https://www.linkpicture.com/q/Property-1-Variant3.png',
                            alt: 'eKYC logo',
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
                    content="https://www.linkpicture.com/q/Property-1-Variant3.png"
                />
            </Head>
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header getLanguage={getLanguage} />
                <MainBanner language={language} />
                <Partners />
                <Offer language={language} />
                <Feature language={language} />
                <UseCase language={language} />
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: x }}
                ></div>
                <Contact language={language} />
                <Footer language={language} />
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </Preloader>
        </>
    )
}

export default Ekyc
