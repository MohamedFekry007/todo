import i18n from "i18n-js";
import memoize from "lodash.memoize";
import {
    I18nManager
} from "react-native";
import RNRestart from 'react-native-restart';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import ar from '../../assets/translations/ar.json';
import en from '../../assets/translations/en.json';
import CONSTANTS from '../config';

const translationGetters = {
    ar,
    en,
};

i18n.translations = { ...translationGetters };

export const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const initLocale = (currentLang) => {
    const fallback = { languageTag: currentLang || "en", isRTL: currentLang != "en" };
    // update layout direction
    I18nManager.forceRTL(fallback.isRTL);
    // set i18n-js config
    i18n.locale = fallback.languageTag;
}

export const changeLang = async () => {
    let newLang = i18n.locale == "en" ? 'ar' : "en";
    I18nManager.forceRTL(newLang != "en");
    i18n.locale = newLang;
    await RNSecureStorage.set(CONSTANTS.language, newLang, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    });
    setTimeout(() => {
        RNRestart.Restart();
    }, 30);
};

export const getPreferredLanguage = async () => {
    await RNSecureStorage.get(CONSTANTS.language);
}