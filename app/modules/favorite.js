import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const selectFavorite = (state) => state.favorite
export const selectIsFavorite = (state, item) => state.favorite.includes(item)

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action)=> {
        if(!state.includes(action.payload))
            state.push(action.payload);
    },
    removeFromFavorite: (state, action)=> {
        state = state.filter( item => item !== action.payload )
    }
  },
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions
export default favoriteSlice