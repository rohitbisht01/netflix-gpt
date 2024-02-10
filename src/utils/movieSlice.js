import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upCommingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpCommingMovies: (state, action) => {
            state.upCommingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpCommingMovies } = movieSlice.actions

export default movieSlice.reducer
