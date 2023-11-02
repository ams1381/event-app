import { Stack, useRouter } from 'expo-router';
import { View , Text , KeyboardAvoidingView , Platform } from 'react-native'
import { TabBarComponent } from '../../components/common/Tabbar';
import { useRoute } from '@react-navigation/native';
import { useState , useEffect } from 'react'

const UserPanelLayout = () => {
    const router = useRoute();

    const [ CurrentTab , setCurrentTab ] = useState('Home')
    console.log(router?.params?.screen)
    useEffect(() => {
        switch(router?.params?.screen)
        {
            case 'index' : 
                setCurrentTab('Home');
            case 'profile':
                setCurrentTab('User');
            case 'products':
                setCurrentTab('Apple');
        }

    },[])
    return <>
    <Stack screenOptions={{
        headerShown : false
    }}>

    </Stack>
    {/* <KeyboardAvoidingView behavior={'padding'}> */}
        <TabBarComponent TabName={CurrentTab} hideTabBar={router?.params?.screen == 'home'} setCurrentTab={setCurrentTab} />
    {/* </KeyboardAvoidingView> */}
    
    </>
}
export default UserPanelLayout;