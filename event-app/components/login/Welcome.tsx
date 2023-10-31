import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Icon from "../common/Icon";

const Welcome = () => {
  return (
    <SafeAreaView style={styles?.container}>
        <Icon name="welComeGif" style={styles.gif} />
        <Text style={styles.title}>به سوپر اپلیکیشن سبا {"\n"} خوش اومدید</Text>
        <Text style={styles.subTitle}>سوپر اپلیکیشن سبا برای حمایت از کودکان غزه این اپلیکیشن امده است که به کمک کودکان غزه بیایید و از اناها حماتی کتندسوپر اپلیکیشن سبا برای حمایت از کودکان غزه این اپلیکیشن امده است که به کمک کودکان غزه بیایید و از اناها حماتی کتند</Text>
        <Icon name="welComeCircle" style={styles.circle} />
        <Icon name="welComeLine1" style={styles.line1} />
        <Icon name="welComeLine2" style={styles.line2} />
    </SafeAreaView>
  );
};

export default Welcome;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
    position: "relative",
  },
  gif: {
    width: "100%",
    position:'absolute',
    top:100
  },
  circle: {
    position: "absolute",
    bottom: 76,
    right: 0,
    zIndex: -1,
  },
  line1: {
    position: "absolute",
    zIndex: -1,
    top: 60,
    left: 0,
  },
  line2: {
    position: "absolute",
    zIndex: -1,
    top: 110,
    left: 0,
  },
  title: {
    color: Colors?.primary,
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 28,
    marginTop:420
  },
  subTitle:{
    color:Colors.textColor,
    textAlign:'center',
    fontFamily:'regular',
    fontSize:16,
    paddingHorizontal:30,
    marginTop:16,
    lineHeight:30
  }
});
