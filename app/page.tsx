import Image from 'next/image'

export default function Home() {
  return (
    <main className='pt-8'>
      <div className='flex flex-col gap-y-4'>
        <h1 className='max-w-xl text-6xl font-semibold leading-tight'>
          Where creators run their business
        </h1>
        <button className='w-40 bg-blue-600 text-white py-3 px-6 rounded-md whitespace-nowrap hover:bg-blue-800 text-sm active:focus:scale-95 transition-all ease-out'>
          Get Started
        </button>
      </div>
      <div className='flex flex-col md:flex-row w-fit pt-16 mx-auto'>
        <div className='relative'>
          <Image src='/images/stock-photo-1.jpg' width={400} height={400} alt='credit card transaction' />
          <div className="flex gap-x-2 absolute bottom-0 w-full h-20 bg-blue-600 hover:bg-blue-800 hover:gap-x-4 transition-all cursor-pointer">
            <div className='flex flex-col justify-center  ps-8 font-semibold text-white'>
              Send Invoices
            </div>
            <Image src='/images/arrow-icon.svg' width={10} height={10} alt='arrow icon' />
          </div>
        </div>
        <div>
          <Image src='/images/stock-photo-2.jpg' width={400} height={400} alt='credit card transaction' />
        </div>
        <div>
          <Image src='/images/stock-photo-3.jpg' width={400} height={400} alt='credit card transaction' />
        </div>
      </div>
    </main>
  )
}
