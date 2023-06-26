import React, { Component } from 'react'
import { NextSeo } from 'next-seo'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const MainBanner = dynamic(() => import('../components/docchain/MainBanner'))
const Partners = dynamic(() => import('../components/docchain/Partners'))
const Offer = dynamic(() => import('../components/docchain/Offer'))
const Feature = dynamic(() => import('../components/docchain/Feature'))
const UseCase = dynamic(() => import('../components/docchain/UseCase.js'))
const Contact = dynamic(() => import('../components/home/Contact'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))

const DocChain = () => {
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
        data-href="https://www.techainer.com/docchain"
        data-layout="button_count">
        </div>`
    return (
        <>
            <NextSeo
                title="DocChain - Document Understand for Process Automation"
                description="DocChain help large-scale orgranizations to extract automately the valuable insight in every page of document."
                openGraph={{
                    type: 'website',
                    url: 'techainer-public-website-staging.vercel.app/docchain',
                    title: 'DocChain - Document Understand for Process Automation',
                    description:
                        'DocChain help large-scale orgranizations to extract automately the valuable insight in every page of document.',
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

export default DocChain
