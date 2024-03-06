import {StatusBar, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import {Image} from "expo-image";
import React from "react";
import {useRouter} from "expo-router";


export default function ProductItem(p: { item: any }) {
  console.log(p.item)
    const router = useRouter();
    return (
        <View style={styles.productItem} onTouchEnd={() => router.push(`/user-panel/product/${p.item.id}`)}>
            <View style={styles.productItemDetails}>
                <View style={styles.productItemDetailsLeft}>
                    {p?.item?.status === "s" && (
                        <LinearGradient
                            colors={["#F9DEDB", "#F9DEDB"]}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            locations={[0.0745, 0.9445]}
                            style={{
                                // flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderRadius: 8,
                                paddingHorizontal: 12,
                                paddingVertical: 4,
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#793A35",
                                    fontFamily: "bold",
                                    fontSize: 16,
                                }}
                            >
                                {p?.item?.status === "s" && "فروخته شده"}
                                {p?.item?.status === "p" && "در حال تولید"}
                                {p?.item?.status === "nh" && "برداشت نشده"}
                                {/* {item?.status} */}
                            </Text>
                        </LinearGradient>
                    )}
                    {p?.item?.status === "p" && (
                        <LinearGradient
                            colors={[
                                Colors.diactivePageColor,
                                Colors.diactivePageColor,
                            ]}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            locations={[0.0745, 0.9445]}
                            style={{
                                // flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderRadius: 8,
                                paddingHorizontal: 12,
                                paddingVertical: 4,
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.textColorDark,
                                    fontFamily: 'bold',
                                    fontSize: 16,
                                }}
                            >
                                {p?.item?.status === "s" && "فروخته شده"}
                                {p?.item?.status === "p" && "در حال تولید"}
                                {p?.item?.status === "nh" && "برداشت نشده"}
                                {/* {item?.status} */}
                            </Text>
                        </LinearGradient>
                    )}
                    {p?.item?.status === "nh" && (
                        <LinearGradient
                            colors={[
                                '#E5E5CD',
                                '#E5E5CD'
                            ]}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            locations={[0.0745, 0.9445]}
                            style={{
                                // flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderRadius: 8,
                                paddingHorizontal: 12,
                                paddingVertical: 4,
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#4F4F17",
                                    fontFamily: "bold",
                                    fontSize: 16,
                                }}
                            >
                                {p?.item?.status === "s" && "فروخته شده"}
                                {p?.item?.status === "p" && "در حال تولید"}
                                {p?.item?.status === "nh" && "برداشت نشده"}
                                {/* {item?.status} */}
                            </Text>
                        </LinearGradient>
                    )}
                    <LinearGradient
                        colors={["#E5E5CD", "#E5E5CD"]}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        locations={[0.0745, 0.9445]}
                        style={{
                            width: "auto",
                            // flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.textColorDark,
                                fontFamily: "bold",
                                fontSize: 16,
                            }}
                        >
                            {p?.item?.farm}
                        </Text>
                    </LinearGradient>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        {p?.item?.has_obeyed_suggestion && (
                            <View
                                style={{
                                    paddingHorizontal: 8,
                                    paddingVertical: 7,
                                    backgroundColor: Colors.primary,
                                    borderRadius: 8,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "bold",
                                        color: Colors.whiteColor,
                                    }}
                                >
                                    ۱۰٪
                                </Text>
                            </View>
                        )}
                        <LinearGradient
                            colors={[
                                Colors.diactivePageColor,
                                Colors.diactivePageColor,
                            ]}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            locations={[0.0745, 0.9445]}
                            style={{
                                // flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                borderRadius: 8,
                                paddingHorizontal: 12,
                                paddingVertical: 4,
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.textColorDark,
                                    fontFamily: "bold",
                                    fontSize: 16,
                                }}
                            >
                                {p?.item?.has_obeyed_suggestion
                                    ? "مطابق پیشنهاد"
                                    : "غیرمطابق با پیشنهاد"}
                            </Text>
                        </LinearGradient>
                    </View>
                </View>
                <Text style={styles.nameOfItem}>{p?.item?.name}</Text>
            </View>
            {/* styles.productItemImage */}
            <View
                style={{
                    width: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: p?.item?.category.hex + '10',
                    borderTopRightRadius: 12,
                    borderBottomRightRadius: 12,
                }}
            >
                <View style={{alignItems: "center",paddingVertical:10, gap: 10}}>
                    <Image
                        style={{width: 34.52, height: 40}}
                        source={{uri: p?.item?.category?.icon}}
                    />
                    <Text
                        style={{
                            color: p?.item?.category.hex,
                            fontFamily: "bold",
                            fontSize: 16,
                        }}
                    >
                        {p?.item?.category?.title}
                    </Text>
                </View>
            </View>
            <View style={{ width : `${p.item?.progress_bar}%` ,
            position : 'absolute' , 
            left : 0 , bottom : 0 , 
            height : 4 , 
            borderBottomLeftRadius : 16,
            backgroundColor : '#7EBABF' }} />
        </View>
    )
}

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
        position : 'relative'
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
        fontSize: 17,
    },
});
