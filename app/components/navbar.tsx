
export default function Navbar() {
  return (
    <nav className="flex w-full pt-4 pb-8">
      <div className="flex justify-between gap-x-6 w-1/2 max-w-lg whitespace-nowrap align-baseline">
        <div className="flex flex-col justify-center font-bold text-xl">
          Herox
        </div>
        <div className="flex flex-col justify-center text-sm text-slate-400">
          Services
        </div>
        <div className="flex flex-col justify-center text-sm text-slate-400">
          Portfolio
        </div>
        <div className="flex flex-col justify-center text-sm text-slate-400">
          Contact Us
        </div>
        <div className="flex flex-col justify-center text-sm text-slate-400">
          About us
        </div>
      </div>
      <div className="flex w-1/2 justify-end">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full whitespace-nowrap hover:bg-blue-800 text-sm active:focus:scale-95 transition-all ease-out">
          Register/Login
        </button>
      </div>
    </nav>
  )
}