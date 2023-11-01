import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useState , useEffect } from 'react'
import Colors from "../../constants/Colors";
import Icon from "../common/Icon";

type WelcomeType = {
  visitedPage : boolean
}
const Welcome2 : React.FC<WelcomeType> = () => {
  const ButtomCircleAnimation = useState(new Animated.Value(0))[0]
  const TopCircleAnimation = useState(new Animated.Value(0))[0]


  useEffect(() => {
      Animated.timing(ButtomCircleAnimation,{
        toValue : 1,
        duration : 500,
        useNativeDriver : false,
      }).start();
      Animated.timing(TopCircleAnimation,{
        toValue : 1,
        duration : 500,
        useNativeDriver : false,
      }).start();
  })
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
      <Animated.View style={{ 
        ...styles.ButtomCircle ,
        transform : [{
          translateX : ButtomCircleAnimation.interpolate({
            inputRange : [0 , 1],
            outputRange : [ -600, 0 ]
          })
        }]
       }}>
         <Icon name="welComeCricleBottom2" style={styles.bottom} />
      </Animated.View>
       <Animated.View style={{
        ...styles.TopCircleContainer ,
        transform : [{
          translateY : TopCircleAnimation.interpolate({
            inputRange : [ 0 , 1] ,
            outputRange : [ -1000 , 0 ]
          })
        }]
        }}>
          <Icon name="welComeCircleTop2" style={styles.top} />
       </Animated.View>
      
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
  ButtomCircle : {
    width : '100%',
    height : '100%',
    position : 'absolute',
    bottom : 0,
    zIndex : -1
  },
  TopCircleContainer : {
    width : '100%',
    height : '40%',
    position : 'absolute',
    top : -10
  }
});
