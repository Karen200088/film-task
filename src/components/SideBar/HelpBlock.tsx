import React, { FC, useState } from 'react'

import './Sidebar.scss'

export const HelpBlock: FC = () => {
  const [helpBlock, setHelpBlock] = useState<string[]>([
    'language',
    'get help',
    'exit',
  ])

  return (
    <div className="sideBar__helpBlock">
      {helpBlock.map((el) => {
        return <span key={el}>{el.toUpperCase()} </span>
      })}
    </div>
  )
}
