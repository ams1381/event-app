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
import Toast from "react-native-toast-message";

interface AddFarmer {
  active: any,
  setActive: any,
  refreshFarmerData?: any
}


const transitionValue = new Animated.Value(0);


const startTransition = () => {
  Animated.timing(transitionValue, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  }).start();
};

const AddFarm: React.FC<AddFarmer> = ({active, setActive, refreshFarmerData}) => {

  const [name, setName] = useState<string>()
  const [area, setArea] = useState<string>()
  const [loading, setLoading] = useState(false)

  const BottomSheetAnimation = useState(new Animated.Value(0))[0];
  const confirmSmsHandler = () => {
    if (name?.length && area?.length)
      setLoading(true)
    axiosInstance.post('/api/farm/farms/', {
      name: name?.trim(),
      area: area,
      location: {
        "latitude": 0,
        "longitude": 0
      },
    }).then(res => {
      setLoading(false)

      console.log(res)
      if (res.status === 201) {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'با موفقیت ایجاد شد.',
        });
        setArea('')
        setName('')
        setActive(false)
      }
    }).catch(err => {
      setLoading(false)
      console.log(err)
      const ERROR_MESSAGE =
        err?.response?.data[Object.keys(err?.response?.data)[0]];
      Toast.show({
        type: 'error',
        position: 'top',
        text1: ERROR_MESSAGE,
      });
    })
  }

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
            <Text style={styles.headText}> افزودن زمین</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <View style={{paddingHorizontal: 16, marginTop: 16}}>
              <TextInput value={name} onChangeText={(e) => setName(e)} style={styles.input}
                         placeholderTextColor={'#7E7E7E'} placeholder={'نام زمین'}/>
            </View>
            <View style={{paddingHorizontal: 16}}>
              <TextInput value={area} keyboardType={'number-pad'} onChangeText={(e) => setArea(e)} style={styles.input}
                         placeholderTextColor={'#7E7E7E'} placeholder={'متراژ'}/>
            </View>

            <Text style={{color: '#2E6F73', paddingHorizontal: 16, fontSize: 20, fontFamily: 'bold', marginTop: 14}}>
              موقعیت مکانی زمین
            </Text>
            <View style={{
              width: '100%', marginTop: 8, alignItems: 'center',
              justifyContent: 'center', overflow: 'hidden', borderRadius: 12, paddingHorizontal: 16
            }}>
              <Image style={{width: '100%', height: 200}} resizeMode="contain"
                     source={require('../../../../assets/images/Map.png')}/>
            </View>

            <View style={styles.btnSmsContainer}>
              <TouchableNativeFeedback style={{borderRadius: 16}}>
                <View style={styles.btnSms} onTouchEnd={() => confirmSmsHandler()}>
                  <Text style={styles.btnSmsText}>
                    {loading ? 'در حال ایجاد' : 'ایجاد'}
                  </Text>
                </View>
              </TouchableNativeFeedback>
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
    height: '63%',
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
    marginHorizontal: 16,
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


export default AddFarm