import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    events : [],
    loading : true,
    errors : false

}
const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        getEvents:()=>{
            console.log('All events here')
        }
    }
})
export const  {getEvents} =eventSlice.actions
export default eventSlice.reducer