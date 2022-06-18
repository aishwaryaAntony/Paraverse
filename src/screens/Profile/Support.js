import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image,TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
const DEVICE_WIDTH = Dimensions.get('window').width;

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { translate } = this.props;
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
                        <Text style={styles.heading}>{translate["SUPPORT"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
                        <View style={styles.container}>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["REPORT A PROBLEM"]}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["HELP CENTER/FAQ"]}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["CONTACT SUPPORT"]}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["HOW TO USE MY NFT? VIDEO TIPS"]}</Text>
                            </View>
                            <View style={[styles.rowStyle, { marginBottom: 18 }]}>
                                <Text style={styles.titleText}>{translate["VISIT OUR WEBSITE"]}</Text>
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
        paddingBottom: 20,
        paddingHorizontal: 20,
        width: DEVICE_WIDTH / 1.2,
    },
    rowStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        width: DEVICE_WIDTH / 1.8
    },
    titleText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    valueText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18,
        marginLeft: 15
    },
    dropDownStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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
    signoutButton: {
        marginTop: 50
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
        marginRight: 10
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
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
    }
}

export default connect(mapStateToProps)(Support);