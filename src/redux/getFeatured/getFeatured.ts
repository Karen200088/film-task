import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import getDateAsync from './getFeaturedAsync'
import { baseDate } from '../../types/date'
import { date, iInitialState } from './getFeaturedtypes'

export const getFuture = createSlice({
  name: 'GET/FUTURE',
  initialState: {
    featured: {},
    isLoading: true,
    error: '',
  } as iInitialState,
  reducers: {},
  extraReducers: {
    [getDateAsync.fulfilled.type]: (
      state,
      action: PayloadAction<baseDate<string, date, number>>,
    ) => {
      state.featured = action.payload
      state.isLoading = false
    },
    [getDateAsync.pending.type]: (state) => {
      state.isLoading = true
    },
    [getDateAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})
