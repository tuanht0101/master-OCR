import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'animate.css'

const Bootcamp = ({ language }) => {
    return (
        <div className="repair-cta-area bg-0f054b contact-no-image bootcamp-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-sm-1"></div>
                    <div className="col-lg-10 col-sm-10">
                        <div className="cta-repair-content">
                            <h3>
                                {language == 'en' ? (
                                    <>
                                        Horus <br /> Smoke/ Fire Detection and
                                        Warning In Their Earliest Stages <br />{' '}
                                        Turns a regular camera into an AI camera
                                    </>
                                ) : (
                                    <>
                                        Horus <br />
                                        Cảnh báo sớm cháy khói <br />
                                        Biến camera thông thường thành camera AI
                                    </>
                                )}
                            </h3>

                            {/* <p>
                                {language === 'en' ? (
                                    <>
                                        Click{' '}
                                        <a
                                            href="/horus"
                                            className="bootcamp-learnmore"
                                        >
                                            <u>
                                                <b>here</b>
                                            </u>
                                        </a>
                                        for more information
                                    </>
                                ) : (
                                    <>
                                        Bấm vào
                                        <a
                                            className="bootcamp-learnmore"
                                            href="/horus"
                                        >
                                            <u>
                                                <b>đây</b>
                                            </u>
                                        </a>
                                        để biết thêm thông tin
                                    </>
                                )}
                            </p> */}

                            {/* <p>
                                {language == 'en' ? (
                                    'If you have a passion for AI and a desire to work in this sector in the future, click here to '
                                ) : (
                                    <>
                                        Nếu bạn có niềm đam mê với AI và mong
                                        muốn được làm việc trong lĩnh vực này ở
                                        thời gian tới, <br /> nhấn vào
                                    </>
                                )}
                                <Link href="https://www.facebook.com/events/411878507198314/?active_tab=discussion">
                                    <a
                                        className="bootcamp-learnmore"
                                        target="_blank"
                                    >
                                        <u>
                                            <b>
                                                {language == 'en'
                                                    ? 'learn more '
                                                    : 'Tìm hiểu thêm'}
                                            </b>
                                        </u>
                                    </a>
                                </Link>
                                {language == 'en' ? 'or' : 'hoặc'}
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScEEkuOtLpA1ztp81tydGfyXsShSacl_OyxVbHXnhJZoxmGIg/viewform">
                                    <a
                                        className="bootcamp-learnmore"
                                        target="_blank"
                                    >
                                        <u>
                                            <b>
                                                {language == 'en'
                                                    ? 'sign up'
                                                    : 'Đăng ký'}
                                            </b>
                                        </u>
                                    </a>
                                </Link>
                                {language == 'en'
                                    ? 'for this program.'
                                    : 'chương trình. '}
                            </p> */}
                        </div>
                    </div>

                    <div className="col-lg-1 col-sm-1"></div>
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

export default Bootcamp
