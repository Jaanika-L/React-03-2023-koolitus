import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "To admin view",
      "contact": "Contact Us",
      "shops": "Our shops",
      "cart": "Cart",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-product": "Add product",
      "maintain-products": "Maintain products"
    }
  },
  ee: {
    translation: {
      "admin": "Administraatori vaatesse",
      "contact": "Kontakteeru meiega",
      "shops": "Meie poed",
      "cart": "Ostukorv",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid"
    }

  },
  fr: {
    translation: {
      "admin": "Vue de l'administrateur",
      "contact": "Contactez-nous",
      "shops": "Nos magasins",
      "cart": "Panier",
      "maintain-categories": "Gérer les catégories",
      "maintain-shops": "Gérer les magasins",
      "add-product": "Ajouter un produit",
      "maintain-products": "Gérer les produits"
    }

  },
  ru: {
    translation: {
      "admin": "Панель администратора",
      "contact": "Связаться с нами",
      "shops": "Наши магазины",
      "cart": "Корзина",
      "maintain-categories": "Управление категориями",
      "maintain-shops": "Управление магазинами",
      "add-product": "Добавить товар",
      "maintain-products": "Управление товарами"
    }

  },
  

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en",  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;