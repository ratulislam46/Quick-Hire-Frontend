import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CompaniesSection from './CompaniesSection/CompaniesSection';
import CTASection from './CTASection/CTASection';
import ExploreByCategory from './ExploreSection/ExploreByCategory';
import FeaturedJobs from './ExploreSection/FeaturedJobs';
import LatestJobs from './LatestJobSection/LatestJobs';

const Home = () => {
    return (
        <div>
           <HeroSection/>
           <CompaniesSection/>
           <ExploreByCategory/>
           <CTASection/>
           <FeaturedJobs/>
           <LatestJobs/>
        </div>
    );
};

export default Home;