import { createSlice } from '@reduxjs/toolkit'
const storedEvents = localStorage.getItem('eventData')
const initialState = {
    events: JSON.parse(storedEvents) || [],
    loading: false,
    errors: null

}
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        createEvent: (state, action) => {
            state.events.push(action.payload)
        },
        setEvents: (state, action) => {
            state.events = action.payload;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.errors = action.payload;
        },
    }
})
export const { createEvent, setEvents,
    setLoading,
    setError } = eventSlice.actions
export default eventSlice.reducer