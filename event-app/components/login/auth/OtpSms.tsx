import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import BottomSheet from "../../common/BottomSheet";
import Icon from "../../common/Icon";

const OtpSms = () => {
  return (
    <View style={styles.container}>
      <Icon name="otpSmsShape" style={styles.bigLogo} />
      <Icon name="otpSmsOrigin" style={styles.originLogo} />
      <Text style={styles.title}>سوپر اپلیکیشن سبا</Text>
      <BottomSheet
        isSmsPage={true}
        title="تایید شماره"
        subTitle="لطفا کد ارسال شده به شماره"
        subTitleColor={"#E4E4E4"}
        color={Colors.primary}
        titleColor={Colors.whiteColor}
      />
    </View>
  );
};

export default OtpSms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
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
    marginTop: -330,
    width: 210,
    height: 210,
  },
  bigLogo: {
    position: "absolute",
    top: 5,
  },
});
