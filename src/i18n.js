import i18n from "i18next";
import LanguageDetector from "i18n-bro";
import {initReactI18next} from "react-i18next"


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug:true,
        lng:"en",
        resourses:{
            en:{
                translation: {
                    greeting:"Hello, Welcome!",
                },
            },
        },
        ar:{

        },
        ti{

        }

    })
