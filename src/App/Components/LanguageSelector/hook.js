import { useTranslation } from "react-i18next"

export default () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }



    return { t, changeLanguage }



}