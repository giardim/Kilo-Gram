import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

//Views
import HomeView from './Views/HomeView';
import StatsView from './Views/StatsView';
import ProfileView from './Views/ProfileView';

//View Names
const homeView = "Home";
const statsView = "Stats";
const profileView = "Profile";

const tab = createBottomTabNavigator();

export default function MainContainer(){
    return (
        <NavigationContainer theme={DarkTheme}>
            <tab.Navigator InitialRouteName = {homeView}
                            screenOptions={({route}) => ({
                                "tabBarActiveTintColor":"tomato",
                                "tabBarInactiveTinyColor": "#grey",
                                tabBarIcon: ({focused, color, size}) =>{
                                    let iconName;
                                    let rn = route.name;

                                    if (rn === 'Home'){
                                        iconName = focused ? 'home-sharp' : 'home-outline';
                                    }
                                    else if (rn === 'Profile'){
                                        iconName = focused ? 'person-sharp' : 'person-outline';
                                    }
                                    else if (rn === 'Stats'){
                                        iconName = focused ? 'stats-chart-sharp' : 'stats-chart-outline';
                                    }
                                    
                                    return <Ionicons name={iconName} size = {size} color = {color}/>
                                },
                            })}
                            
                            >
                                <tab.Screen name={homeView} component={HomeView}/>
                                <tab.Screen name={profileView} component={ProfileView}/>
                                <tab.Screen name={statsView} component={StatsView}/>


            </tab.Navigator>
        </NavigationContainer>
    );
}