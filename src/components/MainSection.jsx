import React from 'react'
import '../index.css'
import '../styles/mainSection.css'

const MainSection = () => {
  return (
    <>
      <div className= "main-section">

        <form className='container'>
          <div className= "text-bar-container">
            <div className= "text-bar">
              <label for="search">
                <h1>
                  Top text :
                </h1>
              </label>
              <input type="search" placeholder="Shut up" className= "custom-search"/>
            </div>

            <div className= "text-bar">
              <label for="search">
                <h1>
                  Bottom text :
                </h1>
              </label>
              <input type= "text" placeholder="And take my money" className= "custom-search"/>
            </div>    
          </div>

          <div>
            <button className= "generation-button">Get a new meme image</button>
          </div>
        </form>

        <div>
          <img src="/Shut_up.png" alt="Troll Face" className= "troll-face-pic" />
        </div>

      </div>
    </>
  )
}

export default MainSection