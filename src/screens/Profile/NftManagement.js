import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons"
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class NftManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "NFT DETAILS"
        }
    }

    render() {
        let { selectedTab } = this.state;
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
                        <Text style={styles.heading}>{translate["NFT MANAGEMENT"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
                        <ScrollView style={{ flex: 1, marginTop: 15, paddingTop: 40 }} contentContainerStyle={{ paddingBottom: 30 }}>
                            <View style={styles.mainContainer}>
                                <Icon
                                    name="keyboard-arrow-left"
                                    size={50}
                                    color="#55d6fe"
                                />
                                <View style={styles.container}>
                                    <Image style={styles.image} source={this.props.route.params !== undefined ? this.props.route.params.imageSrc : require("../../../assets/images/1.png")} resizeMode="cover" />
                                </View>
                                <Icon
                                    name="keyboard-arrow-right"
                                    size={50}
                                    color="#55d6fe"
                                />
                            </View>
                            <View style={styles.bottomContainer}>
                                <View style={styles.tabContainer}>
                                    <TouchableOpacity style={{ borderWidth: 2, borderStartColor: selectedTab === "USE INSTRUCTIONS" ? "#000" : "#F48101", borderEndColor: selectedTab === "USE INSTRUCTIONS" ? "#000" : "#F48101", borderTopColor: selectedTab === "USE INSTRUCTIONS" ? "#000" : "#F48101", borderBottomColor: selectedTab === "NFT DETAILS" ? "#000" : "#F48101", width: "50%", paddingVertical: 15, paddingLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} onPress={() => this.setState({ selectedTab: "NFT DETAILS" })}>
                                        <Text style={styles.tabTitle}>{translate["NFT DETAILS"]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ borderWidth: 2, borderStartColor: selectedTab === "NFT DETAILS" ? "#000" : "#F48101", borderEndColor: selectedTab === "NFT DETAILS" ? "#000" : "#F48101", borderTopColor: selectedTab === "NFT DETAILS" ? "#000" : "#F48101", borderBottomColor: selectedTab === "USE INSTRUCTIONS" ? "#000" : "#F48101", width: "50%", paddingVertical: 15, paddingRight: 10, alignItems: "flex-end", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} onPress={() => this.setState({ selectedTab: "USE INSTRUCTIONS" })}>
                                        <Text style={styles.tabTitles}>{translate["USE INSTRUCTIONS"]}</Text>
                                    </TouchableOpacity>
                                </View>
                                {selectedTab === "NFT DETAILS" ?
                                    <View style={styles.orangeBorderViews}>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["BUILT ON"]} :</Text>
                                            <Text style={styles.valueText}>{translate["POLYGON NETWORK"]}</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["BRAND"]} :</Text>
                                            <Text style={styles.valueText}>{translate["TACO BELL"]}</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["NFT PRIVATE KEY"]} :</Text>
                                            <Text style={styles.valueText}>PSKJWLPKD7362NXPQ82LAVWG7236GS</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["MINTING NUMBER"]} :</Text>
                                            <Text style={styles.valueText}>#482/#1000</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["COMPATIBLE WALLETS"]} :</Text>
                                            <Text style={styles.valueText}>{translate["METAMASK/POLYGON(OX)"]}</Text>
                                        </View>
                                    </View> :
                                    <View style={styles.orangeBorderViews}>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["STEP"]} 1:</Text>
                                            <Text style={styles.valueTexts}>{translate["ACCESS NFT IN YOUR COLLECTIONS TAB"]}</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["STEP"]} 2:</Text>
                                            <Text style={styles.valueTexts}>{translate["SELECT THIS NFT AND PRESS USE"]}</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["STEP"]} 3:</Text>
                                            <Text style={styles.valueTexts}>{translate["YOUR NFT IS CONVERTED TO A BARCODE"]}</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["STEP"]} 4:</Text>
                                            <Text style={styles.valueTexts}>{translate["YOU CAN NOW USE THIS NFT FOR 2 FREE TACOS A DAY AT TACO BELL"]}</Text>
                                        </View>
                                        <View style={styles.rowStyle}>
                                            <Text style={styles.titleText}>{translate["STEP"]} 5:</Text>
                                            <Text style={styles.valueTexts}>{translate["HAVE YOUR NFT SCANNED AT TACO BELL AND ENJOY!"]}</Text>
                                        </View>
                                    </View>}
                            </View>
                        </ScrollView>
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
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: DEVICE_WIDTH
    },
    container: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#F48101",
        width: DEVICE_WIDTH / 1.6,
        height: DEVICE_HEIGHT / 3.8,
        marginTop:DEVICE_WIDTH/8
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
    },
    dividerStyle: {
        width: DEVICE_WIDTH - 30,
        height: 40,
        marginTop:47.5,
        position: "absolute",
        zIndex: 1
    },
    image: {
        width: "100%",
        height: "100%"
    },
    tabContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    tabTitle: {
        color: "#fff",
        fontFamily: "AireExterior",
        fontSize: 22,
        alignSelf: "center"
    },
    tabTitles: {
        color: "#fff",
        fontFamily: "AireExterior",
        fontSize: 22,
        alignSelf: "center",
        marginLeft: 8
    },
    bottomContainer: {
        padding: 20
    },
    orangeBorderViews: {
        borderWidth: 2,
        borderColor: "#F98400",
        paddingBottom: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopColor: "#000"
    },
    titleText: {
        color: "#53D2F9",
        textAlign: "left",
        marginLeft: 15,
        fontFamily: "Hall Fetica",
        fontSize: 15,
    },
    valueText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 15,
        flex: 1,
        marginLeft: 10
    },
    valueTexts: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 15,
        flex: 1,
        // width: DEVICE_WIDTH / 1.5,
        marginLeft: 10
    },
    rowStyle: {
        flexDirection: "row",
        marginTop: 15,
        width: "100%"
    },
    imageWrapper: {
        alignItems: "center"
    },
    leftImage: {
        width: DEVICE_WIDTH / 1.05,
        height: DEVICE_HEIGHT / 2.6,
        alignSelf: "center"
    },
    rightImage: {
        width: DEVICE_WIDTH / 1.05,
        height: DEVICE_HEIGHT / 2.4,
        alignSelf: "center"
    }
})

const mapStateToProps = (state) => {
    return {
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
    }
}

export default connect(mapStateToProps)(NftManagement);