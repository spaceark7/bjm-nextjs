import { MdVerified, MdCheck } from 'react-icons/md'
import { HiOutlineSelector } from 'react-icons/hi'
import CardProduct from '../../../components/ui/ProductSection/CardProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { productList } from '../../../data/productList'
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { NextSeo } from 'next-seo'

const DetailPage = ({ data, recommended }) => {
  const full_data = [data, ...recommended]

  const focus = useRef()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState([full_data[0]])
  const [note, setNote] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    let message = `Halo, Saya ${name} dari perusahaan ${company}. Ingin menanyakan penawaran harga mengenai produk ${selected
      .map((item) => item.name)
      .join(', ')}. `
    let encoded = encodeURI(message)
    let url = `https://wa.me/+6282124603889?text=${encoded}%0A${encodeURI(
      'Note customer: '
    )}${encodeURI(note)}%0A${encodeURI('Terima Kasih.')}`
    window.open(url, '_blank')
    setCompany('')
    setSelected([full_data[0]])
    setNote('')
    setIsOpen(false)
  }

  return (
    <>
      <NextSeo
        title={'Jual ' + data.name + ' dengan kualitas terbaik dan murah.'}
        description={
          'Jual ' + data.name + ' dengan kualitas terbaik dan murah.'
        }
        openGraph={{
          type: 'website',
          url: 'https://jualbronjong.online/produk/bronjong',
          title: `${data.name}`,
          description: `Jual ${data.name}  dengan kualitas terbaik dan murah.`,
          images: [
            {
              url: `https://jualbronjong.online/${data.image}`,
              width: 800,
              height: 600,
              alt: `${data.name}`,
            },
          ],
        }}
      />
      <Transition
        show={isOpen}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
        as={Fragment}
      >
        <Dialog
          initialFocus={focus}
          className='fixed inset-0 z-40 overflow-y-auto '
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className='flex min-h-screen items-center justify-center px-4'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            <div className='relative mx-auto min-h-[50vh] max-w-md overflow-x-hidden rounded bg-white px-8 pt-8 pb-2'>
              <form onSubmit={handleSubmit}>
                <div>
                  <Dialog.Title
                    className={'text-2xl font-bold text-brand-primary'}
                  >
                    Beritahu Kami Siapa Anda
                  </Dialog.Title>
                  <Dialog.Description className='pr-3 text-base '>
                    Untuk memudahkan kami menghubungi anda
                  </Dialog.Description>
                </div>
                <div className='grid-row-2 grid max-w-sm gap-4 pt-6'>
                  <div className='max-w-sm'>
                    <label
                      htmlFor='name'
                      className='font-semibold text-gray-500'
                    >
                      Nama Anda
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                      ref={focus}
                      type='text'
                      id='name'
                      name='name'
                      value={name}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm'
                    />
                  </div>
                  <div className='max-w-sm'>
                    <label
                      htmlFor='company'
                      className='font-semibold text-gray-500'
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      required={true}
                      type='text'
                      id='company'
                      name='company'
                      value={company}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm'
                    />
                  </div>
                  <div className='max-w-sm'>
                    <Listbox multiple value={selected} onChange={setSelected}>
                      <div className='relative mt-1 '>
                        <Listbox.Label
                          as='div'
                          className={'font-semibold text-gray-500'}
                        >
                          Pilih Produk
                        </Listbox.Label>
                        <Listbox.Button className='relative w-full max-w-sm cursor-default truncate rounded-lg bg-white py-2 pl-3 pr-10 text-left font-semibold text-gray-500 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                          <span className='block  truncate'>
                            {selected.map((item) => item.name).join(', ')}
                          </span>
                          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                            <HiOutlineSelector aria-hidden='true' />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave='transition ease-in duration-100'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                            {full_data.map((product, index) => (
                              <Listbox.Option
                                key={product.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'text-gray-900'
                                  }`
                                }
                                value={product}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {product.name}
                                    </span>
                                    {selected ? (
                                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 font-bold text-blue-600'>
                                        <MdCheck aria-hidden='true' />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  <div className='max-w-sm'>
                    <label
                      htmlFor='name'
                      className='font-semibold text-gray-500'
                    >
                      Pesan
                    </label>
                    <textarea
                      onChange={(e) => setNote(e.target.value)}
                      maxLength={200}
                      rows={3}
                      id='name'
                      name='name'
                      value={note}
                      className='mt-1 block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm'
                    />
                  </div>
                </div>
                <div className='flex w-full justify-end space-x-2 pt-10 pb-4'>
                  <button
                    onClick={() => setIsOpen(false)}
                    className='w-fit rounded-md  py-2 px-4 text-center font-semibold tracking-wider text-gray-500 disabled:bg-opacity-60'
                  >
                    <h2>Batalkan</h2>
                  </button>
                  <button className='w-fit rounded-md bg-brand-primary py-2 px-4 text-center font-semibold tracking-wider text-white disabled:bg-opacity-60'>
                    <h2>Selesai</h2>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* small screen */}
      <div className='h-full w-full md:hidden'>
        <div className='fixed -z-10 h-[50vh] w-full '>
          <div className='relative aspect-square h-full'>
            <Image
              layout='fill'
              objectFit='cover'
              src={data.Image}
              alt={data.name}
            />
          </div>
        </div>
        <div className='-z-10 h-[50vh] w-full bg-transparent'></div>
        <div className='bg-white'>
          <div className='z-10 h-full w-full -translate-y-8 transform rounded-t-3xl bg-white px-4 py-6'>
            <h1 className='w-full font-brand-primary text-xl font-semibold '>
              {data.name}
            </h1>

            <div className='pt-8 pb-4 text-xl font-semibold tracking-wider text-gray-900  '>
              <h1>Spesifikasi Lengkap</h1>
            </div>

            <div className='border-t-2  border-gray-300'>
              <div className='grid grid-cols-1 py-5 px-4'>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Volume</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.volume}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Dimensi</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.dimension.length} x
                    {data.specification.dimension.width} x
                    {data.specification.dimension.height}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Kalang</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.frame}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Tebal Kawat</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.wire}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>
                    Sertifikasi Kawat SNI
                  </h3>
                  <div className='flex items-center space-x-1 font-semibold text-brand-primary '>
                    <MdVerified className='text-lg' />
                    <p className=''>Terverifikasi</p>
                  </div>
                </div>
                <div className='h-full w-full'>
                  <div
                    onClick={() => setIsOpen(true)}
                    className='rounded-md bg-brand-primary py-2 px-2 text-center font-semibold text-white'
                  >
                    <h2>Minta Penawaran</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='pb-4'>
              <div>
                <h1 className='text-xl font-semibold tracking-wider text-gray-900  '>
                  Lihat Bronjong Lainnya
                </h1>
                <div className='pt-4'>
                  <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                  >
                    {recommended.map((product, index) => (
                      <SwiperSlide className='mb-11' key={product.id}>
                        <CardProduct product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Dialog
          initialFocus={focus}
          className='fixed z-10 inset-0 overflow-y-auto'
          open={status}
          onClose={() => setStatus(false)}
        >
          <div className='flex items-center justify-center min-h-screen px-4'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            <div className='relative bg-white min-h-[50vh] rounded max-w-sm mx-auto pt-8 pb-2 px-8'>
              <form onSubmit={handleSubmit}>
                <div>
                  <Dialog.Title
                    className={'text-2xl text-brand-primary font-bold'}
                  >
                    Beritahu Kami Siapa Anda
                  </Dialog.Title>
                  <Dialog.Description className='text-base pr-3 '>
                    Untuk memudahkan kami menghubungi anda
                  </Dialog.Description>
                </div>
                <div className='grid grid-row-2 gap-4 pt-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='font-semibold text-gray-500'
                    >
                      Silahkan masukan nama anda
                    </label>
                    <input
                      required={true}
                      ref={focus}
                      type='text'
                      id='name'
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                      className='mt-1 focus:ring-brand-primary focus:border-brand-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='company'
                      className='font-semibold text-gray-500'
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      required={true}
                      type='text'
                      id='company'
                      name='company'
                      className='mt-1 focus:ring-brand-primary focus:border-brand-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='w-full pt-10 pb-4 flex justify-end'>
                  <button
                    disabled={
                      name.length < 4 ? true : company === '' ? true : false
                    }
                    onClick={() => setOpen(false)}
                    className='bg-brand-primary w-fit font-semibold disabled:bg-opacity-60 rounded-md text-center py-2 px-4 tracking-wider text-white'
                  >
                    <h2>Kirim Pesan</h2>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog> */}
      </div>

      {/* Big Screen */}

      <div className='hidden h-full w-full md:block'>
        <div className='grid grid-cols-2 gap-x-4 md:min-h-fit md:px-8 md:py-8 lg:gap-x-6 lg:py-9 xl:px-40'>
          <div className='relative -z-10 aspect-square min-h-fit w-full md:h-[50vh] md:max-w-md lg:min-h-[65vh] lg:max-w-lg lg:shadow-xl xl:h-[40vh] xl:max-w-3xl'>
            <Image
              className='rounded-lg'
              layout='fill'
              objectFit='cover'
              src={data.Image}
              alt={data.name}
            />
          </div>
          <div className='lg:pt-2'>
            <h1 className='w-ful font-brand-primary text-2xl font-semibold lg:text-3xl '>
              {data.name}
            </h1>

            <div className='pt-8 pb-4 text-xl font-semibold tracking-wider text-gray-900  '>
              <h1>Spesifikasi Lengkap</h1>
            </div>

            <div className='border-t-2  border-gray-300'>
              <div className='grid grid-cols-1 py-5 px-4 lg:grid-cols-2'>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Volume</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.volume}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Dimensi</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.dimension.length} x
                    {data.specification.dimension.width} x
                    {data.specification.dimension.height}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Kalang</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.frame}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>Tebal Kawat</h3>
                  <p className='font-semibold text-gray-900'>
                    {data.specification.wire}
                  </p>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>
                    Sertifikasi Kawat SNI
                  </h3>
                  <div className='flex items-center space-x-1 font-semibold text-brand-primary '>
                    <MdVerified className='text-lg' />
                    <p className=''>Terverifikasi</p>
                  </div>
                </div>
                <div className='h-full  w-full py-4 hover:cursor-pointer lg:col-span-2 xl:max-w-lg'>
                  <div
                    onClick={() => setIsOpen(true)}
                    className='rounded-md bg-brand-primary py-2 px-4 text-center font-semibold text-white hover:cursor-pointer'
                  >
                    <h2>Minta Penawaran</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white'>
          <div className='z-10 h-full w-full -translate-y-8 transform rounded-t-3xl bg-white py-6'>
            <div className='pb-4 md:px-8 xl:px-40'>
              <div>
                <h1 className='text-xl font-semibold tracking-wider text-gray-900  '>
                  Lihat Bronjong Lainnya
                </h1>
                <div className='pt-4 lg:hidden'>
                  <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={2}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                  >
                    {recommended.map((product, index) => (
                      <SwiperSlide className='mb-11' key={product.id}>
                        <CardProduct product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className='hidden pt-10 lg:block'>
                  <Swiper
                    spaceBetween={24}
                    navigation
                    slidesPerView={3}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                  >
                    {recommended.map((product, index) => (
                      <SwiperSlide className='mb-11 ' key={product.id}>
                        <div className='pl-8'>
                          <CardProduct product={product} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = productList.bronjong.map((product) => ({
    params: { detailId: product.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { detailId } = params
  const data = productList.bronjong.find((product) => product.id === detailId)
  const recommended = productList.bronjong.filter(
    (product) => product.id !== detailId
  )
  return {
    props: {
      data,
      recommended,
    },
  }
}

export default DetailPage
