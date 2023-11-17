import { configureStore } from '@reduxjs/toolkit'

import { currentFilm } from './currentFilm/currentFilm'
import { getFuture } from './getFeatured/getFeatured'
import { getDate } from './getDate/getDate'

export const store = configureStore({
  reducer: {
    allDate: getDate.reducer,
    getFuture: getFuture.reducer,
    currentFilm: currentFilm.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
