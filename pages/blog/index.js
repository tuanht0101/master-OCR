import React, { useState, useEffect } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CloudLightning } from 'react-feather'
import vendorContent from '../../constants/vendorContent'
const Header = dynamic(() => import('../../components/Layouts/Header'))
const Paginate = dynamic(() => import('../../components/blog/Paginate'))
const Footer = dynamic(() => import('../../components/Layouts/Footer'))
const Partners = dynamic(() => import('../../components/ekyc/Partners'))
const GoTop = dynamic(() => import('../../components/Layouts/GoTop'))
const BlogSideBar = dynamic(() => import('../../components/blog/BlogSideBar'))
const PageTitle = dynamic(() => import('../../components/Layouts/PageTitle'))

const Blog = () => {
    const [language, setLanguage] = React.useState('en')

    const getLanguage = (lang) => {
        setLanguage(lang)
    }

    const router = useRouter()
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [populars, setPopulars] = useState([])
    const [search_key, setKey] = useState('')
    const [router_search, setRouterSearch] = useState('')
    const [router_tag, setRouterTag] = useState('')
    const [router_category, setRouterCategory] = useState('')
    const [router_page, setRouterPage] = useState('1')

    const getDataBySearch = (blogsBySearch, search_key) => {
        setKey(search_key)
        setItems(
            blogsBySearch.results ? blogsBySearch.results : blogsBySearch.items
        )
    }

    const fetchBodyData = async () => {
        const res_bloglist = await axios(
            'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body,excerpt',
            {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            }
        )

        setItems(res_bloglist.data.items)
    }

    const fetchSideBarData = async () => {
        const res_allcate = await axios(
            'https://cms.techainer.com/api/categories/',
            {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            }
        )

        setCategories(res_allcate.data.results)

        const res_alltag = await axios('https://cms.techainer.com/api/tags/', {
            headers: {
                Authorization: 'token 6099cc357fd0159d050186add2d7f34f2937eda1',
            },
        })

        setTags(res_alltag.data.results)

        const res_popular = await axios(
            'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body,excerpt&limit=3',
            {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            }
        )

        setPopulars(res_popular.data.items)
    }

    useEffect(() => {
        if (Object.keys(router.query).length === 0) {
            fetchBodyData()
            fetchSideBarData()
        } else {
            fetchSideBarData()
            if (router.query.search) {
                const param = router.query.search
                setRouterSearch(param)
                if (router.query.page) {
                    const param = router.query.page
                    setRouterPage(param)
                }
            } else if (router.query.tag) {
                const param = router.query.tag
                setRouterTag(param)
                if (router.query.page) {
                    const param = router.query.page
                    setRouterPage(param)
                }
            } else if (router.query.category) {
                const param = router.query.category
                setRouterCategory(param)
                if (router.query.page) {
                    const param = router.query.page
                    setRouterPage(param)
                }
            } else if (router.query.page) {
                const param = router.query.page
                fetchBodyData()
                setRouterPage(param)
            }
        }
    }, [])

    useEffect(() => {
        setItems(items)
    }, [items])

    return (
        <>
            {/* <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder> */}
            <NextSeo
                title={vendorContent[0].seo.title}
                description={vendorContent[0].seo.description}
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://techainer.com/blog',
                    site_name: `${vendorContent[0].seo.openGraph.site_name}`,
                    image: [
                        {
                            url: 'https://www.linkpicture.com/q/sharing-image.png',
                            width: 200,
                            height: 200,
                            alt: 'Techainer Logo',
                            type: 'image/png',
                        },
                    ],
                }}
            />
            <Head>
                <meta property="fb:app_id" content="317583313678324" />
                <meta
                    property="og:image"
                    content="https://www.linkpicture.com/q/sharing-image.png"
                />
            </Head>
            
            <Header getLanguage={getLanguage} />
            <PageTitle
                pageTitle={language == 'en' ? 'Our Blog' : 'Blog của chúng tôi'}
            />
            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            {search_key != '' ? (
                                <div className="search-for">
                                    Search results for: {search_key}
                                </div>
                            ) : (
                                <div></div>
                            )}
                            <Paginate
                                itemsPerPage={4}
                                all_blog={items}
                                router_page={router_page}
                                language={language}
                            />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSideBar
                                tags={tags}
                                categories={categories}
                                populars={populars}
                                search={getDataBySearch}
                                router_search={router_search}
                                router_tag={router_tag}
                                router_category={router_category}
                                isDetail={false}
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

export default Blog
