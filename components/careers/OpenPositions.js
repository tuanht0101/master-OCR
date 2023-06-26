import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import englishJD from '../../constants/englishJD'
import ReactPaginate from 'react-paginate'
import en from '../../locales/en'
import vi from '../../locales/vi'

const Positions = ({language}) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const itemsPerPage = 6

    const items = englishJD

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(items.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(items.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = event => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset)
    }

    return (
        <div className="features-area pt-80 pb-50 bg-f7fafd feedback-area">
            <div className="container">
                <div className="section-title">
                    <h2>{t.career.position}</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    {currentItems &&
                        currentItems.map((position, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div className="single-features row">
                                    <div className="col-lg-10">
                                        <h3>
                                            <Link
                                                href={'/careers/' + position.title}
                                            >
                                                <a target="_blank">
                                                    {position.title}
                                                    <span
                                                        className={
                                                            position.label_class
                                                        }
                                                    >
                                                        {position.label}
                                                    </span>
                                                </a>
                                            </Link>
                                        </h3>
                                        <p>{position.salary}</p>
                                    </div>
                                    <div className="col-lg-2 direct">
                                        <Link href={'/careers/' + position.title}>
                                            <a target="_blank">
                                                <Icon.ArrowRight />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
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
                />
            </div>
            {/* Shape Images */}
            {/* <div className="shape1">
                <img src="../../static/images/shape1.png" alt="shape" />
            </div> */}
            <div className="shape3">
                <img src="../../static/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
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

export default Positions
