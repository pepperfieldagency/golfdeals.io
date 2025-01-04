import React from 'react';

const brands = [
  {
    name: 'Titleist',
    logo: 'https://www.titleist.com/on/demandware.static/Sites-titleist-Site/-/default/dw2c21fc08/images/header/titleist-logo-black.svg'
  },
  {
    name: 'TaylorMade',
    logo: 'https://www.taylormadegolf.com/on/demandware.static/-/Sites-TMaG-Library/en_US/v1735864848438/logos/header-logo-taylormade.svg'
  },
  {
    name: 'PING',
    logo: 'https://ping.com/web/assets/media/images/logo.svg'
  },
  {
    name: 'Callaway',
    logo: 'https://www.callawaygolf.com/images/callaway-logo-black.svg'
  }
];

export default function BrandLogos() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center transition-opacity duration-200 hover:opacity-75"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-12 w-auto object-contain grayscale opacity-40 hover:opacity-60 transition-all duration-300"
                style={{ maxHeight: '50px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}