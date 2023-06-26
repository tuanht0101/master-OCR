import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import en from '../../locales/en'
import vi from '../../locales/vi'

const Partner = ({language}) => {
  const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

  return (
    <div className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>{t.partnership.partner}</h2>
          <div className="bar"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-sm-1">
          </div>
          <div className="col-lg-2 col-sm-2">
            <div className="partner-div odd">
              <img src="../../static/images/partner-img/evn.png" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-2">
            <div className="partner-div even">
              <img src="../../static/images/partner-img/fpt.png" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-2">
            <div className="partner-div odd">
              <img src="../../static/images/partner-img/tpbank.png" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-2">
            <div className="partner-div even">
              <img src="../../static/images/partner-img/vpbank.png" />
            </div>
          </div>
          <div className="col-lg-2 col-sm-2">
            <div className="partner-div odd">
              <img src="../../static/images/partner-img/seabank.png" />
            </div>
          </div>
          <div className="col-lg-1 col-sm-1">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner;