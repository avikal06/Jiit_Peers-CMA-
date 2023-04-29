import * as React from 'react';
import { Appbar, TextInput, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import {IconButton, MD3Colors} from 'react-native-paper';

const ActualHome = () => {

  return(
  <SafeAreaProvider style = {{backgroundColor: "#6C5B7B"}}>
    <View style = {{flexDirection: 'column'}}>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={50}
          onPress={() => console.log('Pressed')}
          style = {{marginLeft: 150, marginTop: 120}}
        />
        <Text style = {{marginLeft: 115, fontSize: 27, color:'#FFFFFF'}}>Sagar </Text>
    </View>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    
});
export default ActualHome;