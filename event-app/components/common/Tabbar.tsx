import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'
import Icon from './Icon'
import {useRouter} from 'expo-router'
import {LinearGradient} from 'expo-linear-gradient'

type TabBarProp = {
    TabName: string,
    setCurrentTab: any
}

export const TabBarComponent: React.FC<TabBarProp> = ({setCurrentTab, TabName}) => {
    const router = useRouter();
    return <View style={TabBarStyles.TabBarContainer}>
        <View style={TabBarStyles.TabBarInnerContainer}>
            <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {TabName == 'User' ? <View style={{
                    width: 96,
                    height: 96,
                    backgroundColor: 'white',
                    borderColor: '#44898E',
                    borderWidth: 2,
                    borderRadius: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{
                        translateY: -30
                    }],
                    marginHorizontal: 20,
                }}>
                    <LinearGradient colors={[
                        '#44898E',
                        '#2CABB4'
                    ]} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 67,
                        backgroundColor: '#44898E',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name='lightUser' style={TabBarStyles.iconStyle}/>
                    </LinearGradient>
                </View> : <View onTouchEnd={() => {
                    router.push('/user-panel/profile')
                    setCurrentTab('User')
                }} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='darkUser' style={TabBarStyles.iconStyleNotActive}/>
                </View>}
            </View>
            <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {TabName == 'Apple' ? <View style={{
                    width: 96,
                    height: 96,
                    backgroundColor: 'white',
                    borderColor: '#44898E',
                    borderWidth: 2,
                    borderRadius: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{
                        translateY: -30
                    }],
                    marginHorizontal: 20,
                }}>
                    <LinearGradient colors={[
                        '#44898E',
                        '#2CABB4'
                    ]} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 67,
                        backgroundColor: '#44898E',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name='lightProducts' style={TabBarStyles.iconStyle}/>
                    </LinearGradient>
                </View> : <View onTouchEnd={() => {
                    router.push('/user-panel/products')
                    setCurrentTab('Apple')
                }} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='darkProducts' style={TabBarStyles.iconStyleNotActive} />
                </View>}
            </View>
            {/* Active TabBar Item */}
            <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {TabName == 'Home' ? <View style={{
                    width: 96,
                    height: 96,
                    backgroundColor: 'white',
                    borderColor: '#44898E',
                    borderWidth: 2,
                    borderRadius: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{
                        translateY: -30
                    }],
                    marginHorizontal: 20,
                }}>
                    <LinearGradient colors={[
                        '#44898E',
                        '#2CABB4'
                    ]} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 67,
                        backgroundColor: '#44898E',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name='lightIndex' style={TabBarStyles.iconStyle}/>
                    </LinearGradient>
                </View> : <View onTouchEnd={() => {
                    router.push('/user-panel/')
                    setCurrentTab('Home')
                }} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='darkIndex' style={TabBarStyles.iconStyleNotActive}/>
                </View>}

            </View>
            <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {TabName == 'Cart' ? <View style={{
                    width: 96,
                    height: 96,
                    backgroundColor: 'white',
                    borderColor: '#44898E',
                    borderWidth: 2,
                    borderRadius: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{
                        translateY: -30
                    }],
                    marginHorizontal: 20,
                }}>
                    <LinearGradient colors={[
                        '#44898E',
                        '#2CABB4'
                    ]} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 67,
                        backgroundColor: '#44898E',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name='lightShop' style={TabBarStyles.iconStyle}/>
                    </LinearGradient>
                </View> : <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='Cart'/>
                </View>}

            </View>
            <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                {TabName == 'VideoHelp' ? <View style={{
                    width: 96,
                    height: 96,
                    backgroundColor: 'white',
                    borderColor: '#44898E',
                    borderWidth: 2,
                    borderRadius: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{
                        translateY: -30
                    }],
                    marginHorizontal: 20,
                }}>
                    <View style={{
                        width: 80,
                        height: 80,
                        borderRadius: 67,
                        backgroundColor: '#44898E',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name='ActivePlayBack'/>
                    </View>
                </View> : <View onTouchEnd={() => {
                    router.push('/user-panel/video-help')
                    setCurrentTab('VideoHelp')
                }} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name='PlayBack'/>
                </View>}

            </View>
        </View>
    </View>
}
const TabBarStyles = StyleSheet.create({
    TabBarContainer: {
        height: 84,
        width:
            '100%',
        position:
            'fixed',
        bottom:
            0,
        backgroundColor:
            'white',
        paddingVertical:
            16,
        paddingHorizontal:
            32,
        justifyContent:
            'center',
        alignItems:
            'center',
        borderWidth:1,
        borderColor:'#eee'
    },
    iconStyle:{
        width:40
    },
    iconStyleNotActive:{
        width:30,
    }
    ,
    TabBarInnerContainer: {
        flexDirection: 'row',
        width:
            '100%',
        height:
            '100%',
        justifyContent:
            'space-around',
        gap:
            16,
    },
    //     TabBarContainer: {
    //             height: 84,
    //             width: '100%',
    //             position: 'fixed',
    //             bottom: 0,
    //             backgroundColor: 'white',
    //             paddingVertical: 16,
    //             paddingHorizontal: 32,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             // zIndex : -5
    //         },
    //         TabBarInnerContainer: {
    //             flexDirection: 'row',
    //             width: '100%',
    //             height: '100%',
    //             justifyContent: 'space-around',
    //             gap: 16,
    //         }
})