import { Provider } from 'react-redux'
import { NextSeo } from 'next-seo'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store/reducers/cartReducer'
import Head from 'next/head'
import React from 'react'
import vendorContent from '../constants/vendorContent'
import { initGA, PageView } from '../components/Tracking'
// import * as Sentry from '@sentry/browser'
import ReactGA from 'react-ga'
import _ from 'lodash'
export default withRedux(initStore)(
    ({ Component, pageProps, store, hostname }) => {
        let currentVendor = {}

        vendorContent.forEach((e) => {
            if (e.hostname === hostname) {
                currentVendor = e
            }
        })
        if (_.isEmpty(currentVendor)) currentVendor = vendorContent[0]

        global.vendor = currentVendor

        initGA(currentVendor.ga_id)
        ReactGA.initialize(currentVendor.ga_id)

        if (typeof window !== 'undefined') PageView()

        // if (typeof window !== 'undefined') {
        //     PageView()
        //     if (window.location.hostname == 'techainer.com') {
        //         Sentry.init({
        //             dsn: 'https://b8ae4b1b82dc4af7985f4a779806eb78@sentry.techainer.com/44',
        //         })
        //     } else {
        //         console.log('window.locatin.hostname', window.location.hostname)
        //     }

        // }

        var messenger = `
                        <!-- Load Facebook SDK for JavaScript -->
                    <div id="fb-root"></div>
                    <script>
                        window.fbAsyncInit = function() {
                        FB.init({
                            xfbml            : true,
                            version          : 'v7.0'
                        });
                        };
                        (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));</script>
                    <!-- Your customer chat code -->
                    <div class="fb-customerchat"
                        attribution=setup_tool
                        page_id="112485913466461"
                theme_color="#67b868">
                    </div>
            `

        let googleTag = `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-249404147-1">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-249404147-1');
        </script>`

        return (
            <>
                {/* <NextSeo
                    title={currentVendor.seo.title}
                    description={currentVendor.seo.description}
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: `${currentVendor.seo.openGraph.url}`,
                        site_name: `${currentVendor.seo.openGraph.site_name}`,
                        image: [
                            {
                                url:
                                    '../../static/images/logo_techainer-01.png',
                                width: 200,
                                height: 200,
                                alt: 'Techainer Logo',
                                type: 'image/png'
                            }
                        ]
                    }}
                /> */}
                <Head>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/styles/style.css`}
                        key="color1"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/css/style.css`}
                        key="color2"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/css/responsive.css`}
                        key="res"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/styles/customStyles.css`}
                    />
                </Head>

                <Provider store={store}>
                    <Component {...pageProps} />
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: messenger }}
                    ></div>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: googleTag }}
                    ></div>
                </Provider>
            </>
        )
    }
)

export const getInitialProps = async ({ Component, ctx }) => {
    let hostname = 'localhost:3000'
    return {
        pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {},
        hostname,
    }
}
