import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../features/EventSlice'
import authReducer from '../features/AuthSlice'
export default configureStore({
    reducer: {
        events: eventReducer,
        auth: authReducer

    }
})