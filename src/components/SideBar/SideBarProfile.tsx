import React, { FC } from 'react'

import './Sidebar.scss'

export const SideBarProfile: FC = () => {
  return (
    <div className="sideBar__profile">
      <div className="sideBar__img">
          <img
            src="https://cdn.europosters.eu/image/750/assassins-creed-valhalla-eivor-i96965.jpg"
            loading="lazy"
            width={'100%'}
            height={'100%'}
            alt=""
          />
      </div>
      <div className="sideBar__name">
        <span>Daniel</span>
      </div>
    </div>
  )
}
