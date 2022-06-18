import React, { Component } from "react";
import { Image, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/screens/Home/HomeScreen";
import MyCollection from "../src/screens/Collection/MyCollection";
import MyProfile from "../src/screens/Profile/MyProfile";
import Scanner from "../src/screens/Scan/Scanner";
import WalletTransfer from "../src/screens/Wallet/WalletTransfer";
import Login from "../src/screens/Login";
import Signup from "../src/screens/Signup";
import ManageAccount from "../src/screens/Profile/ManageAccount";
import Support from "../src/screens/Profile/Support";
import About from "../src/screens/Profile/About";
import ManageConnections from "../src/screens/Profile/ManageConnections";
import AppSettings from "../src/screens/Profile/AppSettings";
import SecurityPrivacy from "../src/screens/Profile/SecurityPrivacy";
import NftManagement from "../src/screens/Profile/NftManagement";
import { connect } from "react-redux";
import BarCodeScreen from "../src/screens/Scan/BarCodeScreen";
import BarCodeScanner from "../src/screens/Scan/BarCodeScanner";
import AirlockChamber from "../src/screens/Scan/AirlockChamber";
import UseNFTScan from "../src/screens/Scan/UseNFTScan";
import { SafeAreaProvider } from 'react-native-safe-area-context'
const height = Dimensions.get('window').height

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MyCollectionStack = createNativeStackNavigator();
const MyProfileStack = createNativeStackNavigator();
const ScannerStack = createNativeStackNavigator();
const WalletTransferStack = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();


function commonStack(param) {
    return [
        <param.Screen key={"1"} options={{ headerShown: false }} name="Login" component={Login} />,
        <param.Screen key={"2"} options={{ headerShown: false }} name="Signup" component={Signup} />,
        <param.Screen key={"3"} options={{ headerShown: false }} name="Home" component={HomeScreen} />,
        <param.Screen key={"4"} options={{ headerShown: false }} name="Scanner" component={Scanner} />,
        <param.Screen key={"5"} options={{ headerShown: false }} name="MyCollection" component={MyCollection} />,
        <param.Screen key={"6"} options={{ headerShown: false }} name="WalletTransfer" component={WalletTransfer} />,
        <param.Screen key={"7"} options={{ headerShown: false }} name="MyProfile" component={MyProfile} />,
        <param.Screen key={"8"} options={{ headerShown: false }} name="ManageAccount" component={ManageAccount} />,
        <param.Screen key={"9"} options={{ headerShown: false }} name="Support" component={Support} />,
        <param.Screen key={"10"} options={{ headerShown: false }} name="About" component={About} />,
        <param.Screen key={"11"} options={{ headerShown: false }} name="BarCodeScreen" component={BarCodeScreen} />,
        <param.Screen key={"12"} options={{ headerShown: false }} name="ManageConnections" component={ManageConnections} />,
        <param.Screen key={"13"} options={{ headerShown: false }} name="AppSettings" component={AppSettings} />,
        <param.Screen key={"14"} options={{ headerShown: false }} name="SecurityPrivacy" component={SecurityPrivacy} />,
        <param.Screen key={"15"} options={{ headerShown: false }} name="NftManagement" component={NftManagement} />,
        <param.Screen key={"16"} options={{ headerShown: false }} name="BarCodeScanner" component={BarCodeScanner} />,
        <param.Screen key={"17"} options={{ headerShown: false }} name="AirlockChamber" component={AirlockChamber} />,
        <param.Screen key={"18"} options={{ headerShown: false }} name="UseNFTScan" component={UseNFTScan} />
    ]
}

const AuthStackNavigation = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                animation: "slide_from_right"
            }}>
            {commonStack(AuthStack)}
        </AuthStack.Navigator>
    )
}

const HomeStackNavigation = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                animation: "slide_from_right"
            }}>
            {commonStack(HomeStack)}
        </HomeStack.Navigator>
    )
}

const ScannerStackNavigation = () => {
    return (
        <ScannerStack.Navigator
            initialRouteName="UseNFTScan"
            screenOptions={{
                animation: "slide_from_right"
            }}>
            {commonStack(ScannerStack)}  
        </ScannerStack.Navigator>
    )
}

const MyCollectionStackNavigation = () => {
    return (
        <MyCollectionStack.Navigator
            initialRouteName="MyCollection"
            screenOptions={{
                animation: "slide_from_right"
            }}>
            {commonStack(MyCollectionStack)}
        </MyCollectionStack.Navigator>
    )
}

const WalletTransferStackNavigation = () => {
    return (
        <WalletTransferStack.Navigator
            initialRouteName="WalletTransfer"
            screenOptions={{
                animation: "slide_from_right"
            }}>
            {commonStack(WalletTransferStack)}
        </WalletTransferStack.Navigator>
    )
}

const MyProfileStackNavigation = () => {
    return (
        <MyProfileStack.Navigator
            initialRouteName="MyProfile"
            screenOptions={{
                animation: "slide_from_right"
            }}
        >
            {commonStack(MyProfileStack)}
        </MyProfileStack.Navigator>
    )
}

const BottomTabNavigation = (props) => {

    return (
        <BottomNav.Navigator
            swipeEnabled
            initialRouteName={props.route.params !== undefined && props.route.params.isConnectedWallet ? "HomeTab" : "WalletTransferTab"}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
                    height: Platform.OS === "ios" ? (height * 0.10) : 80,
                    backgroundColor: "#10011D",
                    borderTopWidth: 0,
                },

            }}>
            <BottomNav.Screen
                name="HomeTab"
                component={HomeStackNavigation}
                options={{
                    tabBarLabel: "A",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/HomeC.png')
                                    : require('../assets/images/Home.png')
                            }
                            style={{
                                width: 35,
                                height: 35,                               
                                tintColor: focused ? "#F98400" : "#fff"
                            }}
                        />
                    ),
                }}

            />
            <BottomNav.Screen
                name="ScannerTab"
                component={ScannerStackNavigation}
                options={{
                    tabBarLabel: "B",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/Scan.png')
                                    : require('../assets/images/Scan.png')
                            }
                            style={{
                                width: 38,
                                height: 38,                                
                                tintColor: focused ? "#F98400" : "#fff"
                            }}
                        />
                    ),
                }} />
            <BottomNav.Screen
                name="MyCollectionTab"
                component={MyCollectionStackNavigation}
                options={{
                    tabBarLabel: "C",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/AirlockC.png')
                                    : require('../assets/images/Airlock.png')
                            }
                            style={{
                                width: focused ? 50 : 45,
                                height: focused ? 50 : 45, 
                                marginBottom: 5                              
                            }}
                        />
                    ),
                }} />
            <BottomNav.Screen
                name="WalletTransferTab"
                component={WalletTransferStackNavigation}
                options={{
                    tabBarLabel: "D",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/transferNew.png')
                                    : require('../assets/images/transferNew.png')
                            }
                            style={{
                                width: 46,
                                height: 34,                              
                                tintColor: focused ? "#F98400" : "#fff"
                            }}
                        />
                    ),
                }} />
            <BottomNav.Screen
                name="MyProfileTab"
                component={MyProfileStackNavigation}
                options={{
                    tabBarLabel: "E",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../assets/images/ProfileC.png')
                                    : require('../assets/images/Profile.png')
                            }
                            style={{
                                width: 35,
                                height: 35,                               
                                tintColor: focused ? "#F98400" : "#fff"
                            }}
                        />
                    ),
                }} />
        </BottomNav.Navigator>
    )
}


const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name="LoginScreen" component={AuthStackNavigation} />
            <AuthStack.Screen name="MainView" component={BottomTabNavigation} />
        </AuthStack.Navigator>
    );
};

const MainStackScreen = (props) => {
    return (
        <AuthStack.Navigator
            initialRouteName="MainView"
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name="LoginScreen" component={AuthStackNavigation} />
            <AuthStack.Screen name="MainView" component={BottomTabNavigation} initialParams={props} />
        </AuthStack.Navigator>
    );
};


class RootNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    {this.props.isAuthenticated ? <MainStackScreen isConnectedWallet={this.props.isConnectedWallet} /> : <AuthStackScreen />}
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.sessionReducer.isAuthenticated,
        isConnectedWallet: state.sessionReducer.isConnectedWallet
    }
}

export default connect(mapStateToProps)(RootNav);