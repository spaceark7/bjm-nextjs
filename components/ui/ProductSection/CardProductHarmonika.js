import Image from 'next/image'
import Link from 'next/link'

const HarmonikaCard = ({ product }) => {
  return (
    <div className='flex w-full flex-col md:max-w-sm lg:max-w-sm'>
      <div className='rounded-sm  border-2 bg-white px-4 pt-4 shadow-md lg:h-full'>
        <div className='flex w-full items-center justify-center'>
          <div className='relative h-56 w-full rounded-xl transition duration-150 ease-in-out hover:scale-110 hover:shadow-md  lg:max-h-44'>
            <Image
              className='rounded-xl'
              layout='fill'
              objectFit={'cover'}
              src={product.Image}
              alt={product.name}
            />
          </div>
        </div>

        <div className='w-full border-t-2 pt-6  pb-2'>
          <h1 className='font-brand-primary text-xl font-bold'>
            {product.name}
          </h1>
          <div className='py-1 '>
            <p className='font-brand-primary'>
              Tebal Kawat : {product.specification.thickness}
            </p>
            <p className='font-brand-primary'>
              Variasi Ukuran : {product.specification.size.length} Item
            </p>
          </div>
        </div>
        <Link href={`/produk/harmonika/${product.id}`}>
          <div className='mx-auto mt-2 mb-5 w-full rounded-lg bg-brand-primary bg-opacity-10 px-4 py-2 text-center text-brand-primary  lg:cursor-pointer'>
            <h2 className='font-brand-primary font-semibold'>
              Lihat Spesifikasi lengkap
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HarmonikaCard
