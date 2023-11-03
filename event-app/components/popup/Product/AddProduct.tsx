import React, {useEffect, useState} from 'react';
import {Button, View, Modal, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from "../../common/Icon";
import Colors from "../../../constants/Colors";
import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
import {SelectList} from 'react-native-dropdown-select-list'
import {axiosInstance} from "../../../Utills/axios";

import Checkbox from 'expo-checkbox';
import Toast from "react-native-toast-message";
//
const FilterProduct = (p: {
    modalVisible: any,
    setModalVisible: any
    getProduct:any
}) => {
    const [selected, setSelected] = React.useState("");

    const [datas, setDatas] = useState([])
    const [selectProduct, setSeclectProduct] = useState()
    const [selectFarm, setSelectFarm] = useState()

    useEffect(() => {
        axiosInstance.get('/api/farm/category/').then(res => {
            setDatas(res?.data?.results)
        })
    }, []);

    const formattedArray = datas.map((item) => ({
        value: item?.title,
        label: item?.id,
    }));

    const findTypeOfProduct = (param: any) => {
        const selectItem = datas.find(item => {
            return item?.title === param
        })
        setSeclectProduct(selectItem?.id)
    }
    const [isChecked, setChecked] = useState(false);

    const [farms, setFarms] = useState([])
    useEffect(() => {
        axiosInstance.get('api/farm/farms/').then(res => {
            setFarms(res?.data?.results)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const farmArray = farms.map((item) => ({
        value: item?.name,
        label: item?.id,
    }));


    const findFarm = (param: any) => {
        const selectItem = farms.find(item => {
            return item?.name === param
        })
        setSelectFarm(selectItem?.id)

    }


    const [productName, setProductName] = useState<string>()
    const [annual_capacity, setAnnual_capacity] = useState<string>()

    const createHanlder = () => {
        axiosInstance.post('api/farm/products/', {
            name: productName?.trim(),
            category: selectProduct,
            product_analysis:
                {
                    "annual_capacity": 92233,
                    "estimated_harvest_date": "2019-08-24"
                },
            farm: selectFarm
        }).then(res => {
            console.log(res)
            if (res?.status === 201) {
                setProductName('')
                setAnnual_capacity('')
                p.setModalVisible(false)
                p.getProduct()
                setTimeout(() => {
                    Toast.show({
                        type: 'success',
                        position: 'top',
                        text1: 'باموفقیت ایجاد شد',
                    });
                }, 100)
            }
        }).catch(err => {
            const ERROR_MESSAGE =
                err?.response?.data[Object.keys(err?.response?.data)[0]];
            setTimeout(() => {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: ERROR_MESSAGE[0],
                });
            }, 100)
        })
        //

        const x =
            {
                "annual_capacity": 92233,
                "estimated_harvest_date": "2019-08-24"
            }
        console.log('name:', productName, 'selectProduct', selectProduct, x, 'farm', selectFarm)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={{width: 200, height: 100, position: 'absolute', top: -50, zIndex: 100}}>
                    <Toast ref={(ref) => Toast.setRef(ref)}/>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={p?.modalVisible}
                    onRequestClose={() => {
                        p?.setModalVisible(!p?.modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <ScrollView style={styles.modalView}>
                            <View style={styles.head}>
                                <View onTouchEnd={() => p?.setModalVisible(false)}>
                                    <Icon name={'X'}/>
                                </View>
                                <Text style={styles.headText}>ایجاد محصول</Text>
                            </View>
                            <View style={{paddingHorizontal: 16}}>
                                <View style={styles.searchBar}>
                                    <TextInput style={{width: '100%', fontFamily: 'bold', fontSize: 14, textAlign: 'right'}} value={productName} onChangeText={(e) => setProductName(e)} placeholder={'نام محصول'} placeholderTextColor={'#7E7E7E'}/>
                                    {/*<Icon name={'search'}/>*/}
                                </View>
                                <View>
                                    <Text style={{color: '#0F393D', fontFamily: 'bold', fontSize: 20, marginTop: 10}}>نوع محصول</Text>
                                    <SelectList
                                        setSelected={(val: any) => findTypeOfProduct(val)}
                                        data={formattedArray}
                                        fontFamily='bold'
                                        label="Categories"
                                        notFoundText={'یافت نشد'}
                                        save="value"
                                        closeicon={<Icon name="X"/>}
                                        placeholder={'انتخاب کنید'}
                                        searchPlaceholder={'جستجو کنید'}
                                        boxStyles={{borderColor: '#eee', borderRadius: 16, marginTop: 10, flexDirection: 'row-reverse', borderWidth: 1, direction: 'ltr', paddingVertical: 15}}
                                        arrowicon={<Icon name="arrowDown"/>}

                                    />
                                </View>
                                <View>
                                    <Text style={{color: '#0F393D', fontFamily: 'bold', fontSize: 20, marginTop: 10}}>زمین</Text>
                                    <SelectList
                                        setSelected={(val: any) => findFarm(val)}
                                        data={farmArray}
                                        fontFamily='bold'
                                        label="Categories"
                                        notFoundText={'یافت نشد'}
                                        save="value"
                                        closeicon={<Icon name="X"/>}
                                        placeholder={'انتخاب کنید'}
                                        searchPlaceholder={'جستجو کنید'}
                                        boxStyles={{borderColor: '#eee', borderRadius: 16, marginTop: 10, flexDirection: 'row-reverse', borderWidth: 1, direction: 'ltr', paddingVertical: 15}}
                                        arrowicon={<Icon name="arrowDown"/>}

                                    />
                                </View>
                                <Text style={{color: '#0F393D', fontFamily: 'bold', fontSize: 20, marginTop: 10}}>تاریخ تخمین</Text>
                                <Icon name={'datePicker3'} style={styles.datePicker}/>
                                <Text style={{color: '#0F393D', fontFamily: 'bold', fontSize: 20, marginTop: 10}}>تخمین وزن برداشت</Text>
                                <View style={styles.searchBar}>
                                    <TextInput keyboardType={'number-pad'} value={annual_capacity} onChangeText={(e) => setAnnual_capacity(e)} style={{width: '100%', fontFamily: 'bold', fontSize: 14, textAlign: 'right'}} placeholder={'تخمین وزن برداشت'} placeholderTextColor={'#7E7E7E'}/>
                                    {/*<Icon name={'search'}/>*/}
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 10, gap: 10, marginTop: 10}}>
                                    <View style={{flex: 1, paddingVertical: 10, backgroundColor: '#CEE9EB', borderRadius: 12}} onTouchEnd={createHanlder}>
                                        <Text style={{textAlign: 'center', fontFamily: 'bold', fontSize: 14, color: '#44898E'}}>ایجاد محصول </Text>
                                    </View>
                                    <View style={{flex: 1, paddingVertical: 10, backgroundColor: '#E4E4E4', borderRadius: 12}} onTouchEnd={() => {
                                        p.setModalVisible(false)
                                    }}>
                                        <Text style={{textAlign: 'center', fontFamily: 'bold', fontSize: 14, color: '#B46A63'}}>لغو</Text>
                                    </View>
                                </View>

                                {/*<View style={{*/}
                                {/*    flexDirection: 'row',*/}
                                {/*    gap: 10,*/}
                                {/*    marginTop: 10*/}
                                {/*}}>*/}
                                {/*    <View style={{backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderRadius: 12,  borderColor: '#eee', borderWidth: 1}}>*/}
                                {/*        <Text style={{textAlign: 'right',}}>*/}
                                {/*            <Text style={{color: "#0F393D", fontFamily: 'bold', fontSize: 16}}>همه</Text>*/}
                                {/*        </Text>*/}
                                {/*    </View>*/}
                                {/*    <View style={{backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '47%', borderRadius: 12,  borderColor: '#eee', borderWidth: 1}}>*/}
                                {/*        <Text style={{textAlign: 'right',}}>*/}
                                {/*            <Text style={{color: "#0F393D", fontFamily: 'bold', fontSize: 16}}>همه</Text>*/}
                                {/*        </Text>*/}
                                {/*    </View>*/}
                                {/*</View>*/}
                                {/*<Text style={{color:'#0F393D',fontSize:20,fontFamily:'bold',marginTop:10,}}>*/}
                                {/*    وضعیت*/}
                                {/*</Text>*/}
                                {/*<View style={{backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 12,  borderColor: '#eee', borderWidth: 1}}>*/}
                                {/*    <Text style={{textAlign: 'right',}}>*/}
                                {/*        <Text style={{color: "#0F393D", fontFamily: 'bold', fontSize: 16}}>همه</Text>*/}
                                {/*    </Text>*/}
                                {/*</View>*/}
                                {/*<View>*/}
                                {/*    <Text>مطابق با پیشنهاد</Text>*/}
                                {/*</View>*/}
                            </View>
                        </ScrollView>
                    </View>
                </Modal>

            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
    },
    modalView: {
        backgroundColor: "white",
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomColor: '#EEE',
        borderBottomWidth: 1,
        backgroundColor: '#FAFAFA',
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
    },
    headText: {
        color: Colors.primary,
        fontFamily: 'bold',
        fontSize: 20,
    },
    searchBar: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderColor: '#E4E4E4',
        borderRadius: 16,
        borderWidth: 1,
        gap: 10,
        marginTop: 10
    },
    datePicker: {
        marginTop: 10,
        width: '100%',
        height: 310,
    },
    checkbox: {
        marginLeft: 8,
        width: 15,
        height: 15,
    },
});

export default FilterProduct;