import { StyleSheet, Text, View,Image,StatusBar,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = ({route}) => {
  const navigation = useNavigation();

  const dataRoot = route.params;

  handleBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View className="m-4 rounded-3xl overflow-hidden h-96">
          <Image source={dataRoot.imageSource} className="w-full h-full"/>
          <View className="flex-row justify-between m-4 relative bottom-96">
            <View className="bg-gray-500 rounded-full p-2 bg-opacity-10">
              <MaterialCommunityIcons color='white' name="chevron-left" size={30} onPress={handleBack}/>
            </View>
            <View className="bg-gray-500 rounded-full p-2">
              <MaterialCommunityIcons color='white' name="bookmark-outline" size={30}/>
            </View>
          </View>
          <View className="opacity-70 bg-gray-500 p-2 relative bottom-52 h-full">
            <Text className="text-white text-3xl font-bold">{dataRoot.name}</Text>
            <Text className="text-white text-xl">{dataRoot.location}</Text>
            <View className="flex-row gap-2 items-center mt-1">
              <View className="bg-gray-800 p-2 rounded-lg">
                <MaterialCommunityIcons name="bed" size={22} color="white"/>
              </View>
              <Text className="text-white text-lg mr-6">{dataRoot.bedroomNum} Bedroom</Text>
              <View className="bg-gray-800 p-2 rounded-lg">
                <MaterialCommunityIcons name="bathtub" size={22} color="white"/>
              </View>            
              <Text className="text-white text-lg">{dataRoot.bathroomNum} Bathroom</Text>
            </View>
          </View>
        </View>
        <Text className="m-4 mt-1 text-2xl">Description</Text>
        <View className="m-4 mt-1 flex">
          <Text className="text-gray-600">The 3 Level that has a modern design has a large pool and a garage that fits up to four cars... <Text className="text-primary">See More</Text></Text>
        </View>
        <View className="mx-4 flex-row items-center justify-between">
          <View className="flex-row">
            <Image source={require('../../assets/Images/profile.png')} className="w-16 h-16 bg-gray-500 rounded-full"/>
            <View>
              <Text className="text-xl ml-4">John Doe</Text>
              <Text className="text-gray-500 ml-4 text-lg">Owner</Text>
            </View>
          </View>
          <View className="flex-row justify-items-start">
            <View className="bg-primary mx-2 p-2 rounded-lg">
              <MaterialCommunityIcons name="phone" size={30} color="white"/>
            </View>
            <View className="bg-primary mx-2 p-2 rounded-lg">
              <MaterialCommunityIcons name="message" size={30} color="white"/>
            </View>
          </View>
        </View>
        <Text className="text-xl m-4">Gallery</Text>
        <View className="flex-row w-full">
          <Image source={require('../../assets/Images/inside1.jpeg')} className="w-1/5 h-20 ml-4 rounded-xl"/>
          <Image source={require('../../assets/Images/inside2.jpeg')} className="w-1/5 h-20 ml-3 rounded-xl"/>
          <Image source={require('../../assets/Images/inside3.jpeg')} className="w-1/5 h-20 ml-3 rounded-xl"/>
          <TouchableOpacity className="w-1/5 h-20 ml-3 rounded-xl flex">
            <Image source={require('../../assets/Images/inside4.jpeg')} className="w-full h-20 rounded-xl opacity-50 bg-black"/>
            <Text className="text-white absolute bottom-5 left-5 text-2xl">+5</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/Images/map.png')} className="w-80 h-40 mt-4 mx-auto rounded-2xl"/>
        <View className="flex-row m-4 justify-between items-center">
          <View classNamemx="">
            <Text className="text-gray-500 mb-1">Price</Text>
            <Text className="text-lg">Rp. {dataRoot.price} / Year</Text>
          </View>
          <Text className="p-3 bg-primary rounded-lg text-white text-lg px-5">Rent Now</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})