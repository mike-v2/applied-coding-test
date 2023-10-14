'use client';

import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react"

const links = [
  {
    href: '#',
    name: 'Services',
  },
  {
    href: '#',
    name: 'Portfolio',
  },
  {
    href: '#',
    name: 'Contact us',
  },
  {
    href: '#',
    name: 'About us',
  }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full pt-4 pb-8">
      <div className="flex md:justify-between gap-x-6 w-1/2 max-w-lg whitespace-nowrap align-baseline">
        <div className="flex flex-col justify-center font-bold text-xl">
          Herox
        </div>
        <div className="hidden md:flex justify-between gap-x-6">
          {links && links.map(link => (
            <Link href={link.href} className="flex flex-col justify-center text-sm text-slate-400">
              {link.name}
            </Link>
          ))}
        </div>
        <button className="md:hidden relative hover:bg-slate-200 p-2 rounded-md active:focus:scale-95 transition-all ease-out" onClick={() => setIsOpen(!isOpen)}>
          <Image src='/images/menu-icon.svg' width={30} height={30} alt='menu icon' />
          {isOpen &&
            <div className="flex flex-col gap-y-4 md:hidden absolute bg-slate-300 p-4 rounded-md text-left">
              {links && links.map(link => (
                <Link href={link.href} className='hover:underline'>{link.name}</Link>
              ))}
            </div>
          }
        </button>
      </div>

      <div className="flex w-1/2 justify-end">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full whitespace-nowrap hover:bg-blue-800 text-sm active:focus:scale-95 transition-all ease-out">
          Register/Login
        </button>
      </div>
    </nav>
  )
}