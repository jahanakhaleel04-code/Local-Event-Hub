import { createSlice } from '@reduxjs/toolkit'
const storedEvents = localStorage.getItem('eventData')
const initialState = {
    events : JSON.parse(storedEvents) || [],
    loading : true,
    errors : false

}
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        createEvent:(state,action)=>{
            state.events.push(action.payload)
            localStorage.setItem('eventData',JSON.stringify(state.events))
        },
        getEvents:()=>{
            
        },
    }
})
export const  {createEvent} =eventSlice.actions
export default eventSlice.reducer