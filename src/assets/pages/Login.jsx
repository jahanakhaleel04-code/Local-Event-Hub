import React from 'react'
import  logo  from '../images/eventLogo.png'
import {useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../../features/AuthSlice'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export const Login = () => {
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const formSubmit = (data)=>{
        // console.log(data)
        dispatch(login(data))
    }

    const { loggedInUser } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(loggedInUser)
        if(loggedInUser)
        {
            navigate('/')
        }
    },[loggedInUser])
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Login
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
                    <div className='flex justify-center'>
                        <img src={logo} className='h-20 w-auto' alt="EventSpot" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('email')}
                        />

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

                    </div>

                    <button type='submit' className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>
                </form>
            </div>

        </div>
    )
}
