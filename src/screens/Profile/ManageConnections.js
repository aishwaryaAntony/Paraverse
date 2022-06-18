import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { connect } from "react-redux";
import Icons from "react-native-vector-icons/FontAwesome";
import { MANAGE_CONNECTIONS } from '../../store/actions/actionTypes';
const DEVICE_WIDTH = Dimensions.get('window').width;

class ManageConnections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    toggleAction = (param, value) => {
        this.props.dispatch({ type: MANAGE_CONNECTIONS, data: { [param]: !value } })
    }

    render() {
        let { manageConnections, translate } = this.props;
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
                        <Text style={styles.titleText}>{translate["MANAGE CONNECTIONS"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
                        <ScrollView style={{ flex: 1, marginTop: 15, paddingTop: 40 }} contentContainerStyle={{ paddingBottom: 40 }}>
                            <View style={styles.cardContainer}>
                                <View style={styles.orangeCardStyle}>
                                    <Icons
                                        name="instagram"
                                        color="#fff"
                                        size={32} />
                                </View>
                                <View style={styles.blueCardStyle}>
                                    <Text style={styles.textStyle}>{translate["INSTAGRAM"]}</Text>
                                    <TouchableOpacity onPress={() => this.toggleAction("instagram", manageConnections.instagram)}>
                                        <Image source={manageConnections.instagram ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.cardContainer1}>
                                <View style={styles.orangeCardStyle1}>
                                    <Icons
                                        name="facebook"
                                        color="#fff"
                                        size={32} />
                                </View>
                                <View style={styles.blueCardStyle1}>
                                    <Text style={styles.textStyle1}>{translate["FACEBOOK"]}</Text>
                                    <TouchableOpacity onPress={() => this.toggleAction("facebook", manageConnections.facebook)}>
                                        <Image source={manageConnections.facebook ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.cardContainer1}>
                                <View style={styles.orangeCardStyle}>
                                    <Icons
                                        name="twitter"
                                        color="#fff"
                                        size={32} />
                                </View>
                                <View style={styles.blueCardStyle}>
                                    <Text style={styles.textStyle}>{translate["TWITTER"]}</Text>
                                    <TouchableOpacity onPress={() => this.toggleAction("twitter", manageConnections.twitter)}>
                                        <Image source={manageConnections.twitter ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.cardContainer1}>
                                <View style={styles.orangeCardStyle1}>
                                    <Image source={require('../../../assets/images/discord.png')} style={[styles.cardImageStyle, { tintColor: "#fff" }]} resizeMode="contain" />
                                </View>
                                <View style={styles.blueCardStyle1}>
                                    <Text style={styles.textStyle1}>{translate["DISCORD"]}</Text>
                                    <TouchableOpacity onPress={() => this.toggleAction("discord", manageConnections.discord)}>
                                        <Image source={manageConnections.discord ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.cardContainer1}>
                                <View style={styles.orangeCardStyle}>
                                    <Image source={require('../../../assets/images/Metamask.png')} style={styles.cardImageStyle} resizeMode="contain" />
                                </View>
                                <View style={styles.blueCardStyle}>
                                    <Text style={styles.textStyle}>{translate["METAMASK"]}</Text>
                                    <TouchableOpacity onPress={() => this.toggleAction("metamask", manageConnections.metamask)}>
                                        <Image source={manageConnections.metamask ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.cardContainer1}>
                                <View style={styles.orangeCardStyle}>
                                    <Image source={require('../../../assets/images/Phantom.png')} style={styles.cardImageStyle} resizeMode="contain" />
                                </View>
                                <View style={styles.blueCardStyle} >
                                    <Text style={styles.textStyle}>{translate["PHANTOM"]}</Text>
                                    <TouchableOpacity onPress={() => this.toggleAction("phantom", manageConnections.phantom)}>
                                        <Image source={manageConnections.phantom ? require('../../../assets/images/ToggleOn.png') : require('../../../assets/images/ToggleOff.png')} resizeMode="stretch" style={styles.toggleIcon} />
                                    </TouchableOpacity>
                                </View>
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
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    titleText: {
        fontSize: 20,
        color: "#fff",
        marginTop: 17,
        fontFamily: "AireExterior",
        fontSize: 25,
        marginBottom:DEVICE_WIDTH/10
    },
    dividerStyle: {
        width: DEVICE_WIDTH - 30,
        height: 40,
        marginTop:47.5,
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#55D7FF",
        flexDirection: "row"
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        borderWidth: 2,
        marginLeft: -10,
        borderTopColor: "#55D7FF",
        borderBottomColor: "#55D7FF",
        borderRightColor: "#55D7FF",
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        flexDirection: "row"
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
    },
    toggleIcon: {
        width: 38,
        height: 20,
        marginRight: 10
    },
})

/** Get data from store and assign to props */
const mapStateToProps = (state) => {
    return {
        manageConnections: state.sessionReducer.manageConnections,
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
    };
};

export default connect(mapStateToProps)(ManageConnections);