import {configureStore} from '@reduxjs/toolkit'
import eventSlice from '../features/EventSlice'
export  default configureStore ({
    reducer : {
        events : eventSlice
    }
})