import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => {
    return(
        <View>
        <TouchableOpacity
            onPress={props.onPress}
        >
            <Icon name={props.name} size={20} color="#fff" />
            <Text style={{color:'#fff'}}>{props.sortText}</Text>
        </TouchableOpacity>
        </View>
    );
}
    