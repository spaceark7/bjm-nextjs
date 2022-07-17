import Image from 'next/image'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='h-full w-full  bg-brand-primary py-4 px-2 md:px-8 xl:px-40 '>
      <div className=' flex w-1/3 w-full items-center justify-start py-5 px-2 md:h-full lg:max-h-56'>
        <div className='relative aspect-video w-full lg:w-1/3'>
          <Image
            layout='fill'
            objectFit='contain'
            src='/images/BJM_NAV.webp'
            alt=''
          />
        </div>
      </div>
      <div className='w-full px-2 py-4 text-white'>
        <h1 className='text-lg'>Temukan Kami di Jejaring Sosial</h1>
        <div className='flex space-x-4 px-4 py-4 opacity-80'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.facebook.com/BJMCianjur/'
          >
            <div className='rounded-full bg-white py-2 px-2'>
              <FaFacebookF className='text-3xl text-brand-primary' />
            </div>
          </a>
          <div className='rounded-full bg-white py-2 px-2'>
            <a rel='noreferrer' target='_blank' href='https://g.co/kgs/kYUSgS'>
              <FaGoogle className='text-3xl text-brand-primary' />
            </a>
          </div>
        </div>
      </div>

      <div className='mt-4 flex w-full flex-col py-4 text-center text-sm text-white '>
        <p className='opacity-70'>This Website created by</p>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.instagram.com/explorecreativedesign/'
        >
          <p className='text-lg font-semibold text-yellow-400'>
            Explore Creative Design
          </p>
        </a>
      </div>
    </div>
  )
}

export default Footer
