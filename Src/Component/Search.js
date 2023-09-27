import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  return (
    <View className="flex-row items-center my-4 mx-3">
      <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-2 w-10/12">
        <MaterialCommunityIcons name="magnify" size={30}/>
        <TextInput placeholder="Search address or near you" className="w-full px-2" />
      </View>
        <View className="p-2 mx-3 rounded-xl" style={{backgroundColor: '#42AAE5'}}>
          <MaterialCommunityIcons name="tune" size={30} color="white"/>
        </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})