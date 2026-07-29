 import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useSelector } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const EventCalender = () => {
  const events = useSelector((s) => s.events.events);

  const [date, setDate] = useState(new Date());

  const calendarEvents = events.map((event) => ({
    title: event.title,
    start: new Date(event.date),
    end: new Date(event.date),
  }));

  return (
    <div className="h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Event Calendar</h1>

      <Calendar
        localizer={localizer}
        events={calendarEvents}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </div>
  );
};