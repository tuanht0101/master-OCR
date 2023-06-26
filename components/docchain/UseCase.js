import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import * as Icon from 'react-feather'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <button className="next-arrow slick-arrow" onClick={onClick}>
            <Icon.ArrowRight />
        </button>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <button className="prev-arrow slick-arrow" onClick={onClick}>
            <Icon.ArrowLeft />
        </button>
    )
}

const options = {
    loop: false,
    autoplayHoverPause: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 3000,
    margin: 10,
    items: 3,
    nav: true,
    lazyLoad: false,
    // navClass: ["owl-prev","owl-next"],
    navText: [
        "<div class='nav-button owl-prev'><i class='bx bx-chevron-left'></i></div>",
        "<div class='nav-button owl-next'><i class='bx bx-chevron-right'></i></div>",
    ],
    responsive: {
        300: {
            items: 1,
        },
        800: {
            items: 2,
        },
        1250: {
            items: 3,
        },
    },
}

const UseCase = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <div className="ml-services-area ptb-80 usecase-area">
            <div className="container">
                <div className="section-title">
                    <h2>{t.useCase}</h2>
                    <div className="bar"></div>
                </div>
            </div>
            {display ? (
                <OwlCarousel
                    className="row usecase-slider owl-carousel owl-theme owl-theme-style"
                    {...options}
                >
                    <div className="single-ml-services-box usecase-item small-image">
                        <div className="image usecase-img ">
                            <img
                                src="../../static/images/docchain-image/Document verification.svg"
                                alt="building-image"
                            />
                        </div>
                        <h3>{t.docchain.useCase.document.title}</h3>
                        <h4>{t.docchain.useCase.document.cus}</h4>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.document.feat1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.document.feat2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.document.feat3}
                            </li>
                        </ul>
                    </div>

                    <div className="single-ml-services-box usecase-item small-image">
                        <div className="image usecase-img">
                            <img
                                src="../../static/images/docchain-image/Online paperwork submit.svg"
                                alt="warehouse-image"
                            />
                        </div>
                        <h3>{t.docchain.useCase.online.title}</h3>
                        <h4>{t.docchain.useCase.online.cus}</h4>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.online.feat1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.online.feat2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.online.feat3}
                            </li>
                        </ul>
                    </div>

                    <div className="single-ml-services-box usecase-item small-image">
                        <div className="image usecase-img">
                            <img
                                src="../../static/images/docchain-image/Offline paperwork submit .svg"
                                alt="electric-image"
                            />
                        </div>
                        <h3>{t.docchain.useCase.offline.title}</h3>
                        <h4>{t.docchain.useCase.offline.cus}</h4>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.offline.feat1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.offline.feat2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.docchain.useCase.offline.feat3}
                            </li>
                        </ul>
                    </div>
                </OwlCarousel>
            ) : (
                ''
            )}

            {/* Shape Images */}
            <div className="shape1">
                <LazyLoadImage
                    src="../../static/images/shape1.png"
                    alt="shape"
                />
            </div>
            <div className="shape2 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape2.svg"
                    alt="shape"
                />
            </div>
            <div className="shape3">
                <LazyLoadImage
                    src="../../static/images/shape3.svg"
                    alt="shape"
                />
            </div>
            <div className="shape4">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape7">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape8 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape2.svg"
                    alt="shape"
                />
            </div>
        </div>
    )
}

export default UseCase
