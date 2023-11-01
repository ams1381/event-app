import {View, Text, StyleSheet, SafeAreaView, StatusBar, Button, TouchableNativeFeedback} from "react-native";
import Icon from "../components/common/Icon";
import React, {useState} from "react";
import Colors from "../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import InfoBottomSheet from "../components/common/InfoBottomSheet";
import Navbar from "../components/common/Navbar";

export default function Home() {
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <View style={styles.textContainer}>
                <Text style={{textAlign: 'center', color: Colors.primary, fontFamily: 'bold', fontSize: 20}}>اموزش استفاده از این اپلیکیشن</Text>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, fontFamily: 'regular'}}>برای مشاهده اموزش های مربوط به این اپلیکیشن میتوانید از دکمه کنار صفحه یا دکمه زیر استفاده کنید</Text>
                <View style={styles.btnContainer}>
                    <TouchableNativeFeedback style={{borderRadius: 10}}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>مشاهده</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View>
                <InfoBottomSheet bottomSheetOpen={isActivePopup} isActivePopup={isActivePopup} setIsActivePopup={setIsActivePopup}/>
            </View>

            <Icon name={'shapeGradiant'} style={styles.shapeGradiant}/>
            <View style={styles.info} onTouchEnd={() => {
                setIsActivePopup(!isActivePopup)
            }}>
                <Icon name={'info'}/>
            </View>

            <Icon name={'homeShape'} style={styles.shape}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingVertical: StatusBar.currentHeight,
        // paddingHorizontal: 62,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textContainer: {
        paddingHorizontal: 62,
        marginTop: 163,
        gap: 10,
        zIndex:1
    },
    shape: {
        position: 'absolute',
        bottom: 0
    },
    btnContainer: {
        marginBottom: 50,
        width: '100%',
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        marginTop: 8,
        backgroundColor: 'red'
    },
    btn: {
        backgroundColor: Colors.primary,
        // marginBottom: 50,
        borderRadius: 10,
        paddingVertical: 16,
        width: '100%'
    },
    btnText: {
        textAlign: 'center',
        color: Colors.whiteColor,
        fontSize: 16,
        fontFamily: 'bold'
    },
    shapeGradiant: {
        position: 'absolute',
        width: '100%',
        top:-7
    },
    info: {
        position: 'absolute',
        top: 52,
        right: 15,
    },
})

