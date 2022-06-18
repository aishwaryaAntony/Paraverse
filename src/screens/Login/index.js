import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, Platform } from "react-native";
import { connect } from "react-redux";
const DEVICE_WIDTH = Dimensions.get('window').width;
import { login } from "../../store/actions/sessionAction"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            emailError: false,
            passwordError: false
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    continueButtonAction = () => {
        // let error = false
        // if (this.state.email === null || this.state.email === "") {
        //     this.setState({ emailError: true })
        //     error = true
        // }
        // else if (this.validateEmail(this.state.email) === false) {
        //     this.setState({ emailError: true })
        //     error = true
        // }
        // if (this.state.password === null || this.state.password === "") {
        //     this.setState({ passwordError: true })
        //     error = true
        // }
        // if (!error) {
            let userCredential = { email: this.state.email, password: this.state.password }
            this.props.dispatch(login(this, userCredential))
        //}
    }

    firstLatterLowerCase = async (param) => {
        let value = await param.toLowerCase().replace(/\s/g, '');
        this.setState({ email: value, emailError: false })
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
                    <View style={styles.bodyContainer}>
                        <Text style={styles.titleText}>LOGIN</Text>
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
                            secureTextEntry={true}
                        />
                        {this.state.passwordError && <Text style={[styles.errorTextColor, { marginBottom: 10 }]}>Please enter password</Text>}
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.continueButton} onPress={() => this.continueButtonAction()}>
                            <Text style={styles.continueText}>CONTINUE</Text>
                        </TouchableOpacity>
                        <View style={styles.signupView}>
                            <Text style={styles.subText}>NEED TO CREATE AN ACCOUNT?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                                <Text style={styles.signupText}>SIGNUP</Text>
                            </TouchableOpacity>
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
    titleText: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 18
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
        flex: 0.6,
        width: DEVICE_WIDTH / 1.3,
        alignSelf: "center"
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
    forgotText: {
        color: "#55d6ff",
        fontFamily: "Hall Fetica",
        fontSize: 16
    },
    errorTextColor: {
        color: "white",
        fontFamily: "Hall Fetica",
        fontSize: 14
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
    signupView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        alignSelf: "center"
    },
    signupText: {
        color: "#55d6ff",
        fontFamily: "Hall Fetica",
        fontSize: 15,
        marginLeft: 10
    },
    subText: {
        color: "#fff",
        fontFamily: "Hall Fetica",
        fontSize: 15
    }
})

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Login)