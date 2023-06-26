import React, { Component } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const MainBanner = dynamic(() => import('../components/partnership/MainBanner'))
const Partner1 = dynamic(() => import('../components/partnership/Partner'))
const Partner2 = dynamic(() => import('../components/home/Partner'))
const Commitments = dynamic(() =>
    import('../components/partnership/Commitments')
)
const ContactForm = dynamic(() => import('../components/Contact/ContactForm'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))

const Partnership = () => {
    const [language, setLanguage] = React.useState('en')
    const [width, setWidth] = React.useState(0)

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth)
    }

    let partner = <Partner1 language={'en'} />

    React.useEffect(() => {
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions)
    }, [])

    if (width < 900) {
        partner = <Partner2 language={language} />
    } else partner = <Partner1 language={language} />

    return (
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header getLanguage={getLanguage} />
            <MainBanner language={language} />
            <Commitments language={language} />
            {partner}
            <ContactForm language={language} />
            <Footer language={language} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </Preloader>
    )
}

export default Partnership
