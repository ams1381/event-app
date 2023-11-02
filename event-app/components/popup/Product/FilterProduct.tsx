import React, {useEffect, useState} from 'react';
import {Button, View, Modal, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from "../../common/Icon";
import Colors from "../../../constants/Colors";
import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
import {SelectList} from 'react-native-dropdown-select-list'
import {axiosInstance} from "../../../Utills/axios";

import Checkbox from 'expo-checkbox';
//
const FilterProduct = (p: { modalVisible: any, setModalVisible: any }) => {
    const [selected, setSelected] = React.useState("");

    const [datas, setDatas] = useState([])
    useEffect(() => {
        axiosInstance.get('/api/farm/category/').then(res => {
            setDatas(res?.data?.results)
            console.log(res?.data?.results)
            console.log(res.data.results[0].title)
            console.log(res.data.results[0].id)
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
        console.log(selectItem?.id)
    }
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
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
                            <Text style={styles.headText}>فیلتر</Text>
                        </View>
                        <View style={{paddingHorizontal: 16}}>
                            <View style={styles.searchBar}>
                                <TextInput style={{width: '90%', fontFamily: 'bold', fontSize: 14, textAlign: 'right'}} placeholder={'جستجو'} placeholderTextColor={'#7E7E7E'}/>
                                <Icon name={'search'}/>
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
                            <Icon name={'datePicker3'} style={styles.datePicker}/>
                            <View style={{flexDirection: 'row', alignItems: 'baseline',justifyContent:'flex-end'}}>
                                <Text style={{
                                    fontFamily: 'regular',
                                    fontSize: 14,
                                    marginTop: 15
                                }}>مطابق با پیشنهاد</Text>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#4630EB' : undefined}
                                />
                            </View>
                            <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                                <View style={{flex: 1, paddingVertical: 10, backgroundColor: '#CEE9EB', borderRadius: 12}} onTouchEnd={() => {
                                    p.setModalVisible(false)
                                }}>
                                    <Text style={{textAlign: 'center', fontFamily: 'bold', fontSize: 14, color: '#44898E'}}>اعمال فیلتر</Text>
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
        marginTop: 20,
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