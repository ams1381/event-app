import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from "react-native";
import Colors from "../../constants/Colors";
import Icon from "../../components/common/Icon";

const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="baseLogo" />
      {/* <Icon name="bigLogo" style={styles.bigLogo} />
      <Icon name="originLogo" /> */}
      <Text style={styles.title}>سوپر اپلیکیشن سبا</Text>
      {/* <Icon name="loading" style={styles.loading} /> */}
      <ActivityIndicator size={'large'} color="white" />
      <Icon name="shape" style={styles.shape} />
      <Icon name="shapeLine" style={styles.shapeLine} />
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height : '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    position: "relative",
  },
  title: {
    color: "#FFF",
    fontFamily: "bold",
    fontSize: 24,
    marginTop: -100,
  },
  bigLogo: {
    opacity: 0.1,
    position: "absolute",
  },
  shape: {
    position: "absolute",
    bottom: 0,
  },
  shapeLine: {
    position: "absolute",
    bottom: 4,
  },
  loading: {
    marginTop: 35,
  },
});
