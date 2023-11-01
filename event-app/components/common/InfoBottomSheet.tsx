import {Text, View, StyleSheet, ScrollView, Image, TouchableNativeFeedback, Animated, Dimensions} from "react-native";
import Colors from "../../constants/Colors";
import React, {useEffect, useState} from "react";
import Icon from "./Icon";

export default function InfoBottomSheet(p: {
    isActivePopup: any,
    setIsActivePopup: any,
    bottomSheetOpen: boolean,
    toUp:number
}) {
    const BottomSheetAnimation = useState(new Animated.Value(0))[0];
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen').height;

    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });
    useEffect(() => {
        if (p.isActivePopup) {
            Animated.timing(BottomSheetAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(BottomSheetAnimation, {
                toValue: -1,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
        // openPopup()
    }, [p.isActivePopup]);

    return (
        <Animated.View style={{
            ...styles.Y,
            transform: [{
                translateY: BottomSheetAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, p.toUp]
                })
            }]
        }}>
            <View style={styles.container}>
                <ScrollView style={styles.itemContainer}>
                    <View style={styles.head}>
                        <View onTouchEnd={() => p.setIsActivePopup(false)}>
                            <Icon name={'X'}/>
                        </View>
                        <Text style={styles.headText}>راهنما</Text>
                    </View>
                    <Image source={require('./../../assets/images/hepl.png')}/>
                    <Text style={styles.title}>اموزش متنی :</Text>
                    <Text style={styles.caption}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                        طراحان
                        گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</Text>
                    <View style={styles.btnContainer}>
                        <TouchableNativeFeedback style={{borderRadius: 10}}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>دانلود فایل PDF</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.whiteColor,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        paddingVertical: 24,
        paddingHorizontal: 24
    },
    Y: {
        width: '100%',
        height: '100%',
        zIndex: 2,
        position: 'absolute',
        top: 350,
    },
    itemContainer: {
        width: '100%',
        height: '100%',
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        gap: 10
    },
    title: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: 'bold',

    },
    caption: {
        color: Colors.textColorDark,
        fontFamily: 'bold',
        lineHeight: 27,
        fontSize: 16,

    },
    btnContainer: {
        marginBottom: 50,
        width: '100%',
        height: 100,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        marginTop: 8,
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
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headText: {
        color: Colors.primary,
        fontFamily: 'bold',
        fontSize: 20,
    },
    circle: {
        position: "absolute",
        bottom: 76,
        right: 0,
        zIndex: -1,
    },
})