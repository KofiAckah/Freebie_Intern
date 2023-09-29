import { StyleSheet, Text, View,Image,StatusBar,ScrollView } from 'react-native'
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