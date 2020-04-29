import React, {useState, useEffect} from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MusicDetails from '../Component/MusicDetails';
import PlayControl from '../Component/PlayControl';
import SoundPlayer from 'react-native-sound-player'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation, route}) => {

    const [ play , setPlay ] = useState(false);

    useEffect(() => {
      const playParam = route.params;
      console.log(playParam)
      //Get params , setPlay(params.play);
    //   if(playParam){
    //     setPlay(playParam.play)
    //   }
    }, [route])

    const pauseSong = () => {
        try{
          SoundPlayer.pause()
        }
        catch(e){
          alert('Cannot stop the file')
          console.log('cannot stop the song file', e)
        }
      }
    
      const resumeSong = () => {
        try{
          SoundPlayer.resume()
        }
        catch(e){
          alert('Cannot stop the file')
          console.log('cannot stop the song file', e)
        }
      }
      

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
                    resumeSong
                    setPlay(false)
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