import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MusicDetails from '../Component/MusicDetails';
import PlayControl from '../Component/PlayControl';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
    return(
        <View
            style={styles.safeAreaView}>
            <MusicDetails/>
            <PlayControl 
                onPress={() => navigation.navigate('PlayList')}/>
        </View>
    )} 
    
const styles = StyleSheet.create({
    safeAreaView: {
        height: windowHeight,
        backgroundColor: '#000'
    }
})