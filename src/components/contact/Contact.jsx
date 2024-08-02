import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            
            <img src="https://static.vecteezy.com/system/resources/previews/000/453/432/original/vector-contact-us-background.jpg" width="600" height="800" ></img>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Bhimadole,Eluru, Andhra Pradesh</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> education@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 9876543210</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact