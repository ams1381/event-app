import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import BottomSheet from "../../common/BottomSheet";
import Icon from "../../common/Icon";

type WelcomeType = {
  visitedPage : boolean ,
  setCurrentIndex : any
}

const OtpSms : React.FC<WelcomeType> = ({ visitedPage , setCurrentIndex }) => {
  return (
    <View style={OTPStyles.container}>
        <Icon name="otpBigLogo" style={OTPStyles.bigLogo} />
        <Icon name="otpLogo" style={OTPStyles.originLogo} />
        <Text style={OTPStyles.title}>سوپر اپلیکیشن بذرینو</Text>
        {/* <BottomSheet isSmsPage={true} setCurrentIndex={setCurrentIndex}
         title="تایید شماره"  subTitle="لطفا کد ارسال شده به شماره"
         subTitleColor={'#E4E4E4'} color={Colors.primary} titleColor={Colors.whiteColor}/> */}
    </View>
  );
};

export default OtpSms;

export const OTPStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    color: Colors.primary,
    fontFamily: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  originLogo: {
    // marginTop: -330,
    width: 210,
    height: 210,
  },
  bigLogo: {
    opacity: 0.1,
    position: "absolute",
    top: 5,
    right :5
  },
});
