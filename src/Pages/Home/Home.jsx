import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CompaniesSection from './CompaniesSection/CompaniesSection';
import CTASection from './CTASection/CTASection';

const Home = () => {
    return (
        <div>
           <HeroSection/>
           <CompaniesSection/>
           <CTASection/>
        </div>
    );
};

export default Home;