import { baseDate } from '../../types/date'

export type date = baseDate<string, date, number>[]

export interface iInitialState {
  featured: baseDate<string, date, number>
  isLoading: boolean
  error: string
}
