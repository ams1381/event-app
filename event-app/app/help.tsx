import {Text, View, StyleSheet, StatusBar, Image, ScrollView, TouchableWithoutFeedback, TouchableNativeFeedback} from "react-native";
import Colors from "../constants/Colors";
import React from "react";
import {useRouter} from "expo-router";

export default function Help() {
    const router = useRouter()
    return (
        <ScrollView style={styles.container}>
            <Image source={require('./../assets/images/hepl.png')}/>
            <Text style={styles.title}>اموزش متنی :</Text>
            <Text style={styles.caption}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</Text>
            {/*<View style={{overflow: "hidden"}}>*/}
            {/*    <TouchableNativeFeedback>*/}
            {/*        <View style={styles.btn}>*/}
            {/*            <Text style={styles.btnText}>دانلود فایل PDF</Text>*/}
            {/*        </View>*/}
            {/*    </TouchableNativeFeedback>*/}
            {/*</View>*/}
            <View style={styles.btnContainer}>
                <TouchableNativeFeedback onPress={() => router.push('/user-panel/profile')} style={{borderRadius: 10}}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>ورود</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FAFAFA',
        paddingVertical: StatusBar.currentHeight,
    },
    title: {
        color: Colors.primary,
        fontFamily: "bold",
        fontSize: 24,
    },
    caption: {
        color: Colors.textColorDark,
        textAlign: 'right',
        fontFamily: 'bold',
        fontSize: 16,
        marginVertical: 10,
        lineHeight:27,
    },
    btnContainer: {
        marginBottom: 50,
        width: '100%',
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        marginTop: 8,
        backgroundColor: 'red'
    },
    btn: {
        backgroundColor: Colors.primary,
        // marginBottom: 50,
        borderRadius: 10,
        paddingVertical: 16,
        width: '100%'
    },
    btnText: {
        textAlign: 'center',
        color: Colors.whiteColor,
        fontSize: 16,
        fontFamily: 'bold'
    },


})