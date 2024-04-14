'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from '../Logo'
import Dropdown from '../DropDown'
import MobileMenu from '../MobileMenu'
import Utils from '@/lib/Utils'
import { useRouter } from 'next/navigation'
import { ROLES } from '@/lib/constant'

export default function Header(props) {
  const router = useRouter();
  const [currUser, setCurrUser] = useState(null);
  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    if (Utils.hasWindowObject() && currUser == null) {
      setCurrUser(Utils.getCurrentUser());
    }
  }, [props, currUser])

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const logoutCurrUser = async () => {
    try {
      await Utils.logout();
      setCurrUser(null);
      router.replace('/');
    } catch (error) {
      console.log("error ----> ", error.message);
    }
  }

  const role = currUser?.user?.role;

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {role == ROLES.ADMIN && (<>
                {/* <li>
                  <Link href="/dashboard" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Dashboard</Link>
                </li> */}
                <li>
                  <Link href="/subscription" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Subscription</Link>
                </li>
              </>)}

              {(!role || role !== ROLES.SUPERADMIN) && (<>
                <li>
                  <Link href="/contactus" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
                </li>

                <li>
                  <Link href="/aboutus" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
                </li>
              </>)}

              {!currUser &&
                (<>
                  <li>
                    <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                      <span>Sign up</span>
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </Link>
                  </li>
                </>)
              }

              {currUser &&
                (<>
                  {role == ROLES.SUPERADMIN && (
                    <>
                      <li>
                        <Link href="/superadmin/dashboard" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Dashboard</Link>
                      </li>
                      <li>
                        <Link href="/superadmin/admin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Customer</Link>
                      </li>
                    </>)}
                  <Dropdown title={currUser?.user?.firstName}>
                    <li>
                      <Link href="#" onClick={() => {
                        logoutCurrUser();
                      }} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Logout</Link>
                    </li>
                  </Dropdown>

                </>)
              }
            </ul>

          </nav>

          <MobileMenu logoutCurrUser={logoutCurrUser} currUser={currUser} />

        </div>
      </div>
    </header >
  )
}
