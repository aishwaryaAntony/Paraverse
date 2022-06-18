import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import Icons from "react-native-vector-icons/SimpleLineIcons";
const DEVICE_WIDTH = Dimensions.get('window').width;
import { CommonActions } from '@react-navigation/native';

import { WALLET_INFO } from "../../store/actions/actionTypes";
//import TouchID from 'react-native-touch-id'

// const optionalConfigObject = {
//     title: "Authentication Required", // Android
//     color: "#e00606", // Android,
//     fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
// }

class BarCodeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {          
        }
    }

    componentDidMount() {
        setTimeout(() => {
           this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'MyCollectionTab' },
                   
                  ],
                })
              );
        }, 3000)

        // TouchID.isSupported()
        //     .then(biometryType => {
        //         // Success code
        //         if (biometryType === 'FaceID') {
        //             this.setState({ biometryType })
        //             this.pressHandler()
        //         } else if (biometryType === 'TouchID') {
        //             this.setState({ biometryType })
        //             this.pressHandler()
        //         } else if (biometryType === true) {
        //             this.setState({ biometryType })
        //             this.pressHandler()
        //         }
        //     })
        //     .catch(error => {
        //         // Failure code if the user's device does not have touchID or faceID enabled
        //         this.setState({ biometryType: false })
        //         console.log(error);
        //     });
    }


    componentWillUnmount() {

    }

    // pressHandler = async () => {
    //     TouchID.authenticate('Paraverse App', optionalConfigObject)
    //         .then(success => {
    //             this.setState({ clickedUseNFT: true })
    //             let data = this.props.walletInfo.filter((item) => item.metadata.image !== this.props.route.params.id.metadata.image)
    //             this.props.dispatch({ type: WALLET_INFO, data: data })
    //             setTimeout(() => {
    //                 this.props.navigation.navigate("MyCollection")
    //             }, 3000)
    //         })
    //         .catch(error => {
    //             alert('Authentication Failed');
    //         });
    // }


    render() {
        let { translate } = this.props;     
        return (
            <Fragment>
                <SafeAreaView style={styles.root} />
                <View style={styles.mainContainer}>
                    <View style={styles.appIconContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                            <Image source={require('../../../assets/images/back.png')} style={styles.appIcon} />
                        </TouchableOpacity>
                        <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.titleText}>{translate["USE NFT"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
                        <ScrollView style={{ flex: 1, marginTop: 15, paddingTop: 40, }} contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}>
                            <View>
                                <Image source={require('../../../assets/images/Paraverse_NFT.png')} resizeMode="cover" style={styles.barCodeImage} />
                            </View>
                            {/* <TouchableOpacity style={styles.helpView}>
                                <View style={styles.helpImageView}>
                                    <Image source={require('../../../assets/images/Help.png')} style={styles.imageStyle} />
                                </View>
                                <View style={styles.helpTextContainer}>
                                    <Text style={styles.helpTextStyle}>{translate["HAVE YOUR NFT SCANNED TO REDEEM ITS VALUE IN-PERSON OR USE THE CODE TO REDEEM YOUR NFT ONLINE."]}</Text>
                                </View>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={styles.cardContainer}>
                                <View style={styles.orangeCardStyle}>
                                    <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.cardImageStyle} resizeMode="contain" />
                                </View>
                                <View style={styles.blueCardStyle}>
                                    <Text style={styles.textStyle}>{translate["BRAND"]}: PARAVERSE</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardContainerStyle}>
                                <View style={styles.orangeCardStyle1}>
                                    <Image source={require('../../../assets/images/reward.png')} style={styles.cardImageStyle} resizeMode="contain" />
                                </View>
                                <View style={styles.blueCardStyle1} >
                                    <Text style={styles.textStyle1}>EXCLUSIVE REWARD</Text>
                                </View>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={styles.cardContainerStyle}>
                                <View style={styles.orangeCardStyle}>
                                    <Image source={require('../../../assets/images/location.png')} style={styles.cardImageStyle} resizeMode="contain" />
                                </View>
                                <View style={styles.blueCardStyle} >
                                    <Text style={styles.textStyle}>{translate["FIND A LOCATION"]}</Text>
                                </View>
                            </TouchableOpacity> */}                           
                                <View style={styles.niceStyle}>
                                    <Text style={styles.buttonText}>NICE !</Text>
                                    <Icons name='check' size={50} color="#FFF" style={styles.checkIcon} />
                                </View>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10
    },
    appIcon: {
        width: 35,
        height: 25,
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
        marginTop: 30
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
        marginLeft: 10,
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    helpView: {
        flexDirection: "row",
        marginVertical: 30,
        width: DEVICE_WIDTH / 1.4,
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
    cardContainerStyle: {
        flex: .3,
        flexDirection: "row",
        marginTop: 5
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
        marginLeft: 15,
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    bodyContainer: {             
        width: DEVICE_WIDTH / 1.4,
        height: DEVICE_WIDTH / 1.4,
        backgroundColor: "rgb(255, 255, 255)",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        zIndex: 1
    },
    barCodeImage: {
        width: DEVICE_WIDTH / 1.4,
        height: DEVICE_WIDTH / 1.4,
        zIndex: 2,
        alignSelf: "center"
    },
    useButtonStyle: {
        backgroundColor: "#55D8FF",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        width: DEVICE_WIDTH / 1.5,
        marginVertical: 35,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    niceStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 35,
    },
    checkIcon: {
        marginVertical: 10
    }
})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
    return {
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].scanScreen,
        walletInfo: state.sessionReducer.walletInfo
    };
};

export default connect(mapStateToProps)(BarCodeScreen);