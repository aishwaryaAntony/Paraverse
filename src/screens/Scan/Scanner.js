import React, { Fragment } from 'react';
import { Text, View, Image, ImageBackground, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { connect } from "react-redux";
const DEVICE_WIDTH = Dimensions.get('window').width;
import { getWalletData } from "../../store/actions/sessionAction"

class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAccount:null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.walletAccount !== props.walletAccount) {
      return {
       walletAccount: props.walletAccount
      }
    }
    return null
  }

  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.state.walletAccount !== null) {
       this.props.dispatch(getWalletData(this.state.walletAccount));
      }
    });

  }

  componentWillUnmount() {

  }

  render() {
    let { translate } = this.props;
    return (
      <Fragment>
        <SafeAreaView style={styles.root} />
        <View style={styles.mainContainer}>
          <View style={styles.appIconContainer}>
            <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
          </View>
          <View style={styles.container}>
            <Text style={styles.titleText}>{translate["CHOOSE SCANNING OPTION"]} :</Text>
            <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
            <ScrollView style={{ marginTop: 15, paddingTop: 40 }} contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}>
              <TouchableOpacity style={styles.cardContainer} onPress={() => this.props.navigation.navigate("BarCodeScreen")}>
                <View style={styles.orangeCardStyle}>
                  <Image source={require('../../../assets/images/Barcode.png')} style={styles.cardImageStyle} />
                </View>
                <View style={styles.blueCardStyle}>
                  <Text style={styles.textStyle}>{translate["USE DIGITAL ASSET (NFT) IN-PERSON OR ONLINE"]}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.helpView}>
                <TouchableOpacity style={styles.helpImageView}>
                  <Image source={require('../../../assets/images/Help.png')} style={styles.helpImageStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.helpTextContainer}>
                  <Text style={styles.helpTextStyle}>{translate["DID YOU RECEIVE A DIGITAL ASSET (NFT) FROM A BRAND? THAT NFT HAS VALUE! CLICK ABOVE TO USE  YOUR NFT IN-PERSON OR ONLINE."]}</Text>
                </TouchableOpacity>
              </View>
              <ImageBackground resizeMode="stretch" style={styles.blueDividerStyle} source={require("../../../assets/images/DividerBlue.png")}></ImageBackground>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.props.navigation.navigate("BarCodeScanner")}>
                <View style={styles.orangeCardStyle1}>
                  <Image source={require('../../../assets/images/Scan.png')} style={styles.imageStyle} />
                </View>
                <View style={styles.blueCardStyle1}>
                  <Text style={styles.textStyle1}>{translate["SCAN QR CODE TO REDEEM YOUR NFT"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.helpView}>
                <View style={styles.helpImageView}>
                  <Image source={require('../../../assets/images/Help.png')} style={styles.helpImageStyles} />
                </View>
                <View style={styles.helpTextContainer}>
                  <Text style={styles.helpTextStyles}>{translate["DID YOU RECEIVE A PHYSICAL ITEM OR COLLECTIBLE FROM A BRAND IN-PERSON? OR WERE YOU PROMPTED TO SCAN A QR CODE TO REDEEM YOUR NFT? CLICK ABOVE TO CONVERT THAT QR CODE INTO AN NFT."]}</Text>
                </View>
              </TouchableOpacity>             
            </ScrollView>
            <Image style={styles.bottomDividerStyle} source={require("../../../assets/images/Divider.png")} />
          </View>
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: '#000'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#000"
  },
  appIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  appIcon: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  container: {
    alignItems: "center",
    marginTop: 10   
  },
  titleText: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
    fontFamily: "AireExterior",
    fontSize: 25
  },
  dividerStyle: {
    width: DEVICE_WIDTH - 30,
    height: 40,
    marginTop: 40,
    position: "absolute",
    zIndex: 1
  },
  cardContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  orangeCardStyle: {
    width: 70,
    height: 60,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderLeftColor: "#F48101",
    borderBottomColor: "#F48101",
    borderTopColor: "#F48101",
    marginRight: -10
  },
  cardImageStyle: {
    width: 30,
    height: 30,
    marginLeft: -10
  },
  blueCardStyle: {
    width: 250,
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#55D7FF",
  },
  textStyle: {
    color: "white",
    lineHeight: 20,
    marginLeft: 10,
    fontFamily: "Hall Fetica",
    fontSize: 18
  },
  helpView: {
    flexDirection: "row",
    marginTop: 20,
    width: 320
  },
  helpImageView: {
    flex: .1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 6,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  helpImageStyle: {
    width: 30,
    height: 30,
  },
  helpImageStyles: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  helpTextContainer: {
    flex: .90,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderWidth: 1,
  },
  helpTextStyle: {
    color: "white",
    lineHeight: 17,
    fontSize: 15,
    fontFamily: "AireExterior",
    textTransform: "uppercase"
  },
  helpTextStyles: {
    color: "white",
    lineHeight: 17,
    fontSize: 15,
    fontFamily: "AireExterior",
    textTransform: "uppercase",
    marginBottom: 10
  },
  blueDividerStyle: {
    width: DEVICE_WIDTH - 40,
    height: 60,
    marginTop: 30,
  },
  cardContainer1: {
    flexDirection: "row",
    marginTop: 30
  },
  orangeCardStyle1: {
    width: 70,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#F48101",
  },
  blueCardStyle1: {
    width: 250,
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 5,
    borderWidth: 2,
    marginLeft: -10,
    borderTopColor: "#55D7FF",
    borderBottomColor: "#55D7FF",
    borderRightColor: "#55D7FF",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },
  textStyle1: {
    color: "white",
    lineHeight: 20,
    marginLeft: 15,
    fontFamily: "Hall Fetica",
    fontSize: 18
  },
  bottomDividerStyle: {
    width: DEVICE_WIDTH - 40,
    height: 40,
    // marginBottom: 40
  },
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
    marginRight: 10
  },
})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
    translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].scanScreen,
    walletAccount: state.sessionReducer.walletAccount
  };
};

export default connect(mapStateToProps)(Scanner);