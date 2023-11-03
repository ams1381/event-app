import {Text, View, StyleSheet, StatusBar, TextInput, ScrollView, TouchableNativeFeedback, ActivityIndicator} from "react-native";
import Navbar from "../../components/common/Navbar";
import React, {useState} from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from "../../constants/Colors";
import {axiosInstance} from "../../Utills/axios";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
// import Toast from 'react-native-toast-message';


type Location = {
    latitude: number,
    longitude: number
}

const ToastMessage = (Toast: any, message: string, messageStatus: string) => {
    Toast.show({
        type: messageStatus,
        position: 'top',
        text1: message,
    });
}

export default function CreateFaram() {
    const [isActivePopup, setIsActivePopup] = useState(false)
    const [mapLat, setMapLat] = useState(6.841776681);
    const [mapLong, setMapLong] = useState(79.869319);
    const router = useRouter();
    const [name, setName] = useState<string>()
    const [area, setArea] = useState<string>()
    const [location, setLocation] = useState<Location>()

    const confirmSmsHandler = () => {
        if (name?.length && area?.length)
            axiosInstance.post('/api/farm/farms/', {
                name: name?.trim(),
                area: area,
                location: {
                    "latitude": 0,
                    "longitude": 0
                },
            }).then(res => {
                if (res.status === 201) {
                    Toast.show({
                        type: 'success',
                        position: 'top',
                        text1: 'با موفقیت ایجاد شد.',
                    });
                    setArea('')
                    setName('')
                    router.push('/user-panel/');
                }
            }).catch(err => {
                const ERROR_MESSAGE =
                    err?.response?.data[Object.keys(err?.response?.data)[0]];
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: ERROR_MESSAGE,
                });
            })
    }

    return (
        <View style={styles.container}>
            <Navbar isActivePopup={isActivePopup} setIsActivePopup={setIsActivePopup}/>
            <Toast ref={(ref) => Toast.setRef(ref)}/>
            <ScrollView style={styles.localContainer}>
                <View style={{marginTop:13}}>
                    <TextInput value={name} onChangeText={(e) => setName(e)} style={styles.input} placeholderTextColor={'#7E7E7E'} placeholder={'نام زمین'}/>
                </View>
                <View>
                    <TextInput value={area} keyboardType={'number-pad'} onChangeText={(e) => setArea(e)} style={styles.input} placeholderTextColor={'#7E7E7E'} placeholder={'متراژ'}/>
                </View>

                <Text style={{color: '#2E6F73', fontSize: 20, fontFamily: 'bold', marginTop: 14}}>
                    موقعیت مکانی زمین
                </Text>
                <View style={{
                    width: '100%', marginTop: 8, alignItems: 'center',
                    justifyContent: 'center', overflow: 'hidden', borderRadius: 12
                }}>
                    <View style={{flex: 1, width: '100%', marginTop: 16, overflow: 'hidden', borderRadius: 16, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: '100%', height: 200}} resizeMode="contain" source={require('../../assets/images/Map.png')}/>
                    </View>
                </View>

                <View style={styles.btnSmsContainer}>
                    <TouchableNativeFeedback style={{borderRadius: 16}}>
                        <View style={styles.btnSms} onTouchEnd={() => confirmSmsHandler()}>
                            <Text style={styles.btnSmsText}>ایجاد</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        flex: 1,
        paddingVertical: StatusBar.currentHeight,
    },
    map: {
        width: "110%",
        height: 200,
        borderRadius: 12,
    },
    localContainer: {paddingHorizontal: 16},
    input: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderColor: '#E4E4E4',
        borderRadius: 16,
        borderWidth: 1,
        fontFamily: "bold",
        fontSize: 14,
        textAlign: 'right',
        marginBottom: 10
    },
    btnSmsContainer: {
        width: '50%',
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: '#CEE9EB',
        justifyContent: "center",
        borderRadius: 16,
        marginTop: 16,
        height: 47,
    },
    btnSms: {
        width: "100%",
        // marginTop: 8,
        height: '100%',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    btnSmsText: {
        color: Colors.primary,
        fontFamily: "bold",
        textAlign: 'center',
    },
})

