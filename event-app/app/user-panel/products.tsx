import {StatusBar, StyleSheet, Text, View, ActivityIndicator, ScrollView} from "react-native";
import React, {useEffect, useState, useRef} from "react";
import Navbar from "../../components/common/Navbar";
import Icon from "../../components/common/Icon";
import Colors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import {axiosInstance} from "../../Utills/axios";
import {useRouter} from "expo-router";
import {useRoute} from "@react-navigation/native";
import {Image} from 'expo-image'
import ProductItem from "../../components/product/productItem";
import 'react-native-gesture-handler'
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import AddProduct from "../../components/popup/Product/AddProduct";
import FilterProduct from "../../components/popup/Product/FilterProduct";

const Index = () => {
    const bottomSheetModalRef = useRef(null)
    const router = useRoute();
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState<boolean>(false)

    const getProduct = () => {
        setIsloading(true)
        axiosInstance
            .get(`api/farm/products/`)
            .then((res) => {
                setData(res?.data?.results);
                setIsloading(false)
            });
    }


    useEffect(() => {
        getProduct()
    }, []);

    const [isActivePopup, setIsActivePopup] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [filterPopup, setFilterPopup] = useState(false);

    return (
        <>
            {isLoading ? (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                    <ActivityIndicator color={Colors.primary} size={50}/>
                </View>
            ) : (
                <ScrollView style={styles.container}>
                    <Navbar
                        isActivePopup={isActivePopup}
                        setIsActivePopup={setIsActivePopup}
                    />
                    <AddProduct getProduct={getProduct} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                    <FilterProduct modalVisible={filterPopup} setModalVisible={setFilterPopup}/>
                    <View style={styles.localContainer}>
                        <View style={styles.filterHeader}>
                            <View style={styles.filterBtn} onTouchEnd={() => {
                                setModalVisible(true)
                            }}>
                                <Icon name="plusIcon"/>
                                <Text style={styles.filterBtnText}>ایجاد محصول</Text>
                            </View>
                            <View style={styles.filterIcon} onTouchEnd={() => {
                                setFilterPopup(true)
                            }}>
                                <Icon name="filter"/>
                            </View>
                        </View>
                        <View style={styles.productsContainer}>
                            {data.map((item) => {
                                return (
                                    <ProductItem item={item}/>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            )}

        </>

    );
};

export default Index;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: StatusBar.currentHeight,
        backgroundColor: "#fafafa",
    },
    localContainer: {
        paddingHorizontal: 16,
        marginBottom: 80
    },
    filterHeader: {

        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    filterBtn: {
        backgroundColor: Colors.primary,
        // width: 145,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    filterBtnText: {
        fontFamily: "bold",
        fontSize: 16,
        color: Colors.whiteColor,

    },
    filterIcon: {
        backgroundColor: "#E5E5CD",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 12,
    },
    productsContainer: {
        gap: 8,
        marginTop: 8,
    },
    productItem: {
        // backgroundColor: "red",
        borderColor: Colors.border,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
    },
    productItemImage: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    productItemDetails: {
        width: "70%",
        paddingHorizontal: 8,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        // alignItems: "flex-start",
        backgroundColor: Colors.whiteColor,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    productItemDetailsLeft: {
        gap: 8,
        alignItems: "flex-start",
    },
    status: {
        backgroundColor: Colors.diactivePageColor,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontFamily: "bold",
        fontSize: 16,
        color: Colors.textColorDark,
    },
    name: {
        backgroundColor: "#E5E5CD",
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 8,
    },
    nameText: {
        fontFamily: "bold",
        fontSize: 16,
    },
    nameOfItem: {
        color: "#0F393D",
        fontFamily: "Black",
        fontSize: 20,
    },
});
