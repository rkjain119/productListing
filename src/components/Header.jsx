import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { navigation } from '../../data/navigaton'
import ReactSvg from '../assets/react.svg'

export default function Header() {
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center">
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto" src={ReactSvg} alt="" />
              </a>
            </div>

            {/* menus */}
            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="h-full flex space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a> */}
              </div>

              {/* Search */}
              {/* <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </div> */}

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
