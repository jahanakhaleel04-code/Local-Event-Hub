import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "All",
    price: "All",
    location: "All",
    date: "All",
    search: "",
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            // console.log("search", state.search);
        },
        resetFilters: (state) => {
            state.category = "All";
            state.price = "All";
            state.location = "All";
            state.date = "All";
            state.search = "";
        },
    },
});

export const {
    setCategory,
    setPrice,
    setLocation,
    setDate,
    resetFilters,
    setSearch,
} = filterSlice.actions;

export default filterSlice.reducer;