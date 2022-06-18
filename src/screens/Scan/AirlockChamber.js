import React, { Fragment } from 'react';
import { View, Image, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from "react-redux";

class AirlockChamber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate("MyCollectionTab"), 10000)
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.root} />
        <ImageBackground style={styles.mainContainer} source={require("../../../assets/images/AirlockScreen.jpg")}>
          <View style={styles.appIconContainer}>
            <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
          </View>
        </ImageBackground>
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
    // flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  appIcon: {
    width: 40,
    height: 40
  },
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff"
  },

})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(AirlockChamber);