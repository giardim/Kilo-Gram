import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Dialog from "react-native-dialog";
import { SkPath, Circle, Group,     Canvas } from '@shopify/react-native-skia';

const workoutList = [];


//Stats View component
export default function StatsView({Navigation}){
    const [visible, setVisible] = useState(false);
    const size = 256;
    const r = size * 100;
    return(
        <View style={{flex:3, justifyContent:'right'}}>
             <Dropdown
                    data = {workoutList}
                    style={styles.dd_listOfWorkouts}
                    labelField="label"
                    valueField="value"
                    placeholder= 'Select Stat'
                    activeColor='#43423d'
                    inactiveColor='#706e66'
                    selectedTextStyle={{
                        color:'white',
                        fontSize:25
                    }}
                    placeholderStyle={{
                        color:'white',
                        fontSize:25
                    }}
                    onChange={testing}/>
            <Dialog_addWorkoutDialog 
                visible={visible}
                setVisible={setVisible}/>
            <ScrollView style={styles.sv_list}>
                <Canvas style={{ flex: 1 }}>
                    <Group blendMode="multiply">
                        <Circle cx={r} cy={r} r={r} color="cyan" />
                        <Circle cx={size - r} cy={r} r={r} color="magenta" />
                        <Circle
                          cx={size/2}
                          cy={size - r}
                          r={r}
                          color="yellow"
                        />
                    </Group>
                </Canvas>
            </ScrollView>
            <TouchableOpacity style={styles.btn_addWorkout}
            onPress={() => fn_addWorkout(setVisible)}>
                <Text
                    style = {styles.txt_addWorkout}
                >Add Workout</Text>
            </TouchableOpacity>
        </View>
    );
}


//Dialog box to allow the user to add a new workout/stat
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
                onChangeText={setStat}
                placeholder="e.g. 'Deadlift'"
                />
            <Dialog.Button label="Cancel" 
                onPress={btn_handleCancel}/>
            <Dialog.Button label="Okay" 
                onPress={() => btn_handleOkay(stat)}/>
          </Dialog.Container>
        </View>
      );
};


//Button to show the dialog and add a new stat
const fn_addWorkout = (setVisible) => {
    setVisible(true);
};

//Styles
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
        marginTop: 3,
        marginBottom:5,
        backgroundColor:'#00a0ff', 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:50
    },
    dd_listOfWorkouts:{
        backgroundColor: '#161614',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius:6,
    },
    sv_list: {
        height: '80%',
        backgroundColor: '#22211f',
        borderRadius:19
    },
    selectedTextStyle: {
        fontSize: 16,
        color:'white'
      }
});

const testing = () =>{
    alert("Hello world");
}