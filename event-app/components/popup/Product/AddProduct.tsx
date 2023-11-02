import React, {useEffect, useState} from 'react';
import {Button, View, Modal, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from "../../common/Icon";
import Colors from "../../../constants/Colors";
import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
import { SelectList } from 'react-native-dropdown-select-list'
import {axiosInstance} from "../../../Utills/axios";
//
const App = (p:{modalVisible:any,setModalVisible:any}) => {
    const [selected, setSelected] = React.useState("");

    const data = [
        {key:'1', value:'سشیشسط', disabled:true},
        {key:'2', value:'شسشسیشسی'},
        {key:'3', value:'شسیشسیشسی'},
        {key:'4', value:'شسیشسیشسی', disabled:true},
        {key:'5', value:'شسیشسیشسی'},
        {key:'6', value:'شسی شسی'},
        {key:'7', value:'شسیشسی'},
    ]
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     axiosInstance.get('/api/farm/category/').then(res => {
    //         setData(res?.data?.results)
    //         console.log(res?.data?.results)
    //     })
    // }, [data]);
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
                            <Text style={styles.headText}>ایجاد محصول</Text>
                        </View>
                        <View style={{paddingHorizontal: 16}}>
                            <View style={styles.searchBar}>
                                <TextInput style={{width: '100%', fontFamily: 'bold', fontSize: 14, textAlign: 'right'}} placeholder={'نام محصول'} placeholderTextColor={'#7E7E7E'}/>
                            </View>
                            <View>
                                <Text style={{color:'#0F393D',fontFamily:'bold',fontSize:20,marginTop:10}}>نوع محصول</Text>
                                <SelectList
                                    setSelected={(val:any) => setSelected(val)}
                                    data={data}
                                    fontFamily='bold'
                                    onSelect={() => alert(selected)}
                                    label="Categories"
                                    save="value"
                                    boxStyles={{borderColor: '#eee',borderWidth: 1,direction:'ltr'}}
                                    arrowicon={<Icon name="arrowDown" />}
                                    // searchicon={<FontAwesome name="search" size={12} color={'black'} />}
                                />
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
        borderTopEndRadius:24,
        borderTopStartRadius:24,
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
});

export default App;