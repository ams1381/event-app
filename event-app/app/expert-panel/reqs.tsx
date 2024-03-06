import {ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Text, View} from "react-native";
import Navbar from "../../components/common/Navbar";
import React, {useEffect, useState} from "react";
import {axiosInstance} from "../../Utills/axios";
import HelpBottomSheet from "../../components/common/HelpBottomSheet";
import Colors from "../../constants/Colors";
import ReqPopup from "../../components/common/expert/Modals/ReqPopup";
import AddReqPopup from "../../components/common/expert/Farm/AddReqPopup";

const Reqs = () => {
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [reqPopupOpen, setReqPopupOpen] = useState(false)
  const [addReqPopupOpen,setAddReqPopupOpen] = useState(false)
  const [workReq, setWorkReqs] = useState<any>([])
  const [activeId,setActiveId] = useState<any>()
  const [mainLoading,setMainLoading] = useState(false)
  const getWorkReqs = () => {
    axiosInstance.get('api/expert/worker_requests/').then(res => {
      setWorkReqs(res?.data?.results)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getWorkReqs()
  }, []);

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>([])

  const getSingleReq = (id:string) => {
      setLoading(true)
        axiosInstance.get(`api/expert/worker_requests/${id}/`).then(res => {
          setData(res?.data)
          setLoading(false)
        }).catch(error => {
          setLoading(false)
          console.log(error.response)
        })
  }

  return (
    <View style={{width: '100%', height: '100%',backgroundColor:'#fafafa', flex: 1}}>
      <SafeAreaView
        style={{width: '100%', paddingTop: StatusBar.currentHeight, height: '100%', flex: 1}}>
        <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
        <ScrollView style={{paddingHorizontal: 16}}>
          { workReq?.length ? workReq.map((item: any, index: any) => {
            return (
              <View key={index} onTouchEnd={() => {
                setReqPopupOpen(true)
                setActiveId(item?.id)
                getSingleReq(item?.id)
              }} style={{
                height: 64,
                marginBottom: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 16,
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 12,
                borderStyle: 'solid',
                borderColor: '#eee',
                borderWidth: 1
              }}>
                <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 10}}>
                  <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    backgroundColor: '#E4E4E4',
                    borderRadius: 8
                  }}>
                    <Text style={{color: '#7E7E7E', fontSize: 16, fontFamily: 'bold'}}>درحال انجام</Text>
                  </View>
                  <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    backgroundColor: '#E5E5CD',
                    borderRadius: 8
                  }}>
                    <Text style={{color: '#82823E', fontSize: 16, fontFamily: 'bold'}}>{item?.worker_count_needed} نفر</Text>
                  </View>
                </View>
                <Text style={{color: '#0F393D', fontFamily: 'bold', fontSize: 20}}>{item?.title}</Text>
              </View>
            )
          }) : (  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',height:'100%'}}>
            <ActivityIndicator color={Colors.primary} size={50}/>
          </View>)}
        </ScrollView>
      </SafeAreaView>
      <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup}/>
      <View onTouchEnd={() => setAddReqPopupOpen(true)} style={{
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
      </View>
      <ReqPopup data={data} loading={loading} activeId={activeId} active={reqPopupOpen} setActive={setReqPopupOpen}/>
      <AddReqPopup  refreshFarmerData={getWorkReqs()} active={addReqPopupOpen} setActive={setAddReqPopupOpen} />
    </View>
  )
}

export default Reqs