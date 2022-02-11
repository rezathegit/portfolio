import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./ContactMe.scss"

export default function ContactMe() {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_55hvp33',
                'template_l47mf25',
                formRef.current,
                'user_q0mRGcVEnp9KctnpjqpOl'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                });

    }

    return (
        <div className="contactMe" id="contactMe">
            <div className="contactMe-bg"></div>
            <div className="contactMe-wrapper">
                <div className="contactMe-left">
                    <div className="contactMe-title">Let's discuss your project!</div>
                </div>
                <div className="contactMe-right">
                    <p>
                        <b>
                            Do you want to contact me?
                        </b> Let's get in touch
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && <span className="message">Thanks! I'll come back to you ASAP!</span> }
                    </form>
                </div>
            </div>
        </div>
    )
}
