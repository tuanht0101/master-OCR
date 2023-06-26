import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import vendorContent from '../../constants/vendorContent'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Footer = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
        let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const vendor = global.vendor
    const year = new Date().getFullYear()
    return (
        <footer
            className="footer-area bg-f7fafd"
            id="contact"
            style={{ zIndex: '0' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="#">
                                    <a>
                                        <LazyLoadImage
                                            src={global.vendor.logo}
                                            alt="logo"
                                            style={{ height: 30 }}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <p className="footer-discript">{t.footer.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <div className="single-footer-widget">
                            <h3>{t.footer.products}</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/ocr">
                                        <a>Master OCR</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ekyc">
                                        <a>Master eKYC</a>
                                    </Link>
                                </li>
                                {/* <li>
                                        <Link href="/mlchain">
                                            <a>ML Chain</a>
                                        </Link>
                                    </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <div className="single-footer-widget">
                            <h3>{t.footer.company}</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about">
                                        <a>{t.footer.about}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers">
                                        <a>{t.footer.career}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>{t.footer.address}</h3>

                            <ul className="footer-contact-info">
                                {t === en ? (
                                    <li>
                                        <Icon.MapPin />
                                        {/* {t.contact.address} */}
                                        Bac Vuong Building, 152 Thuy Khue, Tay
                                        Ho, Hanoi
                                    </li>
                                ) : (
                                    <li>
                                        <Icon.MapPin />
                                        {/* {t.contact.address} */}
                                        Toà nhà Bắc Vương, 152 Thuỵ Khuê, Tây
                                        Hồ, Hà Nội
                                    </li>
                                )}

                                <li>
                                    <Icon.Mail />
                                    {/* Email:{' '} */}
                                    <Link href="#">
                                        <a>{vendor.contact.email}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Icon.PhoneCall />
                                    {/* Phone:{' '} */}
                                    <Link href="#">
                                        <a>{vendor.contact.phone}</a>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <a
                                        className="facebook"
                                        href={vendor.social_media.facebook}
                                    >
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="twitter"
                                        href={vendor.social_media.twitter}
                                    >
                                        <Icon.Twitter />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="linkedin"
                                        href={vendor.social_media.linkedin}
                                    >
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="youtube"
                                        href={vendor.social_media.youtube}
                                    >
                                        <Icon.Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>
                                {`Copyright © ${year} ${vendor.name}. All rights reserved`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <LazyLoadImage
                src={require('../../static/images/map.png')}
                className="map"
                alt="map"
            />
            <div className="shape1">
                <LazyLoadImage
                    src={require('../../static/images/shape1.png')}
                    alt="shape"
                />
            </div>
            <div className="shape8 rotateme">
                <LazyLoadImage
                    src={require('../../static/images/shape2.svg')}
                    alt="shape"
                />
            </div>
        </footer>
    )
}

export default Footer
