import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import axios from 'axios'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import vi from '../../locales/vi'

const BlogSidebar = ({
    categories,
    tags,
    search,
    populars,
    router_search,
    router_tag,
    router_category,
    isDetail,
    language
}) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const router = useRouter()
    const routerParams = router.query
    const routerLength = Object.keys(routerParams).length
    let input

    const onSubmit = async (e) => {
        e.preventDefault()

        const search_key = input

        router.push('/blog/?search=' + search_key)
        try {
            const url =
                search_key == undefined
                    ? 'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body'
                    : 'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body,excerpt&search=' +
                      search_key
            const req = await axios.get(url, {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            })
            if (!isDetail) search(req.data, search_key)
            document.getElementById('search-field').value = ''
        } catch (e) {
            console.log(e)
        }
    }

    const searchByKeyWord = async (search_key) => {
        router.push('/blog/?search=' + search_key)

        try {
            const url =
                search_key == undefined
                    ? 'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body'
                    : 'https://cms.techainer.com/api/v2/pages/?type=puput.EntryPage&fields=header_image,owner,date,rendered_body,excerpt&search=' +
                      search_key
            const req = await axios.get(url, {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            })
            if (!isDetail) search(req.data, search_key)
            document.getElementById('search-field').value = ''
        } catch (e) {
            console.log(e)
        }
    }

    const handelChangeInput = (e) => {
        input = e.target.value
    }

    const searchByTag = async (tag) => {
        router.push('/blog/?tag=' + tag)
        try {
            const url = 'https://cms.techainer.com/search/tag/' + tag
            const req = await axios.get(url, {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            })
            if (!isDetail) search(req.data, tag)
            document.getElementById('search-field').value = ''
        } catch (e) {
            console.log(e)
        }
    }

    const searchByCategory = async (cate) => {
        router.push('/blog/?category=' + cate)

        try {
            const url = 'https://cms.techainer.com/search/category/' + cate
            const req = await axios.get(url, {
                headers: {
                    Authorization:
                        'token 6099cc357fd0159d050186add2d7f34f2937eda1',
                },
            })
            if (!isDetail) search(req.data, cate)
            document.getElementById('search-field').value = ''
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if ((router_search != '') & (router_search != undefined)) {
            searchByKeyWord(router_search)
        } else if ((router_tag != '') & (router_tag != undefined)) {
            searchByTag(router_tag)
        } else if ((router_category != '') & (router_category != undefined)) {
            searchByCategory(router_category)
        }
    }, [router_search, router_category, router_tag])

    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <form className="search-form">
                    <label>
                        <input
                            type="search"
                            id="search-field"
                            name="search"
                            placeholder={t.blog.search}
                            onChange={handelChangeInput}
                        />
                    </label>
                    <button type="submit" onClick={(e) => onSubmit(e)}>
                        <Icon.Search />
                    </button>
                </form>
            </div>

            <div className="widget widget_startp_posts_thumb">
                <h3 className="widget-title">{t.blog.popular}</h3>
                {populars.map((popular, index) => (
                    <article className="item" key={index}>
                        <Link href={'/blog/' + popular.meta.slug}>
                            <a className="thumb">
                                <img
                                    className="fullimage cover"
                                    role="img"
                                    src={
                                        popular.header_image
                                            ? popular.header_image.meta
                                                  .download_url
                                            : '../../static/images/logo_techainer-01.png'
                                    }
                                />
                            </a>
                        </Link>

                        <div className="info">
                            <time>{popular.date.substr(0, 10)}</time>
                            <h4 className="title usmall">
                                <Link href={'/blog/' + popular.meta.slug}>
                                    <a>{popular.title}</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                ))}
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">{t.blog.cate}</h3>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                onClick={() => searchByCategory(category.name)}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">{t.blog.tag}</h3>
                <div className="tagcloud">
                    {tags.map((tag, index) => (
                        <a
                            href="#"
                            onClick={() => searchByTag(tag.name)}
                            key={index}
                        >
                            {tag.name}
                            <span className="tag-link-count"></span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar
