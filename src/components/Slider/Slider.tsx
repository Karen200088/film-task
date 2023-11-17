import React, { FC, MouseEventHandler, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { currentFilm } from '../../redux/currentFilm/currentFilm'
import DrawSlider from '../../helpers/DrawSlider/DrawSlider'

import { useSort } from './sort'
import './Slider.scss'

const Slider: FC = () => {
  const { date, isLoading } = useAppSelector((state) => state.allDate)
  const dispatch = useAppDispatch()
  const getFilm = currentFilm.actions.getCurrentFilm

  const [mouseMove, setMouseMove] = useState<boolean>(false)
  const [slideX, setSlideX] = useState<number>()
  const [scrollLeft, setScrollLEft] = useState<number>()

  let newDate = useSort(date)

  const mouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setMouseMove(true)
    setSlideX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLEft(e.currentTarget.scrollLeft)
    e.currentTarget.style.cursor = 'grab'
  }
  const mouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.cursor = 'grab'

    setMouseMove(false)
  }
  const mouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.cursor = 'grab'

    setMouseMove(false)
  }
  const mouseMoveTo: MouseEventHandler<HTMLDivElement> = (e) => {

    e.currentTarget.style.cursor = 'pointer'

    if (mouseMove) {
      e.preventDefault()
      e.currentTarget.style.cursor = 'grabbing'
      let x = e.pageX - e.currentTarget.offsetLeft
      let goTo = x - slideX!

      e.currentTarget.scrollLeft = scrollLeft! - goTo
    }
  }

  const getCurrentFilm = (id: number) => {
    const film = newDate.find((el) => +el.Id === id)
    dispatch(getFilm(film))

    localStorage.setItem('favoritFilmId', id.toString())
  }

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <div className="slider">
      <div className="slider__block">
        <h1>Trading now</h1>

        <div
          className="slider__slides"
          onMouseDown={mouseDown}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          onMouseMove={mouseMoveTo}
        >
          {newDate.map((element) => {
            return (
              <DrawSlider {...element} getCurrentFilm={getCurrentFilm} key={element.Id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Slider
