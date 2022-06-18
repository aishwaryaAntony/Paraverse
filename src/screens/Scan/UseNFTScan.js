import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { RNCamera } from 'react-native-camera';


const DEVICE_WIDTH = Dimensions.get('window').width;

class UseNFTScan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QrCode: null,
            showModel: false,
            isFirstTime: true,

        }
    }

    componentDidMount() {
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ showModel: false, isFirstTime: true })
        })

    }

    componentWillUnmount() {


    }

    yesButtonAction = async () => {
        await this.setState({ showModel: false })
        //await this.delay(1000);
        //   let data = await this.props.walletInfo.filter((item) => item.metadata.image !== this.props.route.params.id.metadata.image )
        //   await this.props.dispatch({type:WALLET_INFO,data:data})     
        this.props.navigation.navigate("BarCodeScreen")

    }

    noButtonAction = async () => {
        await this.setState({ showModel: false })
        //await this.delay(200);
        this.props.navigation.navigate("MyCollection")
    }

    delay(time) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(), time);
        });
    }

    onBarCodeRead = async (obj) => {

        await this.delay(200);
        if (obj.data !== null && this.state.isFirstTime) {
            await this.setState({ showModel: true, isFirstTime: false })
        }

    };

    render() {
        let { translate } = this.props;
        return (
            <Fragment>
                <SafeAreaView style={styles.root} />
                <RNCamera ref={(ref) => { this.camera = ref; }}
                    style={styles.preview}
                    type={"back"}
                    mirrorImage={false}
                    captureAudio={false}
                    onBarCodeRead={this.onBarCodeRead}>
                    <View style={styles.mainContainer}>
                        <View style={styles.appIconContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                                <Image source={require('../../../assets/images/back.png')} style={styles.backIcon} />
                            </TouchableOpacity>
                            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.titleText}>{"SCAN TO USE OR ACQUIRE NFT"}</Text>
                            <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider1.png")} />
                            <Image style={{ width: DEVICE_WIDTH, height: "50%", marginTop: "25%" }} resizeMode="contain" source={require("../../../assets/images/Scanner_Icon.png")} />
                        </View>
                    </View>
                </RNCamera>
                <Modal animationType="fade" transparent={true} visible={this.state.showModel} onRequestClose={() => {
                    this.setState({ showModel: false });
                }}>
                    <TouchableOpacity style={styles.outerModel} activeOpacity={1} >
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <View style={styles.borderView}>
                                    <View style={styles.titleBorder}>
                                        <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
                                        <Text style={styles.modelTitle}>
                                            Confirmation!
                                        </Text>
                                        <View />
                                    </View>
                                    <Text style={styles.modalText}>
                                        {"Would you like to use NFT for this transaction?"}
                                    </Text>
                                </View>
                                <View style={styles.confirmModalButton}>
                                    <TouchableOpacity style={{ width: "50%" }} onPress={() => this.noButtonAction()}>
                                        <Text style={styles.noButton}>{"NO"}</Text>
                                    </TouchableOpacity>
                                    <View style={{ backgroundColor: "#F98400", width: 1 }} />
                                    <TouchableOpacity style={{ width: "50%" }} onPress={() => this.yesButtonAction()}>
                                        <Text style={styles.yesButton}>{"YES"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
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
    },
    appIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: 7.7
    },
    appIcon: {
        width: 30,
        height: 30,
        marginLeft: 5,
        alignSelf: "center",
    },
    backIcon: {
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
        marginTop: 18,
        fontFamily: "AireExterior",
        fontSize: 25
    },

    dividerStyle: {
        width: DEVICE_WIDTH - 30,
        height: 40,
        marginTop: 47.5,
        position: "absolute",
        zIndex: 1
    },
    preview: {
        flex: 1,
        alignItems: "center"
    },
    yesButton: {
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 15,
        color: "#96A1C4",
        fontFamily: "AireExterior",

    },
    modalView: {
        backgroundColor: "#000",
        width: "70%",
        borderRadius: 5
    },
    borderView: {
        borderBottomWidth: 1,
        borderBottomColor: "#F98400",

    },
    titleBorder: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#F98400",
        justifyContent: "space-between",
        //backgroundColor: "green"
    },
    noButton: {
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 15,
        fontFamily: "AireExterior",
        color: "#96A1C4"
    },
    modelTitle: {
        color: "#96A1C4",
        fontSize: 18,
        paddingVertical: 20,
        textAlign: "center",
        fontFamily: "AireExterior",
        marginLeft: -10
    },
    // titleBorder: {
    // 	borderBottomWidth: 2,
    // 	borderBottomColor: "#2BB5E4",
    // 	flexDirection: 'row'
    // },
    confirmModalText: {
        color: "#000000",
        fontSize: 16,
        paddingBottom: 10,
        textAlign: "center"
    },
    modalText: {
        color: "#96A1C4",
        fontSize: 16,
        padding: 20,
        textAlign: "center",
        fontFamily: "AireExterior",
    },
    confirmModalButton: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    outerModel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },


})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
    return {
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].scanScreen,
        walletInfo: state.sessionReducer.walletInfo,
    };
};

export default connect(mapStateToProps)(UseNFTScan);