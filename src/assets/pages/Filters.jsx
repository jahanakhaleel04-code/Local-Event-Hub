import React from 'react'
import { Briefcase, UtensilsCrossed, Heart, Music } from 'lucide-react'



export const Filters = ({ setSelectedCat, setSelectedPrice, setSelectedLocation, setSelectedDate }) => {
  const categories = [
    { name: 'Business', icon: <Briefcase size={16} /> },
    { name: 'Food & Drinks', icon: <UtensilsCrossed size={16} /> },
    { name: 'Health', icon: <Heart size={16} /> },
    { name: 'Music', icon: <Music size={16} /> }
  ]
  const locations = ['Calicut', 'Kochi', 'Trivandrum']
  const dates = ['Today', 'Tomorrow', 'This Week', 'This Month']
  const resetFilters = () => {
    setSelectedCat('All')
    setSelectedLocation('All')
    setSelectedPrice('All')
  }


  //filter
  return (
    <div className='flex flex-col p-4 gap-6'>
      <h1 className='text-xl md:text-2xl font-bold text-gray-700'>Filters</h1>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm md:text-lg font-semibold tracking-wider'>Category</h2>
        <ul className='flex flex-col gap-2'>
          {categories.map((cat, i) => {
            return (<li
              onClick={() => { setSelectedCat(cat.name) }}
              className='flex p-2 items-center gap-2 cursor-pointer hover:text-purple-500' key={i}>
              <span className='text-purple-700'>{cat.icon}</span>
              {cat.name}</li>)
          })}
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm md:text-lg font-semibold tracking-wider'>Price</h2>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center gap-2 p-2 curso-pointer hover:text-purple-500'>
            <input type="radio" onClick={() => { setSelectedPrice('free') }} value='free' name='price' className='text-purple-500 w-4 h-4' />
            Free</li>
          <li className='flex items-center gap-2 p-2 curso-pointer hover:text-purple-500'>
            <input type="radio" onClick={() => { setSelectedPrice('paid') }} name='price' value='paid' className='text-purple-500 w-4 h-4' />
            Paid</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'><h2 className='text-sm md:text-lg font-semibold tracking-wider'>Location</h2>
        <ul className='flex flex-col gap-2'>
          {locations.map((loc, i) => {
            return (
              <li key={i} onClick={() => { setSelectedLocation(loc) }} className='flex items-center gap-2 p-2 curso-pointer hover:text-purple-500'>
                <input type="radio" name="location" value={loc} className='text-purple-500 w-4 h-4' />
                {loc}</li>
            )
          })}
        </ul>
      </div>
      <div className='flex flex-col gap-2'><h2 className='text-sm md:text-lg font-semibold tracking-wider'>Date</h2>
        <ul className='flex flex-col gap-2'>
          {dates.map((date, i) => {
            return (<li key={i} className='flex items-center gap-2 p-2 curso-pointer hover:text-purple-500'>
              <input onClick={()=>{setSelectedDate(date)}} type="radio" name="date" value={date} className='text-purple-500 w-4 h-4' />
              {date}
            </li>)
          })}
        </ul>
      </div>
      <div>
        <button
          onClick={resetFilters}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium  hover:bg-gray-300 transition duration-200"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}
