import React, { Fragment } from 'react';
import { Text, View, Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Platform, FlatList } from 'react-native';
import { connect } from "react-redux";
import { WALLET_INFO } from "../../store/actions/actionTypes"
import { getWalletData } from "../../store/actions/sessionAction"
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class MyCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownView: false,
      blurViewMode: "",
      walletInfo: null,
      walletAccount: null
    }
  }


  static getDerivedStateFromProps(props, state) {
    if (state.walletInfo !== props.walletInfo || state.walletAccount !== props.walletAccount ) {
      return {
        walletInfo: props.walletInfo,
        walletAccount: props.walletAccount
      }
    }
    return null
  }

  componentDidMount() {

    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({ dropDownView: false })    
        let paramValue = [      
          {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/1.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
          {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/2.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
          {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/3.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
          {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/6.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
          {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/4.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"},
          {"contract":{"address":"0x1f85c7f57ebb29e55919d3a5c09cfd9f6f918008"},"id":{"tokenId":"0x0000000000000000000000000000000000000000000000000000000000000001","tokenMetadata":{"tokenType":"ERC721"}},"balance":"1","title":"Test NFT","description":"Test NFT Image","tokenUri":{"raw":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD","gateway":"https://ipfs.io/ipfs/QmajBLYxCdqWCGgDEn9dx5SxAQNbwAKgTFf7yh2VvN8ccD"},"media":[{"raw":"https://gateway.pinata.cloud/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H","gateway":"https://ipfs.io/ipfs/QmbCpX4swe2qyydGS8wcprujwU7Zog9G74qhR89BRpKG3H"}],"metadata":{"name":"Test NFT","description":"Test NFT Image","image":require('../../../assets/images/5.png'), isLocal: true},"timeLastUpdated":"2022-05-16T09:31:15.760Z"}]
          this.props.dispatch({type:WALLET_INFO,data:paramValue})        
         if(this.state.walletAccount !== null) {      
          this.props.dispatch(getWalletData(this.state.walletAccount));
         }
      
    });

  }

  componentWillUnmount() {

  }

  useNFTScanView = async (item) => {
    this.setState({ blurViewMode: "" })
    this.props.navigation.navigate("UseNFTScan", { id: item })
  }

  handleBlurView = async (url) => {
    this.setState({ blurViewMode: "" })
    this.props.navigation.navigate("NftManagement", { imageSrc: url })
  }

  renderItem = ({ item, index }) => {
    let { translate } = this.props;
    return (      
      <TouchableOpacity key={index} style={styles.orangeBorderView} onPress={() => this.setState({ blurViewMode: index })}>
        {this.state.blurViewMode === index &&
          <View style={styles.blurViewStyle}>
            <TouchableOpacity onPress={() => this.useNFTScanView(item)}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleBlurView((item.metadata !== undefined && item.metadata.isLocal !== undefined)? item.metadata.image: {uri: item.metadata.image})}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>
          </View>}
        <Image source={(item.metadata !== undefined && item.metadata.isLocal !== undefined)? item.metadata.image: {uri: item.metadata.image}} style={styles.imageStyle} resizeMode="stretch" />
      </TouchableOpacity>
    )
  }

  render() {
    let { translate } = this.props;

    return (
      <Fragment>
        <SafeAreaView style={styles.root} />
        <Image resizeMode="cover" style={{display: "none"}} source={ require("../../../assets/images/DividerTest2.png") }></Image>
        <View style={styles.mainContainer}>
          <View style={styles.appIconContainer}>
            <Image source={require('../../../assets/images/ParaverseApp.png')} style={styles.appIcon} />
            <Image source={require('../../../assets/images/send.png')} style={styles.sendIcon} />
          </View >
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.viewStyle} />
              <Text style={styles.titleText}>{translate["MY COLLECTION"]}</Text>
              <TouchableOpacity style={styles.sortImageView} onPress={() => this.setState({ dropDownView: !this.state.dropDownView })}>
                <Image source={require('../../../assets/images/Sort.png')} style={styles.sortImageStyle} />
              </TouchableOpacity>
            </View>
            <Image resizeMode="cover" style={styles.dividerStyle} source={this.state.dropDownView ? require("../../../assets/images/DividerTest2.png") : require("../../../assets/images/Divider.png")}></Image>
            {/* {this.state.dropDownView  &&
                <View style={styles.dividerContainer}>
                  </View>
            }
             */}

            {this.state.dropDownView &&
              <View style={styles.dividerContainer}>
                <View style={styles.dropDownTextView}>
                  <TouchableOpacity onPress={() => this.setState({ dropDownView: false })}>
                    <Text style={styles.dropDownText}>{translate["BRAND"]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ dropDownView: false })}>
                    <Text style={styles.dropDownText}>{translate["NAME"]}</Text>
                  </TouchableOpacity >
                  <TouchableOpacity onPress={() => this.setState({ dropDownView: false })}>
                    <Text style={styles.dropDownText}>{translate["RARITY"]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({ dropDownView: false })}>
                    <Text style={styles.dropDownText}>{translate["TIME"]}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            <View style={styles.imageContainer}>
              {(this.state.walletInfo !== undefined && this.state.walletInfo !== null && this.state.walletInfo.length > 0) ?
                <FlatList
                  numColumns={2}
                  data={this.state.walletInfo}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{ paddingVertical: 50 }}
                /> :
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={[styles.useText, { color: "#F98400" }]}>THERE IS NO NFT'S</Text>
                </View>
              }
              {/* <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.orangeBorderView} onPress={() => this.setState({ blurViewMode: "1" })}>
                  {this.state.blurViewMode === "1" &&
                    <View style={styles.blurViewStyle}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate("BarCodeScreen")}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
                      <TouchableOpacity onPress={() => this.handleBlurView(require('../../../assets/images/1.png'))}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>                      
                    </View>}
                  <Image source={require('../../../assets/images/1.png')} style={styles.imageStyle} resizeMode="stretch" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.blueBorderView} onPress={() => this.setState({ blurViewMode: "2" })}>
                  {this.state.blurViewMode === "2" &&
                    <View style={styles.blurViewStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BarCodeScreen")}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleBlurView(require('../../../assets/images/2.png'))}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>                      
                  </View>}
                  <Image source={require('../../../assets/images/2.png')} style={styles.imageStyle} resizeMode="stretch" />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.blueBorderView} onPress={() => this.setState({ blurViewMode: "3" })}>
                  {this.state.blurViewMode === "3" &&
                    <View style={styles.blurViewStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BarCodeScreen")}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleBlurView(require('../../../assets/images/3.png'))}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>                      
                  </View>}
                  <Image source={require('../../../assets/images/3.png')} style={styles.imageStyle} resizeMode="stretch" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.orangeBorderView} onPress={() => this.setState({ blurViewMode: "4" })}>
                  {this.state.blurViewMode === "4" &&
                    <View style={styles.blurViewStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BarCodeScreen")}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleBlurView(require('../../../assets/images/6.png'))}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>                      
                  </View>}
                  <Image source={require('../../../assets/images/6.png')} style={styles.imageStyle} resizeMode="stretch" />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.orangeBorderView} onPress={() => this.setState({ blurViewMode: "5" })}>
                  {this.state.blurViewMode === "5" &&
                    <View style={styles.blurViewStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BarCodeScreen")}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleBlurView(require('../../../assets/images/4.png'))}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>                      
                  </View>}
                  <Image source={require('../../../assets/images/4.png')} style={styles.imageStyle} resizeMode="stretch" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.blueBorderView} onPress={() => this.setState({ blurViewMode: "6" })}>
                  {this.state.blurViewMode === "6" &&
                    <View style={styles.blurViewStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BarCodeScreen")}><Text style={styles.useText}>{translate["USE"]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleBlurView(require('../../../assets/images/5.png'))}><Text style={styles.useText}>{translate["DETAILS"]}</Text></TouchableOpacity>                      
                  </View>}
                  <Image source={require('../../../assets/images/5.png')} style={styles.imageStyle} resizeMode="stretch" />
                </TouchableOpacity>
              </View>              */}
            </View>
          </View>
        </View>
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
    backgroundColor: "#000"
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
    marginLeft: 10
  },
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
    marginRight: 10
  },
  titleContainer: {
    flexDirection: "row",
    zIndex: 1
  },
  viewStyle: {
    flex: .20
  },
  titleText: {
    flex: .56,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    marginRight: 10,
    fontFamily: "AireExterior",
    fontSize: 25
  },
  sortImageStyle: {
    width: 60,
    height: 20,
  },
  viewStyle1: {
    flex: 1,
    marginTop: 40,
    // paddingTop: 10
  },
  dividerContainer: {
    zIndex: 2,
    position: "absolute",
    marginTop: 50,
    right: '4%',
    width: "48%",
    height: "55%",
    alignSelf: "flex-end",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#F98400",
    borderTopColor: "#000",
    backgroundColor: "#000",
  },
  dividerContainer1: {
    alignSelf: "center",
    zIndex: 1,
    position: "absolute",
    top: "21%"
  },
  dividerStyle: {
    width: DEVICE_WIDTH - (DEVICE_WIDTH * 0.08),
    height: 40,
    marginTop: 40,
    position: "absolute",
    zIndex: 3
  },
  dropdownStyle: {
    width: DEVICE_WIDTH - (DEVICE_WIDTH * 0.04),
    height: DEVICE_HEIGHT / 2.4, //  320.2,
    marginTop: 40,
    position: "absolute",
    zIndex: 1,

  },
  imageContainer: {
    width: DEVICE_WIDTH,
    paddingHorizontal: DEVICE_WIDTH / 50,
    marginTop: 14,
    flex: 1,
    alignItems: "center",
    zIndex: 1
  },
  orangeBorderView: {
    width: DEVICE_WIDTH / 2.3,
    height: DEVICE_HEIGHT / 5.2,
    borderWidth: 2,
    borderColor: "#F98400",
    borderRadius: 3,
    margin: 5
  },
  blueBorderView: {
    width: DEVICE_WIDTH / 2.3,
    height: DEVICE_HEIGHT / 5.2,
    borderWidth: 2,
    borderColor: "#55D8FF",
    borderRadius: 3,
    margin: 5
  },
  space: {
    flex: .03
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  dropDownTextView: {
    alignItems: 'flex-end',
    zIndex: 3,
    right: 20,
    paddingVertical: 40
  },
  dropDownText: {
    fontFamily: "AireExterior",
    fontSize: 25,
    color: "#55D8FF",
    marginVertical: 20
  },
  sortImageView: {
    flex: .16,
    marginTop: 20,
    alignItems: "flex-end",
    border: "2px solid green"
  },
  useText: {
    fontFamily: "AireExterior",
    fontSize: 23,
    color: "#fff",
    marginVertical: 5
  },
  blurViewStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute"
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginButtom: 50
  },
})


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
    translate: state.sessionReducer.fetchApplicationLanguage[Object.keys(state.sessionReducer.fetchApplicationLanguage)[0]].myCollectionScreen,
    walletInfo: state.sessionReducer.walletInfo,
    walletAccount: state.sessionReducer.walletAccount
  };
};

export default connect(mapStateToProps)(MyCollection); 