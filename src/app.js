import React, { Component } from 'react';
import { render } from 'react-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import css from './app.scss';

import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Work from './components/work/work';
import Contact from './components/contact/contact';

function App() {
	return (
		<div className='viewPort'>
			<Menu />
			<Banner />
			<About />
			<Work />
			<Contact />
			<div style={{
				height: '27vh',
				width: '100%',
				backgroundColor: '#272727',
				padding: '0px'
			}}></div>
		</div>
	);
}

render(<App />, document.getElementById('root'));