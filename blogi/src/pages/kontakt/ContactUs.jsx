import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import "./contactUs.css"
import { ToastContainer, toast } from 'react-toastify';

export const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation();


  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.elements.name;
    const emailInput = form.current.elements.email;
    const messageInput = form.current.elements.message;
  
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      toast.error(t('toast.error.contact'), {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    emailjs.sendForm('service_k4r0onh', 'template_pfjl3we', form.current, '2m7I63GXh1h_3aHll')
      .then((result) => {
          console.log(result.text);
          toast.success(t('toast-success-contact'), 
            {position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

<div className="contactUs">
      <span className="contactTitle">{t("contact-title")}</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <label>{t("name")}</label>
        <input type="text" className="registerInput" placeholder={t('contact-name')} name="name"/>
        <label>{t("email")}</label>
        <input type="text" className="registerInput"  placeholder={t('contact-email')} name="email"/>
        <label>{t("message")}</label>
        <textarea className='registerInput' type="text" maxLength="1000" placeholder={t('contact-message')} name="message" rows="5" cols="80">
        </textarea>
        <button className="contactButton">{t('contact-send')}</button>
      </form>
      <ToastContainer/>
    </div>

    
  );
};