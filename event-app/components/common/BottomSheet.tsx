import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import React, {FC, useRef, useState} from "react";
import Colors from "../../constants/Colors";
import {TextInput} from "react-native-gesture-handler";
import Icon from "./Icon";
import axios from 'axios'
import OTPInputView from "@twotalltotems/react-native-otp-input";
import {axiosInstance} from "../../Utills/axios";
import {useRouter} from "expo-router";

type BottomSheetProps = {
    color?: any;
    titleColor?: any;
    subTitleColor?: any;
    title: string;
    setLoginStatus: any;
    subTitle: any;
    setCurrentIndex: any,
    setPhoneNumber: any,
    phoneNumber: number | null,
    isSmsPage: boolean;
}

const BottomSheet: FC<BottomSheetProps> = ({
                                               color,
                                               titleColor,
                                               subTitleColor,
                                               title,
                                               subTitle,
                                               setPhoneNumber,
                                               phoneNumber,
                                               isSmsPage,
                                               setCurrentIndex,
                                               setLoginStatus,
                                           }) => {


    const [BottomSheetLoading, setBottomSheetLoading] = useState(false);
    const [otpCode, setOtpCode] = useState(['', '', '', '']);
    const inputRefs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];
    const router = useRouter()

    const focusInput = (index: number) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1]?.current?.focus();
        }
    };
    const handleInput = (value: any, index: number) => {
        if (value && value.match(/[0-9]/)) {
            const newOtpCode = [...otpCode];
            newOtpCode[index] = value;
            setOtpCode(newOtpCode);
            focusInput(index);
        }
    };
    const sendSmsHandler = async () => {
        setLoginStatus(1);
        // setBottomSheetLoading(true)
        // try {
        //   await axiosInstance.post('api/core/auth/send-sms/',{
        //     phone_number : phoneNumber
        //   })
        //   setCurrentIndex(3);
        //   setBottomSheetLoading(false);
        //   setLoginStatus(1);
        // }
        // catch(err) {
        //   setBottomSheetLoading(false)
        // }
    }
    const confirmSmsHandler = async () => {
        axiosInstance.post('api/core/auth/login/', {
            phone_number: phoneNumber,

        })
    }
    return (
        <View
            style={{
                // position: "absolute",
                backgroundColor: color ? color : Colors.whiteColor,
                width: "100%",
                borderTopEndRadius: 33,
                borderTopStartRadius: 33,
                height: "100%",
                // bottom: 0,
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
                <View style={{width: "100%", overflow: "hidden"}}>
                    <View style={styles.smsBox}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 16}}>
                            {inputRefs.map((ref, index) => (
                                <View style={styles.OtpInputContainer} key={index}>
                                    <TextInput
                                        maxLength={1}
                                        style={styles.OtpInputItem}
                                        ref={ref}
                                        keyboardType="number-pad"
                                        onChangeText={(value) => handleInput(value, index)}
                                    />
                                    <View style={styles.OtpItemBottomLine}/>
                                </View>
                            ))}
                            {/* Display the OTP code for testing */}
                            {/* <View style={styles.OtpInputContainer}>
                <TextInput maxLength={1}  style={styles.OtpInputItem} />
                <View style={styles.OtpItemBottomLine} />
              </View>
              <View style={styles.OtpInputContainer}>
                <TextInput maxLength={1} style={styles.OtpInputItem} />
                <View style={styles.OtpItemBottomLine} />
              </View>
              <View style={styles.OtpInputContainer}>
                <TextInput maxLength={1} style={styles.OtpInputItem} />
                <View style={styles.OtpItemBottomLine} />
              </View>
              <View style={styles.OtpInputContainer}>
                <TextInput maxLength={1} style={styles.OtpInputItem} />
                <View style={styles.OtpItemBottomLine} />
              </View> */}
                        </View>
                    </View>
                    <View style={styles.btnSmsContainer}>
                        <TouchableNativeFeedback style={{borderRadius: 16}}>
                            <View style={styles.btnSms} onTouchEnd={() => router.push('/user-panel/profile')}>
                                <Text style={styles.btnSmsText}>تایید</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            ) : (
                <View style={{width: "100%"}}>
                    <View style={styles.input}>
                        <TextInput
                            keyboardType="number-pad"
                            value={phoneNumber ? phoneNumber : ''}
                            onChangeText={(e: any) => setPhoneNumber(e)}
                            style={{fontFamily: "bold", width: "88%", textAlign: "right"}}
                            placeholder="شماره تلفن"
                            placeholderTextColor={"#7E7E7E"}
                        />
                        <Icon style={styles.phoneIcon} name="phone"/>
                    </View>
                    <TouchableNativeFeedback style={{borderRadius: 16, marginTop: 8}}>
                        <View style={styles.btn} onTouchEnd={sendSmsHandler}>

                            {
                                BottomSheetLoading ? <ActivityIndicator color={'white'}/>
                                    : <Text style={styles.btnText}>ورود</Text>
                            }
                        </View>
                    </TouchableNativeFeedback>
                </View>
            )}
        </View>
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
    OtpInputContainer: {
        justifyContent: 'flex-end',
        position: 'relative',
        height: 30
    },
    OtpInputItem: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        height: '90%',
        borderRadius: 4
    },
    OtpItemBottomLine: {
        width: 38,
        height: 5,
        borderRadius: 4,
        backgroundColor: 'white'
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
        marginTop: 8,
        height: 47,
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
        justifyContent: 'center',
        paddingHorizontal: 85,
        paddingVertical: 0,
        borderRadius: 13,
        borderColor: Colors.whiteColor,
        borderWidth: 1,
    },
});
