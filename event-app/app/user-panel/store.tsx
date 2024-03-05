import {StatusBar, StyleSheet} from "react-native"
import {View, Text} from "../../components/Themed"
import {SafeAreaView} from "react-native"
import Navbar from "../../components/common/Navbar"
import {useState} from "react"
import Icon from "../../components/common/Icon"
import Colors from "../../constants/Colors"
import HelpBottomSheet from "../../components/common/HelpBottomSheet"
import MainChart from "../../components/common/MainChart"
import DatePicker from "@mohamadkh75/react-native-jalali-datepicker"

const Store = () => {
  const [popupOpen,setPopupOpen] = useState(false)
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#fff"}/>
      <Navbar
        isActivePopup={isActivePopup}
        setIsActivePopup={setIsActivePopup}
      />
      <View style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        marginTop: -15,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <DatePicker />
        <Icon style={{width: 150, height: 150}} name="workerPerson2"/>
        <Text style={{marginTop: 10, fontFamily: 'bold', fontSize: 20, color: Colors.textColor}}>این صفحه در دست توسعه
          است.</Text>
      </View>
      <HelpBottomSheet  active={isActivePopup} setActive={setIsActivePopup}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    display: 'flex',
    // paddingHorizontal : 16
  },
})

export default Store