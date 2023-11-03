import { Stack, useRouter } from 'expo-router';
import { View , Text , KeyboardAvoidingView , Platform } from 'react-native'
import { TabBarComponent } from '../../components/common/Tabbar';
import { useRoute } from '@react-navigation/native';
import { useState , useEffect } from 'react'

const UserPanelLayout = () => {
    const route = useRouter();
    const router = useRoute();
   
    const [ CurrentTab , setCurrentTab ] = useState('Home')
    // console.log('layout',router?.params?.screen)
    useEffect(() => {
        switch(router?.params?.screen)
        {
            case 'farm/[farmID]':
            case 'index' : 
                setCurrentTab('Home');
                break;
            case 'profile':
                setCurrentTab('User');
                break;
            case 'products':
                setCurrentTab('Apple');
                break;
            case 'video-help' :
                setCurrentTab('VideoHelp')
                break;

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