import { createSlice } from '@reduxjs/toolkit'
import { LogOut } from 'lucide-react'
import { toast } from 'react-toastify'

const savedUsers = JSON.parse(localStorage.getItem('users'))
const savedUser = JSON.parse(localStorage.getItem('user'))
const initialState = {
    loggedInUser: savedUser || null,
    users: Array.isArray(savedUsers) ? savedUsers : []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            const { email } = action.payload
            // console.log(state.users)
            const existingUser =  state.users.find((user)=>(
                user.email === email
            ))
            if (existingUser) {
                return toast.error('User already registered')
            }
            // console.log(existingUser)
            else {
                state.users.push({id:Date.now(),...action.payload})
                localStorage.setItem('users', JSON.stringify(state.users))
                toast.success('User Registered Succesfully')
            }

        },
        login:(state,action)=>{
            // console.log(action.payload)
            const {email,password} = action.payload
            const existingUser = state.users.find((user)=>{
                return user.email === email
            })
            if(!existingUser)
            {
                return toast.error('No user found with this email, Please register')
            }
            if(existingUser.password != password)
            {
                return toast.error('Incorrect Password')
            }
            state.loggedInUser = existingUser
            console.log(existingUser)
            localStorage.setItem('user',JSON.stringify(state.loggedInUser))
            toast.success('Login Successfull')
        },
        Logout:(state)=>{
                localStorage.removeItem('user')
                state.loggedInUser = null
        }
    }

})
export const { register, login } = authSlice.actions
export default authSlice.reducer