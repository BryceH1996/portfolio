"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { type Swiper as SwiperTypes } from 'swiper';
import { portfolioData } from "../../../../json/portfolio-data";
import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "../../button/primary-button";
import BasicButton from '../../button/basic-buttom';

export default function SliderBottom() {
  
  const [firstSwiper, setFirstSwiper] = useState<SwiperTypes | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperTypes | null>(null);

  return (
    <div className="container mx-auto flex w-full flex-col lg:flex-row xl:pt-6 xl:pb-12 pt-4 pb-8 items-start last-card">
      <div className='flex lg:flex-row flex-col justify-between lg:hidden block mb-3'>
        <h2 className="xl:text-4xl text-3xl mt-6 lg:mt-0 font-bold text-secondary pb-3">Favourite Projects</h2>
        <BasicButton className="inline-block text-secondary font-semibold" text="View all projects" url="/portfolio" />
      </div>
      <div className="w-full lg:w-6/12 pr-0 lg:pr-12 xl:pr-16 lg:pb-0 pb-2 relative">
        <Swiper 
          modules={[Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          loop={true}>
          {portfolioData.map((data, key) => {
            if(data.favourited)
            return (
              <SwiperSlide key={key}>
                <Image
                  className="relative"
                  src={data.mainImage}
                  alt={data.mainImageAlt}
                  width={0}
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="w-full lg:w-6/12 pl-0 lg:pl-12 xl:pl-16 pb-16">
        <div className='flex lg:flex-row flex-col justify-between lg:block hidden'>
          <h2 className="xl:text-4xl text-3xl mt-6 lg:mt-0 font-bold text-secondary pb-3">Favourite Projects</h2>
          <BasicButton className="inline-block text-secondary font-semibold" text="View all projects" url="/portfolio" />
        </div>
        <Swiper         
          modules={[Controller, Pagination, Navigation, Autoplay, EffectFade]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          autoHeight={true}
          loop={true}
          autoplay={{delay: 15000}}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{nextEl: '.custom-swiper-button-next', prevEl: '.custom-swiper-button-prev',}}
          pagination={{el: '.custom-swiper-pagination', type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
              return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>'
              }
          }}>
          {portfolioData.map((data, key) => {
            if(data.favourited)
            return (
              <SwiperSlide key={key} className='lg:pb-0 pb-16'>
                <div className="text-secondary">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="font-bold text-md mt-4 mb-4">Project: {data.project}</h3>
                  </div>
                  <p className="text-sm whitespace-pre-line">
                    {data.shortDescription}
                  </p>
                </div>
                <PrimaryButton className="inline-block mt-6" text="View project" isOpenNewPage={true} url={`/portfolio/${data.slug}`}/>
                <BasicButton className="inline-block mt-6 ml-6 text-secondary font-semibold" text="View website" url={data.websiteURL} />
              </SwiperSlide>
            )
          })}
          <div className='w-full lg:w-40 flex flex-row items-end absolute bottom-0 lg:left-auto lg:right-0 right-0 justify-between text-secondary font-semibold'>
            <div className='custom-swiper-button-prev'></div>
            <div className='custom-swiper-pagination'></div>
            <div className='custom-swiper-button-next'></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}