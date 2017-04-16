import React from 'react'
import reactDOM from 'react-dom'
import { Parallax, Background } from 'react-parallax'
import classNames from 'classnames'
import { Element } from 'react-scroll'
import './banner.scss'

export default class Banner extends React.Component {
	constructor() {
		super();
		this.state = {strength: 200}
	}
	componentDidMount() {
		this.setState({strength: reactDOM.findDOMNode(this).getBoundingClientRect().height * 0.3});
		window.addEventListener('resize', this.handleResize);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}
	handleResize = () => this.setState({strength: reactDOM.findDOMNode(this).getBoundingClientRect().height * 0.3})
	render() {
		return (
			<Element name='Banner' className='Banner'>
				<Parallax strength={this.state.strength}>
					<Background>
						<div className='backgroundImage'></div>
					</Background>
					<h1>Website <span>&</span> App Development</h1>
				</Parallax>
			</Element>
		);
	}
}