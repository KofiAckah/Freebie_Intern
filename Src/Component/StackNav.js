import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


// Screens
import Home from '../Screen/Home'
import Detail from '../Screen/Detail'

const Stack = createStackNavigator()

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav

const styles = StyleSheet.create({})