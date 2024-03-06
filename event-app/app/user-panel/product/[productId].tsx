import {StatusBar, StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions, SafeAreaView  } from "react-native";
import React, {useEffect, useState} from "react";
import Navbar from "../../../components/common/Navbar";
import Colors from "../../../constants/Colors";
import moment from 'jalali-moment';
import {axiosInstance} from "../../../Utills/axios";
import {useRoute} from "@react-navigation/native";
import HelpBottomSheet from "../../../components/common/HelpBottomSheet";
import MainChart from "../../../components/common/MainChart";
import TestChart from "../../../components/common/TestChart";

const Index = () => {
    const router = useRoute();
    const [productData, setProductData] = useState<any>();
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [isActivePopup, setIsActivePopup] = useState(false);

    useEffect(() => {
        setIsloading(true)
        const RetrieveProduct = async () => {
            try 
            {
                let { data } = await axiosInstance.get(`api/farm/products/${router.params?.productId}/`);
                setProductData(data);
            }
            catch(err) {
                console.log(err)
            }
        }
        RetrieveProduct()
    }, []);
    return (
       <View style={{width:'100%',height:'100%',flex:1}}>
           <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
               <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
               <View style={ProductStyles.ProductContainer}>
                   <ScrollView style={{  width : '100%',paddingHorizontal:16,backgroundColor:'#fafafa',marginTop:-20,paddingTop:20 }}>
                       {
                           productData ?
                             <View style={{ gap : 10 ,
                                 alignItems : 'center' ,
                                 width : '100%' ,
                             }}>
                                 <View style={ProductStyles.ProductInfoContainer}>
                                     <View>
                                         <Text style={{ fontSize : 20 , fontFamily : 'bold' , color : '#2E6F73' }}>اطلاعات کلی</Text>
                                     </View>
                                     <View style={{ flexDirection : 'row' , gap : 10 , height : 27 , alignItems : 'center' , justifyContent : 'flex-end' }}>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' }}>{productData.name}</Text>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>نام محصول:</Text>
                                     </View>
                                     <View style={{ flexDirection : 'row' , gap : 10 , height : 27 , alignItems : 'center' , justifyContent : 'flex-end' }}>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' }}>{productData.category.title}</Text>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>نوع محصول:</Text>
                                     </View>
                                     <View style={{ flexDirection : 'row' , gap : 10 , height : 27 , alignItems : 'center' , justifyContent : 'flex-end' }}>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#4D4D4D' }}>
                                             {productData.status == 'nh' ? <Text>برداشت نشده</Text> :
                                               productData.status == 'ws' ? <Text>آماده برای فروش</Text> : productData.status == 's' ? <Text>فروخته شده</Text> :
                                                 <Text>در حالت تولید</Text>}
                                         </Text>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>وضعیت :</Text>
                                     </View>
                                     <View style={{ flexDirection : 'row' , gap : 10 , height : 27 , alignItems : 'center' , justifyContent : 'flex-end' }}>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' }}>{convertGregorianToJalali(convertToRegularTime(productData.created_at))}</Text>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>تاریخ ایجاد :</Text>
                                     </View>
                                     <View style={{ flexDirection : 'row' , gap : 10 , height : 27 , alignItems : 'center' , justifyContent : 'flex-end' }}>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' }}>
                                             {productData.product_analysis ? convertGregorianToJalali(productData.product_analysis.estimated_harvest_date) : ''}
                                         </Text>
                                         <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>تاریخ تخمین برداشت :</Text>
                                     </View>
                                     <View>
                                         <Text style={{ fontFamily : 'bold ', fontSize : 16 }}>
                       {productData?.has_obeyed_suggestion && (  <Text style={{fontFamily:'regular'}}>این محصول مطابق پیشنهاد است و ۱۰٪ سود برای شما دارد </Text>)}
                                         </Text>
                                     </View>

                                 </View>
                                 <View style={{
                                     ...ProductStyles.ProductChartContainer,
                                     marginBottom : productData.product_analysis ? 0 : 220
                                 }}>
                                     <View style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                         <Text style={{ fontSize : 16 , fontFamily : 'regular' , color : '#2E6F73' }}>برحسب تن</Text>
                                         <Text style={{ fontSize : 20 , fontFamily : 'regular' , color : '#2E6F73' }}>آمار</Text>
                                     </View>
                                     <View>
                                         {/* <Image style={{ width : '100%' , height : 308 }} source={require('../../../assets/images/LineChart.png')} /> */}
                                         <MainChart />
                                     </View>
                                 </View>
                                 {/* productData.product_analysis && */}
                                 { productData.product_analysis && <View style={{
                                     ...ProductStyles.ProcutRecommandContainer ,
                                     marginBottom : 230
                                 }}>
                                     <View>
                                         <Text style={{ fontSize : 20 , fontFamily : 'bold' , color : '#2E6F73' }}>پیشنهادات سامانه</Text>
                                     </View>
                                     <View  style={{ padding : 16 ,marginBottom:30, borderWidth : 1 ,borderColor : '#EEE' , marginTop : 10 }}>
                                         <Text>
                                             { productData.product_analysis?.description }
                                         </Text>
                                         <View>
                                             <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#2E6F73' }}>مشاهده آموزش</Text>
                                         </View>
                                     </View>
                                 </View>}
                             </View>
                             :  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',height:'100%'}}>
                                 <ActivityIndicator color={Colors.primary} size={50}/>
                             </View>
                       }
                   </ScrollView>
               </View>
           </SafeAreaView>
           <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup}/>
       </View>
    )
   
}
export function convertToRegularTime(dateTimeString : string) {
    const dateObj = new Date(dateTimeString);
  
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
  
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const seconds = dateObj.getSeconds().toString().padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  export function convertGregorianToJalali(gregorianDate : any) {
    // Convert the Gregorian date to a Jalali date using the jalali-moment library.
    const jalaliDate = moment(gregorianDate, 'YYYY-MM-DD').format('jYYYY/jM/jD');
    return jalaliDate;
  }
export default Index;

const ProductStyles = StyleSheet.create({
    ProductContainer : {
        width : '100%',
        height : '100%',
        alignItems : 'center'
    },
    ProductInnerContainer : {
        width : '100%',
        backgroundColor : 'white',
        borderRadius : 16,
    },
    ProductInfoContainer : {
        width : '100%',
        // height : 398,
        borderRadius : 16,
        borderWidth : 1,
        borderColor : '#EEE',
        backgroundColor : '#FFF',
        padding : 16,
        gap : 8
    },
    ProductHeaderText : {

    },
    ProductInfoLabelText : {

    },
    ProductChartContainer : {
        width : '100%',
        padding : 16,
        borderRadius : 16,
        backgroundColor : 'white'
    },
    ProcutRecommandContainer : {
        width : '100%',
        padding : 16,
        borderRadius : 16,
        backgroundColor : 'white',
        marginBottom : 120
    }
})