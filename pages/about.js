import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const AboutArea = dynamic(() => import('../components/about/AboutArea'))
const PageTitle = dynamic(() => import('../components/about/PageTitle'))
const CoreValue = dynamic(() => import('../components/about/CoreValue'))
const AboutSubtitle = dynamic(() => import('../components/about/AboutSubtitle'))
const Leaders = dynamic(() => import('../components/about/Leaders'))
const Rewards = dynamic(() => import('../components/about/Rewards'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))
const Contact = dynamic(() => import('../components/home/Contact'))
import en from '../locales/en'
import vi from '../locales/vi'

const About = () => {
    const [language, setLanguage] = React.useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    return (
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header getLanguage={getLanguage} />
            {/* <PageTitle /> */}
            <AboutArea language={language} />
            <AboutSubtitle language={language} />
            <CoreValue language={language} />
            <Rewards language={language} />
            {/* <Leaders language={language} /> */}
            <Contact language={language} />
            <Footer language={language} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </Preloader>
    )
}

export default About
