import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import Navbar from "../../../components/common/Navbar";
import React, {useRef, useState} from "react";
import HelpBottomSheet from "../../../components/common/HelpBottomSheet";
import {useRoute} from "@react-navigation/native";
import Icon from "../../../components/common/Icon";


const FarmerId = () => {
  const route = useRoute()
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [farmOpen,setFarmOpen] = useState(false)
  const ref = useRef<any>(null)
  // <Text>{route.params?.farmerId}</Text>
  return (
    <SafeAreaView style={{width: '100%', paddingTop: StatusBar.currentHeight, height: '100%', flex: 1}}>
      <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
      <ScrollView style={{paddingHorizontal: 16,}}>
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={{width: '15%'}}>
            <View style={styles.filterIcon}>
              <Icon name="filter"/>
            </View>
          </View>
          <View style={{width: '85%'}}>
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
          </View>
        </View>
        <View onTouchEnd={() =>setFarmOpen(prevState => !prevState)} style={{
          display: 'flex',
          width: '100%',
          height: farmOpen ? ref?.current?.clientHeight : 74,
          flexDirection: 'column',
          gap: 10,
          borderRadius:12,
          borderStyle: 'solid',
          borderColor: '#eee',
          backgroundColor: '#fff',
          marginTop:14
        }}>
          <View ref={ref} style={{display:'flex',padding:12,height:74,alignItems:'center',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <View style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10,borderStyle:'solid',borderWidth:1,borderColor:'#eee', backgroundColor:'#FAFAFA',borderRadius:8}}>
            <Icon style={{width:20,height:20}} name={'arrowIconDown'} />
            </View>
            <Text style={{color:'#4D4D4D',fontFamily:'bold',fontSize:20}}>زمین لاریجان</Text>
          </View>
          <View style={{padding:12,marginTop:-10}}>
           <View style={{display:'flex',justifyContent:'center',gap:10,alignItems:'center',flexDirection:'row'}}>
             <View style={{width:'50%',height:106,backgroundColor:'#fff',borderRadius:12,borderWidth:1,borderStyle:'solid',borderColor:'#eee',display:'flex',alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'#7E7E7E',fontFamily:'bold',fontSize:16}}>متراژ</Text>
               <Text style={{color:'#1C5459',fontSize:24,fontFamily:'bold',marginTop:5}}>۲۰۰ هکتار</Text>
             </View>
             <View style={{width:'50%',height:106,backgroundColor:'#fff',borderRadius:12,borderWidth:1,borderStyle:'solid',borderColor:'#eee',display:'flex',alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'#7E7E7E',fontFamily:'bold',fontSize:16}}>مقدار درحال تولید</Text>
               <Text style={{color:'#1C5459',fontSize:24,fontFamily:'bold',marginTop:5}}>۱۲۳ تن</Text>
             </View>
           </View>
            <View style={{display:'flex',flexDirection:'row',marginTop:16,alignItems:'center',justifyContent:'space-between',width:'100%'}}>
              <View style={{display:'flex',alignItems:'center',flexDirection:'row',gap:5}}>
                <Text style={{color:'#555',fontFamily:'bold',fontSize:15}}>(تن)</Text>
                <Text style={{color:'#555',fontFamily:'bold',fontSize:16}}>۲۰</Text>
              </View>
              <View style={{display:'flex',alignItems:'center',flexDirection:'row',gap:5}}>
                <Text style={{color:'#A8A8A8',fontFamily:'bold',fontSize:16}}>سیب</Text>
                <Text style={{width:25,height:25,borderRadius:12,backgroundColor:'#37C6B7'}}></Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup}/>
    </SafeAreaView>
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