import React from 'react'
import './Games.css'
import { GAMES__ITEMS } from '../../static'

function About() {
  return (
    <div className="game">
      <div className="games__sorter">
        <h2>GAMES</h2>
      </div>
      <div className="games">
        {
          GAMES__ITEMS?.map((e, inx) => (
            <img src={e.img} key={inx} alt="" />
          ))}
      </div>
    </div>
  )
}

export default About