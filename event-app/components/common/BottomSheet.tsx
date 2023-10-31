import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  SafeAreaView,
} from "react-native";
import React, { FC, useRef } from "react";
import Colors from "../../constants/Colors";
import { TextInput } from "react-native-gesture-handler";
import Icon from "./Icon";
import OTPInputView from "@twotalltotems/react-native-otp-input";

interface BottomSheetProps {
  color?: any;
  titleColor?: any;
  subTitleColor?: any;
  title: string;
  subTitle: any;
  isSmsPage: boolean;
}

const BottomSheet: FC<BottomSheetProps> = ({
  color,
  titleColor,
  subTitleColor,
  title,
  subTitle,
  isSmsPage,
}) => {
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        backgroundColor: color ? color : Colors.whiteColor,
        width: "100%",
        borderTopEndRadius: 33,
        borderTopStartRadius: 33,
        height: "50%",
        bottom: 0,
        paddingHorizontal: 32,
        paddingVertical: 74,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: titleColor ? titleColor : Colors?.primary,
          fontSize: 24,
          fontFamily: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: subTitleColor ? subTitleColor : Colors?.textColor,
          fontFamily: "regular",
          fontSize: 14,
          marginTop: 8,
        }}
      >
        لطفا برای استفاده از اپلیکیشن سبا ورود کنید
      </Text>
      {isSmsPage ? (
        <View style={{ width: "100%", overflow: "hidden" }}>
          <View style={styles.smsBox}></View>
          <View style={styles.btnSmsContainer}>
            <TouchableNativeFeedback style={{ borderRadius: 16 }}>
              <View style={styles.btnSms}>
                <Text style={styles.btnSmsText}>ورود</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      ) : (
        <View style={{ width: "100%" }}>
          <View style={styles.input}>
            <TextInput
              keyboardType="number-pad"
              style={{ fontFamily: "bold", width: "88%", textAlign: "right" }}
              placeholder="شماره تلفن"
              placeholderTextColor={"#7E7E7E"}
            />
            <Icon style={styles.phoneIcon} name="phone" />
          </View>
          <TouchableNativeFeedback style={{ borderRadius: 16 }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>ورود</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BottomSheet;

export const styles = StyleSheet.create({
  input: {
    color: "#7E7E7E",
    fontFamily: "bold",
    width: "100%",
    marginTop: 17,
    fontSize: 14,
    padding: 16,
    borderRadius: 16,
    borderColor: "#E4E4E4",
    borderWidth: 1,
    backgroundColor: "#FAFAFA",
    textAlign: "right",
    position: "relative",
  },
  btnSmsContainer: {
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 16,
    marginTop: 8,
  },
  phoneIcon: {
    position: "absolute",
    top: "60%",
    right: 16,
  },
  btn: {
    width: "100%",
    backgroundColor: Colors.primary,
    // marginTop: 8,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btnText: {
    color: Colors.whiteColor,
    fontFamily: "regular",
    textAlign: "center",
  },
  btnSms: {
    width: "100%",
    backgroundColor: Colors.whiteColor,
    // marginTop: 8,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btnSmsText: {
    color: Colors.primary,
    fontFamily: "regular",
    textAlign: "center",
  },
  smsBox: {
    marginVertical: 16,
    height: 100,
    paddingHorizontal: 85,
    paddingVertical: 0,
    borderRadius: 13,
    borderColor: Colors.whiteColor,
    borderWidth: 1,
  },
});
