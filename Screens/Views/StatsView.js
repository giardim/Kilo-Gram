import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Dialog from "react-native-dialog"

const data = [
]


export default function StatsView({Navigation}){
    const [visible, setVisible] = useState(false);
    return(
        <View>
            <Dialog_addWorkoutDialog 
                visible={visible}
                setVisible={setVisible}/>
            <Dropdown
                data = {data}
                style={styles.dd_listOfWorkouts}
                labelField="label"
                valueField="value"
            />
            <TouchableOpacity style={styles.btn_addWorkout}
            onPress={() => fn_addWorkout(setVisible)}>
                <Text
                    style = {styles.txt_addWorkout}
                >Add Workout</Text>
            </TouchableOpacity>
        </View>
    );
}

const Dialog_addWorkoutDialog = ({visible, setVisible}) =>{
    const btn_handleOkay = (etxt_addWorkout) =>{
        console.log(etxt_addWorkout);
        let test = {label: etxt_addWorkout, value: "6"};
        data.push(test);
        setVisible(false);
    }
    const btn_handleCancel = () =>{
        console.log("pressed 1");
        setVisible(false);
    }
    const [stat, setStat] = useState('');
    return (
        <View>
          <Dialog.Container visible = {visible}>
            <Dialog.Title>Add Statistic</Dialog.Title>
            <Dialog.Description>
                Add the stat you want to start tracking:
            </Dialog.Description>
            <Dialog.Input
                onChangeText={setStat}/>
            <Dialog.Button label="Cancel" 
                onPress={btn_handleCancel}/>
            <Dialog.Button label="Okay" 
                onPress={() => btn_handleOkay(stat)}/>
          </Dialog.Container>
        </View>
      );
};



const fn_addWorkout = (setVisible) => {
    setVisible(true);
};

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
        justifyContent:'center',
        borderRadius:50
    },
    dd_listOfWorkouts:{
        backgroundColor: 'white',
        color: 'black'
    }
});