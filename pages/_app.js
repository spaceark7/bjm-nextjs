import Navigation from '../components/Navigation'
import Contact from '../components/ui/Contact'
import Footer from '../components/ui/Footer'
import '../styles/globals.css'
import UsePageTransitionHooks from '../utils/UsePageTransitionHooks'

function MyApp({ Component, pageProps }) {
  const loading = UsePageTransitionHooks()
  return (
    <>
      <Navigation />
      <div className='relative'>
        {loading}
        <div className='z-10'>
          <Component {...pageProps} />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
