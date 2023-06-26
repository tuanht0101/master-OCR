import Document, { Html, Head, Main, NextScript } from 'next/document'
import vendorContent from '../constants/vendorContent'
import _ from 'lodash'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // let hostname = ctx.req.get('host')
        const initialProps = await Document.getInitialProps(ctx)
        // return { ...initialProps, hostname }
        return { ...initialProps }
    }

    render() {
        let yandex = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(87747688, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
      `

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    {/* <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    /> */}
                    <meta name="cf-2fa-verify" content="86334b3de8e5bc9" />
                    {/* <meta property='og:image' content="https://www.linkpicture.com/q/sharing-image.png" /> */}
                    <link
                        rel="icon"
                        type="image/png"
                        href="https://i.imgur.com/QtSvQ4b.png"
                    ></link>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                        crossOrigin="anonymous"
                    ></link>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/css/slick.css`}
                        key="slick"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/css/animate.css`}
                        key="animate"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/css/flaticon.css`}
                        key="icon"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href={`/static/css/boxicons.min.css`}
                        key="icon"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: yandex,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
