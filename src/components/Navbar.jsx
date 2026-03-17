import React from 'react'
import logo from '../assets/images/eventLogo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { logout } from '../features/AuthSlice'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const {isAuthenticated} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <nav className='bg-white h-25 border-b border-gray-200 fixed w-full top-0 z-50'>
            <div className='flex flex-wrap flex-row justify-between items-center mx-auto p-3 max-w-screen-l'>
                <div className="flex items-center space-x-3">
                    <img src={logo} className='h-16 w-auto' alt="EventSpot" />
                    {/* <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Event Spot</span> */}
                </div>
                <div className="hidden md:flex w-1/3">
                    <div className="relative w-full">
                        <svg
                            className="absolute left-3 top-3 w-4 h-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>

                        <input
                            type="search"
                            placeholder="Search events"
                            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                    </div>
                </div>
                <div className='hidden md:flex items-center gap-5'>
                    <Link className='text-gray-600 hover:text-purple-600' to={'/'}>Home</Link>
                    <Link className='text-gray-600 hover:text-purple-600' to={'create-event'}>Create Event</Link>
                    {
                        isAuthenticated ? <button onClick={() => dispatch(logout())}><Link className='text-gray-600 hover:text-purple-600'>Logout</Link> </button>:
                         <Link className='text-gray-600 hover:text-purple-600' to={'login'}>Login</Link>

                    }
                    
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm">
                      <Link to={'register'}>Sign Up</Link>  
                    </button>
                    <Link className='text-gray-600 hover:text-purple-600' to={'calender'}>Calender</Link>
                    {/* <Link href="" className='text-gray-600 hover:text-purple-600'>Contact</Link> */}
                </div>
                <button className='md:hidden text-gray-600'
                    onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}><svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg></button>
            </div>
        </nav>
    )
}
