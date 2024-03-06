import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import Navbar from "../../components/common/Navbar";
import React, {useEffect, useState} from "react";
import HelpBottomSheet from "../../components/common/HelpBottomSheet";
import Icon from "../../components/common/Icon";
import Colors from "../../constants/Colors";
import AddFarmer from "../../components/common/expert/Modals/AddFarmer";
import {axiosInstance} from "../../Utills/axios";
import {useRouter} from "expo-router";

const ExpertPanel = () => {
  const [addFarmerOpen,setAddFarmerOpen] = useState(false)
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [farmers,setFarmers] = useState([])
  const router = useRouter()

  const getFarmers =  () => {
     axiosInstance.get('api/expert/users/').then((res) =>{
      setFarmers(res?.data?.results)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getFarmers()
  }, []);

  return (
    <View style={{width:'100%',height:'100%',flex:1}}>
      <SafeAreaView style={{width: '100%', height: '100%', flex: 1,position:'relative'}}>
        <ScrollView style={{width: '100%', height: '100%', flex: 1,position:'relative'}}>
          <SafeAreaView style={styles.container}>
            <Navbar isActivePopup={isActivePopup} setIsActivePopup={setIsActivePopup}/>
            <View style={{paddingHorizontal: 16, width: '100%'}}>
              <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                flexDirection: 'row',
                width: '100%'
              }}>
                <View style={{display: 'flex', width: '50%', flexDirection: 'column', gap: 10}}>
                  <View style={{
                    width: '100%',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#CC847E',
                    borderRadius: 12,
                    height: 128,
                    backgroundColor: '#F9DEDB',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <View style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 30,
                      flexDirection: 'column'
                    }}>
                      <Text style={{color: '#B46A63', fontFamily: "regular"}}>تعداد زمین های کشاورزان</Text>
                      <Text style={{color: '#99514B', fontSize: 36, fontFamily: 'bold'}}>۵۳</Text>
                    </View>
                    <View style={{position: 'absolute', transform: [{scale: 0.5}], left: -100}}>
                      <Icon name={'expertVectorOne'}/>
                    </View>
                  </View>
                  <View style={{
                    width: '100%',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#00b359',
                    borderRadius: 12,
                    height: 128,
                    backgroundColor: '#e6fff2',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>

                    <View style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 30,
                      flexDirection: 'column'
                    }}>
                      <Text style={{color: '#5FA2A6', fontFamily: "regular"}}>تعداد زمین های کشاورزان</Text>
                      <Text style={{color: '#44898E', fontSize: 36, fontFamily: 'bold'}}>۵۳</Text>
                    </View>
                    <View style={{position: 'absolute', transform: [{scale: 0.5}], left: -100, top: -30}}>
                      <Icon name={'expertVectorTwo'}/>
                    </View>
                  </View>
                </View>
                <View style={{width: '50%'}}>
                  <View style={{
                    width: '100%',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#CCCCA0',
                    borderRadius: 12,
                    height: 273,
                    backgroundColor: '#E5E5CD',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <View style={{
                      display: 'flex',
                      zIndex: 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 90,
                      flexDirection: 'column'
                    }}>
                      <Text style={{color: '#9A9A5A', textAlign: 'center', fontFamily: "regular"}}>مـحصولات سلفخری شده درحال
                        کـــاشت</Text>
                      <Text style={{color: '#82823E', fontSize: 36, fontFamily: 'bold'}}>۲۲۳ تن</Text>
                    </View>
                    <View style={{position: 'absolute', transform: [{scale: 0.5}], top: -130, left: -100}}>
                      <Icon name={'expertVector3'}/>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Text style={{color: '#979797', textAlign: 'right', fontFamily: 'bold', fontSize: 16, marginTop: 14}}>لیست
                  کشاورزان</Text>
              </View>
              <View style={{backgroundColor:'#fff',marginTop:14,height:50,borderRadius:12,borderWidth:1,borderStyle:'solid',borderColor:'#eee',position:'relative'}}>
                <TextInput placeholder={'جستجو'} style={{textAlign:'right',padding:12,fontFamily:'bold'}} placeholderTextColor={'#666'} />
                <View style={{position:'absolute',top:12,left:12}}>
                  <Icon name={'search'} />
                </View>
              </View>
              <View style={{marginBottom:30}}>
                {farmers?.map((item:any,index:any) => {
                  return (
                    <View onTouchEnd={() => router.push(`/expert-panel/farmer/farmer${item?.id?.toString()}`)} key={index} style={{backgroundColor:'#fff',marginTop:8,height:50,borderRadius:12,borderWidth:1,borderStyle:'solid',borderColor:'#eee',position:'relative'}}><Text style={{textAlign:'right',padding:12,fontFamily:'bold'}}>{item?.full_name}</Text></View>
                  )
                })}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
        <View onTouchEnd={() => setAddFarmerOpen(true)} style={{position:'absolute', bottom:30, left:20, backgroundColor:Colors.primary, width:80, height:80, borderRadius:18, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'#fff', fontSize:40}}>+</Text>
        </View>
        <AddFarmer refreshFarmerData={getFarmers()} active={addFarmerOpen} setActive={setAddFarmerOpen}/>
      </SafeAreaView>
      <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup} />
    </View>
  )
}

export default ExpertPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    height:'100%'
    // paddingHorizontal : 16
  },
  inProductionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  inProductionBtnText: {
    color: Colors.whiteColor,
    fontFamily: "bold",
    fontSize: 16,
  },
});