import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import {Outlet} from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow pt-25'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
