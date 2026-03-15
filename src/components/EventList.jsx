import React from 'react'
import { useSelector } from 'react-redux'

export const EventList = () => {
  const events = useSelector((s) => s.events.events)
  return (
    <div className='mt-4'>
      {
        events.map((event) => {
          return (
            <div key={event.id} className='mt-4 max-w-4xl bg-white rounded-l shadow-md overflow-hidden flex'>
              <img src={event.image} alt="event" className='w-45 h-40 object-cover' />
              <div className='p-4 flex flex-col justify-between flex-1'>
                <div>
                  <h2 className='text-xl font-semibold text-gray-800'>{event.title}</h2>
                  <p className='text-gray-600 text-sm mt-1'>
                    {event.summary}
                  </p>
                </div>
                <div className='flex justify-between items-center mt-3 text-sm text-gray-500'>
                  <span>📍 {event.location}</span>
                  <span>📅 {event.date}</span>
                  <span className="font-semibold text-purple-600">
                    {event.price === "free" ? "Free" : "Paid"}
                  </span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
