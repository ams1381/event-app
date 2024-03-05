import { View,Text, StatusBar, StyleSheet,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";
import {Image} from "react-native";

const EmptyBox = () => {
    const router = useRouter()
    return (
     <View style={styles.container}>
        <Text style={styles.staticText}>زمینی وجود نداره</Text>
        <TouchableOpacity onPressOut={() => router.push('/user-panel/createFaram')} style={styles.button}>
            <Text style={styles.buttonText}>ایجاد زمین</Text>
          
        </TouchableOpacity>
        <Image style={styles.image}
                                        source={require("./../../assets/images/emptyBoxBg.png")}
                                    />
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       borderColor:'#eee',
       borderWidth:1,
       display:'flex',
        backgroundColor: "#fff",
        borderRadius:16,
        alignItems: "center",
        justifyContent:'center',
        // paddingTop: StatusBar.currentHeight,
        width: "100%",
        position:'relative',
        overflow:'hidden'
    },
    staticText:{
        color:'#4D4D4D',
        fontFamily:'bold',
        fontSize:20,
    },
    button:{
        width:210,
        borderRadius:12,
        backgroundColor:'#5FA2A6',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        marginTop:10,
        zIndex:9,

    },
    buttonText:{
        color:'#fff',
        fontFamily:'bold',fontSize:16,
    },
    image:{
        position:'absolute',
        right:-100,
       bottom:-80,
        transform: [
            { scale: 0.6},
          ],
    }
});

export default EmptyBox