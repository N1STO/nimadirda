import React from 'react'
import './Support.css'
import { AiFillPlayCircle } from 'react-icons/ai'

function BLog() {
  return (
    <div className="support">
      <div className="support__item">
        <AiFillPlayCircle />
        <h3>Game</h3>
      </div>
      <div className="support__item">
        <AiFillPlayCircle />
        <h3>Platform</h3>
      </div>
      <div className="support__item">
        <AiFillPlayCircle />
        <h3>Topic</h3>
      </div>
      <div className="support__item">
        <AiFillPlayCircle />
        <h3>Issue</h3>
      </div>
    </div>
  )
}

export default BLog