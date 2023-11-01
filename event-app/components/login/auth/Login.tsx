import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput } from "react-native";
import React from "react";
import { useEffect , useState } from 'react'
import Colors from "../../../constants/Colors";
import BottomSheet from "../../common/BottomSheet";
import Icon from "../../common/Icon";
import Swiper from "react-native-swiper";
import { OTPStyles } from "./OtpSms";
type WelcomeType = {
  visitedPage : boolean,
  setCurrentIndex : any

}
const Login : React.FC<WelcomeType> = ({ visitedPage , setCurrentIndex }) => {
  const [ loginStatus , setLoginStatus ] = useState(0);
  const [ swipersAutoPlay , setSwiperAutoPlay ] = useState(false);
  const [ phoneNumber , setPhoneNumber ] = useState(null);
  // useEffect(() => {
  //   setSwiperAutoPlay(true)
  //   setTimeout(() => {
  //     setSwiperAutoPlay(false);
  //   },1200)
  // },[loginStatus])

  const styles = StyleSheet.create({
    container: {
      
      width : '100%',
      height : '100%',
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    title: {
      color: "#FFF",
      fontFamily: "bold",
      fontSize: 24,
      // position : 'absolute',
      // top : '42%'
      // marginTop: 20,
    },
    originLogo: {
      // top : '15%',
      // position : 'absolute',
      width: 210,
      height: 210,
    },
    bigLogo: {
      position: "absolute",
      top: 5,
    },
  });
  console.log(loginStatus)
  return (
    <KeyboardAvoidingView behavior="height" >
    <View style={{
      ...styles.container,
      backgroundColor: !(loginStatus == 0) ? Colors.primary : 'white',
      }}>
      <Swiper autoplayTimeout={1}  index={1}  showsPagination={false}>
          <View style={{  width : '100%' , height : '100%' , alignItems : 'center' ,
          justifyContent : 'center' , position : 'absolute' }}>
            <Icon name="backLogo" style={styles.bigLogo} />
            <Icon name="originLogo" style={styles.originLogo} />
            <Text style={styles.title}>سوپر اپلیکیشن سبا</Text>
          </View>
          <View style={{  width : '100%' , height : '100%' , alignItems : 'center' ,
          justifyContent : 'center' , position : 'absolute' , backgroundColor : 'white' }}>
            <Icon name="otpBigLogo" style={OTPStyles.bigLogo} />
            <Icon name="otpLogo" style={OTPStyles.originLogo} />
            <Text style={OTPStyles.title}>سوپر اپلیکیشن سبا</Text>
          </View>
      </Swiper>
     
      
      {/* <TextInput placeholder="dfghfdshsdfh"  /> */}
      <Swiper autoplayTimeout={1} autoplay={false} index={1}  showsPagination={false}>
        <View style={{ width : '100%' , height : '100%' }}>
          <BottomSheet
          setCurrentIndex={setCurrentIndex}
          isSmsPage={false}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setLoginStatus={setLoginStatus}
          title=" ورود / ثبت نام"
          subTitle="لطفا برای استفاده از اپلیکیشن سبا ورود کنید"
        />
        </View>
        <View style={{ width : '100%' , height : '100%' , borderTopLeftRadius : 32 , borderTopRightRadius : 32 }}>
          <BottomSheet isSmsPage={true} setCurrentIndex={setCurrentIndex}
          setLoginStatus={setLoginStatus}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          title="تایید شماره"  subTitle="لطفا کد ارسال شده به شماره" 
          subTitleColor={'#E4E4E4'} color={Colors.primary} titleColor={Colors.whiteColor}/>
        </View>
        
      </Swiper>
       
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

