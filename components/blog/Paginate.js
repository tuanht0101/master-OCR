import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Icon from 'react-feather'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import en from '../../locales/en'
import vi from '../../locales/vi'
// Invoke when user click to request another page.

const Paginate = ({ itemsPerPage, all_blog, router_page, language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const [router_index, setIndex] = useState(0)

    const router = useRouter()
    const routerParams = router.query

    const [blogMessage, setBlogMessage] = useState(t.blog.loading)

    // We start with an empty list of items.
    const [items, setItems] = useState(all_blog)
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)
    const handlePageClick = async (event) => {
        if (event && event.selected != undefined) {
            if (routerParams['search']) {
                router.push(
                    '/blog/?search=' +
                        routerParams['search'] +
                        '&page=' +
                        (event.selected + 1)
                )
            } else if (routerParams['tag']) {
                router.push(
                    '/blog/?tag=' +
                        routerParams['tag'] +
                        '&page=' +
                        (event.selected + 1)
                )
            } else if (routerParams['category']) {
                router.push(
                    '/blog/?category=' +
                        routerParams['category'] +
                        '&page=' +
                        (event.selected + 1)
                )
            } else {
                router.push('/blog/?page=' + (event.selected + 1))
            }
            const newOffset = (event.selected * itemsPerPage) % items.length
            setItemOffset(newOffset)
        } else {
            const newOffset = (event * itemsPerPage) % items.length
            setItemOffset(newOffset)
        }
    }

    // Render for paginate router
    useEffect(() => {
        setIndex(router_page - 1)
    }, [router_page])

    useEffect(() => {
        handlePageClick(router_index)
    }, [router_index, items])

    // Render for get data from search && paginate
    useEffect(() => {
        setItems(all_blog)
    }, [all_blog])

    //Render for react paginate
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(items.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(items.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, items])

    //Render for fetching data while loading page
    //Don't understand why cannot run it in "Render for react paginate" also it have same condition
    useEffect(() => {
        setCurrentItems(items.slice(0, itemsPerPage))
    }, [items])

    useEffect(() => {
        if (routerParams.search || routerParams.tag || routerParams.category) {
            setBlogMessage(t.blog.noMatching)
        }
    }, [routerParams])

    return (
        <>
            {items.length == 0 ? (
                <div className="not-found-blog">{blogMessage}</div>
            ) : (
                <>
                    <div className="row justify-content-center">
                        {currentItems.map((item) => (
                            <div
                                className="col-lg-6 col-md-6"
                                key={item.meta ? item.meta.slug : item.id}
                            >
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link
                                            href={
                                                item.meta
                                                    ? '/blog/' + item.meta.slug
                                                    : '/blog/' + item.title
                                            }
                                        >
                                            <a>
                                                <img
                                                    src={
                                                        item.header_image
                                                            ? item.header_image
                                                                  .meta
                                                                  .download_url
                                                            : '../../static/images/logo_techainer-01.png'
                                                    }
                                                    alt="image"
                                                />
                                            </a>
                                        </Link>
                                        <div className="date">
                                            <Icon.Calendar />
                                            {item.date.substr(0, 10)}
                                        </div>
                                        <div className="blog-post-content">
                                            <h3>
                                                <Link
                                                    href={
                                                        item.meta
                                                            ? '/blog/' +
                                                              item.meta.slug
                                                            : '/blog/' +
                                                              item.title
                                                    }
                                                >
                                                    <a> {item.title} </a>
                                                </Link>
                                            </h3>
                                            {item.excerpt ? (
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.excerpt,
                                                    }}
                                                    className="blog-description"
                                                ></div>
                                            ) : (
                                                <div className="blog-description">
                                                    <p>{t.blog.noDesc}</p>
                                                </div>
                                            )}
                                            <Link
                                                href={
                                                    item.meta
                                                        ? '/blog/' +
                                                          item.meta.slug
                                                        : '/blog/' + item.title
                                                }
                                            >
                                                <a className="read-more-btn">
                                                    {t.button.readMore}
                                                    <Icon.ArrowRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination-area">
                        <ReactPaginate
                            nextLabel={t.button.next}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel={t.button.prev}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            forcePage={router_index}
                        />
                    </div>
                </>
            )}
        </>
    )
}

export default Paginate
