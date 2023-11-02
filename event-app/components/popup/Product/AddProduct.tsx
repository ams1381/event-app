import React, {useState} from 'react';
import {Button, View, Modal, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from "../../common/Icon";
import Colors from "../../../constants/Colors";

const App = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    return (
        <View style={styles.container}>

            <Button title="Open Bottom Sheet" onPress={() => setModalVisible(true)}/>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <ScrollView style={styles.modalView}>
                        <View style={styles.head}>
                            <View onTouchEnd={() => setModalVisible(false)}>
                                <Icon name={'X'}/>
                            </View>
                            <Text style={styles.headText}>راهنما</Text>
                        </View>
                        <View style={{paddingHorizontal: 16}}>
                            <View style={styles.searchBar}>
                                <TextInput style={{width: '90%', fontFamily: 'bold', fontSize: 14, textAlign: 'right'}} placeholder={'جستجو'}/>
                                <Icon name={'search'}/>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                gap: 10,
                                marginTop: 10
                            }}>
                                <View style={{backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderRadius: 12,  borderColor: '#eee', borderWidth: 1}}>
                                    <Text style={{textAlign: 'right',}}>
                                        <Text style={{color: "#0F393D", fontFamily: 'bold', fontSize: 16}}>همه</Text>
                                    </Text>
                                </View>
                                <View style={{backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '47%', borderRadius: 12,  borderColor: '#eee', borderWidth: 1}}>
                                    <Text style={{textAlign: 'right',}}>
                                        <Text style={{color: "#0F393D", fontFamily: 'bold', fontSize: 16}}>همه</Text>
                                    </Text>
                                </View>
                            </View>
                            <Text style={{color:'#0F393D',fontSize:20,fontFamily:'bold',marginTop:10,}}>
                                وضعیت
                            </Text>
                            <View style={{backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 12,  borderColor: '#eee', borderWidth: 1}}>
                                <Text style={{textAlign: 'right',}}>
                                    <Text style={{color: "#0F393D", fontFamily: 'bold', fontSize: 16}}>همه</Text>
                                </Text>
                            </View>
                        </View>
                        {/*<View style={styles.acccontainer}>*/}
                        {/*    <TouchableOpacity onPress={() => setExpanded(!expanded)}>*/}
                        {/*        <View style={styles.titleContainer}>*/}
                        {/*            <Text style={styles.title}>عنوان</Text>*/}
                        {/*        </View>*/}
                        {/*    </TouchableOpacity>*/}

                        {/*    {expanded && (*/}
                        {/*        <View style={styles.content}>*/}
                        {/*           <Text>jsncljas</Text>*/}
                        {/*           <Text>jsncljas</Text>*/}
                        {/*           <Text>jsncljas</Text>*/}
                        {/*           <Text>jsncljas</Text>*/}
                        {/*           <Text>jsncljas</Text>*/}
                        {/*           <Text>jsncljas</Text>*/}
                        {/*        </View>*/}
                        {/*    )}*/}

                        {/*</View>*/}
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
        marginTop: 22,
    },
    modalView: {
        height: '90%',
        width: '100%',
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
        backgroundColor: '#FAFAFA'
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