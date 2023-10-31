import { useEffect, useRef, useState } from "react";
import { Animated , View , Easing , StyleSheet , Text } from 'react-native'
import Loading from "../components/login/Loading";
import Welcome from "../components/login/Welcome";
import Swiper from 'react-native-swiper'
import Welcome2 from "../components/login/Welcone2";
import Login from "../components/login/auth/Login";
import OtpSms from "../components/login/auth/OtpSms";
import { PaginatioinComponent } from "../components/common/pagination";

const HomePage  = () => {
  const [homePageState, setHomePageState] = useState("InitialLoading");
  const boxRotation = useRef(new Animated.Value(0)).current;
  const indexAnimation = new Animated.Value(1);
  const welcomeAnimation = new Animated.Value(0);
  const [ initialSwierActiveState , setInitialSwiperActiveState ] = useState(true)
  useEffect(() => {
    // Use a setTimeout to change the state after 400ms
    setTimeout(() => {
      setInitialSwiperActiveState(false)
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
    console.log(e,state,context )
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

  console.log(boxRotation)
  return (
   
    <View style={{ width : '100%' , height : '100%' }}>
      <Swiper autoplay={initialSwierActiveState} horizontal={false} scrollEnabled={false} showsPagination={false}>
          <Loading />
          <View style={{ width : '100%' , height : '100%'  }}>
            <Swiper  loop={false} 
              // onScroll={onScroll}
              renderPagination={(index, total) => {
              return <PaginatioinComponent CurPage={index} />
              }}>
                  <Welcome />
                  <Welcome2 />
                  <Login />
                  <OtpSms />
            </Swiper>
          </View>
      </Swiper>
      {/* { homePageState === "InitialLoading"  && !animateStartedState && 
       <Loading />} 

     { animateStartedState && <Animated.View
        style={{
          transform: [
            {
              translateY: welcomeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -1000],
              }),
            },
          ],
        }}>
          <Loading />
      </Animated.View>} */}
      
        
      {/* { homePageState === "WelcomeState" && <Animated.View
        style={{
          transform: [
            {
              translateY: indexAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1000],
              }),
            },
          ],
        }}>
          <View style={{ width : '100%' , height : '100%'  }}>
            <Swiper  loop={false} 
              // onScroll={onScroll}
              renderPagination={(index, total) => {
              return <PaginatioinComponent CurPage={index} />
              }}>
                  <Welcome />
                  <Welcome2 />
                  <Login />
                  <OtpSms />
            </Swiper>
          </View>
    </Animated.View>} */}
  </View>
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