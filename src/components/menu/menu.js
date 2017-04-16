import React, { Component } from 'react'
import classNames from 'classnames'
import Scroll from 'react-scroll'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './menu.scss'

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {scrollPosTop: true, expanded: false};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = e => {
		const body = document.body.getBoundingClientRect();
		if (parseInt(body.top) > -(body.height * 0.08)) {
			this.state.scrollPosTop !== true && this.setState({scrollPosTop: true});
		}
		else {
			this.state.scrollPosTop !== false && this.setState({scrollPosTop: false});
		}
	}
	autoScroll(view) {
		Scroll.scroller.scrollTo(view, {
			duration: 1500,
			offset: -(document.body.clientHeight / 10),
			smooth: true,
		});
	}
	navigate = (e, view) => {
		e.preventDefault();
		this.autoScroll(view);
		this.setState({expanded: false});
	}
	render() {
		return (
			<Navbar fluid collapseOnSelect fixedTop expanded={this.state.expanded} 
				className={classNames({transparent: this.state.scrollPosTop && !this.state.expanded})}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#" onClick={e => this.navigate(e, 'Banner')}>
							Nathan Jones
						</a>
					</Navbar.Brand>
					<Navbar.Toggle onClick={() => this.setState({expanded: !this.state.expanded})} />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						{['About','MyWork','Contact'].map((view, key) => (
							<NavItem eventKey={key} href="#" onClick={e => this.navigate(e, view)}>
								{view === 'MyWork' ? 'My Work' : view}
							</NavItem>
						))}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
};