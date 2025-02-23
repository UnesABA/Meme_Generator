import React, { useState } from 'react'
import '../index.css'
import '../styles/mainSection.css'
import memesData from '../memesData.js'
import shut_up from '/Shut_up.png'

const MainSection = () => {
  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "", 
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMeme(){
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * allMemeImages.data.memes.length)
  
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: memesArray[randomNumber].url
      }
    })
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
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
              <input 
                type="search" 
                placeholder="Shut up" 
                className= "custom-search"
                name= "topText" 
                value= {meme.topText}
                onChange={handleChange}
              />
            </div>

            <div className= "text-bar">
              <label htmlFor="search">
                <h1>
                  Bottom text :
                </h1>
              </label>
              <input 
                type= "text" 
                placeholder="And take my money" 
                className= "custom-search" 
                name= "bottomText" 
                value= {meme.bottomText}
                onChange={handleChange}
              />
            </div>    
          </div>

          <div>
            <button className= "generation-button" onClick= {getMeme}>
              Get a new meme image
            </button>
          </div>

        </div>

        <div className= "meme">
          {
            meme ? <img src= {meme.randomImage} className= "troll-face-pic" />
                 : <img src= {shut_up} className= "troll-face-pic" />
          }

          <h2 className= "top-text"   >{meme.topText}   </h2>
          <h2 className= "bottom-text">{meme.bottomText}</h2>
        </div>

      </div>
    </>
  )
}

export default MainSection