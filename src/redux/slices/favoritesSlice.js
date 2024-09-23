import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    items: []
}
const favoritesSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (!state.items.includes(action.payload)) {
                state.items.push(action.payload)
            }
            // state.items = [...new Set([...state.items, action.payload])] // через коллекцию
        },
        deleteItem: (state, action) => { 
            state.items = state.items.filter(item => { 
                return item !== action.payload} )
            ;
        }
    }
});

export const {addItem, deleteItem} = favoritesSlice.actions;
export default favoritesSlice.reducer;
