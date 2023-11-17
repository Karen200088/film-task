import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'

import getDateAsync from './redux/getDate/getDateAsync'
import getFeaturedAsync from './redux/getFeatured/getFeaturedAsync'

import { Loader, Main, SideBar } from './components'
import './App.css'

const App: FC = () => {
  const dispatch = useAppDispatch()

  const getLoader = useAppSelector((state) => state.allDate.isLoading)
  const getError = useAppSelector((state) => state.allDate.error)

  const [loadingState, setLoadingState] = useState(true)

  useEffect(() => {
    dispatch(getDateAsync())
    dispatch(getFeaturedAsync())
  }, [])

  useEffect(() => {
    let timeOut: NodeJS.Timeout
    if (!getLoader) {
      timeOut = setTimeout(() => {
        setLoadingState(false)
      }, 700)
    }
    return () => clearTimeout(timeOut)
  }, [getLoader])

  if (getError) {
    return <h1>{getError}</h1>
  }

  return (
    <div className="wrapper">
      {loadingState ? (
        <Loader className={!getLoader ? 'loadingFinish' : ''} />
      ) : (
        <>
          <SideBar />
          <Main />
        </>
      )}
    </div>
  )
}

export default App
