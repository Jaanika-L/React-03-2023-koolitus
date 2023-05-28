import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import "./contactUs.css"

export const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation();


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

<div className="contactUs">
      <span className="contactTitle">{t("contact-title")}</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <label>{t("name")}</label>
        <input type="text" className="registerInput" placeholder={t('contact-name')} />
        <label>{t("email")}</label>
        <input type="text" className="registerInput"  placeholder={t('contact-email')} />
        <label>{t("message")}</label>
        <input type="text" className="registerInput contactInput"  placeholder={t('contact-message')} />
        <button className="contactButton">{t('contact-send')}</button>
      </form>
      
    </div>

    
  );
};