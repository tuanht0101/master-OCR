import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel3'))
import vendorContent from '../../constants/vendorContent'
import 'react-lazy-load-image-component/src/effects/blur.css';
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 4
    },
    768: {
      items: 4
    },
    1024: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
}

class Partner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
  }
  componentDidMount() {
    this.setState({ display: true })
  }
  render() {
    const partners = global.vendor.partners.techainer
    return (
      <section className="ml-partner-area mt-minus-top pt-80">
        <div className="bigdata-services-area bg-eef6fd partner-cover">
          <div className="container" id="listing-before">
            {/* <div className="section-title">
                        <span className="sub-title">Our Partners</span>
                    </div> */}
            <div className="row">
              {this.state.display && (
                <OwlCarousel
                  className="partner-slides"
                  {...options}
                >
                  {partners.map((partner, index) => (
                    <div className="col-lg-12 col-md-12" key={index}>
                      <div className="single-ml-partner">
                        {/* <Link href="#"> */}
                        <a
                          href={partner.link}
                          target="_blank"
                        >
                          <img
                            src={partner.logo}
                            alt="image"
                            style={{ maxHeight: 50 }}
                          />
                          <img
                            src={partner.logo}
                            alt="image"
                            style={{ maxHeight: 50 }}
                          />
                        </a>
                        {/* </Link> */}
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Partner