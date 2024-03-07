import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Linking, ActivityIndicator
} from "react-native";
import Navbar from "../../../components/common/Navbar";
import Icon from "../../../components/common/Icon";
import HelpBottomSheet from "../../../components/common/HelpBottomSheet";
import React, {useEffect, useState} from "react";
import {Image} from "expo-image";
import Colors from "../../../constants/Colors";
import {useRoute} from "@react-navigation/native";
import {axiosInstance} from "../../../Utills/axios";
import {useRouter} from "expo-router";
import ProductItem from "../../../components/product/productItem";
import AddRecommented from "../../../components/common/expert/Farm/AddRecommented";
import AddProduct from "../../../components/popup/Product/AddProduct";
import EditFarm from "../../../components/common/expert/Modals/EditFarm";

const FarmId = () => {
  const route = useRoute()
  const router = useRouter()

  const [isActivePopup, setIsActivePopup] = useState(false);
  const [farmerData, setFarmer] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const getData = () => {
    // api/expert/farms/single_farm/?farm_id=140
    setLoading(true)
    axiosInstance.get(`api/expert/farms/single_farm/?farm_id=${route?.params?.farmId}`).then(res => {
      setFarmer(res?.data)
      setLoading(false)
    }).catch(error => {
      console.log(error)
      setLoading(false)
    })
  }

  useEffect(() => {
    getData()
  }, []);

  const [addRecOpen, setAddRecOpen] = useState(false)

  const [regs, setRegs] = useState<any>([])
  const getRecs = () => {
    axiosInstance.get('api/farm/recommendations/').then(res => {
      setRegs(res?.data?.results)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getRecs()
  }, [])

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const getProduct = () => {
    axiosInstance
      .get(`api/expert/farms/${route?.params?.farmId}/products/`)
      .then((res) => {
        setData(res?.data);
      }).catch(error => {
      console.log(error)
    })
  }


  useEffect(() => {
    getProduct()
  }, []);


  const [editFarmOpen, setEditFarmOpen] = useState(false)

  // const getProductsData = () => {
  //   axiosInstance.get(`/api/expert/farms/${route?.params?.farmId}/products/`).then(res => {
  //     setData(res?.data)
  //     console.log(res?.data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }
  //
  // useEffect(() => {
  //   getProductsData()
  // },[])
  //

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#fafafa', flex: 1}}>
      <SafeAreaView style={{width: '100%', paddingTop: StatusBar.currentHeight, height: '100%', flex: 1}}>
        <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
        {loading && (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <ActivityIndicator color={Colors.primary} size={50}/>
        </View>)}
        {!loading && (<ScrollView style={{paddingHorizontal: 16,}}>
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
            <TouchableOpacity onPress={() => setEditFarmOpen(true)}>
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
            <Text
              style={{color: '#393939', fontFamily: 'bold', fontSize: 24, textAlign: 'right'}}>{farmerData?.name}</Text>
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
              <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 20}}>{farmerData?.owner}</Text>
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
              <Text style={{color: '#393939', fontFamily: 'bold', fontSize: 20}}>{farmerData?.area} هکتار</Text>
            </View>
          </View>
          <Text style={{color: Colors.primary, fontFamily: 'bold', fontSize: 20, marginTop: 16}}>موقیت مکانی زمین</Text>
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
            <View onTouchEnd={() => router.push('/expert-panel/reqs')} style={{transform: [{rotate: '90deg'}]}}>
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
            <View onTouchEnd={() => setAddRecOpen(true)} style={{
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
            <Text style={{marginTop: 10, color: Colors.primary, fontFamily: 'bold', fontSize: 20}}>پیشنهادات</Text>
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
            marginTop: 16,
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
            <Text style={{
              textAlign: 'right',
              color: '#333',
              fontFamily: 'regular',
              fontSize: 16
            }}>{regs?.[0]?.description}</Text>
            {regs?.[0]?.tutorial_link ? (<Text onPress={() => Linking.openURL(regs?.[0]?.tutorial_link)} style={{
              color: Colors.primary,
              fontFamily: 'bold',
              fontSize: 16,
              marginTop: 10
            }}>مشاهده آموزش</Text>) : <View></View>}
          </View>
          <View style={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <View onTouchEnd={() => setModalVisible(true)} style={{
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
            <Text style={{marginTop: 10, color: Colors.primary, fontFamily: 'bold', fontSize: 20}}>محصولات</Text>
          </View>
          {data?.length ? data?.map((item: any, index: number) => {
            return <View style={{marginTop: 16}}>
              <ProductItem item={item} key={index}/>
            </View>
          }) : <View></View>}
        </ScrollView>)}
        <AddProduct getProduct={getProduct} modalVisible={modalVisible} setModalVisible={setModalVisible}/>

      </SafeAreaView>
      <AddRecommented refreshFarmerData={getRecs} routeId={route?.params?.farmId} active={addRecOpen}
                      setActive={setAddRecOpen}/>
      <EditFarm refreshFarmerData={getData} farmId={route?.params?.farmId} active={editFarmOpen} setActive={setEditFarmOpen}/>
      <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup}/>

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