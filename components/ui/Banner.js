import Image from 'next/image'

const Banner = () => {
  const handleWhatsApp = (e) => {
    e.preventDefault()
    const message = `Halo, Saya ingin menanyakan mengenai produk yang bapak jual.`
    const encoded = encodeURI(message)
    const url = `https://wa.me/+6282124603889?text=${encoded}`
    window.open(url, '_blank')
  }
  return (
    <section className='banner z-0 flex h-[80vh] flex-col justify-center px-4 sm:h-screen sm:pb-11 md:h-full md:justify-start md:px-8 lg:min-h-[60vh] lg:flex-row lg:pb-8 xl:px-40 2xl:min-h-fit 2xl:pb-52'>
      <div className='w-1/2 py-4 md:w-1/3 lg:hidden'>
        <div className='relative h-fit w-full'>
          <Image
            layout='fill'
            objectFit='contain'
            src='/images/main_logo.webp'
            alt='logo bjm'
          />
        </div>
      </div>
      <div className='pb-4 pt-4 lg:hidden '>
        <h1 className='font-brand-primary text-4xl font-bold text-brand-primary md:max-w-md md:text-5xl'>
          Produsen Bronjong Terbaik.
        </h1>
        <p className='py-4 pr-8 font-brand-text text-base leading-5 tracking-tight md:max-w-md md:text-lg md:font-semibold md:tracking-wider'>
          Kami berkomitmen untuk mengutamakan{' '}
          <strong className='text-brand-primary'>
            kualitas dan daya tahan
          </strong>{' '}
          produk untuk hasil yang terbaik.
        </p>
      </div>
      <div className='hidden h-full w-1/2 lg:block lg:h-full lg:py-9'>
        <div className='h-full w-1/2 py-4 md:w-1/3'>
          <div className='relative z-0 h-16 w-40'>
            <Image
              className='-z-20'
              layout='fill'
              objectFit='contain'
              src='/images/main_logo.webp'
              alt='logo bjm'
            />
          </div>
        </div>
        <div className=' pb-6 pt-4 '>
          <h1 className='font-brand-primary text-4xl font-bold text-brand-primary md:max-w-md md:text-5xl 2xl:max-w-lg 2xl:text-6xl'>
            Produsen Bronjong Terbaik.
          </h1>
          <p className='py-4 pr-8  text-base leading-5 tracking-tight md:max-w-md md:text-lg  md:tracking-wide'>
            Kami berkomitmen untuk mengutamakan{' '}
            <strong className='text-brand-primary'>
              kualitas dan daya tahan
            </strong>{' '}
            produk untuk hasil yang terbaik.
          </p>
          <button
            onClick={handleWhatsApp}
            className='mt-6 rounded-full border-2 border-brand-primary bg-none py-3 px-4 font-bold tracking-wide text-brand-primary transition-all duration-200 ease-out hover:bg-brand-primary hover:text-white focus:ring-1 focus:ring-brand-primary'
          >
            WhatsApp Sekarang
          </button>
        </div>
      </div>
      <div className='h-full w-full lg:relative lg:h-full lg:w-1/2 lg:py-11 '>
        <div className='relative aspect-square h-fit w-full md:mx-auto md:w-screen md:max-w-md lg:mt-10 lg:min-h-max lg:overflow-hidden  '>
          <Image
            layout='fill'
            objectFit='contain'
            src='/images/prod.webp'
            alt='bronjong_vector'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
