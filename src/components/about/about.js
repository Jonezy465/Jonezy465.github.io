import React, { Component } from 'react'
import classNames from 'classnames'
import { Element } from 'react-scroll'
import { Grid, Row, Col } from 'react-bootstrap'
import './about.scss'

export default class About extends Component {
	render() {
		return (
			<Element name="About" className='About'>
				<div className='aboutMe'>
					<h1>About Me</h1>
					<p>
						I am a Web and Mobile Developer based on the south side of Brisbane, specializing in front-end development. 
						I started learning web dvelopment in 2008, which eventually lead to a Diploma. 
						I provide clean web designs with high performance, and I'm always following the latest development and technology trends.
					</p>
				</div>
				<div className='skills'>
					<h1>Skills</h1>
					<Grid>
						<Row>
							<Col xs={10} xsOffset={1} sm={4} smOffset={0} className='skill'>
								<div className='title'>
									<div className={'icon Client'}></div>
									<div className='text'>Client</div>
								</div>
								<p>I use modern web development tools and follow best practices to provide great looking websites with snappy performance.</p>
							</Col>
							<Col xs={10} xsOffset={1} sm={4} smOffset={0} className='skill middle'>
								<div className='title'>
								<div className={'icon Server'}></div>
									<div className='text'>Server</div>
								</div>
								<p>Need some server side features like user signup/login, or client to client communication? Not a problem.</p>
							</Col>
							<Col xs={10} xsOffset={1} sm={4} smOffset={0} className='skill'>
								<div className='title'>
								<div className={'icon Mobile'}></div>
									<div className='text'>Mobile</div>
								</div>
								<p>Responsive design means websites will look great and feel natural to use on all devices.</p>
							</Col>
						</Row>
					</Grid>
				</div>
			</Element>
		);
	}
}