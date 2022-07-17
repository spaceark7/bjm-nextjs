import { NextSeo } from 'next-seo'

import About from '../components/ui/About'
import Banner from '../components/ui/Banner'
import ProductSection from '../components/ui/ProductSection'
import ProjectSection from '../components/ui/ProjectSection'
import ServiceBrand from '../components/ui/Services/ServiceBrand'
export default function Home() {
  return (
    <>
      <NextSeo
        title='Berkah Jaya Mandiri | Produsen Bronjong'
        description='Produsen bronjong terbaik di cianjur'
        canonical='https://jualbronjong.online/'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/BJM_NAV.png',
            sizes: '76x76',
          },
        ]}
        openGraph={{
          url: 'https://jualbronjong.online/produk/bronjong',
          title: 'Jual Bronjong Murah',
          description: 'Produsen bronjong terbaik di cianjur',
          images: [
            {
              url: 'https://jualbronjong.online/images/8x10.webp',
              width: 800,
              height: 800,
              alt: 'Bronjong Mesh 8x10',
              type: 'image/webp',
            },
            {
              url: 'https://jualbronjong.online/images/10x12.webp',
              width: 800,
              height: 800,
              alt: 'Bronjong Mesh 10x12',
              type: 'image/webp',
            },
            {
              url: 'https://jualbronjong.online/images/15x17.webp',
              width: 800,
              height: 800,
              alt: 'Bronjong Mesh 10x12',
              type: 'image/webp',
            },
            {
              url: 'https://jualbronjong.online/images/17x20.webp',
              width: 800,
              height: 800,
              alt: 'Bronjong Mesh 10x12',
              type: 'image/webp',
            },
          ],
        }}
      />

      <main>
        <Banner />
        <ServiceBrand />
        <ProductSection />
        <ProjectSection />
        <About />
      </main>
    </>
  )
}
