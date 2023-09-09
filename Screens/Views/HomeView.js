import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';


export default function HomeView({Navigation}){
    return(
        <View style={styles.container_homeView}>
            <TouchableOpacity style={styles.btn_addWorkout}>
                <Text
                    style = {styles.txt_addWorkout}
                >Add Workout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container_homeView: {
        padding: 10,
        flex: 1,
        justifyContent: 'left',
        alignItems: 'right'
    },
    txt_addWorkout: {
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    },
    btn_addWorkout:{
        height: 50, 
        width: 150, 
        marginTop: 10, 
        backgroundColor:'#00a0ff', 
        alignItems:'center', 
        justifyContent:'center'
    }
});