import {SafeAreaView, StatusBar, Text, View} from "react-native";
import Navbar from "../../components/common/Navbar";
import React, {useState} from "react";
import MainChart from "../../components/common/MainChart";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

const Statistics = () => {
  const [isActivePopup, setIsActivePopup] = useState(false);
  return (
    <SafeAreaView
      style={{width: '100%', backgroundColor: '#fafafa', paddingTop: StatusBar.currentHeight, height: '100%', flex: 1}}>
      <Navbar setIsActivePopup={setIsActivePopup} isActivePopup={isActivePopup}/>
      <View style={{paddingHorizontal: 16}}>
        <View style={{backgroundColor: '#FFF',borderStyle:'solid',borderColor:'#eee',borderRadius:16,borderWidth:1}}>
          <View style={{transform: [{scale: .8}]}}>
            <MainChart/>
          </View>
        </View>
        <View style={{backgroundColor: '#FFF',marginTop:16,borderStyle:'solid',borderColor:'#eee',borderRadius:16,borderWidth:1}}>
          <View style={{transform: [{scale: .8}]}}>
            <ProgressChart
              data={data}
              height={220}
              strokeWidth={16}
              radius={32}
              hideLegend={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Statistics