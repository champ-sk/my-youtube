import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
name:"search",
initialState: {},
reducers: {
    searchResults: (state, action)=>{
       Object.assign(state, action.payload);

    }
}
})
export default searchSlice.reducer;
export const {searchResults} =searchSlice.actions;