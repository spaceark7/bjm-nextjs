import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'

const UsePageTransitionHooks = () => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }
    const handleStop = () => {
      setTimeout(() => setLoading(false), 200)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return (
    <div
      className={`${
        loading ? 'z-20 block' : 'hidden'
      } absolute left-0 top-0  h-full w-full bg-white`}
    >
      <div className='fixed z-50 flex h-screen w-full items-center bg-white'>
        <div className='mx-auto mb-12 flex max-w-lg flex-col justify-center'>
          <UseAnimations
            className='mx-auto'
            animation={loading2}
            fillColor='#21409a'
            loop={true}
            size={56}
          />
          <h1 className='font-brand-primary text-2xl font-bold text-brand-primary'>
            Mohon Tunggu
          </h1>
        </div>
      </div>
    </div>
  )
}

export default UsePageTransitionHooks
