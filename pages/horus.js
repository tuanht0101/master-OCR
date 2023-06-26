import Document, { Html, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
import en from '../locales/en'
import vi from '../locales/vi'
import { useRouter } from 'next/router'
const Form = dynamic(() => import('../components/horus/Form'))
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const MainBanner = dynamic(() => import('../components/horus/MainBanner'))
const Partners = dynamic(() => import('../components/horus/Partners'))
const Feature = dynamic(() => import('../components/horus/Feature'))
const UseCase = dynamic(() => import('../components/horus/UseCase'))
const Contact = dynamic(() => import('../components/home/Contact'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))

const Horus = () => {
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
        data-href="https://www.techainer.com/horus"
        data-layout="button_count">
        </div>`

    let googleTag = `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11024719269"></script>
        <script>   window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());    gtag('config', 'AW-11024719269'); </script>`

    return (
        <>
            <NextSeo
                title="Horus - Smart Video Analytics & Management platform"
                description="Horus simplifies security tasks for large-scale orgranizations with a specialized design that combines Running AI on edge and managing on Cloud."
                openGraph={{
                    type: 'website',
                    url: 'https://techainer.com/horus',
                    title: 'Horus - Smart Video Analytics & Management platform',
                    description:
                        'Horus simplifies security tasks for large-scale orgranizations with a specialized design that combines Running AI on edge and managing on Cloud. ',
                    images: [
                        {
                            url: 'https://www.linkpicture.com/q/horus.png',
                            alt: 'Horus logo',
                            type: 'image/png',
                            width: 200,
                            height: 100,
                        },
                    ],
                }}
            />
            <Head>
                <meta property="fb:app_id" content="317583313678324" />
                <meta
                    property="og:image"
                    content="https://www.linkpicture.com/q/horus.png"
                />
            </Head>
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: googleTag }}
            ></div>
            <Form language={language} />
            <div style={{ zIndex: '1' }}>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                    <Header getLanguage={getLanguage} />
                    <MainBanner language={language} />
                    <Partners />
                    <UseCase language={language} />
                    <Feature language={language} />
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: x }}
                    ></div>
                    <Contact language={language} />
                    <Footer language={language} />

                    <GoTop scrollStepInPx="100" delayInMs="10.50" />
                </Preloader>
            </div>
        </>
    )
}

export default Horus
