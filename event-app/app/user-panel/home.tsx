import {View, Text, StyleSheet, SafeAreaView, StatusBar, Button, TouchableNativeFeedback , Animated} from "react-native";
import Icon from "../../components/common/Icon";
import React, {useState , useEffect} from "react";
import Colors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import InfoBottomSheet from "../../components/common/InfoBottomSheet";
import Navbar from "../../components/common/Navbar";
import { useRouter } from "expo-router";


export default function Home() {
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
    const router = useRouter();
    const HomeGuiedAnimation = useState(new Animated.Value(0))[0];
    useEffect(() => {   
        Animated.timing(HomeGuiedAnimation,{
            toValue : 1,
            duration : 800,
            useNativeDriver : false
        }).start();
        setTimeout(() => {
            CloseGuideNavbar()
        },4000)
    },[])
    const CloseGuideNavbar = () => {
        Animated.timing(HomeGuiedAnimation,{
            toValue : 0,
            duration : 800,
            useNativeDriver : false
        }).start();
    }
    return (
       <>
       <StatusBar />
       <SafeAreaView style={styles.container}>
            <Animated.View style={{ 
                position : 'absolute' , 
                top : StatusBar.currentHeight , 
                zIndex : 4 ,
                backgroundColor : 'white',
                paddingTop : 5,
                paddingBottom : 5,
                paddingRight : 30 ,
                borderBottomEndRadius : 32,
                left : 0 , 
                // width : 200 , 
                transform : [{
                    translateX : HomeGuiedAnimation.interpolate({
                        inputRange : [0 , 1] ,
                        outputRange : [ -1000 , 0 ]
                    })
                }]
                }}>
                <Text style={{ color : Colors.GuideTextColor  , fontFamily : 'bold' }}>هروقت آموزشا رو خواستی</Text>
                <Icon name="RightArrow" />
                <Text style={{ color : Colors.GuideTextColor , marginTop : -5 ,fontFamily : 'bold' }}>میتونی ازینجا پیداشون کنی</Text>
            </Animated.View>
            <Navbar isActivePopup={isActivePopup} setIsActivePopup={setIsActivePopup}/>
            {/* <BlurView  intensity={100}> */}
                <LinearGradient onTouchEnd={() => setIsActivePopup(false)} style={{
                    width : '100%', height : '150%' , position : 'absolute' , bottom : 0 , zIndex : 0 }} 
                    colors={['#85c2c678', '#539fa4']} />
            {/* </BlurView> */}
             

            <View onTouchEnd={() => setIsActivePopup(!isActivePopup)} style={{ position : 'absolute', 
            top : StatusBar.currentHeight , 
            right : 0 , 
            width : 74 , 
            height : 74 , 
            backgroundColor : 'white' , 
            alignItems : 'center',
            justifyContent : 'center',
            borderBottomLeftRadius : 31 }}>
                <Icon  name={'info'}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={{textAlign: 'center', color: Colors.primary, fontFamily: 'bold', fontSize: 20}}>اموزش استفاده از این اپلیکیشن</Text>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, fontFamily: 'regular'}}>برای مشاهده اموزش های مربوط به این اپلیکیشن میتوانید از دکمه کنار صفحه یا دکمه زیر استفاده کنید</Text>
                <View style={styles.btnContainer}>
                    <TouchableNativeFeedback style={{borderRadius: 10}}>
                        <View style={styles.btn} onTouchEnd={() => router.push('/user-panel/profile')}>
                            <Text style={styles.btnText}>مشاهده</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        
            
            {/* <Icon name={'shapeGradiant'} style={styles.shapeGradiant}/> */}
            {/* <View style={styles.info} onTouchEnd={() => {
                setIsActivePopup(!isActivePopup)
            }}>
                <Icon name={'info'}/>
            </View> */}
            <Icon name={'homeShape'} style={styles.shape}/>
            <View>
                <InfoBottomSheet toUp={550} bottomSheetOpen={isActivePopup} isActivePopup={isActivePopup} setIsActivePopup={setIsActivePopup}/>
            </View>
            
        </SafeAreaView>
       </>
        
       
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#eee',
        paddingVertical: StatusBar.currentHeight,
        height : '100%',
        position : 'relative'
        // paddingHorizontal: 62,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textContainer: {
        paddingHorizontal: 62,
        marginTop: 163,
        gap: 10,
        zIndex: 44,
        position : 'relative'
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
        top: -6
    },
    info: {
        position: 'absolute',
        top: 52,
        right: 15,
    },
})

