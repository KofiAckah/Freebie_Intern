import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SmallCard = ({imageSource,name,price,bedroomNum,bathroomNum}) => {
  return (
    <View className="m-3 flex-row">
      <Image source={imageSource} className="w-24 h-24 rounded-3xl"/>
      <View className="flew-row ml-5">
        <Text className="text-xl">{name}</Text>
        <Text className="text-primary my-2">Rp {price} / Year</Text>
        <View className="flex-row gap-2 items-center">
          <MaterialCommunityIcons name="bed" size={22} color="gray"/>
          <Text className="text-gray-500">{bedroomNum} Bedroom</Text>
          <MaterialCommunityIcons name="bathtub" size={22} color="gray"/>
          <Text className="text-gray-500">{bathroomNum} Bathroom</Text>
        </View>
      </View>
    </View>
  )
}

export default SmallCard

const styles = StyleSheet.create({})