import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { SECURITY_PRIVACY } from "../../store/actions/actionTypes";
const DEVICE_WIDTH = Dimensions.get('window').width;

class SecurityPrivacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    toggleAction = (param, value) => {
        this.props.dispatch({ type: SECURITY_PRIVACY, data: { [param]: !value } })
    }

    render() {
        let { securityPrivacy, translate } = this.props;
        return (
            <Fragment>
                <SafeAreaView style={styles.root}>
                    <View style={styles.appIconContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                            <Image source={require('../../../assets/images/back.png')} style={styles.appIcon} />
                        </TouchableOpacity>
                        <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.heading}>{translate["SECURITY/PRIVACY"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")}/>
                        <View style={styles.container}>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["TWO-FACTOR AUTHENTICATION"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("twoFactorAuthentication", securityPrivacy.twoFactorAuthentication)}>
                                    <Image source={securityPrivacy.twoFactorAuthentication ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["ANTI-PHISING"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("antiPhishing", securityPrivacy.antiPhishing)}>
                                    <Image source={securityPrivacy.antiPhishing ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["SIGN IN WITH BIOMETRICS"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("biometrics", securityPrivacy.biometrics)}>
                                    <Image source={securityPrivacy.biometrics ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["STAY LOGGED IN"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("stayLoggedIn", securityPrivacy.stayLoggedIn)}>
                                    <Image source={securityPrivacy.stayLoggedIn ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rowStyle}>
                                <TouchableOpacity>
                                    <Text style={styles.titleText}>{translate["CHECK LOGIN ACTIVITY"]}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#000'
    },
    mainContainer: {
        flex: 1,
        alignItems: "center"
    },
    container: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#F48101",
        paddingTop: 10,
        paddingBottom: 25,
        paddingHorizontal: 20,
        width: DEVICE_WIDTH / 1.2,
    },
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        width: DEVICE_WIDTH / 1.6
    },
    appUpdateRowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25,
        width: DEVICE_WIDTH / 1.5
    },
    titleText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18,
        width: DEVICE_WIDTH / 2,
        lineHeight: 25
    },
    appIconContainer: {
        // flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop:7.7
    },
    appIcon: {
        width: 35,
        height: 25,
        marginLeft:10
      },
    sendIcon: {
        width: 25,
        height: 25,
        tintColor: "#fff",
        marginRight:10
    },
    toggleIcon: {
        width: 35,
        height: 20
    },
    bodyContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    heading: {
        color: "#fff",
        marginTop: 17,
        fontFamily: "AireExterior",
        fontSize: 25,
        marginBottom:DEVICE_WIDTH/3.8
    },
    dividerStyle: {
        width: DEVICE_WIDTH - 30,
        height: 40,
        marginTop:47.5,
        position: "absolute",
        zIndex: 1
    },
})

const mapStateToProps = (state) => {
    return {
        securityPrivacy: state.sessionReducer.securityPrivacy,
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
    }
}

export default connect(mapStateToProps)(SecurityPrivacy);