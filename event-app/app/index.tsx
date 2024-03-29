import { useEffect, useRef, useState } from "react";
import { Animated , View , Easing , StyleSheet , Text, Dimensions , KeyboardAvoidingView , SafeAreaView } from 'react-native'
import Loading from "../components/login/Loading";
import Welcome from "../components/login/Welcome";
import Swiper from 'react-native-swiper'
import Welcome2 from "../components/login/Welcone2";
import Login from "../components/login/auth/Login";
import OtpSms from "../components/login/auth/OtpSms";
import { I18nManager } from 'react-native';
import { PaginatioinComponent } from "../components/common/pagination";
import Toast from "react-native-toast-message";
import HelpBottomSheet from "../components/common/HelpBottomSheet";
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
I18nManager.isRTL = false

const HomePage  = () => {
  const [homePageState, setHomePageState] = useState("InitialLoading");
  const boxRotation = useRef(new Animated.Value(0)).current;
  const indexAnimation = new Animated.Value(1);
  const welcomeAnimation = new Animated.Value(0);
  const [ SliderSwipable , setSliderSwipable ] = useState(true);
  // let currentIndex = useRef(0).current;
  const [ currentIndex , setCurrentIndex ] = useState(0)
  const [ padingEnableState , setPagingEnableState ] = useState(true)
  const [ initialSwierActiveState , setInitialSwiperActiveState ] = useState(true);
  const [isActivePopup,setIsActivePopup] = useState(false)
  useEffect(() => {
    // Use a setTimeout to change the state after 400ms
    setTimeout(() => {
      setInitialSwiperActiveState(false);
      setPagingEnableState(false)
    },2500)
  }, []);

  const slideInAnimation = () => {
    Animated.timing(indexAnimation, {
      toValue: 0,
      duration: 1200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const onTouchMove = (e : any, state : any, context : any) => {

    return
    const screenWidth = context.size.width;
    const rotation = (state.x / screenWidth) * 360; // Adjust the factor for the desired rotation effect

    Animated.timing(boxRotation, {
      toValue: rotation,
      duration: 0, // Instantly update the rotation
      useNativeDriver: false,
    }).start();
  };
  // Start the animation when the component mounts
  useEffect(() => {
    slideInAnimation();
  }, [homePageState]);

  return (
    <>
      <View style={{ width : '100%' , height : '100%' }}>
          <Swiper
          style={{ height : initialSwierActiveState ? 'auto' : '100%'}}
          automaticallyAdjustContentInsets={true}

          index={initialSwierActiveState ? 0 : 1}
          // index={0}
          // keyboardShouldPersistTaps='always'
          autoplay={initialSwierActiveState}
          pagingEnabled={padingEnableState}
          horizontal={false}
          scrollEnabled={false}
          showsPagination={false}>
              <Loading />
              <View style={{ width : '100%' , height : '100%'  }}>

                <Swiper scrollEnabled={SliderSwipable} index={currentIndex}  bounces={true} loop={false}
                  onIndexChanged={(index) => {
                    setCurrentIndex(index);
                    // currentIndex = index;
                  }}
                  keyboardShouldPersistTaps='handled'
                  // renderPagination={(index, total) => {
                  // return
                  // }}
                  style={{ direction : "ltr" }}
                  showsPagination={false}>

                      <Welcome  />
                      <Welcome2 visitedPage={currentIndex === 1} />
                      <Login visitedPage={currentIndex === 2} setSliderSwipable={setSliderSwipable}
                      setCurrentIndex={setCurrentIndex} />
                </Swiper>
                <HelpBottomSheet  active={isActivePopup} setActive={setIsActivePopup}/>
              </View>
          </Swiper>
    </View>
    { !initialSwierActiveState &&
        <PaginatioinComponent CurPage={currentIndex} otpBackground={SliderSwipable == false} />}
    </>

  );
};
export default HomePage;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})