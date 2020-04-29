import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Player from '../Screens/Player';
import PlayList from '../Screens/PlayList';

const Stack = createStackNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Player" 
                    component={Player}
                    options={{ headerShown: false }}    

                />   
                <Stack.Screen name="PlayList" 
                    component={PlayList}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}