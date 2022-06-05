import { createSlice } from '@reduxjs/toolkit'

const initialState = {fav:[]}
export const selectFavorite = (state) => state.favorite.fav
export const selectIsFavorite = (state, id) => !!state.favorite.fav.find(item=>item.id===id)

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action)=> {
        if(!state.fav.includes(action.payload.id))
            state.fav.push(action.payload);
    },
    removeFromFavorite: (state, action)=> {
        state.fav = state.fav.filter( item =>{ 
          return item.id !== action.payload 
        })
    }
  },
})

export const { addToFavorite, removeFromFavorite ,removeAll} = favoriteSlice.actions
export default favoriteSlice
