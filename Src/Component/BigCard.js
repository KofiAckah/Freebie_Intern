import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BigCard = ({imageSource,distance,name,location,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View className="w-64 h-80 m-3 rounded-3xl overflow-hidden">
      <Image className="w-64 h-80 " source={imageSource}/>
      <View className="bg-gray-500 flex-row relative rounded-full bottom-72 left-36 w-24 p-1 items-center justify-center opacity-70">
        <MaterialCommunityIcons name="map-marker-outline" size={25} color="white"/>
        <Text className="text-white ml-2">{distance}</Text>
      </View>
      <View className="relative bottom-28 bg-gray-700 pl-6 opacity-70 h-full">
        <Text className="text-white font-semibold my-2">{name}</Text>
        <Text className="text-white">{location}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default BigCard