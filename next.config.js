/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/produk/bronjong/1': {
  //       page: '/produk/bronjong/[id]',
  //       query: { title: 'Bronjong-8x10mm' },
  //     },
  //     '/produk/bronjong/2': {
  //       page: '/produk/bronjong/[id]',
  //       query: { title: 'Bronjong-10x12mm' },
  //     },
  //     '/produk/bronjong/3': {
  //       page: '/produk/bronjong/[id]',
  //       query: { title: 'Bronjong-15x17mm' },
  //     },
  //     '/produk/bronjong/4': {
  //       page: '/produk/bronjong/[id]',
  //       query: { title: 'Bronjong-17x20mm' },
  //     },
  //     '/produk/harmonika/1': {
  //       page: '/produk/harmonika/[id]',
  //       query: { title: 'Harmonika-2' },
  //     },
  //     '/produk/harmonika/2': {
  //       page: '/produk/harmonika/[id]',
  //       query: { title: 'Harmonika-2' },
  //     },
  //     '/produk/harmonika/3': {
  //       page: '/produk/harmonika/[id]',
  //       query: { title: 'Harmonika-3' },
  //     },
  //     '/produk/harmonika/4': {
  //       page: '/produk/harmonika/[id]',
  //       query: { title: 'Harmonika-4' },
  //     },
  //   }
  // },
}

module.exports = nextConfig
