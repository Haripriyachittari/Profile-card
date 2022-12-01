import React from 'react'

export default function MainComponent() {
  return (
    <div className='main'>
        <div className='profile'>
            <h1>Laura Smith</h1>
            <h5>Frontend Developer</h5>
            <p>laurasmith.website</p>
        </div>
        <div className='buttons'>
            <button className='email'><i class="fa-solid fa-envelope"></i> Email</button>
            <button className='linkedin'><i class="fa-brands fa-linkedin"></i> Linkedin</button>
        </div>
        <div className='profile-info'>
            <h4>About</h4>
            <p>I am a frontend developer with a particular interest in making things simple and automating tasks. I try to keep up with the security and best practices, and I am always looking for new things to learn.</p>
            <h4>Interests</h4>
            <p>Food Expert, Music Scholar, Reader, Internet Fanatic,Entrepreneur, pop culture ninja, coffee fanatic</p>
        </div>
      
    </div>
  )
}
