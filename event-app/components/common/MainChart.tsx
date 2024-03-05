// import { Dimensions, Text, View } from "react-native";
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";

//   const chartConfigs = [
//     {
//       backgroundColor: '#000000',
//       backgroundGradientFrom: '#1E2923',
//       backgroundGradientTo: '#08130D',
//       color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//       style: {
//         borderRadius: 16
//       }
//     },
//     {
//       backgroundColor: '#022173',
//       backgroundGradientFrom: '#022173',
//       backgroundGradientTo: '#1b3fa0',
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       }
//     },
//     {
//       backgroundColor: '#ffffff',
//       backgroundGradientFrom: '#ffffff',
//       backgroundGradientTo: '#ffffff',
//       color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
//     },
//     {
//       backgroundColor: '#26872a',
//       backgroundGradientFrom: '#43a047',
//       backgroundGradientTo: '#66bb6a',
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       }
//     },
//     {
//       backgroundColor: '#000000',
//       backgroundGradientFrom: '#000000',
//       backgroundGradientTo: '#000000',
//       color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//     }, {
//       backgroundColor: '#0091EA',
//       backgroundGradientFrom: '#0091EA',
//       backgroundGradientTo: '#0091EA',
//       color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//     },
//     {
//       backgroundColor: '#e26a00',
//       backgroundGradientFrom: '#fb8c00',
//       backgroundGradientTo: '#ffa726',
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       }
//     },
//     {
//       backgroundColor: '#b90602',
//       backgroundGradientFrom: '#e53935',
//       backgroundGradientTo: '#ef5350',
//       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//       style: {
//         borderRadius: 16
//       }
//     },
//     {
//       backgroundColor: '#ff3e03',
//       backgroundGradientFrom: '#ff3e03',
//       backgroundGradientTo: '#ff3e03',
//       color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
//     }
//   ]
  

// const MainChart = () => {
//     return (
//         <View>
//         <LineChart
//           data={{
//             labels: [''],
//             datasets: [
//               {
//                 data: [
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100
//                 ]
//               }
//             ]
//           }}
//           width={Dimensions.get("window").width} // from react-native
//           height={220}
//           yAxisLabel="$"
//           yAxisSuffix="k"
//           yAxisInterval={1} // optional, defaults to 1
//           chartConfig={{
//             backgroundColor: "red",
//             backgroundGradientFrom: "red",
//             backgroundGradientTo: "#ffa726",
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16
//             },
//             propsForDots: {
//               r: "6",
//               strokeWidth: "2",
//               stroke: "#ffa726"
//             }
//           }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 16
//           }}
//         />
//       </View>
//     )
// }

// export default MainChart


import { PieChart } from "react-native-gifted-charts";
import { View,Text } from "react-native";
        
const MainChart = () => {
    const pieData = [
        {value: 54, color: 'rgba(163, 199, 100, 0.20)', text: 'سیب'},
        {value: 40, color: 'rgba(249, 133, 0, 0.20)', text: '30%'},
        {value: 20, color: 'rgba(249, 72, 72, 0.20)', text: '26%'},
    ];
    
    // style={{transform:[{scale:0.2}],backgroundColor:'red',marginTop:-40}}
    return(
        <View style={{transform:[{scale:0.6}],width:'auto',height:200,marginTop:-40}}>
            <PieChart
            centerLabelComponent={() => <View><Text>Hello</Text></View>}
            showText
            radius={150}
            textSize={20}
            textColor="red"
            textBackgroundRadius={26}
            data={pieData}
            />
    </View>
    )
};

export default MainChart