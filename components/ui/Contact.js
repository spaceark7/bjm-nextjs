import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='h-full w-full bg-slate-50 py-8 2xl:py-32'>
      <div className='px-4 pb-8 md:px-8 xl:px-40'>
        <h3 className='mx-auto w-1/2 border-r-2 pr-14 text-center font-brand-primary text-4xl font-semibold'>
          <span className='text-brand-primary'>Hubungi</span> Kami
        </h3>
        <div className='py-2 '>
          <p className='mx-auto text-center lg:max-w-lg'>
            Untuk penawaran dan pertanyaan seputar produk silahkan hubungi kami
            memalui :
          </p>
        </div>
      </div>

      <div className='flex flex-col space-y-8 px-4 md:px-8 lg:min-h-[40vh] lg:flex-row lg:justify-between lg:space-y-0 lg:py-12 xl:px-40 2xl:min-h-fit  '>
        <a target='_blank' rel='noreferrer' href='https://wa.me/+6282124603889'>
          <div className='flex flex-row items-center justify-items-start space-x-2 text-xl lg:transition-all lg:duration-200 lg:ease-in-out lg:hover:-translate-y-2 lg:hover:translate-x-2 lg:hover:rounded-full lg:hover:bg-brand-primary lg:hover:py-2 lg:hover:px-4 lg:hover:text-white 2xl:text-2xl'>
            <BsWhatsapp />

            <p className='font-brand-primary tracking-wider'>0821-2460-3889</p>
          </div>
        </a>
        <a target={'_blank'} rel='noreferrer' href='tel:+6282124603889'>
          <div className='flex items-center space-x-2 text-xl lg:transition-all lg:duration-200 lg:ease-in-out lg:hover:-translate-y-2 lg:hover:translate-x-2 lg:hover:rounded-full lg:hover:bg-brand-primary lg:hover:py-2 lg:hover:px-4 lg:hover:text-white 2xl:text-2xl '>
            <BsTelephone />

            <p className='font-brand-primary tracking-wider'>0821-2460-3889</p>
          </div>
        </a>
        <a
          target={'_blank'}
          rel='noreferrer'
          href='mailto:aris.yuni.13@gmail.com'
        >
          <div className='flex items-center space-x-2 text-xl lg:transition-all lg:duration-200 lg:ease-in-out lg:hover:-translate-y-2 lg:hover:translate-x-2 lg:hover:rounded-full lg:hover:bg-brand-primary lg:hover:py-2 lg:hover:px-4 lg:hover:text-white 2xl:text-2xl'>
            <IoMailOutline />

            <p className='font-brand-primary tracking-wider'>
              aris.yuni.13@gmail.com
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact
