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

const Welcome2 = () => {
  return (
    <SafeAreaView style={styles?.container}>
      <Icon name="welComeGif2" style={styles.gif} />
      <Text style={styles.title}>همیشه درحال پیشرفت</Text>
      <Text style={styles.subTitle}>
        سوپر اپلیکیشن سبا برای حمایت از کودکان غزه این اپلیکیشن امده است که به
        کمک کودکان غزه بیایید و از اناها حماتی کتندسوپر اپلیکیشن سبا برای حمایت
        از کودکان غزه این اپلیکیشن امده است که به کمک کودکان غزه بیایید و از
        اناها حماتی کتند
      </Text>
      <Icon name="welComeCricleBottom2" style={styles.bottom} />
      <Icon name="welComeCircleTop2" style={styles.top} />
      <Icon name="welComeCircleRight2" style={styles.ritgh} />
    </SafeAreaView>
  );
};

export default Welcome2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
    position: "relative",
  },
  gif: {
    width: "100%",
    position: "absolute",
    top: 210,
  },
  bottom: {
    position: "absolute",
    zIndex: -1,
    left:0,
    bottom:0
  },
  top: {
    position: "absolute",
    top: 45,
    right: 43,
    zIndex: -1,
  },
  ritgh: {
    position: "absolute",
    right: 0,
    top: 390,
    zIndex: -1,
  },
  title: {
    color: Colors?.primary,
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 28,
    marginTop: 380,
  },
  subTitle: {
    color: Colors.textColor,
    textAlign: "center",
    fontFamily: "regular",
    fontSize: 16,
    paddingHorizontal: 30,
    marginTop: 16,
    lineHeight:30
  },
});
