
import * as React from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native-paper';
import Tabli from './Table';
import {Picker} from '@react-native-picker/picker';

export default class Atti extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDay: 'EVEN2023',
            days: ['EVEN2023','ODD2022', 'EVEN2022', 'ODD2021', 'EVEN2021', 'ODD2020']
        }
        }
        render(){
            return(
                
            <SafeAreaProvider style = {{backgroundColor: "#6C5B7B"}}>
                <Picker
                    selectedValue={this.state.selectedDay}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedDay: itemValue})
                    }>
                    {this.state.days.map((day, index) => {
                    return <Picker.Item label={day} value={day} key={index}/>
                    })
                    }
                </Picker>
                <View>
                    <Tabli />
                </View>
            </SafeAreaProvider>
            );
        }
};

const styles = StyleSheet.create({
    
});