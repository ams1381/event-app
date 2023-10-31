import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Colors from "../../constants/Colors";

const Shadow = () => {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></View>
  );
};

export default Shadow;

const styles = StyleSheet.create({});
