import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

import en from '../../locales/en'
import vi from '../../locales/vi'

const OurFeatures = ({ language }) => {
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
        <div className="features-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                {t === en ? (
                    <div className="section-title">
                        <h2>Our Features</h2>
                        <div className="bar"></div>
                        <p>
                            The all-in-one document solution for document
                            digitization, information extraction, storage and
                            management
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1DvvbLmJhOMJZH5sH-_v2eOfScSViR2KU/view"
                            target="_blank"
                            style={{ color: 'blue' }}
                        >
                            See what features are available for your requested
                            operating system (PDF)
                        </a>
                    </div>
                ) : (
                    <div className="section-title">
                        <h2>Tính năng</h2>
                        <div className="bar"></div>
                        <p>
                            Giải pháp toàn diện trong vấn đề số hoá tài liệu,
                            trích xuất thông tin, lưu trữ và quản lý
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1DvvbLmJhOMJZH5sH-_v2eOfScSViR2KU/view"
                            target="_blank"
                            style={{ color: 'blue' }}
                        >
                            Tìm hiểu các tính năng có sẵn cho hệ điều hành của
                            bạn (PDF)
                        </a>
                    </div>
                )}

                {t === en ? (
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Diverse Input</a>
                                </h3>
                                <p>
                                    Guaranteed compatibility with all common
                                    document formats and structures
                                    <br />
                                    <p>&nbsp;&nbsp;</p>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Customized Workflow</a>
                                </h3>
                                <p>
                                    Workflow customizability enhances the
                                    system's flexibility and capabilities in
                                    every imaginable use case
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Text Extraction</a>
                                </h3>
                                <p>
                                    Accurate text extraction engine ensures that
                                    no mistakes are made during digitization,
                                    thus increasing efficiency in the workplace
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Object Extraction</a>
                                </h3>
                                <p>
                                    Stamps, Signatures, Checkmarks and Graphs
                                    can also be digitized, ensuring the
                                    legitimacy of the documents for our
                                    customer's use cases
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Valuable Extensions Included</a>
                                </h3>
                                <p>
                                    Create more value by adding additional
                                    applications to go beyond information
                                    extraction.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Powered By Our AI Ops Platform</a>
                                </h3>
                                <p>
                                    Run and manage with k8s which is compatible
                                    with both Public and Private Cloud
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Đầu vào đa dạng</a>
                                </h3>
                                <p>
                                    Đảm bảo khả năng tương thích với tất cả các
                                    định dạng và cấu trúc tài liệu phổ biến
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Quy trình làm việc tùy chỉnh</a>
                                </h3>
                                <p>
                                    Khả năng tùy chỉnh quy trình làm việc giúp
                                    tăng cường tính linh hoạt và khả năng của hệ
                                    thống trong mọi trường hợp sử dụng có thể
                                    tưởng tượng được
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Trích xuất văn bản</a>
                                </h3>
                                <p>
                                    Công cụ trích xuất văn bản chính xác đảm bảo
                                    rằng không có sai sót nào được thực hiện
                                    trong quá trình số hóa do đó tăng hiệu quả
                                    tại nơi làm việc
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Khai thác đối tượng</a>
                                </h3>
                                <p>
                                    Con dấu, Chữ ký, Dấu kiểm và Đồ thị cũng có
                                    thể được số hóa, đảm bảo tính hợp pháp của
                                    các tài liệu cho các trường hợp sử dụng của
                                    khách hàng
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Tích Hợp Nhiều Tiện Ích Mở Rộng</a>
                                </h3>
                                <p>
                                    Tạo ra nhiều giá trị hơn bằng cách thêm các
                                    ứng dụng vượt xa khả năng khai thác thông
                                    tin.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <h3>
                                    <a>Nền Tảng AI Ops Linh Hoạt</a>
                                </h3>
                                <p>
                                    Chạy và quản lý với k8s tương thích với cả
                                    Đám mây công cộng và riêng tư.
                                    <br />
                                    <p>&nbsp;&nbsp;</p>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OurFeatures
