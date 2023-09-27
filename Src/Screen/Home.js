import { StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// component
import Search from '../Component/Search';
import MenuBar from '../Component/MenuBar'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text className="text-gray-700 mt-1 ml-3 font-light">Location</Text>
      <View className="flex-row items-center mx-3 justify-between">
        <View className="flex-row items-center">
          <Text className="text-xl mr-2">Jakarta</Text>
          <MaterialCommunityIcons name="chevron-down" size={25} color="gray"/>
        </View>
        <MaterialCommunityIcons name="bell-outline" size={30}/>
      </View>
      <Search />
      <MenuBar/>
      <View className="flex-row justify-between mx-3 mt-3 items-center">
        <Text className="text-base">Near from you</Text>
        <Text className="text-gray-400">See More</Text>
      </View>
      
      <View className="flex-row justify-between mx-3 mt-3 items-center">
        <Text className="text-base">Best from you</Text>
        <Text className="text-gray-400">See More</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})