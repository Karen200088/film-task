import React, { FC, useEffect, useRef, useState } from 'react'

import { useAppSelector } from '../../redux/hooks'

import Slider from '../Slider/Slider'
import InfoBlock from '../InfoBlock/InfoBlock'

import './Main.scss'

const Main: FC = () => {
  const currentFilm = useAppSelector((state) => state.currentFilm.currentFilm)

  const [showImgOrVideo, setShowImgOrVideo] = useState<boolean>(true)
  const timeOutRef = useRef<NodeJS.Timeout>()

  const changeImg = (): void => {
    timeOutRef.current = setTimeout(() => {
      setShowImgOrVideo(false)
    }, 2000)
  }

  useEffect(() => {
    if (currentFilm.VideoUrl) {
      changeImg()
    }
    setShowImgOrVideo(true)

    return () => clearTimeout(timeOutRef.current)
  }, [currentFilm.VideoUrl, currentFilm.Id])

  return (
    <div
      className={'main'}
      style={{
        maxHeight: document.documentElement.clientHeight,
        width: "1536px",
      }}
    >
      <div className="main__block">
        <div className="main__show">
          <InfoBlock {...currentFilm} />
          {showImgOrVideo ? (
            <img
              src={`../assets/${currentFilm.CoverImage}`}
              width="100%"
              height="100%"
              alt=""
            />
          ) : (
            <video
              muted
              loop
              autoPlay
              width="100%"
              src={currentFilm.VideoUrl}
            />
          )}
        </div>
      </div>

      <div className="main__slider">
        <Slider />
      </div>
    </div>
  )
}

export default Main;
