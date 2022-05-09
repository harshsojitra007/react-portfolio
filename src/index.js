// import React, { Component } from 'react';
import { render } from 'react-dom'
import Header from './components/Header/header'
import Nav from './components/nav/nav'
import About from './components/About/About'
import Experience from './components/Experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/footer'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

render(
    <Header />, document.getElementById('header')
);

render(
    <Nav />, document.getElementById('nav')
);

render(
    <About />, document.getElementById('about')
);

render(
    <Experience />, document.getElementById('experience')
);

render(
    <Portfolio />, document.getElementById('portfolio')
    );
    
render(
    <Testimonials />, document.getElementById('testimonials')
);

render(
    <Contact />, document.getElementById('contact')
);

render(
    <Footer />, document.getElementById('footer')
);