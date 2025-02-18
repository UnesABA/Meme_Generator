import React from 'react'
import '../index.css'
import '../styles/header.css'
import trollFace from '/Troll_Face.png'

const Header = () => {
  return (
    <>
      <div className= "header">
        <div>
          <img src= {trollFace} className= "troll-face" alt="Troll Face" />
        </div>
        <div>
          <h1 className= "title">Meme Generator</h1>
        </div>
      </div>
    </>
  )
}

export default Header