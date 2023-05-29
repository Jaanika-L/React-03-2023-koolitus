import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "homepage": "HOME",
      "add-post": "ADD POST",
      "contact" : "CONTACT",
      "login": "LOG IN",
      "register" : "REGISTER",
      "theses": "React Theses",
      "blog":"Blog",
      "categories": "CATEGORIES",
      "style":"Style",
      "design":"Design",
      "food" :"Food",
      "relationships":"Relationship",
      "travel":"Travel",
      "motherhood":"Motherhood",
      "follow":"FOLLOW US",
      "add":"ADD",
      "img":"Add image",
      "title":"Title",
      "write":"Write here",
      "change":"Change",
      "registerTitle":"Register",
      "email":"Email",
      "password":"Password",
      "enterE":"Enter your email...",
      "enterP":"Enter you password...",
      "about":"ABOUT ME",
      "contact-name":"Write name",
      "contact-email":"Write email",
      "contact-message":"Write message",
      "contact-send":"Send",
      "contact-title":"Send Message",
      "name":"Name",
      "message":"Message",
      'toast.error.contact':"Please fill all the fields!",
      'toast-success-contact':"Message sent!"


    
}
  },
  ee: {
    translation: {
      "homepage": "AVALEHT",
      "add-post": "LISA POSTITUS",
      "contact" : "KONTAKT",
      "login": "LOGI SISSE",
      "register" : "REGISTREERI",
      "theses":"React lõputöö",
      "blog": "Blogi",
      "categories": "KATEGOORIAD",
      "style":"Mood",
      "design":"Disain",
      "food" :"Toit",
      "relationships":"Suhted",
      "travel":"Reisimine",
      "motherhood":"Emadus",
      "follow":"JÄLGI",
      "add":"Lisa",
      "img":"Lisa pilt",
      "title":"Pealkiri",
      "write":"Kirjuta siia",
      "change":"Muuda" ,
      "registerTitle":"Registreeri",
      "email":"Email"  ,
      "password":"Salasõna",
      "enterE":"Sisesta oma email...",
      "enterP":"Sisesta oma salasõna...",
      "about":"MINUST",
      "contact-name":"Sisesta nimi",
      "contact-email":"Sisesta email",
      "contact-message":"Sisesta sõnum",
      "contact-send":"Saada",
      "contact-title":"Saada sõnum",
      "name":"Nimi",
      "message":"Sõnum",
      'toast.error.contact':"Palun täida kõik väljad!",
      'toast-success-contact':"Sõnum saadetud!"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;