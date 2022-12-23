import { View, SafeAreaView, Text, Image } from "react-native";
import React from "react";
import { isTabletOrMobileDevice } from "../../utils/utils";
import { mobileStyles, desktopStyles } from "./home.style";

const Home = () => {
  if (isTabletOrMobileDevice()) {
    return (
      <SafeAreaView style={mobileStyles.container}>
        <View style={mobileStyles.imageLogoContainer}>
          <Image style={mobileStyles.image} source={require("../../assets/icon.png")} />
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>Let's Talk</Text>
        </View>
        <View style={mobileStyles.view3}></View>
        <View style={mobileStyles.view1}>
          <Text style={mobileStyles.text}>Login</Text>
        </View>
        <View style={mobileStyles.view2}>
          <Text style={mobileStyles.text}>Register</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={desktopStyles.container}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>Let's Talk</Text>
      </View>
    );
  }
};

export default Home;
