import React from 'react';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;