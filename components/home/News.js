import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import dynamic from 'next/dynamic'
import en from '../../locales/en'
import vi from '../../locales/vi'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    loop: false,
    autoplayHoverPause: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 3000,
    margin: 10,
    items: 3,
    nav: true,
    lazyLoad: false,
    // navClass: ["owl-prev","owl-next"],
    navText: [
        "<div class='nav-button owl-prev'><i class='bx bx-chevron-left'></i></div>",
        "<div class='nav-button owl-next'><i class='bx bx-chevron-right'></i></div>",
    ],
    responsive: {
        600: {
            items: 1,
        },
        800: {
            items: 2,
        },
        1250: {
            items: 3,
        },
    },
}

const newsData = [
    
    {
        link: "https://congthuong.vn/techainer-giai-phap-cong-nghe-ung-dung-ai-giup-doanh-nghiep-quan-tri-rui-ro-164590.html?fbclid=IwAR0_ReMEedTK1v6iXyOS-bvum9l6TOhmLXdn9m8cE17G4632hEHK0Y0Z59E", 
        image: "../../static/images/news/news1.jpg",
        date_vn: '20 Tháng 5, 2021',
        date_en: "May 20, 2021",
        title_vn: 'Giải pháp công nghệ ứng dụng AI giúp doanh nghiệp quản trị rủi ro',
        title_en: "AI technology solutions to help business risk management",
        name_vn: 'Báo Công Thương',
        name_en: "Vietnamese Industry & Trade review",
    },
    {
        link: "https://vnexpress.net/chang-trai-tu-bo-sillicon-valley-khat-vong-tao-doanh-nghiep-trieu-do-4334371.html", 
        image: "../../static/images/news/news2.jpg",
        date_vn: '15 Tháng 7, 2021',
        date_en: "July 15, 2021",
        title_vn: 'Chàng trai từ bỏ Sillicon Valley khát vọng tạo doanh nghiệp triệu đô',
        title_en: "The guy who gave up Silicon Valley with the aspire to create a million-dollar business",
        name_vn: 'VNexpress',
        name_en: "VNexpress",
    },
    {
        link: "https://tapchicongthuong.vn/bai-viet/techainer-mong-muon-lam-tu-hao-tai-nguyen-tri-tue-nguoi-viet-nam-84264.htm", 
        image: "../../static/images/news/news3.jpg",
        date_vn: '7 Tháng 10, 2021',
        date_en: "October 7, 2021",
        title_vn: 'Techainer mong muốn làm tự hào tài nguyên trí tuệ người Việt Nam',
        title_en: "Techainer expects to become the pride of Vietnamese intellectual resources",
        name_vn: 'Báo Công Thương',
        name_en: "Industry And Trade Magazine",
    },
    {
        link: "https://thoidai.com.vn/gioi-tre-tien-phong-khoi-nghiep-cong-nghe-161618.html?fbclid=IwAR2BeVxIxximl-4qmVVFI79y_wNLGDecgF_c4Aua97q8HjMw-iY-xf3HLY4", 
        image: "../../static/images/news/drake_news.jpg",
        date_vn: '19 Tháng 1, 2022',
        date_en: "January 19, 2022",
        title_vn: 'Giới trẻ tiên phong khởi nghiệp công nghệ',
        title_en: "Young people pioneered with technology",
        name_vn: 'Tạp chí Thời Đại',
        name_en: "Vietnam Times",
    },
    // {
    //     link: "https://vnexpress.net/13-du-an-vao-vong-ai-tech-matching-4508457.html", 
    //     image: "../../static/images/logo_techainer-01.png",
    //     date_vn: '12 Tháng 9, 2022',
    //     date_en: "September 12, 2022",
    //     title_vn: '13 dự án vào vòng AI Tech Matching',
    //     title_en: "13 projects entered the AI Tech Matching round",
    //     name_vn: 'VNexpress',
    //     name_en: "VNexpress",
    // },
    // {
    //     link: "https://thoidai.com.vn/gioi-tre-tien-phong-khoi-nghiep-cong-nghe-16https://vnexpress.net/phan-mem-camera-ai-giam-sat-thong-minh-4500846.html1618.html?fbclid=IwAR2BeVxIxximl-4qmVVFI79y_wNLGDecgF_c4Aua97q8HjMw-iY-xf3HLY4", 
    //     image: "../../static/images/logo_techainer-01.png",
    //     date_vn: '12 Tháng 9, 2022',
    //     date_en: "September 12, 2022",
    //     title_vn: 'Phần mềm camera AI giám sát thông minh',
    //     title_en: "Smart surveillance AI camera software",
    //     name_vn: 'VNexpress',
    //     name_en: "VNexpress",
    // },
    // {
    //     link: "https://vnexpress.net/master-ekyc-4498866.html", 
    //     image: "../../static/images/logo_techainer-01.png",
    //     date_vn: '12 Tháng 9, 2022',
    //     date_en: "September 12, 2022",
    //     title_vn: 'Master eKYC',
    //     title_en: "Master eKYC",
    //     name_vn: 'VNexpress',
    //     name_en: "VNexpress",
    // },
]

const News = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        setDisplay(true)
    }, [])

    return (
        <div className="blog-area pt-80 pb-50">
            <div className="container">
                <div className="section-title">
                    <h2>{t.homePage.news.title}</h2>
                    <div className="bar"></div>
                </div>
                {display ? (
                    <OwlCarousel
                        className="row justify-content-center news-slide owl-carousel owl-theme owl-theme-style"
                        {...options}
                    >   

                        {newsData.map((news) => {
                            return (
                                <div className="single-blog-post-box bg-f4faff">
                            <div className="entry-thumbnail">
                                <Link href={news.link}>
                                    <a target="_blank">
                                        <LazyLoadImage
                                            src={news.image}
                                            alt="image"
                                        />
                                    </a>
                                </Link>
                            </div>

                            <div className="entry-post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                {t === vi ? news.name_vn : news.name_en}
                                            </a>
                                        </li>
                                        <li>{t=== vi ? news.date_vn : news.date_en}</li>
                                    </ul>
                                </div>

                                <h3>
                                    <Link href={news.link}>
                                        <a target="_blank">
                                            {t === vi ? news.title_vn : news.title_en}
                                        </a>
                                    </Link>
                                </h3>

                                <Link href={news.link}>
                                    <a
                                        target="_blank"
                                        className="learn-more-btn"
                                    >
                                        {t.button.readStory} <Icon.Plus />
                                    </a>
                                </Link>
                            </div>
                        </div>
                            )
                        })}
                        

                
                    </OwlCarousel>
                ) : (
                    ''
                )}
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <LazyLoadImage
                    src="../../static/images/shape1.png"
                    alt="shape"
                />
            </div>
            <div className="shape2 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape2.svg"
                    alt="shape"
                />
            </div>
            <div className="shape3">
                <LazyLoadImage
                    src="../../static/images/shape3.svg"
                    alt="shape"
                />
            </div>
            <div className="shape4">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape6 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape7">
                <LazyLoadImage
                    src="../../static/images/shape4.svg"
                    alt="shape"
                />
            </div>
            <div className="shape8 rotateme">
                <LazyLoadImage
                    src="../../static/images/shape2.svg"
                    alt="shape"
                />
            </div>
        </div>
    )
}

export default News
