import React, { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import Link from 'next/link'
import axios from 'axios'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
import en from '../../locales/en'
import vi from '../../locales/vi'
import FbComment from '../../components/blog/FbComments'
import ColumnGroup from 'antd/lib/table/ColumnGroup'
import { set } from 'react-ga'
const Header = dynamic(() => import('../../components/Layouts/Header'))
const Footer = dynamic(() => import('../../components/Layouts/Footer'))
const GoTop = dynamic(() => import('../../components/Layouts/GoTop'))
const BlogSideBar = dynamic(() =>
    import('../../components/blog-detail/BlogSideBar')
)
const PageTitle = dynamic(() => import('../../components/Layouts/PageTitle'))

const BlogDetails = ({
    blog_title,
    blog_body,
    blog_tags,
    blog_categories,
    blog_search_key,
    blog_populars,
    blog_headerImage,
    blog_related,
    blog_date,
    blog_shareURL,
}) => {
    const [language, setLanguage] = React.useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const [title, setTitle] = useState(blog_title)
    const [body, setBody] = useState(blog_body)
    const [tags, setTag] = useState(blog_tags)
    const [categories, setCategories] = useState(blog_categories)
    const [search_key, setKey] = useState(blog_search_key)
    const [populars, setPopulars] = useState(blog_populars)
    const [headerImage, setImage] = useState(blog_headerImage)
    const [related, setRelated] = useState(blog_related)
    const [date, setDate] = useState(blog_date)
    const [shareUrl, setShareUrl] = useState(blog_shareURL)

    let router = useRouter()

    useEffect(() => {
        // console.log('blog_body', blog_body)
        setTitle(blog_title)
        setBody(blog_body)
        setTag(blog_tags)
        setCategories(blog_categories)
        setRelated(blog_related)
        setPopulars(blog_populars)
        setImage(blog_headerImage)
        setDate(blog_date)
        setShareUrl(blog_shareURL)
    }, [router])

    return (
        <>
            <NextSeo
                title={title}
                description="Click the link to read more"
                openGraph={{
                    type: 'blog',
                    url: `${shareUrl}`,
                    title: `${title}`,
                    description: 'Click the link to read more',
                    images: [
                        {
                            url: `${headerImage}`,
                            alt: 'Blog image',
                        },
                    ],
                }}
            />

            <Head>
                <meta property="fb:app_id" content="317583313678324" />
                <meta property="og:image" content={headerImage} />
            </Head>

            <Header getLanguage={getLanguage} />
            <PageTitle pageTitle={title} />
            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 blog-details-desc">
                            <p className="blog-details-date">
                                <b>Đã đăng vào: {date}</b>
                            </p>
                            <div
                                dangerouslySetInnerHTML={{ __html: body }}
                            ></div>
                            <div className="share-button-group">
                                <FacebookShareButton
                                    url={shareUrl}
                                    // quote={""}
                                    // hashtag={"#hashtag"}
                                    description={'aiueo'}
                                    className="Demo__some-network__share-button custom-share-button"
                                >
                                    <FacebookIcon size={24} round />{' '}
                                    <p className="custom-share-text">
                                        {t.button.share}
                                    </p>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    // title={"test"}
                                    url={shareUrl}
                                    // hashtags={["hashtag1", "hashtag2"]}
                                    className="custom-share-button"
                                >
                                    <TwitterIcon size={24} round />
                                    <p className="custom-share-text">
                                        {' '}
                                        {t.button.share}
                                    </p>
                                </TwitterShareButton>
                                <LinkedinShareButton
                                    // title={"test"}
                                    url={shareUrl}
                                    // hashtags={["hashtag1", "hashtag2"]}
                                    className="custom-share-button"
                                >
                                    <LinkedinIcon size={24} round />
                                    <p className="custom-share-text">
                                        {' '}
                                        {t.button.share}
                                    </p>
                                </LinkedinShareButton>
                            </div>

                            {/* {related.length !== 0 ? : <></>} */}
                            <div className="startp-post-navigation">
                                {related && related.length !== 0 ? (
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href={'/blog/' + related[0].id}>
                                                <span className="image-prev">
                                                    <img
                                                        src={
                                                            related[0]
                                                                .header_image
                                                                .meta
                                                                .download_url
                                                        }
                                                        alt="image"
                                                    />
                                                    <span className="post-nav-title">
                                                        {t.button.prev}
                                                    </span>
                                                </span>

                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">
                                                        {related[0].title}
                                                    </span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">
                                                            {related[0].date.substr(
                                                                0,
                                                                10
                                                            )}
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}

                                {related && related.length !== 0 ? (
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href={'/blog/' + related[1].id}>
                                                <span className="next-link-info-wrapper">
                                                    {related[1].title}
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">
                                                            {related[1].date.substr(
                                                                0,
                                                                10
                                                            )}
                                                        </span>
                                                    </span>
                                                </span>

                                                <span className="image-next">
                                                    <img
                                                        src={
                                                            related[1]
                                                                .header_image
                                                                .meta
                                                                .download_url
                                                        }
                                                        alt="image"
                                                    />
                                                    <span className="post-nav-title">
                                                        {t.button.next}
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div className="custom-comment-blog">
                                <FbComment url={shareUrl} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <BlogSideBar
                                tags={tags}
                                categories={categories}
                                populars={populars}
                                // search={getDataBySearch}
                                isDetail={true}
                                language={language}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer language={language} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const id = context.params.id
    const res = await axios(
        'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body,related,excerpt,tags,categories&slug=' +
            encodeURIComponent(id),
        {
            headers: {
                Authorization: 'token 6099cc357fd0159d050186add2d7f34f2937eda1',
            },
        }
    )
    const res_popular = await axios(
        'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body,excerpt&limit=3',
        {
            headers: {
                Authorization: 'token 6099cc357fd0159d050186add2d7f34f2937eda1',
            },
        }
    )
    const blog = res.data.items[0]
    const shareURL = 'https://techainer.com/blog/' + id
    return {
        props: {
            blog_title: blog.title,
            blog_body: blog.rendered_body,
            blog_tags: blog.tags,
            blog_categories: blog.categories,
            blog_date: blog.date.substr(0, 10),
            blog_headerImage: blog.header_image
                ? blog.header_image.meta.download_url
                : 'https://www.linkpicture.com/q/sharing-image.png',
            blog_populars: res_popular.data.items,
            blog_shareURL: shareURL,
        },
    }
}

export default BlogDetails
