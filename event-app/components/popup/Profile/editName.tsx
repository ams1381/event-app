import {
  Text,
  View,
  StyleSheet,
  Animated,
  Keyboard,
  TouchableNativeFeedback,
  ActivityIndicator, Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import Colors from "../../../constants/Colors";
import Icon from "../../common/Icon";
import { TextInput } from "react-native-gesture-handler";
import { Color } from "ansi-fragments/build/fragments/Color";
import { axiosInstance } from "../../../Utills/axios";

export default function EditName(p: {
  setEditName: any;
  editName: any;
  userId: any;
  getUserData: any;
  nameValue: any;
  last_name: any;
}) {
  const BottomSheetAnimation = useState(new Animated.Value(0))[0];

  const [first_name, setFirstName] = useState<string>();
  const [last_name, setLastName] = useState<string>();
  const screenDimensions = Dimensions.get('screen').height
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setFirstName(p.nameValue);
    setLastName(p.last_name);
  }, [p.nameValue, p.last_name]);

  const confirmHandler = () => {
    setIsLoading(true);
    axiosInstance
      .patch(`api/core/users/me/`, {
        first_name: first_name?.trim(),
        last_name: last_name?.trim(),
      })
      .then((res) => {
        if (res.status === 200) {
          p?.setEditName(false);
          setIsLoading(false);

        }
        p?.getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (p.editName) {
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
      }).start();
    }
    Keyboard.dismiss();
  }, [p.editName]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [
          {
            translateY: BottomSheetAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [1000,  (-screenDimensions / -2.5)],
            }),
          },
        ],
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
        <View onTouchEnd={() => p?.setEditName(false)} style={{ borderRadius : 5 , overflow : "hidden" }}>
              <TouchableNativeFeedback>
                <View style={{ width : 30 , 
                  height : 30  , 
                  borderRadius : 5 , 
                  overflow : 'hidden' , 
                  justifyContent : 'center' , 
                  alignItems : 'center' 
                  }}>
                  <View >
                      <Icon name={"X"} />
                    </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          <Text style={styles.headTitle}>نام</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            value={first_name}
            onChangeText={(e) => setFirstName(e)}
            style={styles.input}
            placeholder={"نام"}
            placeholderTextColor={"#7E7E7E"}
          />
          <TextInput
            value={last_name}
            onChangeText={(e) => setLastName(e)}
            style={styles.input}
            placeholder={"نام خانوادگی"}
            placeholderTextColor={"#7E7E7E"}
          />
        </View>
        <View style={styles.bottom}>
          <Text
            onPress={() => {
              p?.setEditName(false);
              setLastName("");
            }}
            style={styles.reject}
          >
            لغو
          </Text>
          <Text onPress={confirmHandler} style={styles.confrim}>
            {isLoading ? (
              <ActivityIndicator
                style={{ alignItems: "center" }}
                size={30}
                color={Colors.primary}
              />
            ) : (
              "تایید"
            )}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 350,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 24,
    borderRadius: 16,
    zIndex: 3,
  },
  header: {
    width: "100%",
    backgroundColor: Colors.secondaryBg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  headTitle: {
    color: Colors.primary,
    fontFamily: "bold",
    fontSize: 20,
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "100%",
    gap: 10,
  },
  input: {
    width: "100%",
    borderColor: Colors.border,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    color: Colors.textColorDark,
    fontSize: 20,
    fontFamily: "bold",
    textAlign: "right",
  },
  bottom: {
    backgroundColor: Colors.secondaryBg,
    width: "100%",
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  reject: {
    fontSize: 16,
    fontFamily: "bold",
    color: "#333",
    width: "50%",
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    textAlign: "center",
  },
  confrim: {
    fontSize: 16,
    fontFamily: "bold",
    color: Colors.primary,
    width: "50%",
    height: "100%",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderLeftColor: Colors.secondary,
    borderLeftWidth: 1,
  },
});
