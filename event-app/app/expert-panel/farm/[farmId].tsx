import {SafeAreaView, ScrollView, StyleSheet, StatusBar, Text, TextInput, View, TouchableOpacity} from "react-native";
import Navbar from "../../../components/common/Navbar";
import Icon from "../../../components/common/Icon";
import HelpBottomSheet from "../../../components/common/HelpBottomSheet";
import React, {useEffect, useState} from "react";
import {Image} from "expo-image";
import Colors from "../../../constants/Colors";
import {useRoute} from "@react-navigation/native";
import {axiosInstance} from "../../../Utills/axios";
import {useRouter} from "expo-router";

const FarmId = () => {
  const route = useRoute()
  const router = useRouter()

  const [isActivePopup, setIsActivePopup] = useState(false);
  const [farmerData, setFarmer] = useState<any>([])
  const getData = () => {
    axiosInstance.get(`api/expert/farms/?user_id=${route.params?.farmId}`).then(res => {
      setFarmer(res?.data?.results)
      console.log()
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <View style={{width: '100%', height: '100%', flex: 1,marginBottom:16}}>
      <SafeAreaView style={{width: '100%', paddingTop: StatusBar.currentHeight, height: '100%', flex: 1}}>
        <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
        <ScrollView style={{paddingHorizontal: 16,}}>
          <TouchableOpacity style={{
            height: 40,
            backgroundColor: '#F7DBD6',
            width: 86,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            gap: 10,
            flexDirection: 'row'
          }}>
            <Icon style={{width: 20, height: 20}} name={'redTrash'}/>
            <Text style={{color: '#A45D52', fontSize: 16, fontFamily: 'bold'}}>حذف</Text>
          </TouchableOpacity>
          <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
            marginTop: 16
          }}>
            <TouchableOpacity>
              <Icon style={{width: 30, height: 30}} name={'editOrg'}/>
            </TouchableOpacity>
            <Text style={{color: '#A8A8A8', fontFamily: 'bold', fontSize: 16}}>اطلاعات اولیه زمین</Text>
          </View>
          <View style={{
            width: '100%',
            height: "auto",
            backgroundColor: '#fff',
            borderColor: '#eee',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 16,
            padding: 16,
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: 16
          }}>
            <Text style={{textAlign: 'right', color: '#A8A8A8', fontFamily: 'bold', fontSize: 16}}>نام زمین</Text>
            <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 24}}>نام پروژه</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8}}>
            <View style={{
              width: '50%',
              height: "auto",
              backgroundColor: '#fff',
              borderColor: '#eee',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 16,
              padding: 16,
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: 8
            }}>
              <Text style={{textAlign: 'right', color: '#A8A8A8', fontFamily: 'bold', fontSize: 16}}>کشاورز</Text>
              <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 24}}>امید مددی</Text>
            </View>
            <View style={{
              width: '50%',
              height: "auto",
              backgroundColor: '#fff',
              borderColor: '#eee',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 16,
              padding: 16,
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: 8
            }}>
              <Text style={{textAlign: 'right', color: '#A8A8A8', fontFamily: 'bold', fontSize: 16}}>متراژ</Text>
              <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 24}}>۲۳۰ هکتار</Text>
            </View>
          </View>
          <Text style={{color: Colors.primary, fontFamily: 'bold', fontSize: 20, marginTop: 16}}>مقعیت مکانی زمین</Text>
          <Image style={{width: '100%', height: 200}} resizeMode="contain"
                 source={require('../../../assets/images/Map.png')}/>

          <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: 16,
            borderWidth: 1,
            borderRadius: 16,
            borderColor: '#eee',
            backgroundColor: '#fff',
            flexDirection: 'row'
          }}>
            <View style={{transform: [{rotate: '90deg'}]}}>
              <Icon name={'arrowIconDown'} style={{width: 25, height: 25, rotate: 90}}/>
            </View>
            <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 20}}>درخواست ها (۳)</Text>
          </View>
          <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: 16,
            borderWidth: 1,
            borderRadius: 16,
            borderColor: '#eee',
            backgroundColor: '#fff',
            flexDirection: 'row',
            marginTop: 8
          }}>
            <View onTouchEnd={() => router.push('/expert-panel/statistics')} style={{transform: [{rotate: '90deg'}]}}>
              <Icon name={'arrowIconDown'} style={{width: 25, height: 25, rotate: 90}}/>
            </View>
            <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 20}}>آمار</Text>
          </View>
          <View style={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <View style={{
              width: 48,
              height: 48,
              backgroundColor: '#fff',
              borderColor: '#eee',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{fontFamily: 'bold', fontSize: 30, color: Colors.primary}}>+</Text>
            </View>
            <Text style={{marginTop:10,color: Colors.primary, fontFamily: 'bold', fontSize: 20}}>پیشنهادات</Text>
          </View>
          <View style={{
            width: '100%',
            height: "auto",
            backgroundColor: '#fff',
            borderColor: '#eee',
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 16,
            padding: 16,
            marginTop:16,
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
            <Text style={{textAlign: 'right', color: '#333', fontFamily: 'regular', fontSize: 16}}>این محصول تو سال اینده افزایش تقاضا دارد و در زمین های فراهان , لاریجان شما قابل کاشت و بهره بری مناسب است</Text>
            <Text style={{color:Colors.primary,fontFamily:'bold',fontSize:16,marginTop:10}}>مشاهده آموزش</Text>
          </View>
          <View style={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <View style={{
              width: 48,
              height: 48,
              backgroundColor: '#fff',
              borderColor: '#eee',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{fontFamily: 'bold', fontSize: 30, color: Colors.primary}}>+</Text>
            </View>
            <Text style={{marginTop:10,color: Colors.primary, fontFamily: 'bold', fontSize: 20}}>محصولات</Text>
          </View>
        </ScrollView>
        <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup}/>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  filterIcon: {
    backgroundColor: "#E5E5CD",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    height: 45,
    width: 48,
    marginTop: 18
  },
})

export default FarmId