import { View,Text,StyleSheet,Animated, ScrollView, Image, TouchableNativeFeedback, Dimensions } from "react-native"
import Colors from "../../constants/Colors";
import Icon from "./Icon";
import { useEffect, useState } from "react";

interface HelpBottomSheet {
    active:any,
    setActive:any,
}


const transitionValue = new Animated.Value(0);


const startTransition = () => {
    Animated.timing(transitionValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

const HelpBottomSheet: React.FC<HelpBottomSheet> = ({active,setActive}) => {

    const BottomSheetAnimation = useState(new Animated.Value(0))[0];
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen').height;

 
    useEffect(() => {
        if (active) {
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
        }
        // openPopup()
    }, [active]);

    return (
        <View style={{position:'absolute',
        flex:1,
        top:active ? 0 : 100000000,
        left:0,
        zIndex:9999999,
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        height:'100%',
        
        justifyContent:'flex-end'}}>
            <View style={styles.bottomSheet}>
            <ScrollView>
                    <View style={styles.head}>
                        <View onTouchEnd={() => setActive(false)}>
                            <Icon name={'X'}/>
                        </View>
                        <Text style={styles.headText}>راهنما</Text>
                    </View>
                    <Image source={require('./../../assets/images/hepl.png')}/>
                    <Text style={styles.title}>آموزش متنی :</Text>
                    <Text style={styles.caption}>افزودن زمین :
برای ایجاد زمین باید از صفحه خانه اقدام فرمایید، در بالای این صفحه روی عبارت "ایجاد زمین" بزنید و پس از آن اطلاعات زمین خود را تکمیل کنید.
افزودن محصول:
برای افزودن محصول روی تصویر سیب در منو پایین اپلیکیشن بزنید ، سپس روی دکمه "ایجاد محصول " بزنید و مشخصات محصول خود را وارد کنید. همچنین با استفاده از دکمه فیلتر میتوانید راحتتر محصول مرد نظر خود را بیابید.

پیشنهادات سامانه :
در راستای پیشرفت هرچه بهتر صنعت کشاورزی ایران سازمان بذرینو با ارائه پیشنهاداتی به کشاورزان سعی دارد تا  فرهنگ کشاورزی نوین و صرفه جویی درمنابع و توسعه پایدار را به ارمغان بیاورد.
برای مشاهده این پیشنهادات ابتدا از صفحه اصلی روی زمین موردنظر خود بزنید ، سپس وارد صفحه جزئیات زمین مورد نظر میشوید و میتوانید در پخش پیشنهادات سامانه ، پیشنهادات کارشناسان ما را ببینید .در صورت پیروی از پیشنهادات سامانه ، سود بیشتری درهنگام معامله دریافت میکنید.
مدیریت محصولات :
با زدن روی تصویر سیب در منو پایین اپلیکیشن وارد صفحه لیست محصولات میشوید. با انتخاب یک محصول وارد صفحه جزئیات محصول میشوید و میتوانید اطلاعات آماری این محصول کشاورزی از نظر عرضه و تقضا ببینید.

ویدیو های آموزشی سامانه :
از منو پایین اپلیکیشن روی اولین آیکن از سمت راست بزنید تا وارد صفحه ویدئو های آموزشی شوید. در این بخش شما میتوانید آموزش های متنوعی در زمینه کشاورزی و باغداری و پرورش بهتر محصولات را دریافت کنید.</Text>
                    <View style={styles.btnContainer}>
                        <TouchableNativeFeedback style={{borderRadius: 10}}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>دانلود فایل PDF</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    {/* <View style={{position:'fixed',top:0,left:0,right:0,bottom:0,backgroundColor:'red',zIndex:99,width:'100%',height:'100%'}}>
                        <Text>sadasd</Text>
                    </View> */}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop:{
position:'absolute',
flex:1,
top:100000000,
left:0,
backgroundColor:'rgba(0,0,0,0.5)',
width:'100%',
height:'100%',
justifyContent:'flex-end'
    },
    bottomSheet:{
        width:'100%',
        height:'90%',
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:15,
        paddingTop:10,
    },
    Y: {
        width: '100%',
        height: '100%',
        zIndex: 666,
        position: 'absolute',
        top : -555,
        // top: 350,
    },
    itemContainer: {
        width: '93%',
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        gap: 10,
        overflow : 'scroll'
    },
    title: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: 'bold',

    },
    caption: {
        color: Colors.textColorDark,
        fontFamily: 'bold',
        lineHeight: 27,
        fontSize: 16,
        lineHeight: 30,
    },
    btnContainer: {
        marginBottom:30,
        marginTop:10,
        width: '100%',
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,

    },
    btn: {
        backgroundColor: Colors.primary,
        // marginBottom: 50,
        borderRadius: 10,
        paddingVertical: 16,
        width: '100%',
    },
    btnText: {
        textAlign: 'center',
        color: Colors.whiteColor,
        fontSize: 16,
        fontFamily: 'bold'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        paddingTop : 16
    },
    headText: {
        color: Colors.primary,
        fontFamily: 'bold',
        fontSize: 20,
    },
    circle: {
        position: "absolute",
        bottom: 76,
        right: 0,
        zIndex: -1,
    },
})


export default HelpBottomSheet