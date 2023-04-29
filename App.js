import * as React from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, BottomNavigation } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Atti from './components/screens/Attendance';
import {StackNavigator} from 'react-navigation';
import MyTabs from './components/screens/Home'
import { Avatar } from 'react-native-paper';
import ActualHome from './components/screens/Home';
import result from './components/screens/Result';
import announcement from './components/screens/Events';
import Login from './components/screens/Login';

const Stack = createStackNavigator();

function nava({navigation}){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'attendance', title: 'Attendance', focusedIcon: 'checkbox-marked', unfocusedIcon: 'checkbox-outline' },
    { key: 'result', title: 'Result', focusedIcon: 'book-edit', unfocusedIcon: 'book-edit-outline'},
    { key: 'announcements', title: 'Announcements', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' }
  ]);

  const navigationRef = React.createRef();

  const renderScene = BottomNavigation.SceneMap({
    home: ActualHome,
    attendance: Atti,
    result: result,
    announcements: announcement
  });
  return (
    // <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="BottomNav" screenOptions={{ headerShown: false }} style = {{backgroundColor: '#355C78'}}>
      <Stack.Screen name="BottomNav" children={ () =>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      } />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

function MyComponent({navigation}){
  return(
  // <NavigationContainer>
    <SafeAreaProvider style = {{backgroundColor: '#FFFFFF'}}>
      <SafeAreaProvider style = {{justifyContent: 'center'}}>
        <Image source={require('./jiit.png')} style = {{width: 200, height: 250, marginLeft: 85, marginTop: 160}}  />
      </SafeAreaProvider>
        <SafeAreaProvider style = {{flexDirection: 'column', justifyContent: 'center', marginTop: 140}}>
          <Button icon="login" mode="contained" onPress={() => navigation.navigate('Loginj')} style = {styles.temp}>
            Login as Student
          </Button>
          <Button icon="account-tie" mode="contained" onPress={() => navigation.navigate('Login')} style = {styles.temp}>
            Login as Administrator
          </Button>
          <Button icon="account-arrow-up" mode="contained" onPress={() => navigation.navigate('Signup')} style = {styles.temp}>
            Sign Up
          </Button>
        </SafeAreaProvider>
    </SafeAreaProvider>
  // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  temp:{
    height: 40,
    justifyContent: 'center',
    margin: 4,
    width: 280,
    marginLeft: 40,
    backgroundColor: '#355C78'
  }
});


const Stack2 = createStackNavigator();
function loginj({navigation}){
  return(
    <SafeAreaProvider style = {{flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 65, marginLeft: 45}}>
      <Avatar.Icon size={100} icon="account-cowboy-hat" style = {{margin: 30,  marginLeft: 95}} />
      <TextInput placeholder='Enrollment Number' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <TextInput placeholder='Password' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <Button icon="camera" mode="contained" style = {{margin: 10}} onPress={() => navigation.navigate('Details')} >
        Login
      </Button>
    </SafeAreaProvider>
  );
}

function login({navigation}){
  return(
    <SafeAreaProvider style = {{flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 65, marginLeft: 45}}>
      <Avatar.Icon size={100} icon="account-cowboy-hat" style = {{margin: 30,  marginLeft: 95}} />
      <TextInput placeholder='Enrollment Number' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <TextInput placeholder='Password' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <Button icon="camera" mode="contained" style = {{margin: 10}} onPress={() => navigation.navigate('Details')} >
        Login
      </Button>
    </SafeAreaProvider>
  );
}

function signup({navigation}){
  return(
    <SafeAreaProvider style = {{flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 65, marginLeft: 45}}>
      <Avatar.Icon size={100} icon="account-plus" style = {{margin: 30,  marginLeft: 95}} />
      <TextInput placeholder='Full Name' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <TextInput placeholder='Enrollment Number' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <TextInput placeholder='Course' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <TextInput placeholder='Password' style = {{margin: 5, width: 270, height: 40}}></TextInput>
      <Button icon="camera" mode="contained" style = {{margin: 10}} onPress={() => navigation.navigate('Details')} >
        Login
      </Button>
    </SafeAreaProvider>
  );
}


function App() {
  return (
    <NavigationContainer>
      {/* <View style = {{backgroundColor: '#6C5B7B'}}> */}
        <Stack2.Navigator initialRouteName="">
          <Stack2.Screen name="CMA" component={MyComponent} />
          <Stack2.Screen name="Details" component={nava} />
          <Stack2.Screen name="Loginj" component={login} />
          <Stack2.Screen name="Login" component={login} />
          <Stack2.Screen name="Signup" component={signup} />
        </Stack2.Navigator>
      {/* </View>/ */}
    </NavigationContainer>
  );
}

export default App;
