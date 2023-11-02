import {
  // Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableNativeFeedback,
  Image,
  // TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import Icon from "../../components/common/Icon";
import Navbar from "../../components/common/Navbar";
import EditName from "../../components/popup/Profile/editName";
import EditPhoneNumber from "../../components/popup/Profile/editPhoneNumber";
import EditEmail from "../../components/popup/Profile/editEmail";
import Shadow from "../../components/popup/shdow";
import InfoBottomSheet from "../../components/common/InfoBottomSheet";
import { axiosInstance } from "../../Utills/axios";
import { TabBarComponent } from "../../components/common/Tabbar";

const profile = () => {
  const [editName, setEditName] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>();
  const [nameValue, setNameValue] = useState<string>();
  const [phoneNumberValue, setPhoneNumberValue] = useState<string>();
  const [last_name,setLastName] = useState<string>()
  const [userId, setUserId] = useState<string>();

  const getUserData = () => {
    axiosInstance.get("api/core/users/me/").then((res) => {
      setEmailValue(res?.data?.email);
      setNameValue(res?.data?.first_name);
      setLastName(res?.data?.last_name)
      setPhoneNumberValue(res?.data?.username);
      
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <EditName last_name={last_name} nameValue={nameValue} getUserData={getUserData} userId={userId} editName={editName} setEditName={setEditName} />
        <EditPhoneNumber
        getUserData={getUserData}
        phoneNumberValue={phoneNumberValue}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <EditEmail emailValue={emailValue} getUserData={getUserData} email={email} setEmail={setEmail} />
        <Navbar
          isActivePopup={isActivePopup}
          setIsActivePopup={setIsActivePopup}
        />
        <Shadow isActive={editName} setIsActive={setEditName} />
        <Shadow isActive={phoneNumber} setIsActive={setPhoneNumber} />
        <Shadow isActive={email} setIsActive={setEmail} />
        <View style={styles.inputFieldContainer}>
          <View style={styles.inputField}>
          <View style={{ borderRadius : 5 , overflow : "hidden" }}>
              <TouchableNativeFeedback>
                <View style={{ width : 30 , 
                  height : 30  , 
                  borderRadius : 5 , 
                  overflow : 'hidden' , 
                  justifyContent : 'center' , 
                  alignItems : 'center' 
                  }}>
                  <View onTouchEnd={() => setEditName(true)}>
                      <Icon name="edit" />
                    </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            <TextInput
              value={nameValue}
              editable={false}
              placeholderTextColor={Colors.textColorDark}
              style={styles.input}
              placeholder="نام"
            />
            <View style={styles.inputTitle}>
              <Text style={styles.inputTitleText}>نام : </Text>
              <Icon name="user" />
            </View>
          </View>
          <View style={styles.inputField}>
            <View style={{ borderRadius : 5 , overflow : "hidden" }}>
              <TouchableNativeFeedback>
                <View style={{ width : 30 , 
                  height : 30  , 
                  borderRadius : 5 , 
                  overflow : 'hidden' , 
                  justifyContent : 'center' , 
                  alignItems : 'center' 
                  }}>
                  <View onTouchEnd={() => setPhoneNumber(true)}>
                      <Icon name="edit" />
                    </View>
                </View>
              </TouchableNativeFeedback>
            </View>
         
            <TextInput
              value={phoneNumberValue}
              editable={false}
              placeholderTextColor={Colors.textColorDark}
              style={{
                textAlign: "left",
                flex: 1,
                color: Colors.textColorDark,
                fontFamily: "regular",
                fontSize: 20,
              }}
              placeholder="شماره تلفن"
            />
            <View style={styles.inputTitle}>
              <Text style={styles.inputTitleText}>شماره تلفن : </Text>
              <Icon name="user" />
            </View>
          </View>
          <View style={styles.inputField}>
          <View style={{ borderRadius : 5 , overflow : "hidden" }}>
              <TouchableNativeFeedback>
                <View style={{ width : 30 , 
                  height : 30  , 
                  borderRadius : 5 , 
                  overflow : 'hidden' , 
                  justifyContent : 'center' , 
                  alignItems : 'center' 
                  }}>
                  <View onTouchEnd={() => setEmail(true)}>
                      <Icon name="edit" />
                    </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            {/* <View onTouchEnd={() => setEmail(true)}>
              <Icon name="edit" />
            </View> */}
            <TextInput
              value={emailValue}
              editable={false}
              placeholderTextColor={Colors.textColorDark}
              style={{
                textAlign: "left",
                flex: 1,
                color: Colors.textColorDark,
                fontFamily: "regular",
                fontSize: 20,
              }}
              placeholder="آدرس ایمیل"
            />
            <View style={styles.inputTitle}>
              <Text style={styles.inputTitleText}>ایمیل : </Text>
              <Icon name="user" />
            </View>
          </View>
        </View>
        
        {/* <TabBarComponent TabName="User" /> */}
      </SafeAreaView>
      
    </>
    
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
    shadowOffset: { width: -2, height: 4 },
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
    overflow : 'hidden',
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
