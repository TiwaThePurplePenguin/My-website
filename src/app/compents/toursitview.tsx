'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const touristViews = [
  {
    name: 'Manitoba',
    description: 'Manitoba has vast prairies and beautiful lakes.',
    image: '/manitoba.jpeg',
  },{
    name: 'PEI',
    description: 'Prince Edward Island is known for its red sand beaches.',
    image: '/pei.jpeg',
  },{
    name: 'Alberta',
    description: 'Explore the best lakes in Alberta.',
    image: '/alberta.jpeg',
  },{
    name: 'Nova Scotia',
    description: 'Nova scotia waters are so beautiful.',
    image: '/nova scotia.jpeg',
  },{
    name: 'Yukon',
    description: 'Yukon is cold but beautiful.',
    image: '/yukon.jpeg',
  },{
    name: 'Ontario',  
    description: 'Ontario has the CN Tower',                
    image: '/ontario.jpeg',
  },{
    name: 'NewBrunswick',
    description: 'NewBrunswick has big rocks.',
    image: '/NewBrunswick.jpg',
  },{
    name: 'BritishColumbia',
    description: 'NewBrunswick has big rocks.',
    image: '/britishcolumbia.webp',
  }
  
  
];

function TouristView() {
  return (
    <section
      className="bg-blue-800 py-12 px-4 sm:px-6 md:px-10 lg:px-20"
      id="touristviews"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          CANADA VIEWS ARE AMAZING!
        </h2>
        <p className="text-sm sm:text-base text-emerald-200 mb-10">
          Ottawa is the capital! of Canada
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {touristViews.map((view, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                <div className="relative w-full h-[500px] sm:h-[600px]">
                  <Image
                    src={view.image}
                    alt={view.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-base text-gray-700 italic">
                    {view.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TouristView;
