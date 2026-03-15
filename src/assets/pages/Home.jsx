import React from 'react'
import { Filters } from './Filters'
import { EventList } from './EventList'
import { Map } from '../../components/Map'

export const Home = () => {
    return (
        <>
            <div className='flex flex-col mx-auto p-2 items-center text-center max-w-3xl'>
                <span className='text-sm font-semibold tracking-widest text-purple-500 uppercase mb-3'>
                     🎯 Discover Local Events
                </span>
                <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4'>Find Your <span className='text-purple-500'>Next Experience.</span>
                <br />local Events, live moments - <br />
                  <span className='text-purple-600'>all in one place.</span>
                </h1>
                {/* <p className='text-gray-400 text-base md:text-lg max-w-xl'>Search for something you love or check out popular events in your area.</p> */}
            </div>
            <div className='min-h-screen flex flex-col md:flex-row'>
                <div className='basis-1/4 border-r border-gray-200'><Filters /></div>
                <div className='basis-2/4'><EventList /></div>
                <div className='basis-1/4'><Map/></div>
            </div>
        </>

    )
}
