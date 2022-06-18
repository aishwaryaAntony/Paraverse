import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, ImageBackground, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import Carousel from 'react-native-snap-carousel';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import { getWalletData } from "../../store/actions/sessionAction"

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, imgUrl: require("../../../assets/images/HomepageDigital.jpg"), name: "Digital" },
        { id: 2, imgUrl: require("../../../assets/images/HomepagePhysical.jpg"), name: "Physical" }
      ],
      currentIndex: null,
      walletAccount: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.walletAccount !== props.walletAccount) {
      return {
       walletAccount: props.walletAccount
      }
    }
    return null
  }

  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.state.walletAccount !== null) {
       this.props.dispatch(getWalletData(this.state.walletAccount));
      }
    });
  }

  componentWillUnmount() {

  }

  renderItem = ({ item, index }) => {
      let translate = this.props.translate    
   return (
      <View key={index}>
        <ImageBackground resizeMode="stretch" style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }} source={item.imgUrl}>
          <View style={{ flex: 0.1, flexDirection: "row", justifyContent: "flex-start", marginLeft: 10 }}>
            <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
            <Image resizeMode="cover" style={{display: "none"}} source={ require("../../../assets/images/DividerTest2.png") }></Image>
            {item.name === "Digital" ?
              <View style={{ marginLeft: 3 }}>
                <Text style={styles.text}>{translate["NFTS WITH"]}</Text>
                <Text style={styles.text}>{translate["REAL DIGITAL"]}</Text>
                <Text style={styles.text}>{translate["VALUE"]}</Text>
              </View> :
              <View style={{ marginLeft: 3 }}>
                <Text style={styles.text}>{translate["NFTS WITH"]}</Text>
                <Text style={styles.text}>{translate["REAL DIGITAL"]}</Text>
                <Text style={styles.text}>{translate["VALUE"]}</Text>
              </View>
            }
          </View>
          <View style={{ flex: 0.9, justifyContent: "center", alignItems: "center" }}>
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    //console.log("*****************isConnectedWallet***************"+ this.props.isConnectedWallet)
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#000' }} />
        <StatusBar hidden />
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.data}
          renderItem={this.renderItem}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH}
          itemHeight={DEVICE_HEIGHT}
          sliderHeight={DEVICE_HEIGHT}
          autoplay
          loop
          autoplayDelay={0}
          autoplayInterval={10000}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          inverted={(this.state.currentIndex === 1) ? true : false}
          removeClippedSubviews={false}
          onSnapToItem={(index) => { this.setState({ currentIndex: index }) }}
        />
      </Fragment>
    )
  }
}


const styles = StyleSheet.create({
  appIcon: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  text: {
    color: "#fff",
    fontFamily: "Hall Fetica Upper Decompose",
    fontSize: 12
  }

})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
    translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].homeScreen,
    isConnectedWallet:state.sessionReducer.isConnectedWallet,
    walletAccount: state.sessionReducer.walletAccount
  };
};

export default connect(mapStateToProps)(HomeScreen);