import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  TextInput, ActivityIndicator
} from "react-native"
import React, {useEffect, useState} from "react";
import Icon from "../../Icon";
import Colors from "../../../../constants/Colors";
import {axiosInstance} from "../../../../Utills/axios";

interface AddFarmer {
  active: any,
  setActive: any,
  refreshFarmerData?: any,
  activeId: any,
  data?:any,
  loading?:any
}


const transitionValue = new Animated.Value(0);


const startTransition = () => {
  Animated.timing(transitionValue, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  }).start();
};

const ReqPopup: React.FC<AddFarmer> = ({active, setActive, refreshFarmerData, data,loading}) => {
  return (
    <View style={{
      position: 'absolute',
      flex: 1,
      top: active ? 0 : 100000000,
      left: 0,
      zIndex: 9999999,
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',

      justifyContent: 'flex-end'
    }}>
      <View style={styles.bottomSheet}>
        <ScrollView>
          <View style={styles.head}>
            <View onTouchEnd={() => {
              setActive(false)
            }}>
              <Icon name={'X'}/>
            </View>
            <Text style={styles.headText}>مشاهده درخواست</Text>
          </View>
          {loading ? ('') : (<View style={{marginBottom: 6, paddingHorizontal: 16, paddingTop: 16}}>
            <View style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 16
            }}>
              <View style={{
                width: '50%',
                height: 102,
                borderRadius: 12,
                borderStyle: 'solid',
                borderColor: '#eee',
                borderWidth: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{color: '#7E7E7E', fontFamily: 'regular', fontSize: 16}}>وضعیت</Text>
                <Text style={{color: '#1C5459', fontFamily: 'bold', fontSize: 24}}>درحال انجام</Text>
              </View>
              <View style={{
                width: '50%',
                height: 102,
                borderRadius: 12,
                borderStyle: 'solid',
                borderColor: '#eee',
                borderWidth: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{color: '#7E7E7E', fontFamily: 'regular', fontSize: 16}}>تعداد کارگر</Text>
                <Text style={{color: '#1C5459', fontFamily: 'bold', fontSize: 24}}>{data?.worker_count_needed}</Text>
              </View>

            </View>
            <View></View>
          </View>)}
          {loading ? (  <View  style={{flex: 1,marginTop:30, alignItems: 'center', justifyContent: 'center',height:'100%'}}>
          <ActivityIndicator color={Colors.primary} size={50}/>
        </View>) : (<View style={{marginBottom: 10, paddingHorizontal: 16, paddingVertical: 6}}>
            <View style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 16
            }}>
              <View style={{
                width: '50%',
                height: 102,
                borderRadius: 12,
                borderStyle: 'solid',
                borderColor: '#eee',
                borderWidth: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{color: '#7E7E7E', fontFamily: 'regular', fontSize: 16}}>تاریخ انجام</Text>
                <Text style={{color: '#1C5459', fontFamily: 'bold', fontSize: 24}}>۱۴۰۲/۴/۵</Text>
              </View>
              <View style={{
                width: '50%',
                height: 102,
                borderRadius: 12,
                borderStyle: 'solid',
                borderColor: '#eee',
                borderWidth: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{color: '#7E7E7E', fontFamily: 'regular', fontSize: 16}}>تاریخ درخواست</Text>
                <Text style={{color: '#1C5459', fontFamily: 'bold', fontSize: 24}}>۱۴۰۲/۴/۳
                  ۲۰:۳۰</Text>
              </View>
            </View>
            <View></View>
          </View>)}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    top: 100000000,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  bottomSheet: {
    width: '100%',
    height: '37%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  Y: {
    width: '100%',
    height: '100%',
    zIndex: 666,
    position: 'absolute',
    top: -555,
    // top: 350,
  },
  itemContainer: {
    width: '93%',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    gap: 10,
    overflow: 'scroll'
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
    marginBottom: 30,
    marginTop: 10,
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
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#eee',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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


export default ReqPopup