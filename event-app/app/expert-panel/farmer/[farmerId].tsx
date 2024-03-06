import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Navbar from "../../../components/common/Navbar";
import React, {useEffect, useRef, useState} from "react";
import HelpBottomSheet from "../../../components/common/HelpBottomSheet";
import {useRoute} from "@react-navigation/native";
import Icon from "../../../components/common/Icon";
import FarmBox from "../../../components/common/expert/Farm/FarmBox";
import {axiosInstance} from "../../../Utills/axios";
import Colors from "../../../constants/Colors";
import AddFarm from "../../../components/common/expert/Modals/AddFarm";


const FarmerId = () => {
  const route = useRoute()
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [farmOpen, setFarmOpen] = useState(false);
  const ref = useRef<any>(null)
  const [farmerData, setFarmer] = useState<any>([])
  const [addFarmPopup, setAddFarmPopup] = useState(false)

  const getData = () => {
    axiosInstance.get(`api/expert/farms/?user_id=${route?.params?.farmerId}`).then(res => {
      setFarmer(res?.data?.results)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <View style={{width: '100%', height: '100%', flex: 1}}>
      <SafeAreaView style={{width: '100%', paddingTop: StatusBar.currentHeight, height: '100%', flex: 1}}>
        <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
        <ScrollView style={{paddingHorizontal: 16,}}>
          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            {farmerData?.length ? <View style={{width: '15%'}}>
              <View style={styles.filterIcon}>
                <Icon name="filter"/>
              </View>
            </View> : ''}

            {farmerData?.length ? <View style={{width: '85%'}}>
              <View style={{
                backgroundColor: '#fff',
                marginTop: 14,
                height: 50,
                borderRadius: 12,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#eee',
                position: 'relative'
              }}>
                <TextInput placeholder={'جستجو'} style={{textAlign: 'right', padding: 12, fontFamily: 'bold'}}
                           placeholderTextColor={'#666'}/>
                <View style={{position: 'absolute', top: 12, left: 12}}>
                  <Icon name={'search'}/>
                </View>
              </View>
            </View> : ''}

          </View>
          <View style={{marginBottom: 20}}>
            {farmerData?.length ? farmerData.map((item: any, index: number) => {
              return <FarmBox key={index} data={item} setActive={setFarmOpen} ref={ref} active={farmOpen}/>
            }) : <View style={{
              width: '100%',
              height: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon name={'emptyFarms'} style={{width: 250, height: 250, marginTop: 90}}/>
              <Text style={{color: Colors.primary, fontSize: 32, fontFamily: 'bold'}}>زمینی وجود ندارد !</Text>
              <TouchableOpacity onPress={() => setAddFarmPopup(true)} style={{
                width: 134,
                backgroundColor: Colors.primary,
                marginTop: 10,
                borderRadius: 12,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}><Text style={{color: '#fff', fontSize: 16, fontFamily: 'bold'}}>ایجاد</Text></TouchableOpacity>
            </View>}
          </View>
        </ScrollView>
        {farmerData?.length ? <View onTouchEnd={() => setAddFarmPopup(true)} style={{
          position: 'absolute',
          bottom: 30,
          left: 20,
          backgroundColor: Colors.primary,
          width: 80,
          height: 80,
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{color: '#fff', fontSize: 40}}>+</Text>
        </View> : ''}
      </SafeAreaView>
      <AddFarm refreshFarmerData={getData()} active={addFarmPopup} setActive={setAddFarmPopup}/>
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
  farm: {
    display: 'flex',
    width: '100%',
    height: 74,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  }
})

export default FarmerId