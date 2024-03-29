import { SafeAreaView, ScrollView, StatusBar, View , Text, TouchableNativeFeedback } from 'react-native'
import { WebView } from 'react-native-webview';
import Navbar from '../../components/common/Navbar';
import { useState } from 'react';
import Icon from '../../components/common/Icon';
import { Image } from 'expo-image';
type WebViewProp = {
    webURL : string
}
const VideoHelp = () => {
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
    const [ WebViewOpen , setWebViewOpen ] = useState(false);
    const [ WebViewURL , setWebViewUrl ] = useState('');


// <WebViewOpener webURL={WebViewuRL} /> : <SafeAreaView style={{ paddingTop : StatusBar.currentHeight }}>
  return WebViewOpen ? <WebView source={{uri: WebViewuRL}} style={{flex: 1}}/> :
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight,marginBottom:58}}>
      <StatusBar backgroundColor={"#fff"}/>
      <Navbar
        isActivePopup={isActivePopup}
        setIsActivePopup={setIsActivePopup}/>
      <ScrollView>
        <View style={{width: '100%', height: '100%'}}>
          <View style={{gap: 12}}>
            <View onTouchEnd={() => {
              setWebViewOpen(true);
              setWebViewUrl('https://www.aparat.com/video/video/embed/videohash/8Ka7m/vt/frame')
              // webURL={'https://www.aparat.com/v/0RmSc'}
            }} style={{width: '100%', paddingVertical: 16, justifyContent: 'center', alignItems: 'center'}}>
              <Image resizeMode='contain' style={{width: '95%', height: 200}}
                     source={require('../../assets/images/Help1.png')}/>
              <View style={{
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'flex-end',
                gap: 10
              }} >
                {/* <TouchableNativeFeedback> */}
                <Text style={{fontFamily: 'bold'}}>روش نوین کاشت هندوانه</Text>
                <Icon name='Play'/>
                {/* </TouchableNativeFeedback> */}

              </View>
            </View>
            <View onTouchEnd={() => {
              setWebViewOpen(true);
              setWebViewUrl('https://www.aparat.com/video/video/embed/videohash/P3ZFe/vt/frame')
            }} style={{width: '100%', paddingVertical: 16, justifyContent: 'center', alignItems: 'center'}}>
              <Image resizeMode='contain' style={{width: '95%', height: 200}}
                     source={require('../../assets/images/Help2.png')}/>
              <View style={{
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'flex-end',
                gap: 10
              }} >
                {/* <TouchableNativeFeedback> */}
                <Text style={{fontFamily: 'bold'}}>انواع آفات و روش مقابله با آن</Text>
                <Icon name='Play'/>
                {/* </TouchableNativeFeedback> */}

              </View>
            </View>
            <View onTouchEnd={() => {
              setWebViewOpen(true);
              setWebViewUrl('https://www.aparat.com/video/video/embed/videohash/d3uKe/vt/frame')
            }} style={{
              width: '100%',
              marginBottom: 110,
              paddingVertical: 16,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image resizeMode='contain' style={{width: '95%', height: 200}}
                     source={require('../../assets/images/Help3.png')}/>
              <View style={{
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'flex-end',
                gap: 10
              }} >
                {/* <TouchableNativeFeedback> */}
                <Text style={{flex: 1, flexWrap: 'wrap', fontFamily: 'bold'}}>چگونه با کمترین مصرف آب , محصولاتمان را به
                  عمل بیاوریم</Text>
                <Icon name='Play'/>
                {/* </TouchableNativeFeedback> */}

              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <HelpBottomSheet active={isActivePopup} setActive={setIsActivePopup}/>
    </SafeAreaView>
}

export default VideoHelp;