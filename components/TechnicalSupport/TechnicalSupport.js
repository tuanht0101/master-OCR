import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import en from '../../locales/en'
import vi from '../../locales/vi'

const TechnicalSupport = ({ language }) => {
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
        <div
            className="repair-cta-area bg-0f054b ptb-80 contact-no-image"
            style={{ zIndex: '0' }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-1"></div>
                    <div className="col-lg-6 col-sm-10">
                        <div className="cta-repair-content">
                            <h3>{t.interested.title}</h3>
                            {t === en ? (
                                <p>
                                    All inquiries are welcome, whether it may be
                                    a request for a demo or a partnership
                                    agreement. We offer services with{' '}
                                    <a
                                        href="https://drive.google.com/file/d/13-SMhaWVW36ep77pjeisKQs7_m5mRoeL/view"
                                        target="_blank"
                                        style={{ color: '#38c5ea' }}
                                    >
                                        Technical support policy
                                    </a>
                                    .
                                </p>
                            ) : (
                                <p>
                                    Techainer luôn sẵn sàng hỗ trợ bạn tìm hiểu
                                    thông tin về sản phẩm, những yêu cầu và thỏa
                                    thuận hợp tác hay cách thức để gia nhập đội
                                    ngũ của chúng tôi. Chúng tôi cung cấp các
                                    dịch vụ cùng với{' '}
                                    <a
                                        href="https://drive.google.com/file/d/13-SMhaWVW36ep77pjeisKQs7_m5mRoeL/view"
                                        target="_blank"
                                        style={{ color: '#38c5ea' }}
                                    >
                                        Chính sách hỗ trợ
                                    </a>
                                    .
                                </p>
                            )}
                            <Link href="/contact">
                                <a className="btn btn-primary">
                                    {t.button.contactUs}
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-1"></div>
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

export default TechnicalSupport
