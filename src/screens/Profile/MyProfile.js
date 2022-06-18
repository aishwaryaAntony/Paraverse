import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { connect } from "react-redux";
const DEVICE_WIDTH = Dimensions.get('window').width;

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  buttonAction = (param) => {
     this.props.navigation.navigate(param)
  }

  render() {
    let translate = this.props.translate
    return (
      <Fragment>
        <SafeAreaView style={styles.root} />
        <View style={styles.mainContainer}>
          <View style={styles.appIconContainer}>
            <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
          </View>
          <View style={styles.container}>
            <Text style={styles.titleText}>{translate["MY PROFILE"]}</Text>
            <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
            <ScrollView style={{ flex: 1, marginTop: 15, paddingTop: 40 }} contentContainerStyle={{ paddingBottom: 40 }}>
              <TouchableOpacity style={styles.cardContainer} onPress={() => this.buttonAction("ManageAccount")}>
                <View style={styles.orangeCardStyle}>
                  <Image source={require('../../../assets/images/Profile.png')} style={styles.cardImageStyle} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle}>
                  <Text style={styles.textStyle}>{translate["MANAGE ACCOUNT"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.buttonAction("ManageConnections")}>
                <View style={styles.orangeCardStyle1}>
                  <Image source={require('../../../assets/images/Connections.png')} style={styles.cardImageStyles} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle1}>
                  <Text style={styles.textStyle1}>{translate["CONNECTIONS"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.buttonAction("NftManagement")}>
                <View style={styles.orangeCardStyle}>
                  <Image source={require('../../../assets/images/nft.png')} style={styles.cardImageStyle} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle}>
                  <Text style={styles.textStyle}>{translate["NFT MANAGEMENT"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.buttonAction("AppSettings")}>
                <View style={styles.orangeCardStyle1}>
                  <Image source={require('../../../assets/images/Settings.png')} style={styles.cardImageStyles} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle1}>
                  <Text style={styles.textStyle1}>{translate["APP SETTINGS"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.buttonAction("SecurityPrivacy")}>
                <View style={styles.orangeCardStyle}>
                  <Image source={require('../../../assets/images/Security.png')} style={styles.cardImageStyle} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle}>
                  <Text style={styles.textStyle}>{translate["SECURITY/PRIVACY"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.buttonAction("Support")}>
                <View style={styles.orangeCardStyle1}>
                  <Image source={require('../../../assets/images/Support.png')} style={styles.cardImageStyles} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle1}>
                  <Text style={styles.textStyle1}>{translate["SUPPORT"]}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardContainer1} onPress={() => this.buttonAction("About")}>
                <View style={styles.orangeCardStyle}>
                  <Image source={require('../../../assets/images/About.png')} style={styles.cardImageStyle} resizeMode="contain" />
                </View>
                <View style={styles.blueCardStyle} >
                  <Text style={styles.textStyle}>{translate["ABOUT"]}</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
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
    // flex: 0.1,
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
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
    marginRight: 10
  },
  container: {
    flex: 1,
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
    marginTop: 10,
  },
  cardContainer1: {
    flexDirection: "row",
    marginTop: 5
  },
  orangeCardStyle: {
    // flex: .12,
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
  cardImageStyles: {
    width: 30,
    height: 30,
    marginLeft: -0.9
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
  textStyle: {
    color: "white",
    marginLeft: 10,
    fontFamily: "Hall Fetica",
    fontSize: 18
  },
  textStyle1: {
    color: "white",
    marginLeft: 15,
    fontFamily: "Hall Fetica",
    fontSize: 18
  }
})

/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
    translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
  };
};

export default connect(mapStateToProps)(MyProfile);