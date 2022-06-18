import React, { Component } from "react";
import { I18nManager } from 'react-native';
import { connect } from 'react-redux';
import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'
import memoize from 'lodash.memoize'
import { FETCH_APPLICATION_LANGUAGE, SELECTED_LANGUAGE } from '../src/store/actions/actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage';


const translationGetters = {
  en: () => require('../translations/en.json'),
  nl: () => require('../translations/nl.json'),
  es: () => require('../translations/es.json')
}

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

class LocalizeString extends Component {
  constructor(props) {
    super(props)
   // if (!this.props.isUserSelectLanguage) {
      this.setI18nConfig() // set initial config
    //}
  }

  setI18nConfig = async () => {
    // fallback if no available language fits
    const fallback = { languageTag: "en", isRTL: false };
    const { languageTag, isRTL } =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;
    // clear translation cache
    translate.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
    await this.props.dispatch({ type: FETCH_APPLICATION_LANGUAGE, data: i18n.translations })
    await this.props.dispatch({ type: SELECTED_LANGUAGE, data: "Default" })
    await AsyncStorage.setItem('language', Object.keys(i18n.translations)[0]);

    //console.log("***********************values***"+JSON.stringify(i18n.translations))
    
    //this.props.dispatch(fetchDeviceLanguage({ deviceLanguage: Object.keys(i18n.translations)[0] }))
  };

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange)
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange)
  }

  handleLocalizationChange = () => {
    this.setI18nConfig();
    this.forceUpdate();
  }

  render() {
     return null;
  }
}

/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
   // isUserSelectLanguage: state.loginReducer.isUserSelectLanguage,
    //selectedLanguage: state.loginReducer.selectedLanguage
  };
}

export default connect(mapStateToProps)(LocalizeString);