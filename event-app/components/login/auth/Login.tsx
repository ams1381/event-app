import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput } from "react-native";
import React, { useRef } from "react";
import { useEffect , useState } from 'react'
import Colors from "../../../constants/Colors";
import BottomSheet from "../../common/BottomSheet";
import Icon from "../../common/Icon";
import Swiper from "react-native-swiper";
import { OTPStyles } from "./OtpSms";
import Toast from "react-native-toast-message";
type WelcomeType = {
  visitedPage : boolean,
  setCurrentIndex : any
  setSliderSwipable : any
}
const Login : React.FC<WelcomeType> = ({ visitedPage , setCurrentIndex , setSliderSwipable }) => {
  const [ loginStatus , setLoginStatus ] = useState(0);
  const [ swipersAutoPlay , setSwiperAutoPlay ] = useState(false);
  const [ phoneNumber , setPhoneNumber ] = useState(null);

  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  useEffect(() => {
      if(swiper1Ref.current && swiper2Ref.current){
        swiper1Ref.current.scrollBy(Math.abs(swiper1Ref.current.state.index - loginStatus),true)
        swiper2Ref.current.scrollBy(Math.abs(swiper2Ref.current.state.index - loginStatus),true)
      }
  },[loginStatus])
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
  return (
    <KeyboardAvoidingView behavior="height" >
      
    <View style={{
      ...styles.container,
      backgroundColor: (loginStatus == 0) ? Colors.primary : 'white',
      }}>
        <View style={{ width : 200 , height : 100 , position : 'absolute' , top : 30 , zIndex : 111 }}>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      {/* <Swiper autoplayTimeout={1}
       ref={swiper1Ref}
       scrollEnabled={false}
        showsPagination={false}> */}
      <Swiper autoplayTimeout={1}
       ref={swiper1Ref}
       scrollEnabled={false}
        showsPagination={false}>
          <View style={{  width : '100%' , height : '100%' , alignItems : 'center' ,
          justifyContent : 'center' , position : 'absolute' }}>
          
            <Icon name="backLogo" style={styles.bigLogo} />
            <Icon name="originLogo" style={styles.originLogo} />
            <Text style={styles.title}>سوپر اپلیکیشن بذرینو</Text>
          </View>
          <View style={{  width : '100%' , height : '100%' , alignItems : 'center' ,
          justifyContent : 'center' , position : 'absolute' , backgroundColor : 'white' }}>
            <Icon name="otpBigLogo" style={OTPStyles.bigLogo} />
            <Icon name="otpLogo" style={OTPStyles.originLogo} />
            <Text style={OTPStyles.title}>سوپر اپلیکیشن بذرینو</Text>
          </View>
      </Swiper>

      {/* <Swiper autoplayTimeout={1} scrollEnabled={false} ref={swiper2Ref} autoplay={false}  showsPagination={false}> */}
      {/* <TextInput placeholder="dfghfdshsdfh"  /> */}
      <Swiper autoplayTimeout={1} scrollEnabled={false} ref={swiper2Ref} autoplay={false}  showsPagination={false}>
        <View style={{ width : '100%' , height : '100%' }}>
          <BottomSheet
          setCurrentIndex={setCurrentIndex}
          isSmsPage={false}
          setSliderSwipable={setSliderSwipable}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setLoginStatus={setLoginStatus}
          title=" ورود / ثبت نام"
          subTitle="لطفا برای استفاده از اپلیکیشن بذرینو ورود کنید"
        />
        </View>
        <View style={{ width : '100%' , height : '100%' , borderTopLeftRadius : 32 , borderTopRightRadius : 32 }}>
          <BottomSheet isSmsPage={true} setCurrentIndex={setCurrentIndex}
          setLoginStatus={setLoginStatus}
          phoneNumber={phoneNumber}
          setSliderSwipable={setSliderSwipable}
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

