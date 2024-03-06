import { Dimensions, Text, View } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


  const MainChart = () => {
    return (
        <View style={{marginLeft:-55}}>
  <LineChart
    data={{
      labels: ['سشیشسی'],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: "#fff",
      backgroundGradientFrom: "#fff",
      backgroundGradientToOpacity : 1 ,
      fillShadowGradientToOpacity:1,
      backgroundGradientTo: "#fff",
      fillShadowGradientFromOpacity:0.5,
      color: (opacity = 1) => `#44898E`,
      labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        marginTop:20,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#44898E"
      }
    }}
    style={{
        marginTop:20,
        
    }}
  />
</View>
    )
  }

  export default MainChart