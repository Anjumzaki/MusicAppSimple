import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({play, resumeSong, pauseSong}) => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={{flexDirection: 'row', justifyContent: 'center',width:'100%'}}>
        <View style={styles.PlayIcon}>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              name="skip-previous"
              size={46}
              color="#fff"
            />
          </TouchableOpacity>
          {
            !play ? (
              <TouchableOpacity
                onPress={resumeSong}>
                <Icon style={styles.icon} name="play" size={52} color="#fff" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={pauseSong}>
                <Icon style={styles.icon} name="pause" size={52} color="#fff" />
              </TouchableOpacity>
            )
          }

          <TouchableOpacity>
            <Icon style={styles.icon} name="skip-next" size={46} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#000',
    padding: 15,
    flexDirection: 'row',
  },
  PlayIcon: {
    flexDirection: 'row',
    justifyContent:'center',
  },
});
