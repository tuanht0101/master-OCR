import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import * as Icon from 'react-feather';
import en from '../../locales/en'
import vi from '../../locales/vi'

const options = {
	loop: true,
	nav: false,
	dots: false,
	autoplayHoverPause: true,
	autoplay: true,
	autoplayTimeout: 4000,
	margin: 30,
	item: 4,
	responsive: {
		0: {
			items: 1,
		},
		700: {
			items: 2,
		},
		1000: {
			items: 3,
		}
	}
}

const Rewards = ({ language }) => {
	const [t, setT] = React.useState(en)

    React.useEffect(() => {
         let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])
	
	const [display, setDisplay] = React.useState(false);

	React.useEffect(() => {
		setDisplay(true);
	}, [])


	return (
		<div className="funfacts-area bg-image ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>{t.aboutUs.reward}</h2>
					<div className="bar"></div>
				</div>
			</div>
			<div className="reward-limit pb-80">
				{display ? <OwlCarousel
					className="team-slider owl-carousel owl-theme owl-theme-style reward-slider"
					{...options}
				>
					<div className="single-funfact reward-item">
						<h3>TOP 15</h3>
						<p>AAC Startup 2021</p>
					</div>

					<div className="single-funfact reward-item">
						<h3>TOP 2</h3>
						<p>AWS Hackathon 2020</p>
					</div>

					<div className="single-funfact reward-item">
						<h3>TOP 10</h3>
						<p>V3 Track 2020</p>
					</div>

					<div className="single-funfact reward-item">
						<h3>TOP 60</h3>
						<p>Techfest 2020</p>
					</div>

					<div className="single-funfact reward-item">
						<h3>TOP 50</h3>
						<p>Startup Vietnam 2020</p>
					</div>
				</OwlCarousel> : ''}
			</div>
			{/* <div className="contact-cta-box">
				<h3>Have any question about us?</h3>
				<p>Don't hesitate to contact us</p>
				<Link href="#">
					<a className="btn btn-primary">Contact Us</a>
				</Link>
			</div> */}
		</div>
	)
}

export default Rewards;
