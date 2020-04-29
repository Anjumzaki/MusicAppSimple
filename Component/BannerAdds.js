import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { 
    AdMobBanner, 
    AdMobInterstitial, 
  } from 'react-native-admob'

  export default () => {
    return(
        <View>
        <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDeviceID="EMULATOR"
            onAdFailedToLoad={error => console.error(error)} />      
    </View>
    )
  }