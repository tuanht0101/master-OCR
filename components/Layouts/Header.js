import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import Link from '../common/ActiveLink'
import Select from 'react-select'
import * as Icon from 'react-feather'
import en from '../../locales/en'
import vi from '../../locales/vi'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import * as GA from '../Tracking'
import { lang } from 'moment'
// import { ReactComponent as IconFlagEngland } from '../../static/images/flag/united-kingdom.svg'
// import { ReactComponent as IconFlagVietnam } from '../../static/images/flag/vietnam.svg'
const Header = ({ getLanguage }) => {
    const [collapsed, setCollapsed] = useState(true)
    const [t, setT] = useState(en)
    const [lang, setLang] = useState()

    const SelectElement = () => {
        return (
            <div className="select-language">
                <div
                    className="select-items"
                    id="en-lang"
                    value="en"
                    onClick={handleEnLanguage}
                >
                    EN
                </div>
                <div
                    className="select-items"
                    id="vi-lang"
                    value="vi"
                    onClick={handleViLanguage}
                >
                    VI
                </div>
            </div>
        )
    }

    const selectElementOutside = useRef(<SelectElement />)
    const selectElementInside = useRef(<SelectElement />)

    const [windowWidth, setWindowWidth] = useState(undefined)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            const handleResize = () => {
                // Set window width/height to state
                setWindowWidth(window.innerWidth)
            }
            // Add event listener
            window.addEventListener('resize', handleResize)
            // Call handler right away so state gets updated with initial window size
            handleResize()
            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize)
        }
    })

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    useEffect(() => {
        let elementId = document.getElementById('navbar')
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky')
            } else {
                elementId.classList.remove('is-sticky')
            }
        })
        window.scrollTo(0, 0)
    })

    const [selectedOption, setSelectedOption] = useState('en')

    const handleEnLanguage = () => {
        let enElement = document.getElementById('en-lang')
        let viElement = document.getElementById('vi-lang')

        let langValue = enElement.getAttribute('value')
        setSelectedOption(langValue)
        localStorage.setItem('lang', langValue)
        enElement.classList.add('select-active')
        viElement.classList.remove('select-active')
    }

    const handleViLanguage = () => {
        let enElement = document.getElementById('en-lang')
        let viElement = document.getElementById('vi-lang')
        let langValue = viElement.getAttribute('value')
        setSelectedOption(langValue)
        localStorage.setItem('lang', langValue)
        viElement.classList.add('select-active')
        enElement.classList.remove('select-active')
    }

    // let { products } = this.props
    const classOne = collapsed
        ? 'collapse navbar-collapse'
        : 'collapse navbar-collapse show'
    const classTwo = collapsed
        ? 'navbar-toggler navbar-toggler-right collapsed'
        : 'navbar-toggler navbar-toggler-right'

    useEffect(() => {
        if (windowWidth < 1000) {
            selectElementOutside.current = <SelectElement />
            selectElementInside.current = <></>
        } else {
            selectElementOutside.current = <></>
            selectElementInside.current = <SelectElement />
        }
    }, [windowWidth, lang])

    useEffect(() => {
        let lang = localStorage.getItem('lang')
        setLang(lang);
        if (lang === 'vi') {
            setT(vi)
            handleViLanguage()
        } else {
            setT(en)
            handleEnLanguage()
        }
        getLanguage(lang)
        // if (selectedOption.value == 'vi') setT(vi)
        // else setT(en)
    }, [selectedOption, lang])

    return (
        <header id="header">
            <div id="navbar" className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a
                                className="navbar-brand"
                                // onClick={() => window.location.replace('/')}
                                href="/"
                            >
                                <LazyLoadImage
                                    src={global.vendor.logo}
                                    alt="logo"
                                />
                                {/* <img src={require("../../static/images/logo.png")} alt="logo" style={{height: 30}} /> */}
                            </a>
                        </Link>
                        {selectElementOutside.current}
                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav nav ml-auto">
                                {/* <li className="nav-item">
                                        <a href="/" className="nav-link">
                                            Home
                                        </a>
                                    </li> */}
                                <li className="nav-item">
                                    <Link activeClassName="active" href="#">
                                        <a href="#" className="nav-link">
                                            {t.header.products}{' '}
                                            <Icon.ChevronDown />
                                        </a>
                                    </Link>
                                    <ul className="dropdown_menu">
                                        <li className="nav-item">
                                            <Link
                                                activeClassName="active"
                                                href="/horus"
                                            >
                                                <a
                                                    className="nav-link"
                                                    onClick={() =>
                                                        GA.Event(
                                                            'Navigation',
                                                            'Go HorusPage',
                                                            'Link'
                                                        )
                                                    }
                                                >
                                                    Horus
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                activeClassName="active"
                                                href="/ekyc"
                                            >
                                                <a
                                                    className="nav-link"
                                                    onClick={() =>
                                                        GA.Event(
                                                            'Navigation',
                                                            'Go eKYCPage',
                                                            'Link'
                                                        )
                                                    }
                                                >
                                                    Master eKYC
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                activeClassName="active"
                                                href="/docchain"
                                            >
                                                <a
                                                    className="nav-link"
                                                    onClick={() =>
                                                        GA.Event(
                                                            'Navigation',
                                                            'Go DocChain',
                                                            'Link'
                                                        )
                                                    }
                                                >
                                                    DocChain
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item">
                                                <Link
                                                    activeClassName="active"
                                                    href="/mlchain"
                                                >
                                                    <a className="nav-link">
                                                        MLChain
                                                    </a>
                                                </Link>
                                            </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        activeClassName="active"
                                        href="/partnership"
                                    >
                                        <a
                                            href="/partnership"
                                            className="nav-link"
                                        >
                                            {t.header.partnership}
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        activeClassName="active"
                                        href="/careers"
                                    >
                                        <a href="/careers" className="nav-link">
                                            {t.header.career}
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClassName="active" href="/blog">
                                        <a href="/blog" className="nav-link">
                                            Blog
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        activeClassName="active"
                                        href="/about"
                                    >
                                        <a href="/about" className="nav-link">
                                            {t.header.about}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            {/* <Select
                                defaultValue={selectedOption[0]}
                                onChange={getLanguageData}
                                options={options}
                                isSearchable={true}
                                isClearable={true}
                            /> */}
                        </div>
                        {selectElementInside.current}
                        <div className="others-option">
                            <Link href="/contact">
                                <a className="btn btn-primary">
                                    {t.button.contactUs}
                                </a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        vendorId: state.identifyVendor,
    }
}

export default withRouter(connect(mapStateToProps)(Header))
