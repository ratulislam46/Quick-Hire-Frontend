import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CompaniesSection from './CompaniesSection/CompaniesSection';
import CTASection from './CTASection/CTASection';
import ExploreByCategory from './ExploreSection/ExploreByCategory';

const Home = () => {
    return (
        <div>
           <HeroSection/>
           <CompaniesSection/>
           <ExploreByCategory/>
           <CTASection/>
        </div>
    );
};

export default Home;