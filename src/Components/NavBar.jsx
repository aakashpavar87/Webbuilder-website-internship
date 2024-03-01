import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Categories',
    href: '#',
  },
  {
    name: 'Website Builder',
    href: '#',
  },
  {
    name: "Today's Deals",
    href: '#',
  },
]

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-around px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-slate-200">Web Builder</span>
        </div>
        <div className="w-1/2 flex gap-20 justify-items-center items-center">
            <div className="w-full md:w-1/3 flex h-8 bg-slate-200 rounded-lg p-1">
                <button className='mx-2'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </span>
                </button>
                <input className='focus:outline-none w-1/2 bg-slate-200' type="text" />
            </div>
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-slate-400 hover:text-slate-50"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}