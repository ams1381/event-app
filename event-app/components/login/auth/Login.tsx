import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import BottomSheet from "../../common/BottomSheet";
import Icon from "../../common/Icon";

const Login = () => {
  return (
    <View style={styles.container}>
      <Icon name="backLogo" style={styles.bigLogo} />
      <Icon name="originLogo" style={styles.originLogo} />
      <Text style={styles.title}>سوپر اپلیکیشن سبا</Text>
      <BottomSheet
        isSmsPage={false}
        title=" ورود / ثبت نام"
        subTitle="لطفا برای استفاده از اپلیکیشن سبا ورود کنید"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    color: "#FFF",
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
