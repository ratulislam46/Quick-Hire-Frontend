import React from 'react';

const CompaniesSection = () => {
  const companies = [
    { name: 'Vodafone', logo: '/Images/vodafone.png' },
    { name: 'Intel', logo: '/Images/intel.png' },
    { name: 'Tesla', logo: '/Images/tesla.png' },
    { name: 'AMD', logo: '/Images/amd.png' },
    { name: 'Talkit', logo: '/Images/talkit.png' },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <p className="text-gray-400 text-opacity-50 text-base md:text-lg font-medium mb-8 md:mb-10 text-left">
          Companies we helped grow
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-start lg:justify-center items-center">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;