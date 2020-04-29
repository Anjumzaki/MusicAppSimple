import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet, 
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default (props) => {
  return(
    <SafeAreaView
        style={styles.safeAreaView}
    >
        <View style={styles.PlayIcon}>
            <TouchableOpacity>
                <Icon 
                    style={styles.icon}
                    name='skip-previous'
                    size={46}
                    color='#fff'
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon 
                    style={styles.icon}
                    name='play'
                    size={52}
                    color='#fff'
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon 
                    style={styles.icon}
                    name='skip-next'
                    size={46}
                    color='#fff'
                />
            </TouchableOpacity>
        </View>

        <View style={styles.menu}>
            <TouchableOpacity
                onPress={props.onPress}>
                <Icon 
                    style={styles.icon}
                    name='menu'
                    size={46}
                    color='#fff'
                />
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#000',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      PlayIcon:{
          flexDirection:'row',
          justifyContent:'center'
      },
      menu:{
          flexDirection:'row',
          justifyContent: 'flex-end',
      }
})