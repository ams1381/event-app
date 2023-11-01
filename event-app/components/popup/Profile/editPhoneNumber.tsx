import {Text, View, StyleSheet, Animated,Keyboard, TouchableNativeFeedback} from "react-native";
import {useEffect, useState} from "react";
import Colors from "../../../constants/Colors";
import Icon from "../../common/Icon";
import {TextInput} from "react-native-gesture-handler";
import {Color} from "ansi-fragments/build/fragments/Color";

export default function EditPhoneNumber(p: { phoneNumber: any, setPhoneNumber: any }) {
    const BottomSheetAnimation = useState(new Animated.Value(0))[0];

    useEffect(() => {
        if (p.phoneNumber) {
            Animated.timing(BottomSheetAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(BottomSheetAnimation, {
                toValue: -1,
                duration: 300,
                useNativeDriver: false,
            }).start()
            Keyboard.dismiss()
        }
    }, [p.phoneNumber])

    return (
        <Animated.View style={{
            ...styles.container,
            transform: [{
                translateY: BottomSheetAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, 430]
                })
            }]
        }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View onTouchEnd={() => {
                        p?.setPhoneNumber(false)
                    }}>
                        <Icon name={'X'}/>
                    </View>
                    <Text style={styles.headTitle}>
                        شماره تلفن
                    </Text>
                </View>
                <View style={styles.body}>
                    <TextInput style={styles.input} keyboardType={'number-pad'} placeholder={'شماره تلفن'} placeholderTextColor={'#7E7E7E'}/>
                </View>
                <View style={styles.bottom}>
                    <Text onPress={() => {
                        p?.setPhoneNumber(false)
                    }} style={styles.reject}>لغو</Text>
                    <Text onPress={() => {
                        p?.setPhoneNumber(false)
                    }} style={styles.confrim}>تایید</Text>
                </View>
            </View>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 350,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 30,
        elevation: 24,
        borderRadius: 16,
        zIndex: 2,
    },
    header: {
        width: '100%',
        backgroundColor: Colors.secondaryBg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
    },
    headTitle: {
        color: Colors.primary,
        fontFamily: 'bold',
        fontSize: 20
    },
    body: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: '100%',
        gap: 10,
    },
    input: {
        width: '100%',
        borderColor: Colors.border,
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        color: Colors.textColorDark,
        fontSize: 20,
        fontFamily: 'bold',
        textAlign: 'right'
    },
    bottom: {
        backgroundColor: Colors.secondaryBg,
        width: '100%',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reject: {
        fontSize: 16,
        fontFamily: 'bold',
        color: '#333',
        width: '50%',
        height: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        textAlign: 'center',
    },
    confrim: {
        fontSize: 16,
        fontFamily: 'bold',
        color: Colors.primary,
        width: '50%',
        height: '100%',
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderLeftColor: Colors.secondary,
        borderLeftWidth: 1
    },
})