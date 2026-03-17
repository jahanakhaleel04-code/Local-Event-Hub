import React from 'react'
import {useNavigate} from 'react-router-dom'

export const EventList = ({filteredEvents}) => {
 const navigate = useNavigate()
  return (
    <div className='mt-4'>
      {
        filteredEvents.map((event) => {
          return (
            <div onClick={()=>{navigate(`/event-detail/${event.id}`)}} key={event.id} className='mt-4 max-w-4xl bg-white rounded-l shadow-md overflow-hidden flex cursor-pointer hover:shadow-xl'>
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
