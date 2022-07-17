import Image from 'next/image'
import { MdOutlinePlace } from 'react-icons/md'

const About = () => {
  return (
    <div className='h-full w-full py-8 lg:min-h-screen lg:py-11 2xl:min-h-fit '>
      <div className='px-4 pb-8 md:px-8 xl:mb-6 xl:px-40'>
        <h3 className='w-1/2 border-r-2 pr-14 font-brand-primary text-4xl font-semibold'>
          <span className='text-brand-primary'>Tentang</span> Kami
        </h3>
      </div>

      <div className='overflow-hidden object-cover object-right px-4 pt-6 md:px-8 lg:hidden'>
        <div className='relative aspect-square h-60 w-full object-cover object-right'>
          <Image
            className='rounded-md shadow-sm'
            layout='fill'
            objectFit='cover'
            src='/images/about.webp'
            alt='indonesia map'
          />
        </div>
      </div>

      <div className='w-full px-4 pt-8 pb-6 md:px-8 lg:hidden'>
        <h1 className='font-brand-primary text-2xl font-semibold text-brand-primary md:text-4xl'>
          Berkah Jaya Mandiri
        </h1>
        <p className='pt-3 leading-5 tracking-wide md:font-semibold'>
          Kami adalah UKM yang bergerak dibidang manufaktur pembuatan bronjong
          yang berasal dari kota cianjur. Beroperasi lebih dari 5 tahun. Visi
          kmi adalah untuk memajukan daerah dan memberikan kontribusi untuk
          pembangunan indonesia.
        </p>
        <a
          className='mt-6'
          target={'_blank'}
          rel='noreferrer'
          href='https://www.google.com/maps?q=berkah+jaya+mandiri+bronjong&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjgovHV9Pn0AhVtSmwGHdquAwAQ_AUoAnoECAIQBA'
        >
          <div className='mt-6 flex w-full items-center justify-center space-x-2 rounded-md bg-brand-primary px-4 py-4 text-white'>
            <MdOutlinePlace className='text-2xl' />
            <h1 className='font-brand-primary font-semibold text-white '>
              Lihat Lokasi Kami di Google Maps
            </h1>
            {/* <div className='w-full h-[40]'>
            <GoogleMapReact
              bootstrapURLKeys={{
    
              }}
              defaultCenter={{
                lat: -6.786761009782866,
                lng: 107.06439678205568,
              }}
              zoom={10}
            ></GoogleMapReact>
          </div> */}
          </div>
        </a>
      </div>

      <div className='hidden grid-flow-col space-x-5 px-8 lg:grid xl:px-40 2xl:max-h-[50vh] 2xl:grid-cols-3 2xl:space-x-10'>
        <div className='w-full px-4 shadow-lg md:px-8 md:px-0 lg:col-span-2 xl:max-h-[50vh] 2xl:relative'>
          <div className='relative aspect-square h-[320px] w-screen max-w-xl shadow-lg'>
            <Image
              className='rounded-md'
              layout='fill'
              objectFit='cover'
              src='/images/about.webp'
              alt='indonesia map'
            />
          </div>
        </div>
        <div className='py-4 xl:flex xl:flex-col 2xl:justify-center '>
          <h1 className='font-brand-primary text-2xl font-semibold text-brand-primary md:text-4xl 2xl:text-6xl'>
            Berkah Jaya Mandiri
          </h1>
          <p className='pt-3 leading-5 leading-6 tracking-wide md:font-semibold'>
            Kami adalah UKM yang bergerak dibidang manufaktur pembuatan bronjong
            yang berasal dari kota cianjur. Beroperasi lebih dari 5 tahun. Visi
            kami adalah untuk memajukan daerah dan memberikan kontribusi untuk
            pembangunan indonesia.
          </p>
          <a
            className='mt-6'
            target={'_blank'}
            rel='noreferrer'
            href='https://www.google.com/maps?q=berkah+jaya+mandiri+bronjong&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjgovHV9Pn0AhVtSmwGHdquAwAQ_AUoAnoECAIQBA'
          >
            <div className='mt-6 flex w-2/3 items-center justify-center space-x-2 rounded-md bg-brand-primary px-4 py-4 text-white lg:w-full 2xl:w-2/3'>
              <MdOutlinePlace className='text-2xl' />
              <h1 className='font-brand-primary font-semibold text-white '>
                Lihat Lokasi Kami di Google Maps
              </h1>
              {/* <div className='w-full h-[40]'>
            <GoogleMapReact
              bootstrapURLKeys={{
    
              }}
              defaultCenter={{
                lat: -6.786761009782866,
                lng: 107.06439678205568,
              }}
              zoom={10}
            ></GoogleMapReact>
          </div> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
