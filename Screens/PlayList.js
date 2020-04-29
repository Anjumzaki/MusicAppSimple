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
import Sort from '../Component/Sort'
import Adds from '../Component/BannerAdds';
import { 
  AdMobInterstitial, 
} from 'react-native-admob'


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

  useEffect(() => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }, [])

  const [music, SetMusic]= useState('')

  const playSong = (sound) => {
    try {
      SoundPlayer.playUrl(sound)
      navigation.navigate('Player', {play: true})
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
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
    // console.log(tracks)
    SetMusic(tracks)
      // do your stuff...
  }).catch(error => {
      console.log(error)
      // catch the error
  })
  }, [MusicFiles])


 const sortName=() => {
    // music.sort(function(a, b){
    //   if(a.fileName < b.fileName) return alert('a')
    //   else if (a.fileName > b.fileName) return alert('b')
    //   // return a-b
    // });
    alert('Sort Name')
  }

  const sortGenre=() => {
    // music.sort(function(a, b){return a-b});
    alert('Sort Genre')
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
              <Sort
                name="sort"
                sortText="Name"
                onPress={() => sortName()}
              />

              <Sort
                name="sort"
                sortText="Genre"
                onPress={() => sortGenre()}
              />
            </View>

            {music.length > 1  && music.map( (tracks, index) =>
            <View
              key={index}>
                <TouchableOpacity
                    onPress={() => playSong('file://'+tracks.path)}          
                    style={styles.trackInfoContainer}
                    key={index}
                  >
                  <Text style={styles.trackInfo}>
                      {tracks.fileName} {((tracks.duration/1000)/60).toFixed(2)} min
                  </Text>
                </TouchableOpacity>
            </View> 
            )}
        </ScrollView>
        <Adds />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
    padding: 10,
    height: windowHeight,
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