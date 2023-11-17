import { baseDate } from '../../types/date'

export type date = baseDate<string, date, number>[]

export interface iInitialState {
  date: date
  isLoading: boolean
  error: string
}
