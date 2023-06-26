import React from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import * as Icon from 'react-feather'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

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
        <div className="ml-services-area ptb-80 usecase-area" style={{zIndex: "0"}}>
            <div className="container">
                <div className="section-title">
                    <h2>{t.horus.useCase.usecase}</h2>
                    <div className="bar"></div>
                </div>
            </div>
            {display ? (
                <OwlCarousel
                    className="row usecase-slider owl-carousel owl-theme owl-theme-style"
                    {...options}
                >
                    <div className="single-ml-services-box usecase-item">
                        <div className="image usecase-img-slide">
                            <img
                                src="../../static/images/horus-image/fire.png"
                                alt="customer-image"
                            />
                        </div>
                        <>
                            <h3>{t.horus.useCase.fire.title}</h3>

                            {t === en ? (
                                <h4>
                                    {t.horus.useCase.fire.cus}
                                </h4>
                            ) : (
                                <h4>
                                    Khách hàng: Nhà máy, kho xưởng,
                                    <br /> bãi xe...
                                </h4>
                            )}
                        </>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.fire.desc1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.fire.desc2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.fire.desc3}
                            </li>
                        </ul>
                    </div>
                    <div className="single-ml-services-box usecase-item">
                        <div className="image usecase-img-slide">
                            <img
                                src="../../static/images/horus-image/Access.svg"
                                alt="building-image"
                            />
                        </div>
                        <h3>{t.horus.useCase.access.title}</h3>
                        <h4>{t.horus.useCase.access.cus}</h4>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.access.desc1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.access.desc2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.access.desc3}
                            </li>
                        </ul>
                    </div>

                    <div className="single-ml-services-box usecase-item ">
                        <div className="image usecase-img-slide">
                            <img
                                src="../../static/images/horus-image/Warehouse.svg"
                                alt="warehouse-image"
                            />
                        </div>
                        <h3>{t.horus.useCase.wareHouse.title}</h3>
                        <h4>{t.horus.useCase.wareHouse.cus}</h4>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.wareHouse.desc1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.wareHouse.desc2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.wareHouse.desc3}
                            </li>
                        </ul>
                    </div>

                    <div className="single-ml-services-box usecase-item">
                        <div className="image usecase-img-slide">
                            <img
                                src="../../static/images/horus-image/Electrical.svg"
                                alt="electric-image"
                            />
                        </div>
                        <h3>{t.horus.useCase.grid.title}</h3>
                        <h4>{t.horus.useCase.grid.cus}</h4>
                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.grid.desc1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.grid.desc2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.grid.desc3}
                            </li>
                        </ul>
                    </div>

                    <div className="single-ml-services-box usecase-item">
                        <div className="image usecase-img-slide">
                            <img
                                src="../../static/images/horus-image/Customer.svg"
                                alt="customer-image"
                            />
                        </div>
                        {t === en ? (
                            <>
                                <h3>{t.horus.useCase.onboarding.title}</h3>
                                <h4>{t.horus.useCase.onboarding.cus}</h4>
                            </>
                        ) : (
                            <div style={{ marginTop: '-18px' }}>
                                <h3>
                                    THIẾT LẬP THÔNG TIN <br />
                                    KHÁCH HÀNG
                                </h3>
                                <h4>
                                    Khách hàng: Hệ thống bán lẻ <br />
                                    Ngân hàng,{' '}
                                </h4>
                            </div>
                        )}

                        <ul className="offer-list">
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.onboarding.desc1}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.onboarding.desc2}
                            </li>
                            <li>
                                <Icon.Check />
                                {t.horus.useCase.onboarding.desc3}
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
