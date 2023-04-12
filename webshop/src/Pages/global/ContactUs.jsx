import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k4r0onh', 'template_pfjl3we', form.current, '2m7I63GXh1h_3aHll')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='center' ref={form}>
      <br /><br />
      <TextField id="from_name" label="Name" variant="outlined" />
      <br />  <br />
      <TextField id="from_email" label="E-mail" variant="outlined" />
      <br /> <br />
      <TextField id="from_message" label="Message" variant="outlined" />
      <br /> <br />
     <Button variant = "contained" onClick={sendEmail}>Send</Button>
      
    </form>
  );
};