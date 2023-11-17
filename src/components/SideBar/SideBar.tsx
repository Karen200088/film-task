import React, { useState, FC } from 'react'

import { HelpBlock } from './HelpBlock'
import { SideBarProfile } from './SideBarProfile'

import './Sidebar.scss'

interface iIcons {
  src: string
  name: string
}

const SideBar: FC = () => {

  const [activeCategory, setActiveCategory] = useState<number>(1)
  const [icons, setIcons] = useState<iIcons[]>([
    {
      src: 'ICON - Search.png',
      name: 'Search',
    },
    {
      src: 'Group 46.png',
      name: 'Home',
    },
    {
      src: 'Group 47.png',
      name: 'TV shows',
    },
    {
      src: 'Group 53.png',
      name: 'Movies',
    },
    {
      src: 'Group 54.png',
      name: 'Geners',
    },
    {
      src: 'Group 56.png',
      name: 'Watch Later',
    },
  ])

  return (
    <div className="sideBar">
      <SideBarProfile />

      <div className="sideBar__icons">
        {icons.map((el, i) => {
          return (
            <div key={el.src} className="sideBar__wrapper">
              <div
                className={
                  activeCategory === i
                    ? 'sideBar__iconsWrapper sideBar__iconsWrapper-active'
                    : 'sideBar__iconsWrapper'
                }
              >
                <img src={`../assets/icons/${el.src}`} alt=""/>
                <h3 className="sideBar__categorysNames">{el.name}</h3>
              </div>
            </div>
          )
        })}
      </div>

      <HelpBlock />
    </div>
  )
}

export default SideBar;
