import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import en from '../../locales/en'
import vi from '../../locales/vi'


const masonryOptions = {
    transitionDuration: 0,
}

const Pictures = ({language}) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const images = [
        {
            image: '../../static/images/career-member-image/sm3.jpg',
            category: 'App',
            title: 'Mobile App Development',
        },
        {
            image: '../../static/images/career-member-image/techainer-lg-6.jpg',
            category: 'Development',
            title: 'E-commerce Development',
        },
        {
            image: '../../static/images/career-member-image/sm5.jpg',
            category: 'Marketing',
            title: 'Email Marketing',
        },
        {
            image: '../../static/images/career-member-image/techainer-lg-1.jpg',
            category: 'App',
            title: 'React App Development',
        },
        {
            image: '../../static/images/career-member-image/techainer13.jpg',
            category: 'Writing',
            title: 'Content Writing',
        },
        {
            image: '../../static/images/career-member-image/md3.jpg',
            category: 'IT',
            title: 'IT Consultancy',
        },
        {
            image: '../../static/images/career-member-image/md1.jpg',
            category: 'Solutions',
            title: 'IT Solutions',
        },
        {
            image: '../../static/images/career-member-image/md2.jpg',
            category: 'Marketing',
            title: 'Marketing & Reporting',
        },
        {
            image: '../../static/images/career-member-image/sm7.jpg',
            category: 'Marketing',
            title: 'Marketing & Reporting',
        },
    ]


    const imagesReturn = images.map((image, idx) => {
        return (
            <div className="col-lg-4 col-sm-6 item" key={idx}>
                <div className="single-latest-projects">
                    <img src={image.image} alt="portfolio-image" />

                    {/* <div className="content">
                            <span>{image.category}</span>
                            <h3>{image.title}</h3>
                        </div>

                        <Link href="/project-details">
                            <a className="link-btn"></a>
                        </Link> */}
                </div>
            </div>
        )
    })
    return (
        <div className="our-latest-projects ptb-80">
            <div className="container">
                <div className="section-title text-left">
                    <h2>{t.career.happy}</h2>
                </div>

                <Masonry
                    className={'row'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {imagesReturn || <Skeleton />}
                </Masonry>
            </div>
        </div>
    )
}

export default Pictures
