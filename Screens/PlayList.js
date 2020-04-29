import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import MusicFiles from 'react-native-get-music-files';
import SoundPlayer from 'react-native-sound-player'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result) => {
  console.log(result)
});

check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    console.log(error)
  });


export default ({navigation}) => {

  const [music, SetMusic]= useState('')

  const playSong = (sound) => {
    try {
      SoundPlayer.playUrl(sound)
      console.log(sound)
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
    }
  }

  const stopSong = () => {
    try{
      SoundPlayer.stop()
    }
    catch(e){
      alert('Cannot stop the file')
      console.log('cannot stop the song file', e)
    }
  }


  useEffect(() => {
    MusicFiles.getAll({
      blured : true, // works only when 'cover' is set to true
      artist : true,
      duration : true, //default : true
      cover : false, //default : true,
      genre : true,
      title : true,
      cover : true,
      // batchNumber : 5, //get 5 songs per batch
      minimumSongDuration : 0, // get songs bigger than 10000 miliseconds duration
      path: true
  }).then(tracks => {
    console.log(tracks)
    SetMusic(tracks)
      // do your stuff...
  }).catch(error => {
      console.log(error)
      // catch the error
  })
  }, [MusicFiles])
    

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            {music.length > 1  && music.map( (tracks, index) => 
            <TouchableOpacity
                onPress={() => navigation.navigate('Player')}
                style={styles.trackInfoContainer}
              	key={index}
              >
              <Text style={styles.trackInfo}>
                  {tracks.fileName} {((tracks.duration/1000)/60).toFixed(2)} min
              </Text>
            </TouchableOpacity>
            )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
    padding: 10,
    height: windowHeight
  },
  trackInfoContainer: {
    padding: 15,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey',
    backgroundColor:'#000',
    shadowColor: "#fff",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  trackInfo: {
    fontSize: 20,
    color: '#fff'
  },
});