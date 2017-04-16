import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { Element } from 'react-scroll'
import { Grid, Row, Col } from 'react-bootstrap'
import './contact.scss'

export default class Contact extends Component {
	render() {
		return (
			<Element name='Contact' className='Contact'>
				<h1>Get in contact!</h1>
				<Grid>
					<Row>
						<Col xs={12} md={4} className='contact-item'>
							<img src='../../build/images/Mobile.png' />
							<span className='text'>0421 011 753</span>
						</Col>
						<Col xs={12} md={4} className='contact-item'>
							<img src='../../build/images/Email.png' />
							<a href="mailto:nmjones@live.com" className='text'>nmjones@live.com</a>
						</Col>
						<Col xs={12} md={4} className='contact-item'>
							<img src='../../build/images/GitHub-Mark-64px.png' />
							<a href='https://github.com/NathanJonesDevelopment' className='text'>github.com/NathanJonesDevelopment</a>
						</Col>
					</Row>
				</Grid>
			</Element>
		);
	}
}