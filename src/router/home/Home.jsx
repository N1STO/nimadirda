import React from 'react'
import './Home.css'
import { HOME_ITEMS } from '../../static'

function Home() {
  return (
    <div className='home'>
      {/* <div className="home__card">
        <h2>call of duty: warzone 2.0</h2>
        <div className="card__img">
          <img src="https://support.activision.com/content/dam/atvi/support/home/modules/tall/home_tile_wz2.0_v2.jpg" />
        </div>
      </div> */}
      {
        HOME_ITEMS?.map((e, inx) => (
          <div className="home__card" key={inx}>
            <h2>{e.title}</h2>
            <div className="card__img">
              <img src={e.img} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Home