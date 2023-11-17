import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { baseDate } from '../../types/date'
import { iInitialState } from './currentFilm.types'

export const currentFilm = createSlice({
  name: 'CHANGE/CURRENTFILM',
  initialState: {
    currentFilm: {},
  } as iInitialState,

  reducers: {
    getCurrentFilm: (
      state: iInitialState,
      action: PayloadAction<baseDate<string, never, number>>,
    ) => {
      state.currentFilm = action.payload
    },
  },
})
