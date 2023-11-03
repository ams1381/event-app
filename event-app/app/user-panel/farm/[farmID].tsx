import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View , Text, ScrollView, Dimensions, StatusBar, SafeAreaView, TouchableNativeFeedback } from 'react-native'
import { axiosInstance } from '../../../Utills/axios';
import { Image } from 'expo-image';
import Navbar from '../../../components/common/Navbar';
import Swiper from 'react-native-swiper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import ProductItem from '../../../components/product/productItem';
import Icon from '../../../components/common/Icon';


const FarmPage = () => {
    const route = useRoute();
    const [ landData , setLandData ] = useState(null);
    const [ profuctsData , setProductsData ] = useState(null);
    const [ recommandsSwiperIndex , setRecommandsSwiperIndex ] = useState(0)
    const [isActivePopup, setIsActivePopup] = useState(false);
    // console.log(route.params?.farmID?.replace('farm',''))
    useEffect(() => {
        const FarmRetrieve = async () => {
            try 
            {
                // let { data } = await axiosInstance.get(``)
                let { data } = await axiosInstance.get(`api/farm/farms/${route.params?.farmID?.replace('farm','')}/`);
                setLandData(data) 
            }
            catch(err) {
                console.log(err,`ap/farm/farms/${route.params?.farmID?.replace('farm','')}/`)
            }
        }
        const GetProducts = async () => {
            try 
            {
                let { data } = await axiosInstance.get(`api/farm/farms/${route.params?.farmID?.replace('farm','')}/products/`);
                setProductsData(data) 
            }
            catch(err) {

            }
        }
        FarmRetrieve();
        GetProducts()
    },[])

    return landData ? <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <StatusBar backgroundColor={"#fff"} />
        <Navbar
         setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
       <View style={{ width : '100%' , height : '100%'  , alignItems : 'center' }}>
        <View style={{ width : '95 %' , alignItems : 'center' }}>

        
        <ScrollView style={{ width : '95%' }}>
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
                    <Text style={{ fontFamily : 'bold' , fontSize : 16 ,color : '#0F393D' }}>{landData.name}</Text>
                    <Text style={{ fontFamily : 'bold' , color : '#666' , fontSize : 16 }}>نام زمین:</Text>
                </View>
                <View style={{ flexDirection : 'row' , justifyContent : 'flex-end' }}>
                    <Text style={{ fontFamily : 'bold' , fontSize : 16 ,color : '#0F393D' }}>{landData.area} هکتار</Text>
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
            
            <Swiper onIndexChanged={(newIndex : number) => setRecommandsSwiperIndex(newIndex)} index={recommandsSwiperIndex} prevButton={<Icon name='SwiperLeftArrow' />}
             nextButton={<TouchableNativeFeedback><Icon name='SwiperRightArraow' /></TouchableNativeFeedback>} autoplay style={{ width : '100%' , marginTop : 10 , alignItems : 'center' }} showsButtons={true}>
                <View style={{ width : '100%' , height : '100%' ,  backgroundColor : 'green' }}>
                    <View style={{ width : '100%' , height : '100%' , alignItems : 'center' }}>
                        <View style={{ width : '85%' , alignItems : 'center' }}>
                            <Text style={{ fontFamily : 'regular' , padding : 10 }}>
                           aدfgjfgjgfjfg
                            </Text>
                        </View> 
                    </View>
                </View>
                <View  style={{ width : '100%' , height : '100%' }}>
                    <View style={{ width : '100%' ,  height : '100%' , alignItems : 'center' }}>
                        <View style={{ width : '85%' , alignItems : 'center' }}>
                            <Text style={{ fontFamily : 'regular' , padding : 10 }}>
                            طبق پیشبینی ها از وضعیت اینده بازار و موقعیت مکانی زمین شما بهتر است بهتر است زمین خودرا به کاشت درخت سیب اختصاص دهید
                            </Text>
                        </View> 
                        </View>
                </View>
                <View  style={{ width : '100%' ,  height : '100%'   }}>
                <View style={{ width : '100%' ,  height : '100%'  , alignItems : 'center' }}>
                        <View style={{ width : '85%' , alignItems : 'center' }}>
                            <Text style={{ fontFamily : 'regular' , padding : 10 }}>
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
            marginBottom :  !(profuctsData || profuctsData?.results.length != 0) ? 210 : 0,
            padding : 16}}>
                <Text style={{ fontSize : 20  , fontFamily : 'bold' , color : '#2E6F73' }}>
                    مقعیت مکانی زمین
            </Text>
            <View style={{ flex : 1 , width : '100%' , marginTop : 16  , overflow : 'hidden' , borderRadius : 16 , alignItems : 'center' , justifyContent : 'center' }}>
            <Image style={{ width : '100%' , height : 200}} resizeMode="contain" source={require('../../../assets/images/Map.png')} />
            </View>
        </View>
       { profuctsData && <View style={{ 
            alignItems : 'flex-end' , 
            width : '100%' , 
            backgroundColor : 'white' ,
            borderRadius : 16 , 
            marginTop : 16,
            marginBottom :200,
            padding : 16}}>
                <Text style={{ fontSize : 20  , fontFamily : 'bold' , color : '#2E6F73' }}>
                    تاریخچه محصولات 
                </Text>
            <View>
                {
                    profuctsData?.results.map(ProductITem => <ProductItem item={ProductITem} />)
                }
            </View>
        </View>}
        </ScrollView>
        </View>
    </View> 
    </SafeAreaView> : <Text>Loading</Text>
    
 
}
export default FarmPage;