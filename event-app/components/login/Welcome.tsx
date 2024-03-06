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
        <Icon name="welcomeOrg" style={styles.gif} />
              <Text style={styles.title}>پیش خرید محصولات</Text>
              <Text style={styles.subTitle}>ما محصولات شما پیش از برداشت از شما پیش خرید میکنیم !
                کارشناسان ما با بررسی وضعیت زمین کیفیت و کمیت محصول شما را تخمین میزنند و آن را از شما سلف خری میکنند.</Text>
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
    width: "90%",
    position:'absolute',
    top: 110,
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
