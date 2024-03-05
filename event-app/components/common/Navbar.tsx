import {View, StyleSheet} from "react-native";
import Icon from "./Icon";
export default function Navbar(p: { isActivePopup: any, setIsActivePopup: any }) {
    return (
        <View style={styles.container}>
            <Icon name={'search'}/>
            <Icon name={'navbarLogo'}/>
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
        position:'sticky',
        top:0,
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
})