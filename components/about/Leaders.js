import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Leaders = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    return (
        <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6 feedback-area">
            <div className="container">
                <div className="section-title">
                    <h2>{t.aboutUs.team.title}</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team">
                            <div className="team-image">
                                <LazyLoadImage
                                    src="../../static/images/team-image/drake.jpg"
                                    alt="image"
                                />
                            </div>

                            <div className="team-content">
                                <div className="team-info-fix">
                                    <h3>Viet Nguyen</h3>
                                    <h4>Drake</h4>
                                    <span>CEO & CO-FOUNDER</span>
                                </div>

                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/vieritolove">
                                            <a target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/nthv-techainer/">
                                            <a target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <p>{t.aboutUs.team.drake}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team">
                            <div className="team-image">
                                <LazyLoadImage
                                    src="../../static/images/team-image/scott.jpg"
                                    alt="image"
                                />
                            </div>

                            <div className="team-content">
                                <div className="team-info-fix">
                                    <h3>Son Pham</h3>
                                    <h4>Scott</h4>
                                    <span>COO & CO-FOUNDER</span>
                                </div>

                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/pham.son.123829">
                                            <a target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/scott-techainer/">
                                            <a target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <p>{t.aboutUs.team.scott}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team">
                            <div className="team-image">
                                <LazyLoadImage
                                    src="../../static/images/team-image/genos.png"
                                    alt="image"
                                />
                            </div>

                            <div className="team-content">
                                <div className="team-info-fix">
                                    <h3>Long Duong</h3>
                                    <h4>Genos</h4>
                                    <span>CAIO</span>
                                </div>

                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/LongDD02">
                                            <a target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/long-d%C6%B0%C6%A1ng-784976248/">
                                            <a target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <p>{t.aboutUs.team.linus}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="../../static/images/shape1.png" alt="shape" />
            </div>
            <div className="shape3">
                <img src="../../static/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="../../static/images/shape2.svg" alt="shape" />
            </div>
        </div>
    )
}

export default Leaders
