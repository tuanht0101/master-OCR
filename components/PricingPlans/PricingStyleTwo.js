import React from 'react'
import Link from 'next/link'
import en from '../../locales/en'
import vi from '../../locales/vi'

const PricingStyleTwo = ({ language }) => {
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
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                {t === en ? (
                    <div className="section-title">
                        <h2>Pricing Plans</h2>
                        <div className="bar"></div>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p> */}
                    </div>
                ) : (
                    <div className="section-title">
                        <h2>Báo giá</h2>
                        <div className="bar"></div>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p> */}
                    </div>
                )}

                <div className="row justify-content-center">
                    {t === en ? (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-data"></i>
                                    <h3>Standard by pages</h3>
                                    <p
                                        style={{
                                            marginBottom: '16px',
                                        }}
                                    >
                                        For small businesses with simple OCR
                                    </p>
                                </div>

                                {/* <div className="price">
                                    <span>
                                        <sup>$</sup>
                                        <span>/year</span>
                                    </span>
                                </div> */}

                                <div className="pricing-features">
                                    <ul>
                                        <li>
                                            <i data-feather="check"></i>{' '}
                                            Utilities - OCR software
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Limited
                                            templates
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Package
                                            by number of pages
                                        </li>
                                        <li>
                                            <i data-feather="check">
                                                <br />
                                            </i>
                                        </li>

                                        <li>
                                            <i data-feather="check">
                                                <br />
                                            </i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pricing-footer">
                                    <Link href="contact">
                                        <a className="btn btn-primary">
                                            Contact us
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-data"></i>
                                    <h3>Gói tiêu chuẩn theo trang</h3>
                                    <p
                                        style={{
                                            marginBottom: '16px',
                                        }}
                                    >
                                        Dành cho doanh nghiệp nhỏ với phần mềm
                                        OCR đơn giản
                                    </p>
                                </div>
                                {/* <div className="price">
                                    <span>
                                        <sup>$</sup>
                                        <span>/năm</span>
                                    </span>
                                </div> */}
                                <div className="pricing-features">
                                    <ul>
                                        <li>
                                            <i data-feather="check"></i> Phần
                                            mềm OCR
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Giới
                                            hạn mẫu tài liệu trích xuất
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Gói
                                            cung cấp theo số lượng trang
                                        </li>

                                        <li>
                                            <i data-feather="check">
                                                <br />
                                            </i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pricing-footer">
                                    <Link href="contact">
                                        <a className="btn btn-primary">
                                            Liên hệ
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {t === en ? (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table active-plan">
                                <div className="pricing-header">
                                    <i className="flaticon-cloud"></i>
                                    <h3>Standard by licenses</h3>
                                    <p
                                        style={{
                                            marginBottom: '16px',
                                        }}
                                    >
                                        For small businesses with simple OCR
                                    </p>
                                </div>

                                {/* <div className="price">
                                    <span>
                                        <sup>$</sup>
                                        <span>/year</span>
                                    </span>
                                </div> */}

                                <div className="pricing-features">
                                    <ul>
                                        <li>
                                            <i data-feather="check"></i>{' '}
                                            Utilities - OCR software
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Limited
                                            templates.
                                        </li>
                                        <li>
                                            <i data-feather="check"></i>{' '}
                                            Subscription license
                                        </li>

                                        <li>
                                            <i data-feather="check">
                                                <br />
                                            </i>
                                        </li>

                                        <li>
                                            <i data-feather="check">
                                                <br />
                                            </i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pricing-footer">
                                    <Link href="contact">
                                        <a className="btn btn-primary">
                                            Contact us
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table active-plan">
                                <div className="pricing-header">
                                    <i className="flaticon-cloud"></i>
                                    <h3>Gói tiêu chuẩn theo bản quyền</h3>
                                    <p
                                        style={{
                                            marginBottom: '16px',
                                        }}
                                    >
                                        Dành cho doanh nghiệp nhỏ với phần mềm
                                        OCR đơn giản
                                    </p>
                                </div>

                                {/* <div className="price">
                                    <span>
                                        <sup>$</sup>
                                        <span>/year</span>
                                    </span>
                                </div> */}

                                <div className="pricing-features">
                                    <ul>
                                        <li>
                                            <i data-feather="check"></i> Phần
                                            mềm OCR
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Giới
                                            hạn mẫu tài liệu trích xuất.
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Gói
                                            cung cấp theo bản quyền
                                        </li>

                                        <li>
                                            <i data-feather="check">
                                                <br />
                                            </i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pricing-footer">
                                    <Link href="contact">
                                        <a className="btn btn-primary">
                                            Liên hệ
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {t === en ? (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Customized</h3>
                                    <p
                                        style={{
                                            marginBottom: '16px',
                                        }}
                                    >
                                        For enterprises with detailed
                                        requirements
                                    </p>
                                </div>

                                {/* <div className="price">
                                    <span>
                                        <sup>$</sup> <span>/year</span>
                                    </span>
                                </div> */}

                                <div className="pricing-features">
                                    <ul>
                                        <li>
                                            <i data-feather="check"></i>{' '}
                                            Versatile productivity toolset for
                                            working with PDFs and document
                                            digitization
                                        </li>
                                        <li>
                                            <i data-feather="check"></i>{' '}
                                            Customized for enterprise’s
                                            requirement
                                        </li>

                                        <li>
                                            <i data-feather="check"></i>{' '}
                                            Subscription license or Package by
                                            number of pages
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Contact
                                            if you have other requirements
                                        </li>
                                    </ul>
                                </div>

                                <div className="pricing-footer">
                                    <Link href="contact">
                                        <a className="btn btn-primary">
                                            Contact us
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Gói tuỳ chỉnh</h3>
                                    <p
                                        style={{
                                            marginBottom: '16px',
                                        }}
                                    >
                                        Dành cho doanh nghiệp lớn cần thiết kế
                                        phần mềm OCR riêng biệt
                                    </p>
                                </div>

                                {/* <div className="price">
                                    <span>
                                        <sup>$</sup> <span>/năm</span>
                                    </span>
                                </div> */}

                                <div className="pricing-features">
                                    <ul>
                                        <li>
                                            <i data-feather="check"></i> Bộ công
                                            cụ năng suất linh hoạt để làm việc
                                            với các tệp PDF và số hóa tài liệu
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Tùy
                                            chỉnh cho yêu cầu của doanh nghiệp.
                                        </li>
                                        <li>
                                            <i data-feather="check"></i> Gói
                                            cung cấp theo bản quyền hoặc theo số
                                            lượng trang
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <Link href="contact">
                                        <a className="btn btn-primary">
                                            Liên hệ
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Shape Images */}
            {/* <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div> */}
        </div>
    )
}

export default PricingStyleTwo
