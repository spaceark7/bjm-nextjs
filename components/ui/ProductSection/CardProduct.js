import Image from 'next/image'
import Link from 'next/link'

const CardProduct = ({ product }) => {
  return (
    <div className='flex w-full flex-col md:max-w-xs lg:max-w-sm'>
      <div className='rounded-lg  border-2 bg-white px-4 pt-4 shadow-md  lg:h-full '>
        <div className='flex w-full items-center justify-center rounded-md '>
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

        <div className='w-full border-t-2 pt-6  pb-2 '>
          <h1 className='font-brand-primary text-xl font-bold'>
            {product.name}
          </h1>
          <div className='py-1'>
            <p className='font-brand-text'>
              Volume : {product.specification.volume}
            </p>
            <p className='font-brand-text'>
              Dimensi : {product.specification.dimension.length} x{' '}
              {product.specification.dimension.width} x{' '}
              {product.specification.dimension.height}
            </p>
          </div>
        </div>
        <Link href={`/produk/bronjong/${product.id}`}>
          <div className='mx-auto mt-2 mb-5 w-full rounded-lg bg-brand-primary bg-opacity-10 px-4 py-2 text-center text-brand-primary  lg:cursor-pointer'>
            <h2 className='font-brand-text font-semibold'>
              Lihat Spesifikasi lengkap
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CardProduct
