import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function ProfileView({Navigation}){
    return(
        <View>
            <Text
            onPress={() => Navigation.navigate("homeView")}
            >Hello Profile</Text>
        </View>
    );
}