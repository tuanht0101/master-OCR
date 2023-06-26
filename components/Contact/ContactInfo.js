import React from 'react'
import * as Icon from 'react-feather'
import en from '../../locales/en'
import vi from '../../locales/vi'

const ContactInfo = ({ language }) => {
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
        <div className="contact-info-area pt-160 ptb-80">
            <div className="container">
                <div className="section-title contact-title">
                    <h2>{t.contact.title}</h2>
                    <div className="bar"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box contact-box-item">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>{t.contact.email}</h3>
                            <p>
                                <a href="mailto:admin@techainer.com">
                                    admin@techainer.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box contact-box-item">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>{t.contact.visit}</h3>
                            <p>
                                {t === en ? (
                                    <a
                                        target="_blank"
                                        href="https://maps.google.com/maps/dir//3A+Building+Ng%C3%B5+82+Ph%E1%BB%91+Duy+T%C3%A2n+D%E1%BB%8Bch+V%E1%BB%8Dng+H%E1%BA%ADu+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i/@21.0320944,105.782407,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3135abd33c99d90d:0x5a7b07249c37db4f"
                                    >
                                        Bac Vuong Building, 152 Thuy Khue, Tay
                                        Ho, Hanoi
                                    </a>
                                ) : (
                                    <a
                                        target="_blank"
                                        href="https://maps.google.com/maps/dir//3A+Building+Ng%C3%B5+82+Ph%E1%BB%91+Duy+T%C3%A2n+D%E1%BB%8Bch+V%E1%BB%8Dng+H%E1%BA%ADu+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i/@21.0320944,105.782407,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3135abd33c99d90d:0x5a7b07249c37db4f"
                                    >
                                        Toà nhà Bắc Vương, 152 Thuỵ Khuê, Tây
                                        Hồ, Hà Nội
                                    </a>
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box contact-box-item">
                            <div className="icon">
                                <a href="tel:+84 394 869 567">
                                    <Icon.Phone />
                                </a>
                            </div>
                            <h3>{t.contact.phone}</h3>
                            <p>
                                <a href="tel:+84 394 869 567">
                                    +84 394 869 567
                                </a>
                            </p>
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

export default ContactInfo
