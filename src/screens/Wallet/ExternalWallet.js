import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,Linking, Platform } from "react-native";
import { useWalletConnect, } from "@walletconnect/react-native-dapp";
import { useDispatch } from "react-redux";
import { getWalletData, getWalletDataviaWallet } from "../../store/actions/sessionAction"
import { IS_CONNECTED_WALLET,WALLET_ACCOUNT,WALLET_INFO,IS_GET_WALLET_DATA } from '../../store/actions/actionTypes';
import Icons from "react-native-vector-icons/Octicons";
import CopyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Clipboard from '@react-native-clipboard/clipboard';
import { AlertHelper } from '../../../components/AlertHelper'
import DeviceInfo from "react-native-device-info";
import { connect } from "react-redux";
import { CheckPackageInstallation } from "react-native-check-app-install"

function ExternalWallet(props) {
    const connector = useWalletConnect();
    const dispatch = useDispatch();

    if(connector._connected  && props.isGetWalletData ===false) {
        dispatch(getWalletDataviaWallet(connector.accounts));
      }

    walletConnect = () => {     
      CheckPackageInstallation.isPackageInstalled('io.metamask', (isInstalled) => {
        //   console.log(isInstalled)
            if(isInstalled === false && Platform.OS !=="ios" && DeviceInfo.getSystemVersion() <= 10){
                Linking.openURL("http://play.google.com/store/apps/details?id=io.metamask")
            }else{
              connector.connect()
             dispatch({ type: IS_CONNECTED_WALLET, data: true }) 
              dispatch({type:IS_GET_WALLET_DATA,data:false})
            }
         });
       
    }

    disConnectWallet = () => {
        connector.killSession()
        dispatch({ type: IS_CONNECTED_WALLET, data: false })
        dispatch({type:WALLET_ACCOUNT,data:null})
        dispatch({type:WALLET_INFO,data:null})
        dispatch({type:IS_GET_WALLET_DATA,data:false})

    }

    copyPublicAddress =() =>{       
       Clipboard.setString(connector.accounts.toString())
       AlertHelper.show('info', "Info", "Copied to Clipboard")
    }

    return (
        <View style={styles.accountContainer}>
            {
                !connector._connected
                    ? <TouchableOpacity style={styles.cardContainer} onPress={() => walletConnect()}>
                        <View style={styles.orangeCardStyle}>
                            <Image source={require('../../../assets/images/Metamask.png')} style={styles.cardImageStyle} />
                        </View>
                        <View style={styles.blueCardStyle}>
                            <Text style={styles.cardTitle}><Text style={{ color: "orange" }}>CONNECT </Text>METAMASK WALLET</Text>
                            <Text style={styles.cardSubTitle}>(ETHEREUM NFT'S)</Text>
                        </View>
                    </TouchableOpacity>
                    : <TouchableOpacity style={styles.cardContainer} onPress={() => disConnectWallet()}>
                        <View style={styles.orangeCardStyle}>
                            <Image source={require('../../../assets/images/Metamask.png')} style={styles.cardImageStyle} />
                        </View>
                        <View style={styles.blueCardStyle}>
                            <Text style={styles.cardTitle}><Text style={{ color: "orange" }}>DISCONNECT </Text>METAMASK WALLET</Text>
                            <Text style={styles.cardSubTitle}>(ETHEREUM NFT'S)</Text>
                        </View>
                    </TouchableOpacity>
            }
            {connector._connected &&
                <View style={styles.dropDownContainer}>
                    <View style={styles.titleContainer}>
                        <Image source={require('../../../assets/images/Metamask.png')} style={styles.metaMaskIcon} />
                        <TouchableOpacity style={styles.pickerView}>
                            <Icons
                                name='dot-fill'
                                size={25}
                                color="#2CB6AF" />
                            <Text style={styles.pickerText}>Connected</Text>
                            <View />
                        </TouchableOpacity>
                        <Image source={require('../../../assets/images/Phantom.png')} style={styles.metaMaskIcon} />
                    </View>
                    <View style={styles.headerContainer}>
                        <View style={styles.connectedContainer}>
                            <Icons
                                name='dot'
                                size={10}
                                color="#b5b6b7" />
                        </View>
                        <View style={styles.headerCenter}>
                            <Text style={styles.headerText}>Public Address</Text>
                            <Text  onPress={() => copyPublicAddress()} style={styles.pickerText}>{connector.accounts.toString().substring(0,25)} 
                            <CopyIcon style={{marginRight:10}}
                            name='content-copy'
                            size={15}
                            color="grey"/> 
                          </Text>
                        </View>
                    </View>
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    accountContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    blueCardStyle: {
        width: 250,
        height: 60,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#55D7FF",
    },
    cardTitle: {
        color: "white",
        marginLeft: 10,
        fontFamily: "Hall Fetica",
        fontSize: 15
    },
    cardSubTitle: {
        color: "white",
        marginLeft: 10,
        fontSize: 12,
        fontFamily: "Hall Fetica",
        //marginTop: 4
    },
    cardContainer: {
        flexDirection: "row",
        marginTop: 8,
        alignSelf: "center"
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
    dropDownContainer: {
        backgroundColor: "#fff",
        width: 310,
        marginTop: -5,
        alignSelf: "center",
        //flex: 1
        height: 120
    },
    phantomDropDownContainer: {
        backgroundColor: "#212121",
        width: 310,
        marginTop: -5,
        alignSelf: "center",
        flex: 1
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 5,
        backgroundColor: "#F2F3F4"
    },
    metaMaskIcon: {
        width: 25,
        height: 25
    },
    pickerView: {
        borderWidth: 1,
        borderColor: "#E1E1E1",
        borderRadius: 25,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginHorizontal: 20,
        justifyContent: "space-between",
        backgroundColor: "transparent"
    },
    pickerText: {
        color: "grey"
    },
    pickerTextValue: {
        color: "grey",
        marginRight:10
    },
    headerContainer: {
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#b5b6b7"
    },
    connectedContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 8,
        position: 'absolute',
        left: 0,
        top: 10
    },
    connectedText: {
        color: "grey",
        fontSize: 10,
        marginLeft: 2
    },
    headerText: {
        color: "#000",
        fontWeight: "700",
        fontSize: 15,
    },
    phantomHeaderText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 15,
    },
    headerSubText: {
        color: "grey"
    },
    headerCenter: {
        alignItems: "center",
        justifyContent: "center",
    },
   
})

function mapStateToProps (state) {
    return {
        walletInfo: state.sessionReducer.walletInfo,  
        walletAccount: state.sessionReducer.walletAccount,
        isGetWalletData: state.sessionReducer.isGetWalletData,
    };
    
  }   
  export default connect(mapStateToProps)(ExternalWallet)     