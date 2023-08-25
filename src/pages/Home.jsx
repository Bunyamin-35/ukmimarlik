import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Aboutus from '../components/Aboutus';
import Services from '../components/Services';
import Contactus from '../components/Contactus';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Navbar/>
        <Aboutus/>
        <Jumbotron/>
        <Services/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home;