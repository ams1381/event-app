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
    if(productData)
        console.warn(productData)
    return (
        <>
            <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
            <View style={ProductStyles.ProductContainer}>
                {
                    productData ? <>
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
                                <Text style={{ fontSize : 16 , fontFamily : 'bold' , color : '#4D4D4D' }}>موز</Text>
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
                        <View style={ProductStyles.ProductInnerContainer}>
                            <View>
                                <Text>آمار</Text>
                            </View>
                            <View>
                            <LineChart
                                    data={{
                                    labels: ["January", "February", "March", "April", "May", "June"],
                                    datasets: [
                                        {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                        }
                                    ]
                                }}
                                width={Dimensions.get("window").width} // from react-native
                                height={220}
                                yAxisLabel="$"
                                yAxisSuffix="k"
                                yAxisInterval={1} // optional, defaults to 1
                                chartConfig={{
                                // backgroundColor: "#e26a00",
                                backgroundColor: 'white',
                                // backgroundGradientFrom: "#fb8c00",
                                // backgroundGradientTo: "#ffa726",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                                }}
                                bezier
                                style={{
                                marginVertical: 8,
                                borderRadius: 16
                                }}
                            />
                            </View>
                        </View>
                    </>  : <Text>
                        Loading
                    </Text>
                }
                
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
        width : '95%',
    },
    ProductInfoContainer : {
        width : '95%',
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

    },
    ProcutRecommandContainer : {

    }
})