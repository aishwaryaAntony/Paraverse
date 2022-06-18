import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { RNCamera } from 'react-native-camera';
import Icon from "react-native-vector-icons/FontAwesome5";
const DEVICE_WIDTH = Dimensions.get('window').width;

class BarCodeScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         QrCode:null
       }
    }
    componentDidMount() {
       
   }

    componentWillUnmount() {

    }

    delay(time) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(), time);
        });
    }

    onBarCodeRead = async (obj) => {
        await this.delay(200);
        if(this.state.QrCode === null){
         this.setState({QrCode:obj.data})
         this.props.navigation.navigate("AirlockChamber")
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
                            <Icon name='arrow-left' size={30} color="#FFF" style={styles.appIcon} onPress={() => this.props.navigation.navigate("Scanner")}/>
                            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.titleText}>{translate["SCAN QR CODE TO RECEIVE ITEM"]}</Text>
                            <Image style={styles.dividerStyle} source={require("../../../assets/images/Divider1.png")} />
                            <Image style={{ width: DEVICE_WIDTH, height: "50%", marginTop: "25%" }} resizeMode="contain" source={require("../../../assets/images/Scanner_Icon.png")} />
                        </View>
                    </View>
                </RNCamera>
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
        marginHorizontal: 10              
    },
    appIcon: {
        width: 40,
        height: 40,
        marginLeft:10
    },
    sendIcon: {
        width: 25,
        height: 25,
        tintColor: "#fff",
        marginRight:10
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
    },
    titleText: {
        fontSize: 20,
        color: "#fff",
        marginTop: 10,
        fontFamily: "AireExterior",
        fontSize: 25
    },
    dividerStyle: {
        width: DEVICE_WIDTH - 30,
        height: 40,
        marginTop: 5,
        marginBottom: -10
    },
    preview: {
        flex: 1,
        alignItems: "center"
    },

})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
    return {
        translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].scanScreen,
    };
};

export default connect(mapStateToProps)(BarCodeScanner);