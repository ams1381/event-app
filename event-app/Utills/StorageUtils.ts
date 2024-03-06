
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async <T>(key: string, data: T): Promise<void> => {
    try {
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem(key, jsonData);
    } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
    }
};

export const getData = async <T>(key: string): Promise<T | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
    }
    return null;
};
export const DeleteData = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Error deleting data from AsyncStorage:', error);
    }
};