import { createAsyncThunk } from '@reduxjs/toolkit'

import { $API } from '../../api/apiInstance'
import { date as dateType } from './getDate.types'

export default createAsyncThunk('GET/FILMS', async (_, ThunkAPI) => {
  try {
    const response = await $API.get<dateType>('/tendingNow')

    const date = await response.data

    return ThunkAPI.fulfillWithValue(date)
  } catch (error) {
    return ThunkAPI.rejectWithValue('Something Went Wrong')
  }
})
