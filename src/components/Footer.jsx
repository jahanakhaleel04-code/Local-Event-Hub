import React from 'react'

export const Footer = () => {
    return (
        <div className='md:h-60 gap-2  bg-gray-300 flex flex-col justify-between items-start p-5 md:flex-row'>
            <div className='flex flex-col'>
                <h2 className='font-serif text-purple-900/75 text-l normal font-bold'>Use EvenSpot</h2>
                <h3>Create Events</h3>
                <h3>Pricing</h3>
                <h3>Event Marketing Platform</h3>
                <h3>Community Guildlines</h3>
                <h3>FAQs</h3>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-serif text-purple-900/75 text-l normal font-bold'>Plan Events</h2>
            <h3>Services</h3>
            <h3>Event Managment Software</h3>
            <h3>Virtual Events Platform</h3>
            <h3>Post Your Events Online</h3>
            <h3>Software</h3>

            </div>
            <div className='flex flex-col'>
                <h2 className='font-serif text-purple-900/75 text-l normal font-bold'>Find Events</h2>
                <h3>Events</h3>
                <h3>Tulum music Events </h3>
                <h3>Events in Kochi</h3>
                <h3>Events in Calicut</h3>
                <h3>Ernakulam Events</h3>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-serif text-purple-900/75 text-l normal font-bold'>Connect with us</h2>
            <h3>Contact Support</h3>
            <h3>Contact Sales</h3>
            <h3>X</h3>
            <h3>FaceBook</h3>
            <h3>Instagram</h3>
            </div>
        </div>
    )
}
