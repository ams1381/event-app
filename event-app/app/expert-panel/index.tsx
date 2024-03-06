import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";

const ExpertPanel = () => {
    return  <SafeAreaView style={styles.container}>
        <Text>
            ams
        </Text>
    </SafeAreaView>
}

export default ExpertPanel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
        width: "100%",
        // paddingHorizontal : 16
    },
});