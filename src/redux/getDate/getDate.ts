import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import getDateAsync from './getDateAsync'
import { date, iInitialState } from './getDate.types'

export const getDate = createSlice({
  name: 'GET/DATE',
  initialState: {
    date: [],
    isLoading: true,
    error: '',
  } as iInitialState,
  reducers: {},
  extraReducers: {
    [getDateAsync.fulfilled.type]: (state, action: PayloadAction<date>) => {
      state.date = action.payload
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
