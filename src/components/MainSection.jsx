import React, { useState } from 'react'
import '../index.css'
import '../styles/mainSection.css'
import memesData from '../memesData.js'

const MainSection = () => {
  const [memeImage, setMemeImage] = useState(null);

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesData.data.memes.length)
  
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <>
      <div className= "main-section">

        <div className='container'>
          
          <div className= "text-bar-container">
            <div className= "text-bar">
              <label htmlFor="search">
                <h1>
                  Top text :
                </h1>
              </label>
              <input type="search" placeholder="Shut up" className= "custom-search"/>
            </div>

            <div className= "text-bar">
              <label htmlFor="search">
                <h1>
                  Bottom text :
                </h1>
              </label>
              <input type= "text" placeholder="And take my money" className= "custom-search"/>
            </div>    
          </div>

          <div>
            <button className= "generation-button" onClick= {getMemeImage}>
              Get a new meme image
            </button>
          </div>

        </div>

        <div>
          <img src={memeImage} className="troll-face-pic" alt="Meme" />
        </div>

      </div>
    </>
  )
}

export default MainSection