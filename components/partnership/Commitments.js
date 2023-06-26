import React from 'react'
import Link from 'next/link'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Commitments = ({ language }) => {
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
        <div className="ml-services-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>{t.partnership.commitments.title}</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box commit-box">
                            <div className="image">
                                <img
                                    src="../../static/images/partnership/Dedicated Channel Supportvv.svg"
                                    alt="image"
                                />
                            </div>
                            <h3>{t.partnership.commitments.dedicated.title}</h3>
                            <p>{t.partnership.commitments.dedicated.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box commit-box">
                            <div className="image">
                                <img
                                    src="../../static/images/partnership/Comprehensive product and solutionv.svg    "
                                    alt="image"
                                />
                            </div>
                            <h3>{t.partnership.commitments.solutions.title}</h3>
                            <p>{t.partnership.commitments.solutions.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box commit-box">
                            <div className="image">
                                <img
                                    src="../../static/images/partnership/Non-stop innovation .svg"
                                    alt="image"
                                />
                            </div>
                            <h3>
                                {t.partnership.commitments.innovation.title}
                            </h3>
                            <p>{t.partnership.commitments.innovation.desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="../../static/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="../../static/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="../../static/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
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

export default Commitments
