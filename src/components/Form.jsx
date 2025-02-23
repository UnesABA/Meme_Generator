import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData]= useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsLetter: true
  })

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event){
    event.preventDefault()

    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up")
    } else {
      console.log("passwords do not match") 
      return
    } 
    
    //formData.joinNewsLetter && console.log("Thanks for signing up for our newsletter!")
    if(formData.joinNewsLetter){
      console.log("Thanks for signing up for our newslatter!")
    }
  }

  return (
    <div>

      <form className ="form" onSubmit= {handleSubmit}> 

        <input 
          className= "input"
          type="email" 
          spaceholder= "Email adress" 
          name= "email" 
          onChange= {handleChange} 
          value= {formData.email} 
          />
        <input 
          className= "input"
          type= "password" 
          spaceholder= "Password" 
          name= "password" 
          onChange= {handleChange} 
          value= {formData.password}
          />
        <input 
          className= "input"
          type="password" 
          spaceholder= "Confirm password" 
          name= "confirmPassword" 
          onChange= {handleChange} 
          value= {formData.confirmPassword}
          />

          <div className= "checkbox">
            <input
            type= "checkbox" 
            id="join" 
            name= "joinNewsLetter" 
            onChange= {handleChange} 
            checked= {formData.joinNewsLetter}
            />
            <label htmlFor="join">
             I want to join the newsletter
            </label>
          </div>
        
          
          <button className= "sign-up">
            Sign up
          </button>

      </form>

    </div>

  )
}

export default Form