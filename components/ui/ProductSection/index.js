import React from 'react'

import { Tab } from '@headlessui/react'
import CardProduct from './CardProduct'
import HarmonikaCard from './CardProductHarmonika'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper'
import { productList } from '../../../data/productList'

const ProductSection = () => {
  return (
    <div className='h-full py-12'>
      <div className='px-4 pb-8  md:px-8 xl:px-40'>
        <h3 className='w-1/2 border-r-2 pr-14 font-brand-primary text-4xl font-semibold'>
          <span className='text-brand-primary'>Produk</span> Kami
        </h3>
      </div>

      <div className='px-4 pt-4 md:w-full  md:px-8'>
        <Tab.Group>
          <Tab.List className='flex h-12 w-full flex-row justify-center space-x-2 md:mx-auto md:h-16 md:max-w-fit md:rounded-full md:bg-brand-primary md:bg-opacity-5 md:px-4 md:py-3'>
            <Tab
              as='div'
              className={({ selected }) =>
                selected
                  ? 'flex items-center justify-center rounded-full bg-brand-primary bg-opacity-20 py-2 px-4 text-xl font-semibold text-brand-primary shadow-none outline-none transition-all duration-300 ease-in-out focus:shadow-none focus:outline-none md:cursor-pointer'
                  : ' flex items-center justify-center rounded-full bg-gray-200 py-2 px-4 text-base font-normal text-gray-500 shadow-none outline-none transition-all duration-300 ease-in-out focus:shadow-none focus:outline-none md:cursor-pointer'
              }
            >
              <p>Bronjong</p>
            </Tab>
            <Tab
              as='div'
              className={({ selected }) =>
                selected
                  ? 'flex items-center justify-center rounded-full bg-brand-primary bg-opacity-10 py-2 px-4 text-xl font-semibold text-brand-primary shadow-none outline-none transition-all duration-300 ease-in-out focus:shadow-none focus:outline-none md:cursor-pointer'
                  : 'text-gray-duration-300  flex items-center justify-center rounded-full bg-gray-200 py-2 px-4 text-base font-normal shadow-none outline-none outline-none transition-all duration-300 ease-in-out focus:shadow-none focus:outline-none md:cursor-pointer'
              }
            >
              <p>Kawat Harmonika</p>
            </Tab>
          </Tab.List>
          <Tab.Panel className='pt-6 '>
            <div className='md:hidden'>
              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
              >
                {productList.bronjong.map((product, index) => (
                  <SwiperSlide className='mb-11 ' key={product.id}>
                    <CardProduct product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='hidden md:block lg:hidden'>
              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                slidesPerView={2}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
              >
                {productList.bronjong.map((product, index) => (
                  <SwiperSlide className='mb-11 ' key={product.id}>
                    <CardProduct product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='hidden lg:block'>
              <Swiper
                slidesOffsetBefore={100}
                slidesOffsetAfter={100}
                spaceBetween={40}
                navigation={true}
                slidesPerView={'auto'}
                pagination={{
                  clickable: true,
                }}
              >
                {productList.bronjong.map((product, index) => (
                  <SwiperSlide className='mb-11 lg:max-w-xs  ' key={product.id}>
                    <CardProduct product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Tab.Panel>
          <Tab.Panel className='pt-6 '>
            <div className='md:hidden'>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
              >
                {productList.harmonika.map((product, index) => (
                  <SwiperSlide className='mb-11' key={product.id}>
                    <HarmonikaCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='hidden md:block lg:hidden'>
              <Swiper
                spaceBetween={20}
                slidesPerView={2}
                pagination={{
                  clickable: true,
                }}
              >
                {productList.harmonika.map((product, index) => (
                  <SwiperSlide className='mb-11' key={product.id}>
                    <HarmonikaCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='hidden lg:block'>
              <Swiper
                slidesOffsetBefore={100}
                slidesOffsetAfter={100}
                spaceBetween={40}
                navigation={true}
                slidesPerView={'auto'}
                pagination={{
                  clickable: true,
                }}
              >
                {productList.harmonika.map((product, index) => (
                  <SwiperSlide className='mb-11 lg:max-w-xs' key={product.id}>
                    <HarmonikaCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Tab.Panel>
        </Tab.Group>
      </div>
    </div>
  )
}

export default ProductSection
