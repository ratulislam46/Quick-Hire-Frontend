import React from 'react';

const CTASection = () => {
    return (
        <section className="w-full bg-white py-10 md:py-20">
            {/* Main Wrapper: Max width control for large screens */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Desktop Image: Hidden on mobile/tablet, visible only on LG (1024px+) */}
                <div className="hidden lg:block w-full">
                    <img 
                        src="/Images/CTA-D.png" 
                        alt="Join our community desktop" 
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Mobile/Tablet Image: Visible on all screens, hidden on LG screens */}
                <div className="lg:hidden w-full flex justify-center">
                    <img 
                        src="/Images/CTA-M.png" 
                        alt="Join our community mobile" 
                        className="w-full max-w-[500px] h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default CTASection;