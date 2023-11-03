import {Text, View, StyleSheet} from "react-native";
import Icon from "./Icon";
import {any} from "prop-types";

export default function Navbar(p: { isActivePopup: any, setIsActivePopup: any }) {
    console.log(p.isActivePopup , 'active')
    return (
        <View style={styles.container}>
            <Icon name={'search'}/>
            <Icon name={'logo4k'} style={styles.logo}/>
                <View  onTouchEnd={() => {
                    p.setIsActivePopup(!p.isActivePopup)
                }}>
                    <Icon  name={'info'}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    logo:{
        width:50,
        height:50
    },
})