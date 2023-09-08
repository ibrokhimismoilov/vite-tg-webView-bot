import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationRu from "@/assets/locales/ru/translation.json";
import translationCyril from "@/assets/locales/uz_cyrl/translation.json";
import translationLatin from "@/assets/locales/uz_latn/translation.json";

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		keySeparator: "|",
		resources: {
			["ru"]: {
				translation: translationRu
			},
			["uz_cyrl"]: {
				translation: translationCyril
			},
			["uz_latn"]: {
				translation: translationLatin
			}
		},

		fallbackLng: ["ru", "uz_cyrl", "uz_latn"],
		detection: {
			order: ["localStorage"]
		},
		react: {
			useSuspense: false
		}
	});

export default i18n;
