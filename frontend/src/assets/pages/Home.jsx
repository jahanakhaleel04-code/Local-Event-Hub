import React from "react";
import { Filters } from "./Filters";
import { EventList } from "../../components/EventList";
// import { Map } from "../../components/Map";
import { useSelector } from "react-redux";
import { setEvents } from "../../features/EventSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
    const events = useSelector((state) => state.events.events);

    const { category, price, location, date, search } = useSelector(
        (state) => state.filters
    );

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/events");
                dispatch(setEvents(res.data.events));
            } catch (err) {
                console.error(err);
            }
        };

        fetchEvents();
    }, [dispatch]);

    const filteredEvents = events.filter((event) => {
        // console.log("events", events[0]);
        const eventDate = new Date(event.date);
        const today = new Date();

        const categoryEvents =
            category === "All" || event.category === category;

        const priceEvents =
            price === "All" || event.price === price;

        const locationEvents =
            location === "All" || event.location === location;

        const searchMatch =
            search.trim() === "" ||
            event.title.toLowerCase().includes(search.toLowerCase()) ||
            event.summary.toLowerCase().includes(search.toLowerCase()) ||
            event.location.toLowerCase().includes(search.toLowerCase());

        let dateEvent = true;

        if (date === "Today") {
            dateEvent = eventDate.toDateString() === today.toDateString();
        }

        if (date === "Tomorrow") {
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            dateEvent = eventDate.toDateString() === tomorrow.toDateString();
        }

        if (date === "This Week") {
            const nextWeek = new Date();
            nextWeek.setDate(today.getDate() + 7);

            dateEvent = eventDate >= today && eventDate <= nextWeek;
        }

        if (date === "This Month") {
            dateEvent =
                eventDate.getMonth() === today.getMonth() &&
                eventDate.getFullYear() === today.getFullYear();
        }

        return (
            categoryEvents &&
            priceEvents &&
            locationEvents &&
            dateEvent,
            searchMatch
        );
    });

    return (
        <>
            <div className="flex flex-col mx-auto p-2 items-center text-center max-w-3xl">
                <span className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-3">
                    🎯 Discover Local Events
                </span>

                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    Find Your <span className="text-purple-500">Next Experience.</span>
                    <br />
                    Local Events, Live Moments -
                    <br />
                    <span className="text-purple-600">All in One Place.</span>
                </h1>
            </div>

            <div className="min-h-screen flex flex-col md:flex-row">
                <div className="basis-1/4">
                    <Filters />
                </div>

                <div className="basis-3/4">
                    <EventList filteredEvents={filteredEvents} />
                </div>

                {/* <div className="basis-1/4">
          <Map />
        </div> */}
            </div>
        </>
    );
};