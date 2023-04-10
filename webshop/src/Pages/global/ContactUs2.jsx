import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs2  ()  {
  const nameRef = useRef ()
  const emailRef = useRef()
  const messageRef = useRef()

  const sendEmail = () => {
    
    emailjs.send('service_k4r0onh', 'template_pfjl3we', form.current, '2m7I63GXh1h_3aHll')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label>
      <input ref={nameRef} type="text" name="from_name" />
      <label>Email</label>
      <input  ref={emailRef} type="email" name="from_email" />
      <label>Message</label>
      <textarea ref={messageRef} />
     <button onClick={sendEmail}>send</button>
     </div>
  );
};

export default  ContactUs2;