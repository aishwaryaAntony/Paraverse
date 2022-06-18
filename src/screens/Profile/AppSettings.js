import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image, ImageBackground, Modal, TouchableWithoutFeedback } from "react-native";
import { connect } from "react-redux";
import { APP_SETTINGS } from "../../store/actions/actionTypes";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
const DEVICE_WIDTH = Dimensions.get('window').width;

class AppSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false,
            languages: ["ENGLISH", "SPANISH"],
            selectedLanguage: "ENGLISH"
        }
    }

    handleDropdown = (item) => {
        this.setState({ selectedLanguage: item, showDropDown: !this.state.showDropDown })
    }

    toggleAction = (param, value) => {
        this.props.dispatch({ type: APP_SETTINGS, data: { [param]: !value } })
    }

    render() {
        let { appSettings, translate } = this.props;
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
                        <Text style={styles.heading}>{translate["APP SETTINGS"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")}/>
                        <View style={styles.container}>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["NOTIFICATIONS"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("notifications", appSettings.notifications)}>
                                    <Image source={appSettings.notifications ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["SHARE NFTS"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("shareNfts", appSettings.shareNfts)}>
                                    <Image source={appSettings.shareNfts ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["LOCATION SERVICES"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("locationServices", appSettings.locationServices)}>
                                    <Image source={appSettings.locationServices ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["ENABLE HINTS"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction("enableHints", appSettings.enableHints)}>
                                    <Image source={appSettings.enableHints ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["LANGUAGE"]} :</Text>
                                <TouchableOpacity style={styles.dropDownStyle} onPress={() => this.setState({ showDropDown: !this.state.showDropDown })}>
                                    <Text style={styles.valueText}>{translate[this.state.selectedLanguage]}</Text>
                                    <Icon
                                        name="angle-down"
                                        size={20}
                                        color="#FFFFFF"
                                        style={{ marginLeft: 45 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.showDropDown}
                            onRequestClose={() => {
                                this.setState({ showDropDown: false });
                            }}>
                            <TouchableOpacity style={styles.outerModel} activeOpacity={1}
                                onPressOut={() => this.setState({ showDropDown: false })}
                            >
                                <TouchableWithoutFeedback>
                                    <View style={styles.innerModal}>
                                        {this.state.languages.map((item) =>
                                            <TouchableOpacity key={item} style={styles.dropDownItemStyle} onPress={() => {
                                                this.handleDropdown(item)
                                            }}>
                                                <Text style={{ color: item === this.state.selectedLanguage ? "#55d6ff" : "#fff", fontSize: 18, paddingVertical: 5, fontFamily: "Hall Fetica" }}>{translate[item]}</Text>
                                                {item === this.state.selectedLanguage &&
                                                    <Icon
                                                        name="check-circle"
                                                        size={20}
                                                        color="#55d6ff"
                                                    />}
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </TouchableWithoutFeedback>
                            </TouchableOpacity>
                        </Modal>
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
        paddingBottom: 30,
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
        marginTop: 30,
        width: DEVICE_WIDTH / 1.5
    },
    titleText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18
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
    outerModel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    innerModal: {
        backgroundColor: "#000",
        width: "70%",
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#F48101",
    },
    dropDownItemStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    dropDownStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    valueText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18,
        marginLeft: 15
    },
})

const mapStateToProps = (state) => {
    return {
        appSettings: state.sessionReducer.appSettings,
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
    }
}

export default connect(mapStateToProps)(AppSettings);