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
        <View style={{transform: [
            {scale: 1},
          ],marginLeft:-20}}>
  <LineChart
    data={{
      labels: ['1398','1399','1400','1401','1402'],
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
      labelColor: (opacity = 0) => `#44898E`,
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
    bezier
    style={{
        marginTop:20,
        
    }}
  />
</View>
    )
  }

  export default MainChart