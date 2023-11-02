import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View , Text, ScrollView, Dimensions, StatusBar, SafeAreaView } from 'react-native'
import { axiosInstance } from '../../../Utills/axios';
import { Image } from 'expo-image';
import Navbar from '../../../components/common/Navbar';
import Swiper from 'react-native-swiper';

const FarmPage = () => {
    const route = useRoute();
    const [ landData , setLandData ] = useState(null);
    const [isActivePopup, setIsActivePopup] = useState(false);
    // console.log(route.params?.farmID?.replace('farm',''))
    useEffect(() => {
        const FarmRetrieve = async () => {
            try 
            {
                  let { data } = await axiosInstance.get(`ap/farm/farms/${route.params?.farmID?.replace('farm','')}/`);
           setLandData(data) 
            }
            catch(err) {
                console.log(err)
            }
        }
        FarmRetrieve();
    },[])
    if(landData)
        console.warn(landData)
    return <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <StatusBar backgroundColor={"#fff"} />
        <Navbar
         setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
       <View style={{ width : '100%' , height : '100%'  , alignItems : 'center' }}>
        <View style={{ width : '90%' , alignItems : 'center' }}>

        
        <ScrollView style={{ width : '95%'  , maxHeight :620 }}>
        <View style={{ width : '100%'  , gap : 16, paddingTop : 16 }}>
            <Text style={{ fontSize : 20 , fontFamily : 'bold' , color : '#2E6F73' }}>
                وضعیت زمین
            </Text>
            <View>
                <Image style={{ width : '100%' , height : 210 , marginTop : 10 }} source={require("../../../assets/images/chart.png")} />
            </View>
        </View>
        <View style={{ 
            alignItems : 'flex-end' , 
        width : '100%' , 
        backgroundColor : 'white' , 
        borderRadius : 16 , 
        marginTop : 16,
        padding : 16}}>
            <Text style={{ fontSize : 20  , fontFamily : 'bold' , color : '#2E6F73' }}>
                اطلاعات کلی 
            </Text>
            <View style={{ gap : 8 , marginVertical : 8 }}>
                <View style={{ flexDirection : 'row' ,  justifyContent : 'flex-end' }}>
                    <Text style={{ fontFamily : 'bold' , fontSize : 16 ,color : '#0F393D' }}>fdhfdh</Text>
                    <Text style={{ fontFamily : 'bold' , color : '#666' , fontSize : 16 }}>نام زمین:</Text>
                </View>
                <View style={{ flexDirection : 'row' , justifyContent : 'flex-end' }}>
                    <Text style={{ fontFamily : 'bold' , fontSize : 16 ,color : '#0F393D' }}>fdhfdh</Text>
                    <Text style={{ fontFamily : 'bold' , color : '#666' , fontSize : 16 }}>متراژ:</Text>
                </View>
            </View>
        </View>
        <View style={{ 
            alignItems : 'flex-end' , 
            width : '100%' , 
            backgroundColor : 'white' ,
            borderRadius : 16 , 
            height : 250,
            marginTop : 16,
            padding : 16}}>
            <Text style={{ fontSize : 20  , fontFamily : 'bold' , color : '#2E6F73' }}>
                پیشنهادات سامانه    
            </Text>
            <Swiper style={{ width : '100%' , marginTop : 10 }} scrollEnabled={true} showsButtons={true}>
                <View style={{ width : '100%' , height : '100%' , alignItems : 'center' }}>
                    <View style={{ width : '100%' , height : '100%' , alignItems : 'center' }}>
                        <View style={{ width : '85%' , alignItems : 'center' }}>
                            <Text style={{ fontFamily : 'regular' }}>
                            طبق پیشبینی ها از وضعیت اینده بازار و موقعیت مکانی زمین شما بهتر است بهتر است زمین خودرا به کاشت درخت سیب اختصاص دهید
                            </Text>
                        </View> 
                    </View>
                </View>
                <View  style={{ width : '100%'  , backgroundColor : 'blue' }}>
                    <View style={{ width : '100%' ,  height : '100%' , alignItems : 'center' }}>
                        <View style={{ width : '85%' , alignItems : 'center' }}>
                            <Text style={{ fontFamily : 'regular' }}>
                            طبق پیشبینی ها از وضعیت اینده بازار و موقعیت مکانی زمین شما بهتر است بهتر است زمین خودرا به کاشت درخت سیب اختصاص دهید
                            </Text>
                        </View> 
                        </View>
                </View>
                <View  style={{ width : '100%' ,  height : '100%'  }}>
                <View style={{ width : '100%' ,  height : '100%'  , alignItems : 'center' }}>
                        <View style={{ width : '85%' , alignItems : 'center'}}>
                            <Text style={{ fontFamily : 'regular' }}>
                            طبق پیشبینی ها از وضعیت اینده بازار و موقعیت مکانی زمین شما بهتر است بهتر است زمین خودرا به کاشت درخت سیب اختصاص دهید
                            </Text>
                        </View> 
                    </View>
                </View>
            </Swiper>
        </View>
        <View style={{ 
            alignItems : 'flex-end' , 
            width : '100%' , 
            backgroundColor : 'white' ,
            borderRadius : 16 , 
            marginTop : 16,
            padding : 16}}>
                <Text style={{ fontSize : 20  , fontFamily : 'bold' , color : '#2E6F73' }}>
                    مقعیت مکانی زمین
            </Text>
        </View>
        </ScrollView>
        </View>
    </View> 
    </SafeAreaView>
    
 
}
export default FarmPage;