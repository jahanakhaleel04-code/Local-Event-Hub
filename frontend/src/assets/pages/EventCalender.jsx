import React from 'react'
import moment from 'moment'
import {useSelector} from 'react-redux'
import "react-big-calendar/lib/css/react-big-calendar.css"
import {Calendar, momentLocalizer } from 'react-big-calendar'

const localizer = momentLocalizer(moment)

export const EventCalender = () => {
  const events = useSelector((s)=>s.events.events)
  const calenderEvents = events.map((event)=>({
    title : event.title,
    start : new Date(event.date),
    end:new Date(event.date)

  }))
  return (
    <div className='h-screen p-6'>
        <h1 className='text-2xl font-bold mb-4'>Event Calender</h1>
        <Calendar localizer={localizer}
        events = {calenderEvents}
        startAccessor="start"
        endAccessor="end"
        style={{height:600}}
        />
    </div>
  )
}
