import Link from 'next/link'
import { useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'
const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => router.push('/'), 5000)
  })
  return (
    <div className='h-screen w-full bg-white'>
      <div className='flex h-full items-center justify-center'>
        <div className='pb-6'>
          <h1 className='text-3xl font-bold text-brand-primary'>404</h1>
          <p className='mb-4 text-xl font-bold text-brand-primary'>
            Halaman tidak ditemukan
          </p>
          <div className='flex w-fit items-center space-x-2 rounded-lg bg-gray-200 px-4 py-2 font-brand-primary font-bold'>
            <BsArrowLeft />
            <Link href={'/'}>Kembali ke halaman utama</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
