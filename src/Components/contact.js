import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
      <h3>Contact</h3>
      <div className='contact-info'><img className='contact-icon' width={48} src='/assets/mail.png' alt='email-icon' /><span>email@example.com</span></div>
      <div className='contact-info'><img className='contact-icon' width={48} src='/assets/discord.png' alt='discord-icon' /><span>discordID</span></div>
    </div>
  )
}

export default Contact
