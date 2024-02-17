import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        toggleGPTSearch: false
    },
    reducers: {
        toggleSearch: (state, action) => {
            state.toggleGPTSearch = !state.toggleGPTSearch
        }
    }
})

export const { toggleSearch } = gptSlice.actions

export default gptSlice.reducer