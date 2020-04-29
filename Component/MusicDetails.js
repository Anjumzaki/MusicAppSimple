import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet, 
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  return(
    <SafeAreaView
        style={styles.scrollView}
    >
        <Image
            style={styles.Background} 
            source={require('../assets/background.jpg')}
        />
        <Text style={styles.name}>Music Name</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#000',
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        width: windowWidth
      },
      Background:{
        width: windowWidth,
        height: 300
      },
    name:{
        padding:10,
        color:'#fff',
        textAlign:'center'
    }
})