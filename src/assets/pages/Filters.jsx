import React from 'react'

export const Filters = () => {
  return (
    <div className='flex flex-col p-4 gap-6'>
      <h1 className='text-xl md:text-2xl font-bold text-gray-700'>Filters</h1>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm md:text-lg font-semibold tracking-wider'>Category</h2>
        <ul className='flex flex-col gap-5'>
          <li className='hover:text-blue-500'>
            <svg class="stroke-cyan-500 ...">
 
</svg>
          </li>
          <li className='hover:text-blue-500'>Food & Drink</li>
          <li className='hover:text-blue-500'>Health</li>
          <li className='hover:text-blue-500'>Music</li>
        </ul>
      </div>
      <div><h2 className='text-sm md:text-lg font-semibold tracking-wider'>Price</h2></div>
      <div><h2 className='text-sm md:text-lg font-semibold tracking-wider'>Location</h2></div>
      <div><h2 className='text-sm md:text-lg font-semibold tracking-wider'>Date</h2></div>
    </div>
  )
}
