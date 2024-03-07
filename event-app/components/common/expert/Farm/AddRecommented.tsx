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
import {any} from "prop-types";

interface AddFarmer {
  active: any,
  setActive: any,
  refreshFarmerData?: any,
  routeId?: any
}


const transitionValue = new Animated.Value(0);


const startTransition = () => {
  Animated.timing(transitionValue, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,

  }).start();
};

const AddRecommented: React.FC<AddFarmer> = ({active, setActive, refreshFarmerData, routeId}) => {

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [tutorial_link, setTutorial_link] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const BottomSheetAnimation = useState(new Animated.Value(0))[0];

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

  const ceateRechandler = () => {
    setLoading(true)
    axiosInstance.post('api/farm/recommendations/', {
      product: routeId,
      title: title?.trim(),
      tutorial_link: tutorial_link?.trim(),
      description: description?.trim()
    }).then(res => {
      setActive(false)
      refreshFarmerData()
      setLoading(false)
    }).catch(err => {
      const ERROR_MESSAGE =
        err.response?.data[Object.keys(err?.response?.data)[0]][0]
      Toast.show({
        type: 'error',
        position: 'top',
        text1: ERROR_MESSAGE,
      });
      setLoading(false)
    })
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
            }}>
              <Icon name={'X'}/>
            </View>
            <Text style={styles.headText}>افزودن پیشنهاد</Text>
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
              <TextInput value={title} onChangeText={(e) => setTitle(e)} placeholder={'موضوع'}
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
              <TextInput value={description} onChangeText={(e) => setDescription(e)} placeholder={'توضیحات پیشنهاد'}
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
              <TextInput value={tutorial_link} onChangeText={(e) => setTutorial_link(e)} placeholder={'لینک آموزش'}
                         style={{textAlign: 'right', fontSize: 14, padding: 12, fontFamily: 'bold'}}
                         placeholderTextColor={'#7E7E7E'}/>
            </View>
            <View style={styles.btnSmsContainer}>
              <TouchableNativeFeedback onPress={ceateRechandler} style={{borderRadius: 16}}>
                <View style={styles.btnSms}>
                  <Text style={styles.btnSmsText}>
                    {loading ? 'در حال ایجاد' : 'ایجاد'}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{width: 10, height: 100, left: 185, position: 'absolute', top: 30, zIndex: 111}}>
        <Toast ref={(ref) => Toast.setRef(ref)}/>
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
  textAreaContainer: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  bottomSheet: {
    width: '100%',
    height: '38%',
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


export default AddRecommented