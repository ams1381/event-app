import { View , Text , StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

type PaginationProp = {
    CurPage : number
}

export const PaginatioinComponent : React.FC<PaginationProp> = ({ CurPage }) => {
    return (
        <View style={PaginationStyle.PaginationContainer}>
            <View style={PaginationStyle.PaginationInnerContainer}>
                {Array.from({ length : 4 }).map((_,index : number) => <View key={index}>
                <View style={{
                    ...PaginationStyle.PaginatioinItem ,
                    backgroundColor : index <= CurPage ? Colors.activePageColor : Colors.diactivePageColor 
                    }}>
                    {/* { index } */}
                </View>
                </View>)}
            </View>
        
    </View>)
}
const PaginationStyle = StyleSheet.create({
    PaginationContainer : {
        flexDirection : 'row',
        width : '100%',
        position : 'absolute',
        bottom : 18,
        // marginBottom : 18,
        alignItems : 'center',
        justifyContent : 'center'
    },
    PaginationInnerContainer : {
        width : 200,
        flexDirection : 'row',
        justifyContent : 'space-between',
        gap : 4
    },
    PaginatioinItem : {
        width : 47,
        height : 5,
        borderRadius : 4,
    }
})