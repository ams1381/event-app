import {Text, TouchableOpacity, View} from "react-native";
import Icon from "../../Icon";
import React from "react";
import {useRouter} from "expo-router";

const FarmBox = (p: { setActive: any, ref: any, active: any, data: any}) => {
  const router = useRouter()
  return (
    <View style={{
      display: 'flex',
      width: '100%',
      height: p.active ? p.ref?.current?.clientHeight : 74,
      flexDirection: 'column',
      gap: 10,
      borderRadius: 12,
      borderStyle: 'solid',
      borderColor: '#eee',
      backgroundColor: '#fff',
      marginTop: 14,
      overflow: 'hidden'
    }}>
      <View onTouchEnd={() => {
        p.setActive((prevState: any) => !prevState)
      }} ref={p.ref} style={{
        display: 'flex',
        padding: 12,
        height: 74,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#eee',
          backgroundColor: '#FAFAFA',
          borderRadius: 8
        }}>
          <Icon style={{width: 20, height: 20,}} name={'arrowIconDown'}/>
        </View>
        <Text style={{color: '#4D4D4D', fontFamily: 'bold', fontSize: 20}}>{p?.data?.name}</Text>
      </View>
      <View style={{padding: 12, marginTop: -10}}>
        <View style={{display: 'flex', justifyContent: 'center', gap: 10, alignItems: 'center', flexDirection: 'row'}}>
          {/**/}
          <View style={{
            width: '50%',
            height: 106,
            backgroundColor: '#fff',
            borderRadius: 12,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{color: '#7E7E7E', fontFamily: 'bold', fontSize: 16}}>متراژ</Text>
            <Text
              style={{color: '#1C5459', fontSize: 24, fontFamily: 'bold', marginTop: 5}}>{p?.data?.area} هکتار</Text>
          </View>

          <View style={{
            width: '50%',
            height: 106,
            backgroundColor: '#fff',
            borderRadius: 12,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{color: '#7E7E7E', fontFamily: 'bold', fontSize: 16}}>مقدار درحال تولید</Text>
            <Text style={{
              color: '#1C5459',
              fontSize: 24,
              fontFamily: 'bold',
              marginTop: 5
            }}>{p?.data?.products_weight} تن</Text>
          </View>
        </View>
        <View style={{
          display: 'flex',
          borderRadius: 10,
          overflow: 'hidden',
          marginTop: 16,
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          {p?.data?.products_percent?.length ? p?.data?.products_percent?.map((item: any, index: number) => {
            return (
              <View style={{
                width: `${item?.percent}%`,
                backgroundColor: item?.hex + '10',
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}><Text style={{fontFamily: 'bold', color: item?.hex}}>{item?.percent}%</Text></View>
            )
          }) : <View></View>}
        </View>
        {p?.data?.products_percent?.length ? p?.data?.products_percent?.map((item: any, index: number) => {
          return <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5}}>
              <Text style={{color: '#555', fontFamily: 'bold', fontSize: 15}}>(تن)</Text>
              <Text style={{color: '#555', fontFamily: 'bold', fontSize: 16}}>{item?.weight}</Text>
            </View>
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5}}>
              <Text style={{color: '#A8A8A8', fontFamily: 'bold', fontSize: 16}}>{item?.category}</Text>
              <Text style={{width: 25, height: 25, borderRadius: 8, backgroundColor: item?.hex}}></Text>
            </View>
          </View>
        }) : <View></View>}
        <TouchableOpacity onPress={() => router.push(`/expert-panel/farm/${p?.data?.id}`)} style={{
          backgroundColor: '#44898E',
          marginTop: 14,
          height: 48,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{color: '#fff', fontFamily: 'bold', fontSize: 16}}>مشاهده</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FarmBox