import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SoundPlayer from 'react-native-sound-player'

export default () => {

  const [playDisable, setplayDisable]= useState(false)
  const [pauseDisable, setpauseDisable]= useState(false)

  useEffect(() => {
      setplayDisable(true)
  }, [])

  const pauseSong = () => {
    try{
      SoundPlayer.pause()
      setpauseDisable(true)
      setplayDisable(false)
    }
    catch(e){
      alert('Cannot stop the file')
      console.log('cannot stop the song file', e)
    }
  }

  const resumeSong = () => {
    try{
      SoundPlayer.resume()
      setpauseDisable(false)
      setplayDisable(true)
    }
    catch(e){
      alert('Cannot stop the file')
      console.log('cannot stop the song file', e)
    }
  }

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
          {/* {
            !play ? ( */}
              <TouchableOpacity
                onPress={() => resumeSong()}
                disabled={playDisable}>
                <Icon 
                  style={styles.icon} 
                  name="play" 
                  size={52} 
                  color={playDisable ? "#A9A9A9" : '#FFF'} />
              </TouchableOpacity>
            {/* ) : ( */}
              <TouchableOpacity
                onPress={() => pauseSong()}
                disabled={pauseDisable}>
                <Icon 
                  style={styles.icon} 
                  name="pause" 
                  size={46} 
                  color={pauseDisable ? "#A9A9A9" : '#FFF'} />
              </TouchableOpacity>
            {/* )
          } */}

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
