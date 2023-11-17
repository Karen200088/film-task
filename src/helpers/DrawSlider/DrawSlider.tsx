import React, { FC } from 'react'

import { baseDate } from '../../types/date'
import { date } from '../../redux/getDate/getDate.types'

import './DrawSlider.scss'

interface Props extends baseDate<string, date, number> {
  getCurrentFilm: (id: number) => void
}

const DrawSlider: FC<Props> = ({ CoverImage, Id, getCurrentFilm }) => {
  const changeCurrentFilm = () => {
    getCurrentFilm(+Id)
  }
  return (
    <div className="drawSlider" onClick={changeCurrentFilm}>
      <img
        src={`../assets/${CoverImage}`}
        alt=""
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default DrawSlider;
