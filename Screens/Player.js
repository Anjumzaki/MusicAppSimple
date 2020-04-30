import React, {useState, useEffect} from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MusicDetails from '../Component/MusicDetails';
import PlayControl from '../Component/PlayControl';
import SoundPlayer from 'react-native-sound-player'
import Adds from '../Component/BannerAdds';
import { 
  AdMobInterstitial, 
} from 'react-native-admob'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation, route}) => {

    const [ play , setPlay ] = useState(false);

    useEffect(() => {
      AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
      AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
      AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    }, [])

    useEffect(() => {
      const playParam = route.params;
      console.log(playParam)
      //Get params , setPlay(params.play);
      // if(playParam){
      //   setPlay(playParam.play)
      // }
    }, [route])

    // const pauseSong = () => {
    //     try{
    //       SoundPlayer.pause()
    //     }
    //     catch(e){
    //       alert('Cannot stop the file')
    //       console.log('cannot stop the song file', e)
    //     }
    //   }
    
    //   const resumeSong = () => {
    //     try{
    //       SoundPlayer.resume()
    //     }
    //     catch(e){
    //       alert('Cannot stop the file')
    //       console.log('cannot stop the song file', e)
    //     }
    //   }
      

    return(
        <View
            style={styles.safeAreaView}>
            <View style={styles.menu}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PlayList')}
                >
                <Icon style={styles.icon} name="menu" size={46} color="#fff" />
                </TouchableOpacity>
            </View>
            <MusicDetails/>

            <PlayControl
                play={play}
                resumeSong={() => {
                    setPlay(false)
                    resumeSong()
                    console.log('Resume button')
                }}
                pauseSong={
                    () =>{
                        pauseSong
                        setPlay(true)
                        console.log('Pause button')
                    }
                }
            />
            <Adds />
        </View>
    )} 
    
const styles = StyleSheet.create({
    safeAreaView: {
        height: windowHeight,
        backgroundColor: '#000',
        justifyContent:'space-between',
        flex:1
    },
    menu: {
        position: 'relative',
        top: 10
      },
    
})