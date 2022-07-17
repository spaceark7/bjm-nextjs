import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper'
import Image from 'next/image'
import { projectSlider } from '../../data/productList'

const ProjectSection = () => {
  return (
    <div className='h-full w-full py-8 lg:min-h-screen'>
      <div className='px-4 pb-8  md:px-8 xl:px-40'>
        <h3 className='w-1/2 border-r-2 pr-14 font-brand-primary text-4xl font-semibold'>
          <span className='text-brand-primary'>Proyek</span> Kami
        </h3>
      </div>

      <div className='w-full overflow-hidden px-4  py-8 md:px-8 lg:hidden xl:px-40'>
        <div className='relative aspect-video h-60 w-screen'>
          <Image
            layout='fill'
            objectFit='contain'
            src='/images/indo.png'
            alt='indonesia map'
          />
        </div>
      </div>

      <div className='flex flex-wrap px-4 py-8  md:px-8 lg:hidden xl:px-40'>
        <div className='w-1/2 px-2 py-2'>
          <h1 className='font-brand-primary text-5xl font-semibold text-brand-primary md:font-bold'>
            12+
          </h1>
          <p className='md:font-semibold'>
            Daerah di indonesia telah kami kirim.
          </p>
        </div>
        <div className='w-1/2 px-2 py-2'>
          <h1 className='font-brand-primary text-5xl font-semibold text-brand-primary md:font-bold'>
            50+
          </h1>
          <p className='md:font-semibold'>Proyek telah memesan produk kami.</p>
        </div>
      </div>

      <div className='relative mt-8'>
        <div className='absolute top-0 left-0 z-20 hidden h-60 w-screen max-w-sm bg-gradient-to-r from-white   md:block md:h-96  md:w-1/12 lg:mx-auto lg:h-[60vh]   xl:h-[50vh] 2xl:min-h-[70vh] '></div>
        <div className='absolute top-0 right-0 z-20 hidden h-60 w-screen max-w-sm bg-gradient-to-l  from-white md:block md:h-96  md:w-1/12 lg:mx-auto lg:h-[60vh]   xl:h-[50vh] 2xl:min-h-[70vh] '></div>
        <Swiper
          className='xl:px-40'
          loop={true}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {projectSlider.map((item) => (
            <SwiperSlide key={item.name} className='mb-11'>
              <div className='relative h-60 w-full transition duration-150 ease-in-out hover:scale-105 hover:shadow-md md:h-96 lg:mx-auto lg:h-[60vh]  lg:max-w-5xl xl:h-[50vh] 2xl:min-h-[70vh] 2xl:max-w-full'>
                <Image
                  className='rounded-md  lg:object-scale-down'
                  layout='fill'
                  objectFit='cover'
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='md:text:2xl px-6 pt-4 pb-4 font-brand-text text-xl md:max-w-lg md:px-8 xl:max-w-4xl xl:px-40'>
        <h1 className='md:font-semibold '>
          Kami memberikan yang terbaik untuk pelanggan dengan harga yang
          terjangkau.
        </h1>
      </div>

      <div className='hidden min-h-max py-12 lg:flex lg:flex-row xl:px-40'>
        <div className='flex w-2/3 items-center  justify-center px-4 py-8 md:px-8 '>
          <div className='relative h-60 w-screen max-w-md  object-right md:h-full lg:max-h-60 lg:object-center xl:max-w-2xl'>
            <Image
              objectFit='contain'
              layout='fill'
              src='/images/indo.png'
              alt='indonesia map'
            />
          </div>
        </div>

        <div className='flex w-1/3 flex-wrap px-4  py-8  md:px-8 lg:flex-col lg:items-center lg:justify-center lg:space-y-6'>
          <div className='w-full px-2 py-2'>
            <h1 className='font-brand-primary text-5xl font-semibold text-brand-primary md:font-bold'>
              12+
            </h1>
            <p className='md:font-semibold'>
              Daerah di indonesia telah kami kirim.
            </p>
          </div>
          <div className='w-full px-2 py-2'>
            <h1 className='font-brand-primary text-5xl font-semibold text-brand-primary md:font-bold'>
              50+
            </h1>
            <p className='md:font-semibold'>
              Proyek telah memesan produk kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
