import React from 'react'
import logo from '../images/eventLogo.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {useDispatch} from 'react-redux'
import { register  as registeredUser } from '../../features/AuthSlice'
import {useNavigate} from 'react-router-dom'

export const Register = () => {
    const regSchema = yup.object({
        name: yup
            .string()
            .required('Name is required')
            .min(3, 'Minimum 3 characters required'),
        email: yup
            .string()
            .required('Email is required')
            .email('Invalid Email format'),
        password: yup
            .string()
            .required('Password is required')
            .min(6, 'Minimum 6 characters required'),
        confirmPassword: yup
            .string()
            .required('Enter password again to confirm')
            .oneOf([yup.ref('password')], 'Password must match')
    })
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(regSchema)
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formSubmit = (data) =>{
       dispatch(registeredUser(data))
       navigate('/')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Sign Up
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
                    <div className='flex justify-center'>
                        <img src={logo} className='h-20 w-auto' alt="EventSpot" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('name')}
                        />
                        <p className='text-red-500'>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('email')}
                        />
                        <p className='text-red-500'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('password')}
                        />
                        <p className='text-red-500'>{errors.password?.message}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('confirmPassword')}
                        />
                        <p className='text-red-500'>{errors.confirmPassword?.message}</p>
                    </div>
                    <button type='submit' className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Register
                    </button>
                </form>
            </div>

        </div>
    )
}
