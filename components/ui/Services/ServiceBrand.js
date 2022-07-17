import { BsTruck } from 'react-icons/bs'
import { MdOutlineVerified } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import CardService from './CardService'

const ServiceBrand = () => {
  return (
    <div className='h-full w-full bg-slate-50  px-4 py-5 md:px-8 xl:py-6 xl:px-40'>
      <h3 className='w-1/2 border-r-2 pr-14 font-brand-primary text-4xl font-semibold'>
        Kenapa <span className='text-brand-primary'>Memilih</span> Kami?
      </h3>
      <div className='mt-6 flex w-full flex-col  items-center gap-y-6 space-y-4 py-8 pt-4 md:max-h-full md:flex-row md:gap-y-0 md:gap-x-3 lg:space-y-0 lg:space-x-5 2xl:justify-center '>
        <CardService
          icon={<BsTruck />}
          title='Siap Antar'
          desc='Kami memiliki armada pengangkut untuk mengantar barang hingga ke tempat tujuan.'
        />
        <CardService
          icon={<MdOutlineVerified />}
          title='Kawat SNI'
          desc='Kami menggunakan kawat SNI untuk menjamin kualitas dan daya tahan produk.'
        />
        <CardService
          icon={<FaRegHandshake />}
          title='Harga Nego'
          desc='Kami memberikan harga kompetitif dan membuka negosiasi harga.'
        />
      </div>
    </div>
  )
}

export default ServiceBrand
