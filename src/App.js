import React, { Component } from 'react';
import { Text, View, TextInput, Platform } from 'react-native';
import RootNav from "../components/RootNav";
import LocalizeString from '../components/LocalizeString';
import { connect } from "react-redux";
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import { AlertHelper } from '../components/AlertHelper';

/** Disable the font scaling in TextBox */
if (Text.defaultProps === undefined) {
  Text.defaultProps = {};
}

if (TextInput.defaultProps === undefined) {
  TextInput.defaultProps = {};
}


/** Disable the font scaling in Text String */
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null
    }
  }

  async componentDidMount() {

  }


  render() {
    return (
      <WalletConnectProvider
        bridge="https://bridge.walletconnect.org"
        clientMeta={{
          description: 'Connect with WalletConnect',
          url: 'https://walletconnect.org',
          icons: ['https://walletconnect.org/walletconnect-logo.png'],
          name: 'WalletConnect',
        }}
        redirectUrl={Platform.OS === 'web' ? window.location.origin : 'paraverse://'}
        storageOptions={{
          asyncStorage: AsyncStorage,
        }}>
        <View style={{ flex: 1 }}>
          <RootNav />
          <LocalizeString />
          <DropdownAlert defaultContainer={{ marginTop:5 }} updateStatusBar={false} ref={ref => AlertHelper.setDropDown(ref)} onClose={() => AlertHelper.invokeOnClose()} />
        </View>
      </WalletConnectProvider>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].homeScreen,
  };
};

export default connect(mapStateToProps)(App);



