import {
    // Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableNativeFeedback,
    Image, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback,
    // TouchableOpacity,
} from "react-native";
import React, {useEffect, useState} from "react";
import {TextInput} from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import Icon from "../../components/common/Icon";
import Navbar from "../../components/common/Navbar";
import EditName from "../../components/popup/Profile/editName";
import EditPhoneNumber from "../../components/popup/Profile/editPhoneNumber";
import EditEmail from "../../components/popup/Profile/editEmail";
import Shadow from "../../components/popup/shdow";
import InfoBottomSheet from "../../components/common/InfoBottomSheet";
import {axiosInstance} from "../../Utills/axios";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import HelpBottomSheet from "../../components/common/HelpBottomSheet";
import {TabBarComponent} from "../../components/common/Tabbar";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Toast from "react-native-toast-message";
import {DeleteData} from "../../Utills/StorageUtils";
import {useRouter} from "expo-router";

const profile = () => {
    const [editName, setEditName] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<boolean>(false);
    const [email, setEmail] = useState<boolean>(false);
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
    const [emailValue, setEmailValue] = useState<string>();
    const [nameValue, setNameValue] = useState<string>();
    const [phoneNumberValue, setPhoneNumberValue] = useState<string>();
    const [last_name, setLastName] = useState<string>()
    const [userId, setUserId] = useState<string>();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showLanguageDropDownOpen,setShowLanguageDropDownOpen] = useState<boolean>(false)
    const [activeLang,setActiveLang] = useState('FA')

    const opacity = useSharedValue(1);
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
      };
    });

    useEffect(() => {
      opacity.value = withTiming(0, { duration: 1000 });
      scale.value = withTiming(1.5, { duration: 1000 });
    }, []);

    const [ logoutLoading , setLogoutLoading ] = useState(false);
    const getUserData = () => {
        setIsLoading(true)
        axiosInstance.get("api/core/users/me/").then((res) => {
            setEmailValue(res?.data?.email);
            setNameValue(res?.data?.first_name);
            setLastName(res?.data?.last_name)
            setPhoneNumberValue(res?.data?.username);
            setIsLoading(false)
        });
    };

    useEffect(() => {
        getUserData();
    }, []);
    const LogoutHandler = async () => {
        if(logoutLoading)
            return
        try {
            setLogoutLoading(true)
            await DeleteData('access');
            router.push('../../')
        } catch (err) {

        } finally {
            setLogoutLoading(false)
        }
    }
    return (
        <>
            {isLoading ? (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                    <ActivityIndicator color={Colors.primary} size={50}/>
                </View>
            ) : (
                <SafeAreaView style={styles.container}>
                    <EditName last_name={last_name} nameValue={nameValue} getUserData={getUserData} userId={userId} editName={editName} setEditName={setEditName}/>
                    <EditPhoneNumber
                        getUserData={getUserData}
                        phoneNumberValue={phoneNumberValue}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                    />
                    <EditEmail emailValue={emailValue} getUserData={getUserData} email={email} setEmail={setEmail}/>
                    <Navbar
                        isActivePopup={isActivePopup}
                        setIsActivePopup={setIsActivePopup}
                    />
                    <Shadow isActive={editName} setIsActive={setEditName}/>
                    <Shadow isActive={phoneNumber} setIsActive={setPhoneNumber}/>
                    <Shadow isActive={email} setIsActive={setEmail}/>

                    <View style={styles.inputFieldContainer}>
                        <View style={styles.inputField}>
                            <View style={{borderRadius: 5, overflow: "hidden"}}>
                                <TouchableNativeFeedback>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View onTouchEnd={() => setEditName(true)}>
                                            <Icon name="edit"/>
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
                                <Icon name="user"/>
                            </View>
                        </View>
                        <View style={styles.inputField}>
                            <View style={{borderRadius: 5, overflow: "hidden"}}>
                                <TouchableNativeFeedback>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View onTouchEnd={() => setPhoneNumber(true)}>
                                            <Icon name="edit"/>
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
                                <Icon name="user"/>
                            </View>
                        </View>
                        <View style={styles.inputField}>
                            <View style={{borderRadius: 5, overflow: "hidden"}}>
                                <TouchableNativeFeedback>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View onTouchEnd={() => setEmail(true)}>
                                            <Icon name="edit"/>
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
                                <Icon name="user"/>
                            </View>
                        </View>
                        <View onTouchEnd={() => setShowLanguageDropDownOpen(prev => !prev)} style={styles.inputField}>
                            <View style={{borderRadius: 5, overflow: "hidden",display:'flex',alignItems:'center',gap:10,flexDirection:'row'}}>
                                <TouchableNativeFeedback>
                                    <View style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View>
                                            <Icon name="arrowDown"/>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            <Text style={{
                                    textAlign: "left",
                                    color: Colors.textColorDark,
                                    fontFamily: "regular",
                                    fontSize: 20,
                            }}>{activeLang}</Text>
                            </View>
                            <View style={styles.inputTitle}>
                                <Text style={styles.inputTitleText}>زبان :</Text>
                                <Icon  style={{width:24,height:24}} name="language"/>
                            </View>
                        </View>
                          {showLanguageDropDownOpen ? ( <View style={{
                                   width: "30%",
                                   backgroundColor: Colors.whiteColor,
                                   paddingHorizontal: 16,
                                   paddingVertical: 16,
                                   borderRadius: 16,
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   overflow: 'hidden',
                                   gap: 4,
                                   direction:'ltr',
                            }}>
                               <View style={{direction:'rtl',display:'flex',justifyContent:'flex-end',flexDirection:'column',gap:10}}>
                                <View onTouchEnd={() => {
                                    setActiveLang('FA')
                                    setShowLanguageDropDownOpen(false)
                                }} style={{width:100,direction:'rtl',color: Colors.textColorDark,}}>
                                    <Text style={{fontFamily:'bold'}}>FA</Text>
                                </View>
                                <View onTouchEnd={() => {
                                    setActiveLang('EN')
                                    setShowLanguageDropDownOpen(false)
                                }} style={{width:100,direction:'rtl',color: Colors.textColorDark,}}>
                                    <Text style={{fontFamily:'bold',}}>EN</Text>
                                </View>
                               </View>
                            </View>) : ''}
                        {/* <TabBarComponent TabName="User" /> */}
                        <View style={styles.LogoutButton} onTouchEnd={LogoutHandler}>
                            { logoutLoading ? <ActivityIndicator color={'white'} size={50}/>
                                : <Text style={{color: 'white', fontFamily: 'bold',}}>
                                خروج از حساب کاربری
                            </Text>}
                        </View>
                    </View>
                    <HelpBottomSheet  active={isActivePopup} setActive={setIsActivePopup}/>
                </SafeAreaView>
            ) }

        </>
    );
};

export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        paddingVertical: StatusBar.currentHeight,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
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
        overflow: 'hidden',
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
    LogoutButton : {
        paddingHorizontal : 15 ,
        paddingVertical : 7,
        borderRadius : 8 ,
        backgroundColor : Colors.LogoutColor ,
        width : 180 ,
        justifyContent : 'center' ,
        alignItems : 'center'
    }
});
