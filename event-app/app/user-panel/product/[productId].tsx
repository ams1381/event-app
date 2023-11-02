import {StatusBar, StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions  } from "react-native";
import React, {useEffect, useState} from "react";
import Navbar from "../../../components/common/Navbar";
import Icon from "../../../components/common/Icon";
import Colors from "../../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import {axiosInstance} from "../../../Utills/axios";
import {useRouter} from "expo-router";
import {useRoute} from "@react-navigation/native";
import {Image} from 'expo-image'
import {
    LineChart,
  } from "react-native-chart-kit";
import ProductItem from "../../../components/product/productItem";

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
                let { data } = await axiosInstance.get(`api/farm/products/${router.params?.productID}/`);
                // console.log(data)
                setProductData(data);
            }
            catch(err) {
                console.log(err)
            }
        }
        RetrieveProduct()
    }, []);
    return (
        <>
            <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
            <View style={ProductStyles.ProductContainer}>
                <ScrollView style={{  width : '92%' }}>
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
                                <Text style={{ fontSize : 16 , fontFamily : 'bold' }}>موز</Text>
                                <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>تاریخ ایجاد :</Text>
                            </View>
                            <View style={{ flexDirection : 'row' , gap : 10 , height : 27 , alignItems : 'center' , justifyContent : 'flex-end' }}>
                                <Text style={{ fontSize : 16 , fontFamily : 'bold' }}>موز</Text>
                                <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#666666' }}>تاریخ تخمین برداشت :</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily : 'bold ', fontSize : 16 }}>
                                این محصول مطابق پیشنهاد است و ۱۰٪ سود برای شما دارد 
                                </Text>
                                </View>
                            
                        </View>
                        <View style={ProductStyles.ProductChartContainer}>
                            <View>
                                <Text style={{ fontSize : 20 , fontFamily : 'bold' , color : '#2E6F73' }}>آمار</Text>
                            </View>
                            <View>
                            <Image style={{ width : '100%' , height : 308 }} source={require('../../../assets/images/LineChart.png')} />
                            </View>
                        </View>
                        {/* productData.product_analysis && */}
                      { <View style={{
                        ...ProductStyles.ProcutRecommandContainer ,
                        }}>
                            <View>
                                <Text style={{ fontSize : 20 , fontFamily : 'bold' , color : '#2E6F73' }}>پیشنهادات سامانه</Text>
                            </View>
                            <View style={{ padding : 16 , borderWidth : 1 ,borderColor : '#EEE' , marginTop : 10 }}>
                                <Text>
                                gnmghmghgnmghmgh gnmghmgh gnmghmgh gnmghmgh
                                </Text>
                                <View>
                                    <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#2E6F73' }}>مشاهده آموزش</Text>
                                </View>
                            </View>
                        </View>}
                    </View> 
                      : <Text>
                        Loading
                    </Text>
                }
                </ScrollView>
            </View> 
            
        </>
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
  export const convertDate = (inputDate : string, dateType : string) => {
    const [year, month, day] = inputDate.split('-');
  
    if (dateType === 'jalali') {
      const jDate = jalaali.toJalaali(parseInt(year), parseInt(month), parseInt(day));
      return `${jDate.jy}/${jDate.jm}/${jDate.jd}`;
    } else if (dateType === 'gregorian') {
      const gDate = jalaali.toGregorian(parseInt(year), parseInt(month), parseInt(day));
      return `${gDate.gy}-${String(gDate.gm).padStart(2, '0')}-${String(gDate.gd).padStart(2, '0')}`;
    }
  
    return inputDate; // Return input date if no conversion needed
  };
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