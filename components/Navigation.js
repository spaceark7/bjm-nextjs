import { Disclosure, Popover, Transition } from '@headlessui/react'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'
import { productList } from '../data/productList'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import NavMenu from './NavMenu'

const Navigation = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  let message = `Halo, Saya tertarik dan ingin menanyakan tentang produk yang bapak jual`
  let encoded = encodeURI(message)
  const [isOpen, setOpen] = useState(false)
  return (
    <header className='relative sticky top-0 left-0 z-30 flex h-16 w-full justify-between border-b-2 border-white border-opacity-30 bg-brand-primary px-2 lg:px-4 xl:px-40'>
      {
        <Link
          onClick={(isOpen) => {
            if (isOpen) {
              setOpen(false)
            }
          }}
          href={'/'}
          scroll={false}
        >
          <div className=' z-20 flex h-full w-fit items-center justify-start py-5 px-2'>
            <div className='relative aspect-video h-10 w-full hover:cursor-pointer'>
              <Image
                layout='fill'
                objectFit='contain'
                src='/images/BJM_NAV.webp'
                alt=''
              />
            </div>
          </div>
        </Link>
      }
      <div
        onClick={() => setOpen(!isOpen)}
        className='z-20 flex h-full  w-[48px] w-12 w-12 items-center justify-center lg:hidden'
      >
        <Hamburger
          color='#fff'
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          duration={0.8}
        />
      </div>
      {/* Small SCreen menu */}
      {isOpen ? (
        <div className='mobile-menu absolute left-0 top-16  h-screen  w-full -translate-y-0 overflow-y-scroll bg-gray-50 pb-20 pb-28   transition duration-1000 ease-in-out'>
          <div className='min-h-screen w-full overflow-y-auto  '>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-600 opacity-100'
                        : 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-900 opacity-80'
                    }`}
                  >
                    <p>Bronjong</p>

                    <FaChevronDown
                      className={`${
                        open
                          ? 'rotate-180 transform transition duration-500 ease-out'
                          : 'transform transition duration-500 ease-out '
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-500 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-300 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className={'w-full px-6 pb-10 '}>
                      <ul className='space-y-4 text-lg font-semibold text-gray-900'>
                        {productList.bronjong.map((item, index) => (
                          <Link
                            key={item.id}
                            href={`/produk/bronjong/${item.id}`}
                          >
                            <li
                              onClick={() => setOpen(false)}
                              className='py-2 opacity-70 hover:opacity-100'
                            >
                              {item.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-600 opacity-100'
                        : 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-900 opacity-80'
                    }`}
                  >
                    <p>Kawat Harmonika</p>

                    <FaChevronDown
                      className={`${
                        open
                          ? 'rotate-180 transform transition duration-500 ease-out'
                          : 'transform transition duration-500 ease-out '
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-500 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-500 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className={'w-full px-6 pb-10 pt-4'}>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600'>
                        {productList.harmonika.map((item, index) => (
                          <Link
                            key={item.id}
                            href={`/produk/harmonika/${item.id}`}
                          >
                            <li
                              onClick={() => {
                                setOpen(false)
                              }}
                              className='py-2 opacity-70 hover:opacity-100'
                            >
                              {item.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <a
              rel='noreferrer'
              target='_blank'
              href={`https://wa.me/+6282124603889?text=${encoded}`}
            >
              <div className='h-full w-full py-4 px-6'>
                <p className='text-2xl font-bold text-green-800 opacity-80 hover:opacity-100'>
                  Kirim WhatsApp
                </p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className='mobile-menu absolute left-0 top-0 z-0 w-full -translate-y-full bg-brand-primary pt-12 pb-20 transition-all duration-1000 ease-in-out'>
          <div className='min-h-[100vh] w-full overflow-y-auto  '>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-600 opacity-100'
                        : 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-900 opacity-80'
                    }`}
                  >
                    <p>Bronjong</p>

                    <FaChevronDown
                      className={`${
                        open
                          ? 'rotate-180 transform transition duration-500 ease-out'
                          : 'transform transition duration-500 ease-out '
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter='transition duration-500 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-300 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className={'w-full px-6 pb-10 '}>
                      <ul className='space-y-4 text-lg font-semibold text-gray-900'>
                        {productList.harmonika.map((item, index) => (
                          <Link
                            key={item.id}
                            href={`/produk/bronjong/${item.id}`}
                          >
                            <li
                              onClick={() => setOpen(!open)}
                              className='py-2 opacity-70 hover:opacity-100'
                            >
                              {item.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-600 opacity-100'
                        : 'flex w-full justify-between py-4 px-6 text-2xl font-bold text-gray-900 opacity-80'
                    }`}
                  >
                    <p>Kawat Harmonika</p>

                    <FaChevronDown
                      className={`${
                        open
                          ? 'rotate-180 transform transition duration-500 ease-out'
                          : 'transform transition duration-500 ease-out '
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-500 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-500 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className={'w-full px-6 pb-10 pt-4'}>
                      {/* <ul className='space-y-4 text-lg font-semibold text-gray-600'>
                        {productList.harmonika.map((item, index) => (
                          <li key={item.id}>{item.name}</li>
                          // <Link
                          //   key={item.id}
                          //   href={`/produk/harmonika/${index}`}
                          // >
                          //   <li className='py-2 opacity-70 hover:opacity-100'>
                          //     {item.name}
                          //   </li>
                          // </Link>
                        ))}
                      </ul> */}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <div className='h-full w-full py-4 px-6'>
              <p className='text-2xl font-bold text-green-800 opacity-80 hover:opacity-100'>
                Kirim WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Big Screen Menu */}
      <div className='hidden w-2/3 items-center justify-end space-x-10 lg:block lg:flex lg:flex-row'>
        <Popover.Group
          className={
            'relative items-center justify-center space-x-10 lg:flex lg:flex-row'
          }
        >
          <NavMenu title={'Bronjong'}>
            {productList.bronjong.map((item, index) => (
              <Link key={item.id} href={`/produk/bronjong/${item.id}`}>
                <p className='cursor-pointer rounded-full py-2 px-4 font-bold text-brand-primary transition duration-300  hover:bg-brand-primary/20 hover:ease-out'>
                  {item.name}
                </p>
              </Link>
            ))}
          </NavMenu>
          <NavMenu title={'Kawat Harmonika'}>
            {productList.harmonika.map((item, index) => (
              <Link
                key={item.id}
                href={`/produk/harmonika/${item.id}`}
                onClick={() => close()}
              >
                <p className='cursor-pointer rounded-full py-2 px-4 font-bold text-brand-primary transition-all duration-300   hover:bg-brand-primary/20 hover:ease-out'>
                  {item.name}
                </p>
              </Link>
            ))}
          </NavMenu>
        </Popover.Group>
      </div>
    </header>
  )
}

export default Navigation
