import React, { FC } from 'react'

import './Loader.scss'

type finish = 'loadingFinish' | ''

interface props {
  className?: finish
}

const Loader: FC<props> = ({ className }) => {
  return (
    <div className={className ? `${className} loader` : 'loader'}>
      <div className="loader__spinner" />
    </div>
  )
}

export default Loader;
