import React from 'react'
import 'animate.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Link from 'next/link'
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

resetIdCounter()

const Offer = () => {
    return (
        <div className="feedback-area ptb-80 bg-f7fafd offer-area">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">What We Offer</span>
                    <h2>Our Products & Services</h2>
                    <div className="bar"></div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Horus</Tab>
                        <Tab>Master eKYC</Tab>
                        <Tab>DocChain</Tab>
                        <Tab>MLChain</Tab>
                    </TabList>

                    {/* Horus */}
                    <TabPanel>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 banner-content">
                                <div className="ml-banner-content offer-title">
                                    <h1>
                                        Video Management & Analytic Platform
                                    </h1>
                                    <p>
                                        AI enables an automated surveillance
                                        platform for smarter businesses
                                    </p>
                                    <p>
                                        <b>Use Case:</b> Access Control,
                                        Warehouse Surveillance, Electrical Grid
                                        Surveillance{' '}
                                    </p>
                                    <Link href="/horus">
                                        <a className="btn btn-secondary">
                                            Explore Solution
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 services-image">
                                <img
                                    src="../../static/images/offer-image/Horus.svg"
                                    className=""
                                    alt="horus"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    {/* eKYC */}
                    <TabPanel>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 banner-content">
                                <div className="ml-banner-content offer-title">
                                    <h1>
                                        Digital Customer Onboarding Platform
                                    </h1>
                                    <p>
                                        AI resolves the limitations of an online
                                        world with accurate identification &
                                        verification
                                    </p>
                                    <p>
                                        <b>Use case:</b> Open Account Online,
                                        Self-service Kiosk, Identity
                                        Check/Authentication{' '}
                                    </p>
                                    <Link href="/ekyc">
                                        <a className="btn btn-secondary">
                                            Explore Solution
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 services-image">
                                <img
                                    src="../../static/images/offer-image/eKYC.svg"
                                    className=""
                                    alt="ekyc"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    {/* docchain */}
                    <TabPanel>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 banner-content">
                                <div className="ml-banner-content offer-title">
                                    <h1>
                                        Document Digitalization & Management
                                        Platform{' '}
                                    </h1>
                                    <p>
                                        AI enables automated information
                                        extraction to save time and resources
                                    </p>
                                    <p>
                                        <b>Use case:</b> Data Entry, Automate
                                        Insurance Claims, Banking Statement
                                        Validation
                                    </p>
                                    <Link href="/docchain">
                                        <a className="btn btn-secondary">
                                            Explore Solution
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 services-image">
                                <img
                                    src="../../static/images/docchain-image/OCR hero.svg"
                                    className=""
                                    alt="docchain"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    {/* mlchain */}
                    <TabPanel>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 banner-content">
                                <div className="ml-banner-content offer-title">
                                    <h1>AI Development & Operation Platform</h1>

                                    <p>
                                        Magical platform to deploy AI models at
                                        scale, ensuring high performance while
                                        being easy to use{' '}
                                    </p>
                                    <p>
                                        <b>Use case:</b> AI Deployment, AI
                                        Auto-Front-end, AI Model Evaluation{' '}
                                    </p>
                                    <Link href="/coming-soon">
                                        <a className="btn btn-secondary">
                                            Explore Solution
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 services-image">
                                <img
                                    src="../../static/images/offer-image/MLChain.svg"
                                    className=""
                                    alt="mlchain"
                                />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="../../static/images/shape1.png" alt="shape" />
            </div>
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

export default Offer
