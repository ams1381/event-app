import {Text, View, StyleSheet} from "react-native";
import Icon from "./Icon";

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Icon name={'search'} />
            <Icon name={'navbarLogo'} />
            <Icon name={'info'} />
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
        paddingVertical:12,
        paddingHorizontal:16,
        marginBottom:13,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
    },
})