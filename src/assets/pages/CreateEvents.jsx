import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


export const CreateEvents = () => {
  const signUpSchema = yup.object({
    title: yup
      .string()
      .required('Title is required')
      .min(3, 'Event Title should have atleast 3 characters')
      .max(30, 'Title should not exceed 50 characters'),
    summary: yup
      .string()
      .required()
      .min(20, 'Summary should have atleast 20 characters')
      .max(200, 'Summary should not exceed 200 characters'),
    location: yup
      .string()
      .required('Location is required'),
    category: yup
      .string()
      .required('Category is required'),
    price: yup
      .string()
      .required('Price is required')
      .oneOf(['paid', 'free'], 'Enter valid price'),
    date: yup
      .string()
      .required('date is required')

  })
  const navigate = useNavigate()
  const {register , handleSubmit , formState : {errors}} = useForm({
    resolver: yupResolver(signUpSchema)
  })
   
  const submitFunction = (data)=>{
    const file = data.image[0]
    const reader = new FileReader()
    reader.onload = ()=>{
      const eventData = {
        ...data,
        image : reader.result
      }
      const storedEvents = JSON.parse(localStorage.getItem('events')) || []
      storedEvents.push(eventData)
      localStorage.setItem('events',JSON.stringify(storedEvents))
      navigate('/')
    }
    reader.readAsDataURL(file)
  } 




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Add Your Event
        </h2>

        <form onSubmit={ handleSubmit(submitFunction)} className="space-y-4">
          <div>
            <label className='block text-sm font-medium mb-1'>Upload image
            </label>
            <input type="file"
            {...register('image')}
            accept='image/*'
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Enter event title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('title')}

            />
            <p className="text-red-500">{errors.title?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Summary
            </label>
            <textarea
              placeholder="Event summary"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              {...register('summary')}

            ></textarea>
            <p className="text-red-500">{errors.summary?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              {...register('location')}
              placeholder="Click map to select a location"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500">{errors.location?.message}</p>
            {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">

              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "350px" }}
                center={coordinates}
                zoom={12}
                onClick={handleMapClick}
              >

                <Marker position={coordinates} />

              </GoogleMap>

            </LoadScript> */}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              {...register('date')}

            />
            <p className="text-red-500">{errors.date?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>

            <div className="flex items-center gap-6">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  value='free'
                  {...register('price')}
                  className="accent-blue-600"

                />
                Free
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register('price')}
                  value='paid'
                  className="accent-blue-600"

                />
                Paid
              </label>
              <p className="text-red-500">{errors.price?.message}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              {...register('category')}

            >
              <option>Select category</option>
              <option>Music</option>
              <option>Business</option>
              <option>Food & Drinks</option>
              <option>Health</option>
            </select>
            <p className="text-red-500">{errors.category?.message}</p>
          </div>

          <button type='submit' className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add Event
          </button>

        </form>
      </div>
    </div>
  )
}
