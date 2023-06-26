import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Contact = ({language}) => {
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
        <div className="repair-cta-area bg-0f054b ptb-80 contact-no-image" style={{zIndex: "0"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-1"></div>
                    <div className="col-lg-6 col-sm-10">
                        <div className="cta-repair-content">
                            <h3>{t.interested.title}</h3>
                            <p>
                                {t.interested.desc}
                            </p>
                            <Link href="/contact">
                                <a className="btn btn-primary">{t.button.contactUs}</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-1">
                    </div>
                </div>
            </div>

            <div className="circle-box">
                <LazyLoadImage
                    src="../../static/images/circle.png"
                    alt="image"
                />
            </div>
            <div className="cta-shape">
                <LazyLoadImage
                    src="../../static/images/cta-shape.png"
                    alt="image"
                />
            </div>
        </div>
    )
}

export default Contact
