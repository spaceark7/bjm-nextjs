const CardService = ({ icon, title, desc }) => {
  return (
    <div className='flex h-52 w-full flex-col items-center justify-center rounded-xl border-2 border-brand-primary border-opacity-50 py-6 md:h-64 md:max-w-md lg:max-w-sm '>
      <span className='text-7xl text-brand-primary'>{icon}</span>

      <h3 className='font-brand-primary text-2xl font-semibold text-brand-primary'>
        {title}
      </h3>
      <p className='mt-2 px-4 md:font-semibold'>{desc}</p>
    </div>
  )
}

export default CardService
