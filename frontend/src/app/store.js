import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../features/EventSlice'
import authReducer from '../features/AuthSlice'
import filterReducer from '../features/FilterSlice'
export default configureStore({
    reducer: {
        events: eventReducer,
        auth: authReducer,
        filters: filterReducer,
    }
})