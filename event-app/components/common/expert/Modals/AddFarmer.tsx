import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  TextInput
} from "react-native"
import React, {useEffect, useState} from "react";
import Icon from "../../Icon";
import Colors from "../../../../constants/Colors";
import {axiosInstance} from "../../../../Utills/axios";

interface AddFarmer {
  active: any,
  setActive: any,
  refreshFarmerData:any
}


const transitionValue = new Animated.Value(0);


const startTransition = () => {
  Animated.timing(transitionValue, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  }).start();
};

const AddFarmer: React.FC<AddFarmer> = ({active, setActive,refreshFarmerData}) => {

  const BottomSheetAnimation = useState(new Animated.Value(0))[0];
  const [userName, setUserName] = useState<string>()
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()

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



  const createFarmer = async () => {
    if (userName?.length && lastName?.length && firstName?.length) {
        await axiosInstance.post('/api/expert/create_user/', {
          username:userName.trim(),
          last_name:lastName.trim(),
          first_name:firstName.trim()
        }).then(res => {
          setActive(false)
          setUserName('')
          setFirstName('')
          setLastName('')
          refreshFarmerData()
        }).catch(err => {
          console.log(err.response)
        })
    }
  }

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
              setUserName('')
              setLastName('')
              setFirstName('')
            }}>
              <Icon name={'X'}/>
            </View>
            <Text style={styles.headText}>افزودن کشاورز</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <View style={{
              backgroundColor: '#fff',
              marginHorizontal: 5,
              marginTop: 14,
              height: 50,
              borderRadius: 12,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#eee',
              position: 'relative'
            }}>
              <TextInput value={firstName} onChangeText={(e) => setFirstName(e)} placeholder={'نام'}
                         style={{textAlign: 'right', fontSize: 14, padding: 12, fontFamily: 'bold'}}
                         placeholderTextColor={'#7E7E7E'}/>
            </View>
            <View style={{
              backgroundColor: '#fff',
              marginHorizontal: 5,
              marginTop: 14,
              height: 50,
              borderRadius: 12,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#eee',
              position: 'relative'
            }}>
              <TextInput value={lastName} onChangeText={(e) => setLastName(e)} placeholder={'نام خانوادگی'}
                         style={{textAlign: 'right', fontSize: 14, padding: 12, fontFamily: 'bold'}}
                         placeholderTextColor={'#7E7E7E'}/>
            </View>
            <View style={{
              backgroundColor: '#fff',
              marginHorizontal: 5,
              marginTop: 14,
              height: 50,
              borderRadius: 12,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#eee',
              position: 'relative'
            }}>
              <TextInput value={userName} onChangeText={(e) => setUserName(e)} keyboardType={'number-pad'}
                         placeholder={'شماره تلفن'}
                         style={{textAlign: 'right', fontSize: 14, padding: 12, fontFamily: 'bold'}}
                         placeholderTextColor={'#7E7E7E'}/>
            </View>
            <View style={{
              marginVertical: 8,
              paddingHorizontal: 15,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <View onTouchEnd={() => {
                setActive(false)
                setUserName('')
                setLastName('')
                setFirstName('')
              }} style={{
                width: '50%',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                backgroundColor: '#E4E4E4'
              }}>
                <Text style={{color: '#4D4D4D', fontFamily: 'bold', fontSize: 16}}>لغو</Text>
              </View>
              <View onTouchEnd={createFarmer} style={{
                width: '50%',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                backgroundColor: '#2E6F73'
              }}>
                <Text style={{color: Colors.whiteColor, fontFamily: 'bold', fontSize: 16}}>ثبت</Text>
              </View>
            </View>
          </View>
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


export default AddFarmer