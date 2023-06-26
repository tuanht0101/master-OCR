import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Layouts/Header'))
const Footer = dynamic(() => import('../components/Layouts/Footer'))
const GoTop = dynamic(() => import('../components/Layouts/GoTop'))
const PageTitle = dynamic(() => import('../components/Contact/PageTitle'))
const ContactInfo = dynamic(() => import('../components/Contact/ContactInfo'))
const GoogleMap = dynamic(() => import('../components/Contact/GoogleMap'))
const ContactForm = dynamic(() => import('../components/Contact/ContactForm'))

const Contact = () => {
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
            <ContactInfo language={language} />
            <GoogleMap />
            <ContactForm language={language} />
            <Footer language={language} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </Preloader>
    )
}

export default Contact
