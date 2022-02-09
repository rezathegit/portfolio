import React from 'react'
import "./ContactMe.scss"

export default function ContactMe() {
  return (
    <div className="contactMe">ContactMe
    <div className="contactMe-bg"></div>
    <div className="contactMe-wrapper">
        <div className="contactMe-left">
            <div className="contactMe-title">Let's discuss your project!</div>
        </div>
        <div className="contactMe-right">
            <p>
                <b>
                    What's your story?
                </b> Get in touch 
            </p>
            <form>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea rows="5" placeholder="Message" name="message"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}
