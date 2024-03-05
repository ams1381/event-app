// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import PersianCalendarPicker from 'react-native-persian-calendar-picker';

// const PersianCalendarPickerExample = () => {
//   const [selectedStartDate, setSelectedStartDate] = useState(null);

//   const onDateChange = (date:any) => {
//     setSelectedStartDate(date);
//   };

//   const startDate = selectedStartDate ? selectedStartDate.toString() : '';

//   return (
//     <View style={styles.container}>
//       <PersianCalendarPicker
//         onDateChange={onDateChange}
// 			/>
//       <View>
//         <Text>SELECTED DATE:{ startDate }</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 100,
//   },
// });

// export default PersianCalendarPickerExample;

import PersianDatePicker from "@rhv79/react-native-persian-date-picker";
import { View } from "react-native";

const days = [
  {
    date: "1401-01-06",
    isOffDay: false,
    description: "روز امید، روز شادباش نویسی",
  },
  {
    date: "1401-01-13",
    isOffDay: true,
    description: "جشن سیزده به در",
  },
];

const DatePicker2 = () => {
  const minDisableDate = "1401-01-03";
  const disableDate = ["1401-01-09"];
  const maxDisableDate = "1401-01-20";
  return (
<View>
  {/** dark mode */}
  <PersianDatePicker
    inputDateFormat="jYYYY-jMM-jDD"
    days={days}
    minDate={minDisableDate}
    maxDate={maxDisableDate}
    disabledDate={disableDate}
    size="m"
    style={{ backgroundColor: "#3c3c3c" }}
    styleYearMonth={{ icons: { color: "#fff" }, title: { color: "#fff" } }}
    styleDay={{
      title: { color: "#000" },
      containerIsDisabled: { backgroundColor: "#8c8c8c55", margin: 2 },
      containerIsSelected: { backgroundColor: "#ffffff66" },
      occasion: { color: "#fff" },
    }}
    styleWeek={{ item: { color: "#fff" } }}
    styleDescription={{ item: { title: { color: "#fff" } } }}
  />

  {/** normal */}
  <PersianDatePicker
    inputDateFormat="jYYYY-jMM-jDD"
    days={days}
    fo
    minDate={minDisableDate}
    maxDate={maxDisableDate}
    disabledDate={disableDate}
    styleDay={{
      containerIsDisabled: { margin: 2 },
    }}
    size="m"
  />
</View>
  )
}

export default DatePicker2