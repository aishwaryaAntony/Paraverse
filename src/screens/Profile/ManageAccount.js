import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback, SafeAreaView, Image } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { logout } from "../../store/actions/sessionAction"
Icon.loadFont();
const DEVICE_WIDTH = Dimensions.get('window').width;

class ManageAccount extends Component {
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

    logoutAction = () => {
        this.props.dispatch(logout(this))
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
                        <Text style={styles.heading}>{translate["MANAGE ACCOUNT"]}</Text>
                        <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider.png")} />
                        <View style={styles.container}>
                            {/* <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["USERNAME"]} :</Text>
                                <Text style={styles.valueText}>************</Text>
                            </View> */}
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["EMAIL"]} : </Text>
                                <View style={styles.emailStyle}>
                                    <Text numberOfLines={1} style={styles.textInput}>***************</Text>
                                    <View style={styles.textInput1} />
                                </View>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleText}>{translate["PHONE"]} : </Text>
                                <View style={styles.emailStyle}>
                                    <Text numberOfLines={1} style={styles.textInput}>**********</Text>
                                    <View style={styles.textInput1} />
                                </View>
                            </View>
                            <View style={styles.passwordRowStyle}>
                                <Text style={styles.titleText}>{translate["PASSWORD"]} : </Text>
                                <View style={styles.emailStyle}>
                                    <Text style={styles.valueText}>*************</Text>
                                    <View style={styles.textInput1} />
                                </View>
                            </View>
                            <View style={styles.passwordRowStyle}>
                                <Text style={styles.titleText}>{translate["LANGUAGE"]} :</Text>
                                <TouchableOpacity style={styles.dropDownStyle} onPress={() => this.setState({ showDropDown: !this.state.showDropDown })}>
                                    <Text style={styles.valueText}> {translate[this.state.selectedLanguage]}</Text>
                                    <Icon
                                        name="angle-down"
                                        size={20}
                                        color="#FFFFFF"
                                        style={{ marginLeft: 45 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.signoutButton} onPress={() => this.logoutAction()}>
                                <Text style={styles.titleText}>{translate["SIGN OUT"]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Text style={styles.deleteText}>{translate["DELETE ACCOUNT"]}</Text>
                            </TouchableOpacity>
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
        //padding: 10,
        padding: 20,
        paddingHorizontal: 20,
        width: DEVICE_WIDTH / 1.2,
    },
    rowStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        width: DEVICE_WIDTH / 2,
    },
    passwordRowStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        width: DEVICE_WIDTH / 2,
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
        // marginLeft: 15
    },
    textInput: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18,
    },
    textInput1: {
        marginTop: 5,
        borderBottomColor: "#F48101",
        borderBottomWidth: 1,
        width: "100%"
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
    deleteButton: {
        marginTop: 30,
        marginBottom: 10
    },
    deleteText: {
        color: "#C50300",
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
    emailStyle: {
        marginTop: 10
    }
})

const mapStateToProps = (state) => {
    return {
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].profileScreen,
        userInfo: state.sessionReducer.userInfo
    }
}

export default connect(mapStateToProps)(ManageAccount);