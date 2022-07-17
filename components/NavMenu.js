import { Popover, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

const NavMenu = ({ children, title }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <Popover as='div' className={'relative'}>
      {({ open }) => (
        <>
          <Popover.Button
            onClick={() => setIsShown(!isShown)}
            className={`${
              isShown
                ? 'flex items-center space-x-2 rounded-full bg-[#7a8cc2]/25 py-2  px-4 font-bold text-white backdrop-blur-xl xl:text-base'
                : ' flex items-center space-x-2 rounded-full py-2  px-4 font-bold text-white xl:text-base'
            }   focus:outline-none focus:ring-0`}
          >
            <span>{title}</span>
            <FaChevronDown
              className={`${
                isShown
                  ? '-rotate-180 transform transition-all duration-200 ease-in'
                  : 'transition-all duration-200 ease-in'
              }`}
            />
          </Popover.Button>
          <Popover.Panel
            static
            className={`
              absolute -left-1/2 top-12 z-20 h-full w-screen max-w-sm transform`}
          >
            {({ close }) => (
              <Transition
                show={isShown}
                enter='transition duration-200 ease-in'
                enterFrom='transform  opacity-0 ease-in'
                enterTo='transform opacity-100 ease-out'
                leave='transition duration-75 ease-in'
                leaveFrom='transform opacity-100 ease-in'
                leaveTo='transform  opacity-0 ease-out'
              >
                <div
                  onMouseLeave={() => setIsShown(false)}
                  className='max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'
                >
                  <div
                    onClick={() => setIsShown(false)}
                    className='relative grid space-y-3 bg-white p-7 lg:grid-cols-1 '
                  >
                    {children}
                  </div>
                </div>
              </Transition>
            )}
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default NavMenu
