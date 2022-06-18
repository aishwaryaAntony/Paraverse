import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image} from "react-native";
import { connect } from "react-redux";
import { APP_UPDATE } from "../../store/actions/actionTypes";
import DeviceInfo from 'react-native-device-info';
const DEVICE_WIDTH = Dimensions.get('window').width;

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appUpdate: true
        }
    }


    /** This is a component life cycle method and used to assigning props values to state variable  */
    static getDerivedStateFromProps(props, state) {
        if (props.appUpdate !== state.appUpdate) {
            return {
                appUpdate: props.appUpdate
            }
        }
        return null;
    }


    toggleAction = () => {        
        this.state.appUpdate ? this.props.dispatch({ type: APP_UPDATE, data: false }) : this.props.dispatch({ type: APP_UPDATE, data: true })
    }


    render() {
        let { translate } = this.props;
        let imageSrc = this.state.appUpdate ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')
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
                        <Text style={styles.heading}>{translate["ABOUT"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")}/>
                        <View style={styles.container}>
                            <View style={styles.appUpdateRowStyle}>
                                <View>
                                    <Text style={styles.titleText}>{translate["APP UPDATES"]}</Text>
                                    <Text style={styles.titleSubText}>{translate["AUTO-UPDATE"]}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.toggleAction()}>
                                    <Image source={imageSrc} resizeMode="stretch" style={styles.toggleIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["DATA POLICY"]}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["TERMS OF USE"]}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["ACKNOWLEDGMENTS"]}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={[styles.titleText,{marginBottom:18}]}>{translate["VERSION"]} : {DeviceInfo.getReadableVersion()}</Text>
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
    appUpdateRowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        width: DEVICE_WIDTH / 1.5
    },
    titleText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    titleSubText: {
        marginTop:5,
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 12
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
    // dividerStyle: {
    //     width: DEVICE_WIDTH - 30,
    //     height: 40,
    //     marginTop: 5,
    //     marginBottom: 30
    // },
    dividerStyle: {
        width: DEVICE_WIDTH - 30,
        height: 40,
        marginTop:47.5,
        position: "absolute",
        zIndex: 1
    },
    wrapper: {
        flex:1,
    },
    back: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        zIndex: 0
    },
    front: {
        position: 'absolute',
        top:25,
        left:25,
        width: 50,
        height:50,
        backgroundColor: 'red',
        zIndex: 1
    }
})

const mapStateToProps = (state) => {
    return {
        appUpdate: state.sessionReducer.appUpdate,
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
    }
}

export default connect(mapStateToProps)(About);