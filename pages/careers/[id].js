import dynamic from 'next/dynamic'
import * as Icon from 'react-feather'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Preloader, Placeholder } from 'react-preloading-screen'
import englishJD from '../../constants/englishJD'
import vietnameseJD from '../../constants/vietnameseJD'
const Contact = dynamic(() => import('../../components/careers/Contact'))
const Header = dynamic(() => import('../../components/Layouts/Header'))
const Footer = dynamic(() => import('../../components/Layouts/Footer'))
const GoTop = dynamic(() => import('../../components/Layouts/GoTop'))

const PositionDetail = () => {
    const [jd, setJD] = useState(englishJD)
    const [language, setLanguage] = React.useState('en')
    const getLanguage = (lang) => {
        setLanguage(lang)
    }
    const [positionDetail, setPositionDetail] = useState()

    const router = useRouter()
    const positionId = router.query.id

    const findJob = () => {
        return jd.find((e) => e.title === positionId)
    }

    useEffect(() => {
        language == 'vi' ? setJD(vietnameseJD) : setJD(englishJD)
    }, [language])

    useEffect(() => {
        setPositionDetail(findJob())
    }, [positionId, jd])

    useEffect(() => {
        let elementId = document.getElementById('position-requirements')
        document.addEventListener('scroll', () => {
            if (elementId) {
                if (window.scrollY < 600) {
                    elementId.classList.remove('is-bottom')
                    elementId.classList.add('is-stop')
                } else {
                    elementId.classList.remove('is-stop')
                    elementId.classList.add('is-bottom')
                }
            }
        })
        window.scrollTo(0, 0)
    })

    return (
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header getLanguage={getLanguage} />
            {positionDetail ? (
                <>
                    <div className="page-title-area">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="position-detail-title">
                                        <h2>{positionDetail.title}</h2>
                                        <p>
                                            <b>
                                                {language == 'vi'
                                                    ? 'Vị trí: '
                                                    : 'Position: '}
                                            </b>
                                            {positionDetail.label}
                                        </p>
                                        <p>
                                            <Icon.MapPin />{' '}
                                            {language == 'vi'
                                                ? 'Cầu Giấy, Hà Nội'
                                                : 'Cau Giay, Ha Noi'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shape1">
                            <img
                                src="../../static/images/shape1.png"
                                alt="shape"
                            />
                        </div>
                        <div className="shape3">
                            <img
                                src="../../static/images/shape3.svg"
                                alt="shape"
                            />
                        </div>
                        <div className="shape4">
                            <img
                                src="../../static/images/shape4.svg"
                                alt="shape"
                            />
                        </div>
                        <div className="shape6 rotateme">
                            <img
                                src="../../static/images/shape4.svg"
                                alt="shape"
                            />
                        </div>
                        <div className="shape7">
                            <img
                                src="../../static/images/shape4.svg"
                                alt="shape"
                            />
                        </div>
                        <div className="shape8 rotateme">
                            <img
                                src="../../static/images/shape2.svg"
                                alt="shape"
                            />
                        </div>
                    </div>

                    <div className="blog-details-desc pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    <div className="article-content">
                                        <h2>
                                            <Icon.Edit />{' '}
                                            {language == 'vi'
                                                ? 'Mô tả:'
                                                : 'Job Description:'}
                                        </h2>
                                        {positionDetail.description.main.map(
                                            (des) => (
                                                <p>{des}</p>
                                            )
                                        )}
                                        <ul className="features-list">
                                            {positionDetail.description.sub.map(
                                                (des) => (
                                                    <li>
                                                        <Icon.Check /> {des}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="article-content">
                                        <h2>
                                            <Icon.HelpCircle />{' '}
                                            {language == 'vi'
                                                ? 'Yêu cầu:'
                                                : 'Requirements:'}
                                        </h2>
                                        <ul className="features-list">
                                            {positionDetail.requirements.main.map(
                                                (req) => (
                                                    <li>
                                                        <Icon.Check />
                                                        {req}
                                                    </li>
                                                )
                                            )}
                                            <ul>
                                                {positionDetail.requirements.sub.map(
                                                    (req) => (
                                                        <li>{req}</li>
                                                    )
                                                )}
                                            </ul>
                                        </ul>
                                    </div>
                                    {positionDetail.prefer ? (
                                        <>
                                            <div className="article-content">
                                                <h2>
                                                    <Icon.Briefcase /> Prefers:
                                                </h2>
                                                <ul className="features-list">
                                                    {positionDetail.prefer.map(
                                                        (req) => (
                                                            <li>
                                                                <Icon.Check />
                                                                {req}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <hr />
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    <hr />
                                    {positionDetail.prefer ? (
                                        <>
                                            <div className="article-content">
                                                <h2>
                                                    <Icon.Briefcase />{' '}
                                                    {language == 'vi'
                                                        ? 'Lợi thế:'
                                                        : 'Prefers:'}
                                                </h2>
                                                <ul className="features-list">
                                                    {positionDetail.prefer.map(
                                                        (req) => (
                                                            <li>
                                                                <Icon.Check />
                                                                {req}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <hr />
                                        </>
                                    ) : (
                                        <></>
                                    )}

                                    <div className="article-content">
                                        <h2>
                                            <Icon.DollarSign />{' '}
                                            {language == 'vi'
                                                ? 'Quyền lợi:'
                                                : 'Benefits:'}
                                        </h2>
                                        <ul className="features-list">
                                            {positionDetail.benefits.map(
                                                (req) => (
                                                    <li>
                                                        <Icon.Check />
                                                        {req}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div id="position-requirements">
                                        <h4>
                                            <Icon.Users />
                                            {language == 'vi'
                                                ? 'Kinh nghiệm:'
                                                : 'Experience Requirements:'}
                                        </h4>
                                        <p>{positionDetail.experience}</p>
                                        <h4>
                                            <Icon.Award />{' '}
                                            {language == 'vi'
                                                ? 'Học vấn:'
                                                : 'Academic Level:'}
                                        </h4>
                                        <p>{positionDetail.level}</p>
                                        <h4>
                                            <Icon.CreditCard />{' '}
                                            {language == 'vi'
                                                ? 'Thời gian:'
                                                : 'Work Schedule:'}
                                        </h4>
                                        <p>{positionDetail.schedule}</p>
                                        <h4>
                                            <Icon.PhoneCall />
                                            {language == 'vi'
                                                ? 'Liên lạc:'
                                                : 'Contact:'}
                                        </h4>
                                        <p>
                                            <a href="mailto:admin@techainer.com">
                                                admin@techainer.com
                                            </a>
                                            <br />
                                            <a href="tel:+84 363 568 384">
                                                +84 363 568 384
                                            </a>
                                        </p>
                                        <hr />
                                        <a
                                            href="#apply-form"
                                            className="btn btn-primary apply-button"
                                        >
                                            {language == 'vi'
                                                ? 'Ứng tuyển:'
                                                : 'APPLY:'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="apply-form">
                        <Contact language={language} />
                    </div>
                </>
            ) : (
                <></>
            )}

            <Footer />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </Preloader>
    )
}

export default PositionDetail
