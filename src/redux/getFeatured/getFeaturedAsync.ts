import { createAsyncThunk } from '@reduxjs/toolkit'

import { currentFilm } from '../currentFilm/currentFilm'
import { $API } from '../../api/apiInstance'

export default createAsyncThunk('GET/FEATURED', async (_, ThunkAPI) => {
  try {
    const response = await $API.get('/featured')
    const date = await response.data
    ThunkAPI.dispatch(currentFilm.actions.getCurrentFilm(date))
    return ThunkAPI.fulfillWithValue(date)
  } catch (error) {
    return ThunkAPI.rejectWithValue('Something Went Wrong')
  }
})
