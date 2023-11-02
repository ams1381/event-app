import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Dimensions,
    View, ActivityIndicator,
} from "react-native";
import React, {useEffect, useState} from "react";
import Navbar from "../../components/common/Navbar";
import Colors from "../../constants/Colors";
import Icon from "../../components/common/Icon";
import {Image} from "react-native";
import Swiper from "react-native-swiper";
import {LinearGradient} from "expo-linear-gradient";
import InfoBottomSheet from "../../components/common/InfoBottomSheet";
import {TabBarComponent} from "../../components/common/Tabbar";
import {axiosInstance} from "../../Utills/axios";
import {useRouter} from "expo-router";
import {Image as ImageExpo} from 'expo-image'

interface Product {
    being_prepared: boolean;
    ready_to_sale: boolean;
    sold: boolean;
}

const index = () => {
    const router = useRouter();
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
    const [data, setData] = useState([]);
    const [productData, setProductData] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        axiosInstance.get("api/farm/farms/").then((res) => {
            setIsLoading(false)
            setData(res?.data?.results);
        });
    }, []);

    useEffect(() => {
        axiosInstance.get("api/farm/products-list/").then((res) => {
            setProductData(res?.data?.results[0]);
        });
    }, []);

    return (
        // <SafeAreaView style={{...styles.container}}>
        <>
            {isLoading ? (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <ActivityIndicator color={Colors.primary} size={50}/>
            </View>) : (
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={"#fff"}/>
                    <Navbar
                        isActivePopup={isActivePopup}
                        setIsActivePopup={setIsActivePopup}
                    />
                    <ScrollView style={{width: "100%", height: '100%', paddingHorizontal: 16}}>
                        <ImageExpo source={'./../../assets/images/logo.svg'}/>
                        <View style={styles.header}>
                            <View style={styles.headerMore}>
                                <Icon name="arrowLeft"/>
                                <Text style={styles.headerTitle}>بیشتر</Text>
                            </View>
                            <Text style={styles.headerTitle}>زمین ها</Text>
                        </View>
                        <View style={{alignItems: "center", borderRadius: 24}}>
                            <Swiper showsPagination={false} containerStyle={{gap: 10}} style={{height: 315}}>
                                {data.map((item: any) => (
                                    <View style={styles.landSlider}>
                                        <View style={styles.landSliderHeader}>
                                            <View style={styles.landSliderHeaderLeft}>
                                                <Text style={styles.landSliderHeaderLeftSubTitle}>
                                                    1000 هکتار
                                                </Text>
                                                <Text style={styles.landSliderHeaderLeftTitle}>
                                                    مساحت :
                                                </Text>
                                            </View>
                                            <Text style={styles.landSliderTitle}>{item?.name}</Text>
                                        </View>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginVertical: 16,
                                            }}
                                        >
                                            <Image source={require("./../../assets/images/chart.png")}/>
                                        </View>
                                        <View
                                            onTouchEnd={() => {
                                                router.push(`/user-panel/${item?.id}`);
                                            }}
                                        >
                                            <Text style={styles.seeMore}>مشاهده بیشتر</Text>
                                        </View>
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                        <View style={styles.header}>
                            <View style={styles.headerMore}>
                                <Text></Text>
                            </View>
                            <Text style={styles.headerTitle}>محصولات</Text>
                        </View>
                        <View style={styles.productContainer}>
                            <View style={{width: "43%", gap: 8}}>
                                <LinearGradient
                                    colors={["#E5E5CD", "rgba(229, 229, 205, 0.42)"]}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 1}}
                                    locations={[0.6584, 0.9046]}
                                    style={styles.inProduction}
                                >
                                    <Text style={styles.inProductionTitle}>درحال تولید</Text>
                                    <Image
                                        style={styles.inProductionIcon}
                                        source={require("./../../assets/images/tree.png")}
                                    />
                                    <View style={styles.inProductionWeight}>
                                        <Text style={styles.inProductionWeightText}>
                                            {productData?.being_prepared > 0 ? "هزارتن" : "تن"}
                                        </Text>
                                        <Text style={styles.inProductionNumber}>
                                            {productData?.being_prepared}
                                        </Text>
                                    </View>

                                    <LinearGradient
                                        colors={["#B3B37A", "rgba(179, 179, 122, 0.60)"]}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 1}}
                                        locations={[0.2367, 0.8321]}
                                        style={styles.inProductionBtn}
                                    >
                                        <Text style={styles.inProductionBtnText}>مشاهده</Text>
                                    </LinearGradient>
                                </LinearGradient>
                                <LinearGradient
                                    colors={["#44898E", "rgba(68, 137, 142, 0.64)"]}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 1}}
                                    locations={[0.0745, 0.9445]}
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        borderRadius: 12,
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Icon name="arroLeftWhite"/>
                                    <Text
                                        style={{
                                            color: Colors.whiteColor,
                                            fontFamily: "bold",
                                            fontSize: 20,
                                        }}
                                    >
                                        بیشتر
                                    </Text>
                                </LinearGradient>
                            </View>

                            <View style={styles.readyToSell}>
                                <LinearGradient
                                    colors={["#CEE9EB", "rgba(206, 233, 235, 0.00)"]}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 1}}
                                    locations={[0.4104, 0.935]}
                                    style={styles.readyToSellTop}
                                >
                                    <Icon name="leaf" style={styles.readyToSellIcon}/>
                                    <Text style={styles.readyToSellTitle}> اماده به فروش</Text>
                                    <View style={styles.readyToSelWeight}>
                                        <Text style={styles.readyToSelWeightText}>
                                            {productData?.ready_to_sale > 0 ? "هزارتن" : "تن"}
                                        </Text>
                                        <Text style={styles.readyToSelNumber}>
                                            {productData?.ready_to_sale}
                                        </Text>
                                    </View>
                                    <LinearGradient
                                        colors={["#5FA2A6", "rgba(95, 162, 166, 0.62)"]}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 1}}
                                        locations={[0.256, 0.7524]}
                                        style={styles.readyToSellBtn}
                                    >
                                        <Text style={styles.readyToSellBtnText}>مشاهده</Text>
                                    </LinearGradient>
                                </LinearGradient>
                                <LinearGradient
                                    colors={["#D3E0F5", "rgba(211, 224, 245, 0.00)"]}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}}
                                    locations={[0.4635, 1]}
                                    style={{
                                        flex: 1,
                                        borderRadius: 12,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        paddingHorizontal: 16,
                                        paddingVertical: 16,
                                        overflow: "hidden",
                                    }}
                                >
                                    <Icon
                                        name="treeBlue"
                                        style={{position: "absolute", bottom: 0, right: 11}}
                                    />
                                    <Text
                                        style={{
                                            color: "#0043B4A6",
                                            fontFamily: "regular",
                                            fontSize: 16,
                                        }}
                                    >
                                        فروخته شده
                                    </Text>
                                    <View style={{flexDirection: "row", alignItems: "baseline"}}>
                                        <Text style={{color: "#0043B4A6", fontFamily: "bold"}}>
                                            {productData?.sold > 0 ? " هزارتن" : "تن"}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: "Black",
                                                fontSize: 36,
                                                color: "#0043B4A6",
                                            }}
                                        >
                                            {productData?.sold}
                                        </Text>
                                    </View>
                                    <LinearGradient
                                        colors={["#2857A4", "rgba(40, 87, 164, 0.70)"]}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 1}}
                                        locations={[0.1956, 0.8865]}
                                        style={{
                                            paddingHorizontal: 16,
                                            paddingVertical: 8,
                                            borderRadius: 12,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Text style={styles.readyToSellBtnText}>تاریخچه فروش</Text>
                                    </LinearGradient>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={styles.header}>
                            <View style={styles.headerMore}>
                                <Icon name="arrowLeft"/>
                                <Text style={styles.headerTitle}>بیشتر</Text>
                            </View>
                            <Text style={styles.headerTitle}>تقویم</Text>
                        </View>
                        <View>
                            <InfoBottomSheet toUp={550} bottomSheetOpen={isActivePopup} isActivePopup={isActivePopup} setIsActivePopup={setIsActivePopup}/>
                        </View>
                    </ScrollView>

                </SafeAreaView>
            )}
        </>

    );
};
export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
        width: "100%",
        // paddingHorizontal : 16
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 8,
    },
    headerTitle: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 22,
    },
    headerMore: {
        flexDirection: "row",
        alignItems: "center",
    },
    landSlider: {
        backgroundColor: Colors.whiteColor,
        borderColor: Colors.border,
        borderRadius: 24,
        marginVertical: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 10
    },
    landSliderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    landSliderTitle: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 20,
    },
    landSliderHeaderLeft: {
        backgroundColor: Colors.primaryOpacity,
        paddingHorizontal: 16,
        paddingVertical: 2,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },
    landSliderHeaderLeftTitle: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 16,
    },
    landSliderHeaderLeftSubTitle: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 16,
    },
    seeMore: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 16,
        textAlign: "left",
    },
    productContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        overflow: "hidden",
    },
    inProduction: {
        flex: 1,
        height: 288,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        overflow: "hidden",
    },
    inProductionTitle: {
        color: "#9A9A5A",
        fontFamily: "regular",
        fontSize: 16,
    },
    inProductionWeight: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    inProductionNumber: {
        fontFamily: "Black",
        fontSize: 36,
        color: "#9A9A5A",
    },
    inProductionWeightText: {
        color: "#9A9A5A",
        fontFamily: "bold",
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
    inProductionIcon: {
        position: "absolute",
        bottom: 1,
        left: 6,
    },
    readyToSell: {
        width: "55%",
        gap: 8,
    },
    readyToSellTop: {
        flex: 1,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
        overflow: "hidden",
    },
    readyToSellTitle: {
        color: "#5FA2A6",
        fontFamily: "regular",
        fontSize: 16,
    },
    readyToSelWeight: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    readyToSelWeightText: {
        color: "#5FA2A6",
        fontFamily: "bold",
    },
    readyToSelNumber: {
        fontFamily: "Black",
        fontSize: 36,
        color: "#5FA2A6",
    },
    readyToSellBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    readyToSellBtnText: {
        color: Colors.whiteColor,
        fontFamily: "bold",
        fontSize: 16,
    },
    readyToSellIcon: {
        position: "absolute",
        top: 0,
        right: 4,
    },
});
