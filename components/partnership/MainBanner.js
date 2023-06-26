import React from 'react'
import Link from 'next/link'
import en from '../../locales/en'
import vi from '../../locales/vi'

const MainBanner = ({ language }) => {
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
        <div className="iot-main-banner partnership-banner">
            <div className="container">
                <div className="row">
                    <div className={t === vi ? "col-xl-7 col-sm-7 partnership-banner-content custom-maxwidth" :"col-xl-7 col-sm-7 partnership-banner-content" }>
                        <h3>{t.partnership.mainBanner.title}</h3>
                        <p>{t.partnership.mainBanner.desc1} </p>
                        <p>{t.partnership.mainBanner.desc2}</p>
                    </div>

                    <div className="col-xl-5 col-sm-5">
                        <div>
                            <img src="../../static/images/partnership/partnership.svg" />
                        </div>
                    </div>

                    {/* <div className="animate-border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
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

export default MainBanner
