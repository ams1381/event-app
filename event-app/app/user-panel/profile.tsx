import {
    // Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    // TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import {TextInput} from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import Icon from "../../components/common/Icon";
import Navbar from "../../components/common/Navbar";
import EditName from "../../components/popup/Profile/editName";
import EditPhoneNumber from "../../components/popup/Profile/editPhoneNumber";
import EditEmail from "../../components/popup/Profile/editEmail";
import Shadow from "../../components/popup/shdow";

const profile = () => {
    const [editName, setEditName] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<boolean>(false)
    const [email, setEmail] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>
            <EditName editName={editName} setEditName={setEditName}/>
            <EditPhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
            <EditEmail email={email} setEmail={setEmail}/>
            <Navbar/>
            <Shadow isActive={editName} setIsActive={setEditName}/>
            <Shadow isActive={phoneNumber} setIsActive={setPhoneNumber}/>
            <Shadow isActive={email} setIsActive={setEmail}/>
            {/*<View style={styles.profileImageContainer}>*/}
            {/*    <Image*/}
            {/*        style={[styles?.profileImage, styles.shadowProp]}*/}
            {/*        source={require("./../../assets/images/me.jpeg")}*/}
            {/*    />*/}
            {/*</View>*/}
            <View style={styles.inputFieldContainer}>
                <View style={styles.inputField}>
                    <View onTouchEnd={() => setEditName(true)}>
                        <Icon name="edit"/>
                    </View>
                    <TextInput
                        editable={false}
                        placeholderTextColor={Colors.textColorDark}
                        style={styles.input}
                        placeholder="ابوالفضل صادقی"
                    />
                    <View style={styles.inputTitle}>
                        <Text style={styles.inputTitleText}>نام : </Text>
                        <Icon name="user"/>
                    </View>
                </View>
                <View style={styles.inputField}>
                    <View onTouchEnd={() => setPhoneNumber(true)}>
                        <Icon name="edit"/>
                    </View>
                    <TextInput
                        editable={false}
                        placeholderTextColor={Colors.textColorDark}
                        style={{
                            textAlign: "left",
                            flex: 1,
                            color: Colors.textColorDark,
                            fontFamily: "regular",
                            fontSize: 20,
                        }}
                        placeholder="09928812454"
                    />
                    <View style={styles.inputTitle}>
                        <Text style={styles.inputTitleText}>شماره تلفن : </Text>
                        <Icon name="user"/>
                    </View>
                </View>
                <View style={styles.inputField}>
                    <View onTouchEnd={() => setEmail(true)}>
                        <Icon name="edit"/>
                    </View>
                    <TextInput
                        editable={false}
                        placeholderTextColor={Colors.textColorDark}
                        style={{
                            textAlign: "left",
                            flex: 1,
                            color: Colors.textColorDark,
                            fontFamily: "regular",
                            fontSize: 20,
                        }}
                        placeholder="afazsad709@gmail.com"
                    />
                    <View style={styles.inputTitle}>
                        <Text style={styles.inputTitleText}>ایمیل : </Text>
                        <Icon name="user"/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEE",
        alignItems: "center",
        paddingVertical: StatusBar.currentHeight,
    },
    profileImageContainer: {
        width: 180,
        height: 180,
        borderRadius: 40,
    },
    profileImage: {
        width: "100%",
        height: "100%",
        borderRadius: 40,
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    inputFieldContainer: {
        paddingHorizontal: 16,
        width: "100%",
        marginVertical: 12,
        gap: 12,
    },
    inputField: {
        width: "100%",
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
    },
    input: {
        textAlign: "right",
        flex: 1,
        color: Colors.textColorDark,
        fontFamily: "regular",
        fontSize: 20,
    },
    inputTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    inputTitleText: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 20,
    },
});
