import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Colors from "../../constants/Colors";
import Icon from "../../components/common/Icon";
import { Image } from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        isActivePopup={isActivePopup}
        setIsActivePopup={setIsActivePopup}
      />
      <ScrollView style={{ paddingHorizontal: 16, width: "100%" }}>
        <View style={styles.header}>
          <View style={styles.headerMore}>
            <Icon name="arrowLeft" />
            <Text style={styles.headerTitle}>بیشتر</Text>
          </View>
          <Text style={styles.headerTitle}>زمین ها</Text>
        </View>

        <View style={{ alignItems: "center", borderRadius: 24 }}>
          <Swiper showsPagination={false} style={{ height: 315 }}>
            {[0, 0, 0, 0].map((item) => (
              <View style={styles.landSlider}>
                <View style={styles.landSliderHeader}>
                  <View style={styles.landSliderHeaderLeft}>
                    <Text style={styles.landSliderHeaderLeftSubTitle}>
                      ۱۰۰۰ هکتار
                    </Text>
                    <Text style={styles.landSliderHeaderLeftTitle}>
                      مساحت :
                    </Text>
                  </View>
                  <Text style={styles.landSliderTitle}>زمین لاریجان</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 16,
                  }}
                >
                  <Image source={require("./../../assets/images/chart.png")} />
                </View>
                <Text style={styles.seeMore}>مشاهده بیشتر</Text>
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
          <LinearGradient
            colors={["#E5E5CD", "rgba(229, 229, 205, 0.42)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.6584, 0.9046]}
            style={styles.inProduction}
          >
            <Text style={styles.inProductionTitle}>درحال تولید</Text>
            <View style={styles.inProductionWeight}>
              <Text style={styles.inProductionWeightText}>هزارتن</Text>
              <Text style={styles.inProductionNumber}>12</Text>
            </View>

            <LinearGradient
              colors={["#B3B37A", "rgba(179, 179, 122, 0.60)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0.2367, 0.8321]}
              style={{ flex: 1 }}
            >
              <Text>asjcknaskjc</Text>
            </LinearGradient>
          </LinearGradient>

          <LinearGradient
            colors={["#B3B37A", "rgba(179, 179, 122, 0.60)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.2367, 0.8321]}
            style={{ flex: 1 }}
          >
            <Text>asjcknaskjc</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
    alignItems: "center",
    paddingVertical: StatusBar.currentHeight,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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
});
