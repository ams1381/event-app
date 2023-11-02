import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Icon from "../common/Icon";

const Welcome = () => {
  const TopImageAnimation  = useState(new Animated.Value(0))[0];
  const BottomImageAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(TopImageAnimation,{
      toValue : 1 ,
      duration : 3500,
      useNativeDriver : false,
    }).start();
    Animated.timing(BottomImageAnimation,{
      toValue : 1,
      duration : 3500,
      useNativeDriver : false,
    }).start()
  },[])

  return (
    <SafeAreaView style={styles?.container}>
        <Icon name="welComeGif" style={styles.gif} />
              <Text style={styles.title}>به سوپر اپلیکیشن بذرینو {"\n"} خوش اومدید</Text>
              <Text style={styles.subTitle}>سوپر اپلیکیشن بذرینو برای حمایت از کودکان غزه این اپلیکیشن امده است که به کمک کودکان غزه بیایید و از اناها حماتی کتندسوپر اپلیکیشن بذرینو برای حمایت از کودکان غزه این اپلیکیشن امده است که به کمک کودکان غزه بیایید و از اناها حماتی کتند</Text>
        <Animated.View style={{
            ...styles.BottomImageContainer,
            transform : [{
              translateX : BottomImageAnimation.interpolate({
                inputRange : [ 0 , 1 ],
                outputRange : [ 1000 , 0 ]
              })
            }]
        }}>
          <Icon name="welComeCircle" style={styles.circle} />
        </Animated.View>      
        <Animated.View style={{
          ...styles.TopImageContainer , 
          transform : [{
            translateY : TopImageAnimation.interpolate({
              inputRange : [ 0 , 1] ,
              outputRange : [ -1000 , 0 ]
            })
          }]
          }}>
          <Icon name="welComeLine1" style={styles.line1} />
          <Icon name="welComeLine2" style={styles.line2} />
        </Animated.View>
    </SafeAreaView>
  );
};

export default Welcome;

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height : '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
    position: "relative",
  },
  gif: {
    width: "100%",
    position:'absolute',
    top: 60,
    zIndex : 1
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
  },
  TopImageContainer : {
    width : '100%',
    height : '40%',
    position : 'absolute',
    top : -10,
    zIndex: -1,
  },
  BottomImageContainer : {
    width : '100%',
    height : '40%',
    position : 'absolute',
    bottom : -35,
    right : 0,
    zIndex: -1,
  }
});
