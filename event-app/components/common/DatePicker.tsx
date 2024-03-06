import React from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

const JalaaliExample = () => {
  return (
    <DatePicker
      isGregorian={false}
      options={{
        defaultFont: 'bold',
        headerFont: 'bold',
        backgroundColor: '#fff',
        textHeaderColor: '#44898E',
        textDefaultColor: '#44898E',
        selectedTextColor: '#fff',
        mainColor: '#44898E',
        textSecondaryColor: '#eee',
        borderColor: '#eee',
        borderRadius:20,
      }}
      selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
    />
  );
};

export default JalaaliExample