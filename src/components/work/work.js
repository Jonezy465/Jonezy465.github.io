import React, { Component } from 'react'
import reactDOM from 'react-dom'
import { Parallax } from 'react-parallax'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Element } from 'react-scroll'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './work.scss'

export default class Work extends Component {
	constructor() {
		super();
		this.state = {visibility: true, strength: 500};
	}
	componentDidMount() {
		const strength = reactDOM.findDOMNode(this).getBoundingClientRect().height * 0.9
		this.setState({strength});
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmountfunction() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleResize = () => {
		const strength = reactDOM.findDOMNode(this).getBoundingClientRect().height * 0.9
		this.setState({strength});
	}
	handleScroll = e => {
		const visibilityTrigger = document.body.getBoundingClientRect().height;
		const scrollBottom = reactDOM.findDOMNode(this).getBoundingClientRect().bottom;
		const visibility = scrollBottom < visibilityTrigger;
		if (visibility !== this.state.visibility) {
			this.setState({visibility});
		}
	}
	render() {
		return (
			<Element name='MyWork' className='MyWork'>
				<Parallax bgImage="images/sunrise.jpg" strength={this.state.strength} className='parallax'>
					<ReactCSSTransitionGroup className='fader'
						transitionName="fade"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						{this.state.visibility ? <WorkSlider key='slider' /> : null}
					</ReactCSSTransitionGroup>
				</Parallax>
			</Element>
		);
	}
}

function WorkSlider() {
	const settings = {
		centerMode: true,
		initialSlide: 1,
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 767,
			settings: {slidesToShow: 1, infinite: true, arrows: true, dots: true} 
		}]
	}
	return (
		<div className='workSlider'>
			<h1>My Work</h1>
			<div className='container'>
				<Slider {...settings}>
					<div>
						<div className='slideContent portfolio'>
							<div className='hoverText'>
								<p>See the code for this website.</p>
								<p><a href='https://github.com/NathanJonesDevelopment/NathanJonesDevelopment.github.io'>
									View on Github
								</a></p>
							</div>
						</div>
					</div>
					<div>
						<div className='slideContent checkers'>
							<div className='hoverText'>
								<p>A simple single or multi-player checkers game.</p>
								<p><a href='http://playcheckerswithme.herokuapp.com'>Play the game</a></p>
								<p>or</p>
								<p><a href='https://github.com/NathanJonesDevelopment/checkers'>View on Github</a></p>
							</div>
						</div>
					</div>
					<div>
						<div className='slideContent react-redux-utilities'>
							<div className='hoverText'>
								<p>react-redux-utilities</p>
								<p>A JavaScript library for reducing boilerplate when using React and Redux.</p>
								<p><a href='https://github.com/NathanJonesDevelopment/react-redux-utilities'>View on Github</a></p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}