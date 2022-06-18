import React, { Fragment } from 'react';
import { Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, StatusBar, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Octicons";
import CheckIcon from "react-native-vector-icons/Ionicons";
import CopyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ExternalWallet from "./ExternalWallet";
const DEVICE_WIDTH = Dimensions.get('window').width;
Icon.loadFont()

class WalletTransfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metamaskDropDownView: false,
      phantomDropdownView: false,
      selectedValue: "Ethereum Mainnet",
      selectedTab: "Activity",
      showContinueText: false,
      selectedBottomTab: "1"
    }
  }

  componentDidMount() {
    
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({ showContinueText: false })
      //console.log("****************componentDidMount**************************")
    });
  }

  componentWillUnmount() {
  }


  logoutAction = () => {
    this.props.navigation.navigate(goBack(null))
  }

  handleBottomTab = (param) => {
    this.setState({ selectedBottomTab: param })
  }

  render() {
    let { selectedBottomTab } = this.state;
    return (
      <Fragment>
        <SafeAreaView style={styles.root} />
        <StatusBar hidden />
        <View style={styles.mainContainer}>
          <View style={styles.appIconContainer}>
            <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
            <Image resizeMode="cover" style={{display: "none"}} source={ require("../../../assets/images/DividerTest2.png") }></Image>
          </View>
          {this.state.showContinueText ?
            <View style={styles.continueContainer}>
              <Text style={styles.continueText}>HAVE AN I AM GEORGE NFT?</Text>
              <Text style={styles.continueSubText}>CONNECT YOUR METAMASK WALLET</Text>
              <Text style={styles.continueSubText}>TO CONTINUE</Text>
            </View> :
            <View style={{ flex: 1 }}>
              <View style={styles.container}>
                <Text style={styles.titleText}>{"CONNECT EXTERNAL WALLET"}</Text>
              </View>
              <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
              <View style={{ flex: 0.9 }}>
                {/* <TouchableOpacity style={styles.cardContainer} onPress={() => this.setState({ metamaskDropDownView: !this.state.metamaskDropDownView, phantomDropdownView: false })}>
                  <View style={styles.orangeCardStyle}>
                    <Image source={require('../../../assets/images/Metamask.png')} style={styles.cardImageStyle} />
                  </View>
                  <View style={styles.blueCardStyle}>
                    <Text style={styles.cardTitle}>METAMASK WALLET</Text>
                    <Text style={styles.cardSubTitle}>(ETHEREUM NFT'S)</Text>
                  </View>
                </TouchableOpacity> */}
                <View style={styles.cardContainer}>
                  <ExternalWallet />
                </View>
                {/* {this.state.metamaskDropDownView ?
                  <View style={styles.dropDownContainer}>
                    <View style={styles.titleContainer}>
                      <Image source={require('../../../assets/images/Metamask.png')} style={styles.metaMaskIcon} />
                      <TouchableOpacity style={styles.pickerView}>
                        <Icons
                          name='dot-fill'
                          size={25}
                          color="#2CB6AF" />
                        <Text style={styles.pickerText}>Ethereum Mainnet</Text>
                        <Icon
                          name='angle-down'
                          size={30}
                          color="#b5b6b7" />
                      </TouchableOpacity>
                      <Image source={require('../../../assets/images/Phantom.png')} style={styles.metaMaskIcon} />
                    </View>
                    <View style={styles.headerContainer}>
                      <View style={styles.connectedContainer}>
                        <Icons
                          name='dot'
                          size={10}
                          color="#b5b6b7" />
                        <Text style={styles.connectedText}>Not Connected</Text>
                      </View>
                      <View style={styles.headerCenter}>
                        <Text style={styles.headerText}>BK Big</Text>
                        <Text style={styles.pickerText}>0xd14...13BA
                          <CopyIcon
                            name='content-copy'
                            size={12}
                            color="grey" />
                        </Text>
                      </View>
                      <CopyIcon
                        name='dots-vertical'
                        size={19}
                        color="#000"
                        style={styles.dotIcon} />
                    </View>
                    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                      <View style={styles.dropDownBody}>
                        <View style={styles.logoView}>
                          <Image source={require('../../../assets/images/ethereum.png')} style={styles.metaMaskIcon} />
                        </View>
                      </View>
                      <Text style={styles.countTitle}>0 ETH</Text>
                      <Text style={styles.countSubTitle}>$0.00 USD</Text>
                      <View style={styles.arrowContainer}>
                        <View>
                          <View style={styles.arrowView}>
                            <CopyIcon
                              name='arrow-collapse-down'
                              size={19}
                              color="#fff"
                            />
                          </View>
                          <Text style={styles.arrowText}>Buy</Text>
                        </View>
                        <View>
                          <View style={styles.arrowView}>
                            <CopyIcon
                              name='arrow-top-right'
                              size={19}
                              color="#fff"
                            />
                          </View>
                          <Text style={styles.arrowText}>Send</Text>
                        </View>
                        <View>
                          <View style={styles.arrowView}>
                            <CopyIcon
                              name='swap-horizontal'
                              size={19}
                              color="#fff"
                            />
                          </View>
                          <Text style={styles.arrowText}>Swap</Text>
                        </View>
                      </View>
                      <View style={styles.bottomContainer}>
                        <View style={styles.tabTitleContainer}>
                          <TouchableOpacity style={{ borderBottomWidth: this.state.selectedTab === "Assets" ? 2 : 0, borderBottomColor: "#287ed6", paddingVertical: 20, width: "50%", alignItems: "center" }} onPress={() => this.setState({ selectedTab: "Assets" })}><Text style={{ fontSize: 15, fontWeight: "600", color: this.state.selectedTab === "Assets" ? "#287ed6" : "grey" }}>Assets</Text></TouchableOpacity>
                          <TouchableOpacity style={{ borderBottomWidth: this.state.selectedTab === "Activity" ? 2 : 0, borderBottomColor: "#287ed6", paddingVertical: 20, width: "50%", alignItems: "center" }} onPress={() => this.setState({ selectedTab: "Activity" })}><Text style={{ fontSize: 15, fontWeight: "600", color: this.state.selectedTab === "Activity" ? "#287ed6" : "grey" }}>Activity</Text></TouchableOpacity>
                        </View>
                        <View style={styles.bottomBody}>
                          <View style={styles.bottomRowView}>
                            <CopyIcon
                              name='arrow-top-right-thin-circle-outline'
                              size={25}
                              color="#287ED6"
                            />
                            <View style={{ marginLeft: 5 }}>
                              <Text style={styles.headerText}>Send</Text>
                              <Text style={styles.dateText}>April 29, 2021 . <Text style={styles.pickerText}>To: 0xa44...2edc</Text></Text>
                            </View>
                            <View>
                              <Text style={styles.headerText}>-0.09811187 ...</Text>
                              <Text style={[styles.pickerText, { fontSize: 9, marginTop: 5, fontWeight: "700", textAlign: "right" }]}>-$241.33 USD</Text>
                            </View>
                          </View>
                          <View style={styles.bottomRowView}>
                            <CheckIcon
                              name='md-checkmark-done-circle-outline'
                              size={25}
                              color="#287ED6"
                            />
                            <View style={{ marginLeft: 5 }}>
                              <Text style={styles.headerText}>Approve WETH spend ...</Text>
                              <Text style={styles.dateText}>April 29, 2021 . <Text style={styles.pickerText}>app.linch.io</Text></Text>
                            </View>
                            <View style={{ width: 80 }} />
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                  </View> :
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <TouchableOpacity style={styles.cardContainer1} onPress={() => this.setState({ phantomDropdownView: !this.state.phantomDropdownView })}>
                      <View style={styles.orangeCardStyle1}>
                        <Image source={require('../../../assets/images/Phantom.png')} style={styles.cardImageStyle} />
                      </View>
                      <View style={styles.blueCardStyle1}>
                        <Text style={styles.cardTitle1}>PHANTOM WALLET</Text>
                        <Text style={styles.cardSubTitle1}>(SOLANA NFTS)</Text>
                      </View>
                    </TouchableOpacity>
                    {this.state.phantomDropdownView ?
                      <View style={styles.phantomDropDownContainer}>
                        <View style={styles.phantomTitleContainer}>
                          <CheckIcon
                            name='menu'
                            size={25}
                            color="grey"
                          />
                          <Text style={styles.phantomHeaderText}>BK NFT Wallet <Text style={styles.headerSubText}>(EMNE...e5vh)</Text></Text>
                          <Icons
                            name='dot-fill'
                            size={20}
                            color="#eb3642" />
                        </View>
                        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                          <Text style={styles.phantomCountTitle}>$4.73</Text>
                          <Text style={styles.phantomCountSubTitle}>-$0.12 <Text style={styles.phantomCountSubTitleContainer}>-2.50%</Text></Text>
                          <View style={styles.arrowContainer}>
                            <View style={styles.buttonView}>
                              <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Deposit</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Send</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View style={styles.solanaContainer}>
                            <View style={styles.solanaImageContainer}>
                              <Image source={require("../../../assets/images/Solana.png")} style={styles.solanaImageStyle} />
                              <View>
                                <Text style={styles.buttonText}>Solana</Text>
                                <Text style={styles.countSubTitle}>0.05192 SOL</Text>
                              </View>
                            </View>
                            <View>
                              <Text style={styles.buttonText}>$4.73</Text>
                              <Text style={styles.phantomCountSubTitle}>-$0.12</Text>
                            </View>
                          </View>
                          <View style={styles.arrowContainer}>
                            <CopyIcon
                              name='swap-horizontal'
                              size={20}
                              color="#7a73d8"
                            />
                            <Text style={styles.manageText}>Manage token list</Text>
                          </View>
                        </ScrollView>
                        <View style={styles.bottomTabContainer}>
                          <TouchableOpacity style={{ borderTopWidth: 1, borderTopColor: selectedBottomTab === "1" ? "#7a73d8" : "#323232" }} onPress={() => this.handleBottomTab("1")}>
                            <Image source={require("../../../assets/images/dollar.png")} style={{ width: 25, height: 25, tintColor: selectedBottomTab === "1" ? "#fff" : "grey", marginVertical: 20 }} />
                          </TouchableOpacity>
                          <TouchableOpacity style={{ borderTopWidth: 1, borderTopColor: selectedBottomTab === "2" ? "#7a73d8" : "#323232" }} onPress={() => this.handleBottomTab("2")}>
                            <CopyIcon
                              name='view-grid'
                              size={25}
                              color={selectedBottomTab === "2" ? "#fff" : "grey"}
                              style={styles.bottomTabIconStyle}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={{ borderTopWidth: 1, borderTopColor: selectedBottomTab === "3" ? "#7a73d8" : "#323232" }} onPress={() => this.handleBottomTab("3")}>
                            <CopyIcon
                              name='swap-horizontal'
                              size={25}
                              color={selectedBottomTab === "3" ? "#fff" : "grey"}
                              style={styles.bottomTabIconStyle}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={{ borderTopWidth: 1, borderTopColor: selectedBottomTab === "4" ? "#7a73d8" : "#323232" }} onPress={() => this.handleBottomTab("4")}>
                            <CopyIcon
                              name="lightning-bolt"
                              size={25}
                              color={selectedBottomTab === "4" ? "#fff" : "grey"}
                              style={styles.bottomTabIconStyle}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={{ borderTopWidth: 1, borderTopColor: selectedBottomTab === "5" ? "#7a73d8" : "#323232" }} onPress={() => this.handleBottomTab("5")}>
                            <CheckIcon
                              name='settings-sharp'
                              size={25}
                              color={selectedBottomTab === "5" ? "#fff" : "grey"}
                              style={styles.bottomTabIconStyle}
                            />
                          </TouchableOpacity>
                        </View>
                      </View> :
                      <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.viewStyle}>
                          <View style={styles.helpContainer}>
                            <Image source={require('../../../assets/images/Help.png')} style={styles.helpImage} />
                          </View>
                          <View style={styles.helpText}>
                            <Text style={styles.helpTextStyle}>Connect to verify your nft for use or transfer your nft to an external wallet. you can store your nft or sell your nft on the open market by selecting above.</Text>
                          </View>
                        </TouchableOpacity>
                        <ImageBackground resizeMode="stretch" style={styles.dividerStyles} source={require("../../../assets/images/Divider.png")}></ImageBackground>
                      </View>
                    }
                  </View>
                } */}
              </View>
            </View>
          }
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
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
    marginRight: 10
  },
  container: {
    alignItems: "center",
    alignSelf: "center",
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
    marginTop: 5,
    marginBottom: 30,
    alignSelf: "center"
  },
  dividerStyles: {
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginTop: 45,
    //marginBottom: 30,
    alignSelf: "center"
  },
  cardContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "center"
  },
  cardContainer1: {
    flexDirection: "row",
    marginTop: 5
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
  cardTitle: {
    color: "white",
    marginLeft: 10,
    fontFamily: "Hall Fetica",
    fontSize: 18
  },
  cardSubTitle: {
    color: "white",
    marginLeft: 10,
    fontSize: 12,
    fontFamily: "Hall Fetica",
    //marginTop: 4
  },
  orangeCardStyle1: {
    width: 70,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#F48101",
  },
  blueCardStyle1: {
    width: 250,
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderWidth: 2,
    marginLeft: -10,
    borderTopColor: "#55D7FF",
    borderBottomColor: "#55D7FF",
    borderRightColor: "#55D7FF",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  viewStyle: {
    // flex: .24,
    width: 320,
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center"
  },
  helpContainer: {
    flex: .1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 6,
  },
  helpImage: {
    width: 30,
    height: 30,
    marginLeft: 3,
    marginTop: 25
  },
  helpText: {
    flex: .90,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 1,
    paddingHorizontal: 2
  },
  helpTextStyle: {
    color: "white",
    lineHeight: 17,
    fontSize: 15,
    fontFamily: "AireExterior",
    textTransform: "uppercase",
    marginBottom: -30,
    //marginLeft:5
  },
  cardTitle1: {
    color: "white",
    marginLeft: 15,
    fontSize: 18,
    fontFamily: "Hall Fetica"
  },
  cardSubTitle1: {
    color: "white",
    marginLeft: 15,
    fontSize: 12,
    fontFamily: "Hall Fetica",
    //marginTop: 4
  },
  dropDownContainer: {
    backgroundColor: "#fff",
    width: 310,
    marginTop: -5,
    alignSelf: "center",
    flex: 1
  },
  phantomDropDownContainer: {
    backgroundColor: "#212121",
    width: 310,
    marginTop: -5,
    alignSelf: "center",
    flex: 1
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: "#F2F3F4"
  },
  phantomTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: "#212121"
  },
  metaMaskIcon: {
    width: 25,
    height: 25
  },
  pickerView: {
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 25,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  pickerText: {
    color: "grey"
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#b5b6b7"
  },
  connectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8,
    position: 'absolute',
    left: 0,
    top: 10
  },
  connectedText: {
    color: "grey",
    fontSize: 10,
    marginLeft: 2
  },
  headerText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 15,
  },
  phantomHeaderText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  headerSubText: {
    color: "grey"
  },
  headerCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  dotIcon: {
    position: "absolute",
    right: 0,
    top: 15
  },
  dropDownBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15
  },
  logoView: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "#b5b6b7",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  countTitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "700"
  },
  countSubTitle: {
    fontSize: 15,
    color: "grey",
  },
  phantomCountTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginTop: 10
  },
  phantomCountSubTitle: {
    fontSize: 15,
    color: "#eb3642",
    marginTop: 5
  },
  phantomCountSubTitleContainer: {
    backgroundColor: "#3b2524",
    textAlign: "center"
  },
  arrowView: {
    width: 35,
    height: 35,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#287ED6",
    marginHorizontal: 18
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15
  },
  arrowText: {
    fontSize: 12,
    color: "#287ED6",
    textAlign: "center",
    fontWeight: "bold"
  },
  bottomContainer: {
    width: "100%"
  },
  tabTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1.5,
    borderBottomColor: "#F1F2F3"
  },
  bottomRowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: "#F1F2F3",
    paddingVertical: 15,
    paddingHorizontal: 8
  },
  bottomBody: {
    flex: 1
  },
  dateText: {
    color: "#63B970",
    fontSize: 9,
    fontWeight: "700",
    marginTop: 5
  },
  continueText: {
    fontFamily: "AireExterior",
    fontSize: 30,
    color: "#F98400",
    marginBottom: 10
  },
  continueSubText: {
    fontFamily: "AireExterior",
    fontSize: 22,
    color: "#F98400",
    marginBottom: 10
  },
  continueContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%"
  },
  buttonStyle: {
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    borderRadius: 6,
    padding: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 15
  },
  buttonRedText: {
    color: "#fff",
    fontSize: 15
  },
  solanaContainer: {
    flexDirection: "row",
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 6,
    marginTop: 10
  },
  solanaImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  solanaImageStyle: {
    width: 35,
    height: 35,
    marginRight: 10
  },
  manageText: {
    fontSize: 15,
    color: "#7a73d8",
    marginLeft: 10
  },
  bottomTabContainer: {
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15
  },
  bottomTabIconStyle: {
    marginVertical: 20
  }
})

/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
    test: state.sessionReducer.test
  };
};

export default connect(mapStateToProps)(WalletTransfer);