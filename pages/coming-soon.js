import React, { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ComingSoon = () => {
    const vendor = global.vendor

    return (
        <div className="coming-soon-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="coming-soon-content">
                            <h1>Sign In</h1>
                            <p>
                                Our website is currently undergoing scheduled
                                maintenance. We Should be back shortly. Thank
                                you for your patience.
                            </p>
                            <Link href="/">
                                <a className="btn btn-primary">
                                    Back to homepage
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="social-list">
                <li className="list-heading">Follow us for update:</li>
                <li>
                    <a
                        href={vendor.social_media.facebook}
                        className="facebook"
                        target="_blank"
                    >
                        <Icon.Facebook />
                    </a>
                </li>
                <li>
                    <a
                        href={vendor.social_media.twitter}
                        className="twitter"
                        target="_blank"
                    >
                        <Icon.Twitter />
                    </a>
                </li>
                <li>
                    <a
                        href={vendor.social_media.linkedin}
                        className="linkedin"
                        target="_blank"
                    >
                        <Icon.Linkedin />
                    </a>
                </li>
                <li>
                    <a
                        href={vendor.social_media.youtube}
                        className="youtube"
                        target="_blank"
                    >
                        <Icon.Youtube />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ComingSoon
