import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Map } from '../../components/Map'

export const EventDetail = () => {
    const { id } = useParams()
    // console.log(id)
    const events = useSelector((state) => state.events.events)
    const event = events.find((event) => {
        return event.id === Number(id)
    })
    return (
        <div className='flex flex-col'>
            <div className='mx-auto flex flex-col gap-5   p-8'>
                <img src={event.image} className='border shadow-xl/30' alt="image" />
                 <span className='text-gray-800 shadow-md border-red-700 border-1 w-1/4 p-2 text-center rounded-sm bg-red-200/50 font-semibold'>‼️Few Tickets Left</span>
                 <h2 className='text-xl md:text-2xl font-bold'>{event.title}</h2>
                 <h3 className='text-l md:text-xl font-semibold text-gray-700'>{event.summary}</h3>
                 <p><span className='text-xl'>Location :</span>📍 {event.location}</p>
                 <p><span className='text-xl'>Date :</span>📅  {event.date}</p>
                <Map eventid= {id}/>
            </div>
            
        </div>
    )
}
