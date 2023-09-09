import * as React from 'react';
import { View, Text } from 'react-native';

export default function StatsView({Navigation}){
    return(
        <View>
            <Text style={{color: 'white'}}
            onPress={() => Navigation.navigate("homeView")}
            >Hello Stats</Text>
        </View>
    );
}