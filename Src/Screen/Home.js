import { StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// component
import Search from '../Component/Search';
import MenuBar from '../Component/MenuBar'
import BigCard from '../Component/BigCard';
import SmallCard from '../Component/SmallCard';

import { InfoData } from '../Component/InfoData';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-gray-700 mt-1 ml-3 font-light">Location</Text>
        <View className="flex-row items-center mx-3 justify-between">
          <View className="flex-row items-center">
            <Text className="text-xl mr-2">Jakarta</Text>
            <MaterialCommunityIcons name="chevron-down" size={25} color="gray" onPress={() => alert('Your current location')}/>
          </View>
          <MaterialCommunityIcons name="bell-outline" size={30}/>
        </View>
        <Search />
        <MenuBar/>
        <View className="flex-row justify-between mx-3 mt-3 items-center">
          <Text className="text-base">Near from you</Text>
          <Text className="text-gray-400">See More</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BigCard imageSource={InfoData[0].imageSource} distance={InfoData[0].distance} name={InfoData[0].name} location={InfoData[0].location} onPress={() => navigation.navigate('Detail',{
            imageSource:InfoData[0].imageSource,
            name:InfoData[0].name,
            location:InfoData[0].location,
            bedroomNum:InfoData[0].bedroomNum,
            bathroomNum:InfoData[0].bathroomNum,
          })}/>
          <BigCard imageSource={InfoData[1].imageSource} distance={InfoData[1].distance} name={InfoData[1].name} location={InfoData[1].location}
            onPress={() => navigation.navigate('Detail',{
              imageSource:InfoData[1].imageSource,
              name:InfoData[1].name,
              location:InfoData[1].location,
              bedroomNum:InfoData[1].bedroomNum,
              bathroomNum:InfoData[1].bathroomNum,
            })
            }
          />
          <BigCard imageSource={InfoData[2].imageSource} distance={InfoData[2].distance} name={InfoData[2].name} location={InfoData[2].location}/>
          <BigCard imageSource={InfoData[3].imageSource} distance={InfoData[3].distance} name={InfoData[3].name} location={InfoData[3].location}/>
        </ScrollView>
        <View className="flex-row justify-between mx-3 mt-3 items-center">
          <Text className="text-base">Best from you</Text>
          <Text className="text-gray-400">See More</Text>
        </View>
        <SmallCard imageSource={InfoData[4].imageSource} price={InfoData[4].price} name={InfoData[4].name} bedroomNum={InfoData[4].bedroomNum} bathroomNum={InfoData[4].bathroomNum}/>
        <SmallCard imageSource={InfoData[5].imageSource} price={InfoData[5].price} name={InfoData[5].name} bedroomNum={InfoData[5].bedroomNum} bathroomNum={InfoData[5].bathroomNum}/>
        <SmallCard imageSource={InfoData[6].imageSource} price={InfoData[6].price} name={InfoData[6].name} bedroomNum={InfoData[6].bedroomNum} bathroomNum={InfoData[6].bathroomNum}/>
        <SmallCard imageSource={InfoData[7].imageSource} price={InfoData[7].price} name={InfoData[7].name} bedroomNum={InfoData[7].bedroomNum} bathroomNum={InfoData[7].bathroomNum}/>
        <SmallCard imageSource={InfoData[8].imageSource} price={InfoData[8].price} name={InfoData[8].name} bedroomNum={InfoData[8].bedroomNum} bathroomNum={InfoData[8].bathroomNum}/>
      </ScrollView>
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