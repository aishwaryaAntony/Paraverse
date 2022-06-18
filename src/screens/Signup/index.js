import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { connect } from "react-redux";
import CheckBox from '@react-native-community/checkbox';
import { register } from "../../store/actions/sessionAction"

const DEVICE_WIDTH = Dimensions.get('window').width;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            firstNameError: false,
            lastNameError: false,
            emailError: false,
            passwordError: false,
            isSelectedConditions: false,
            isSelectedConditionsError: false,
            isSelectedSmsPolicy: false,
            isSelectedSmsPolicyError: false,
        }
    }

    validateEmail = (email) =>
    {
           var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email);
    }

    firstLatterLowerCase = async(param) => {
        let value = await param.toLowerCase().replace(/\s/g, '');
        this.setState({ email: value, emailError: false })
    }

    continueButtonAction = () => {
        let { firstName, lastName, email, password, isSelectedConditions, isSelectedSmsPolicy } = this.state
        // let error = false;

        // if (firstName === null || firstName === "") {
        //     this.setState({ firstNameError: true })
        //     error = true
        // }

        // if (lastName === null || lastName === "") {
        //     this.setState({ lastNameError: true })
        //     error = true
        // }

        // if (email === null || email === "") {
        //     this.setState({ emailError: true })
        //     error = true
        // }
        // else if (this.validateEmail(email) === false) {
        //         this.setState({ emailError: true })
        //         error = true
        //     }

        // if (password === null || password === "") {
        //     this.setState({ passwordError: true })
        //     error = true
        // }
        // if (isSelectedSmsPolicy === false) {
        //     this.setState({ isSelectedSmsPolicyError: true })
        //     error = true
        // }
        // if (isSelectedConditions === false) {
        //     this.setState({ isSelectedConditionsError: true })
        //     error = true
        // }
        // if (!error) {
            let userInfo = { firstName, lastName, email, password }
            this.props.dispatch(register(this, userInfo))
       // }
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.root}>
                    <StatusBar hidden />
                    <View style={styles.logoContainer}>
                        <Image source={require("../../../assets/images/ParaverseApp.png")} style={styles.appIcon} />
                        <Image source={require("../../../assets/images/Paraverse.png")} style={styles.appTextIcon} resizeMode="cover" />
                    </View>
                    <KeyboardAvoidingView style={{ flex: 1 }} >
                        <ScrollView style={styles.bodyContainer}>
                            <Text style={styles.titleText}>SIGN UP</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({ firstName: text, firstNameError: false })}
                                value={this.state.firstName}
                                placeholder="FIRST NAME"
                                placeholderTextColor={"#3D3D3D"}
                                keyboardType="default" />
                            {this.state.firstNameError && <Text style={styles.errorTextColor}>Please enter first name</Text>}
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={"#3D3D3D"}
                                onChangeText={(text) => this.setState({ lastName: text, lastNameError: false })}
                                value={this.state.lastName}
                                placeholder="LAST NAME"
                                keyboardType="default" />
                            {this.state.lastNameError && <Text style={styles.errorTextColor}>Please enter last name</Text>}
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.firstLatterLowerCase(text)}
                                value={this.state.email}
                                placeholder="EMAIL ADDRESS"
                                placeholderTextColor={"#3D3D3D"}
                                keyboardType="email-address" />
                            {this.state.emailError && <Text style={styles.errorTextColor}>Please enter email</Text>}
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={"#3D3D3D"}
                                onChangeText={(text) => this.setState({ password: text, passwordError: false })}
                                value={this.state.password}
                                placeholder="PASSWORD"
                                secureTextEntry={true} />
                            {this.state.passwordError && <Text style={styles.errorTextColor}>Please enter password</Text>}
                            <View style={styles.checkBoxContainer}>
                                <CheckBox
                                    value={this.state.isSelectedConditions}
                                    onChange={() => this.setState({ isSelectedConditions: !this.state.isSelectedConditions, isSelectedConditionsError: false })}
                                    style={styles.checkbox}
                                    boxType="square"
                                    lineWidth={3}
                                    tintColors={{ true: '#55D8FF', false: '#55D8FF' }}
                                    tintColor="#55D8FF"
                                    onCheckColor="#F98400"
                                    onTintColor="#55D8FF"
                                />

                                <View style={styles.conditionsContainer}>
                                    <Text style={styles.label}>
                                        <Text>I CERTIFY THAT I AM 18 YEARS OR OLDER AND HAVE ACCEPTED THE </Text>
                                        <TouchableOpacity>
                                            <Text style={styles.linkText}>TERMS & CONDITIONS</Text>
                                        </TouchableOpacity>
                                        <Text>, </Text>
                                        <TouchableOpacity>
                                            <Text style={styles.linkText}>WALLET TERMS</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.label}> AND </Text>
                                        <TouchableOpacity>
                                            <Text style={styles.linkText}>PRIVACY POLICY.</Text>
                                        </TouchableOpacity>
                                    </Text>
                                    {this.state.isSelectedConditionsError && <Text style={styles.errorTextCheck}>Please accept the term</Text>}
                                </View>
                            </View>
                            <View style={styles.checkBoxContainer}>
                                <CheckBox
                                    value={this.state.isSelectedSmsPolicy}
                                    onChange={() => this.setState({ isSelectedSmsPolicy: !this.state.isSelectedSmsPolicy, isSelectedSmsPolicyError: false })}
                                    style={styles.checkbox}
                                    boxType="square"
                                    lineWidth={3}
                                    tintColors={{ true: '#55D8FF', false: '#55D8FF' }}
                                    tintColor="#55D8FF"
                                    onCheckColor="#F98400"
                                    onTintColor="#55D8FF"
                                />

                                <View style={styles.conditionsContainer}>
                                    <Text style={styles.label}>
                                        <Text>I HAVE READ THE </Text>
                                        <TouchableOpacity>
                                            <Text style={styles.linkText}>SMS POLICY</Text>
                                        </TouchableOpacity>
                                        <Text> AND I AGREE TO RECEIVE TEXT MESSAGES FROM PARAVERSE AND ITS CLIENTS ABOUT MY ACCOUNT
                                            AND OFFERINGS INSIDE THE APP. AS WELL AS TWO-FACTOR AUTHENTICATION LOGIN TEXTS. MESSAGE
                                            AND DATA RATES MAY APPLY. REPLY HELP FOR HELP OR STOP TO CANCEL.</Text>
                                    </Text>
                                    {this.state.isSelectedSmsPolicyError && <Text style={styles.errorTextCheck}>Please accept the term</Text>}
                                </View>
                            </View>
                            <TouchableOpacity style={styles.continueButton} onPress={() => this.continueButtonAction()}>
                                <Text style={styles.continueText}>CONTINUE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                                <Text style={styles.loginText}>ALREADY HAVE AN ACCOUNT?</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
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
    logoContainer: {
        flexDirection: "row",
        flex: 0.2,
        alignItems: "center",
        alignSelf: "center"
    },
    appIcon: {
        width: 45,
        height: 45
    },
    appTextIcon: {
        width: 200,
        height: 30,
        marginLeft: 10
    },
    bodyContainer: {
        flex: 0.8,
        width: DEVICE_WIDTH / 1.3,
        alignSelf: "center"
    },
    titleText: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    input: {
        borderWidth: 1.8,
        borderColor: "#F98400",
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 8,
        marginVertical: 10,
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    label: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 14,
        lineHeight: 21,
    },
    checkBoxContainer: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
        marginLeft: 5,
    },
    checkbox: {
        width: 20,
        height: 20
    },
    conditionsContainer: {
        marginLeft: 20,
        flex: 1
    },
    linkText: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 14,
        textDecorationLine: "underline",
    },
    continueButton: {
        alignItems: "center",
        backgroundColor: "#55d6ff",
        padding: Platform.OS === 'ios' ? 18 : 10,
        borderRadius: 10,
        width: DEVICE_WIDTH / 1.8,
        alignSelf: "center",
        marginTop: 35
    },
    continueText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 18
    },
    errorTextColor: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 14,
        color: "#fff"
    },
    errorTextCheck: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 14,
        color: "#55d6ff",
        paddingTop: 5,
    },
    loginText: {
        color: "#55d6ff",
        fontFamily: "Hall Fetica",
        fontSize: 16,
        marginTop: 15,
        textAlign: "center",
        marginBottom: 30
    },
})

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Signup)