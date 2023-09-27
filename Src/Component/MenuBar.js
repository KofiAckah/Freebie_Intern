import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

const MenuBar = () => {
  const [button1Pressed, setButton1Pressed] = useState(true);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const [button3Pressed, setButton3Pressed] = useState(false);
  const [button4Pressed, setButton4Pressed] = useState(false);
  const [button5Pressed, setButton5Pressed] = useState(false);
  const [button6Pressed, setButton6Pressed] = useState(false);

  const handleButton1Press = () => {
    setButton1Pressed(true);
    setButton2Pressed(false);
    setButton3Pressed(false);
    setButton4Pressed(false);
    setButton5Pressed(false);
    setButton6Pressed(false);
  };

  const handleButton2Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(true);
    setButton3Pressed(false);
    setButton4Pressed(false);
    setButton5Pressed(false);
    setButton6Pressed(false);
  };

  const handleButton3Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(false);
    setButton3Pressed(true);
    setButton4Pressed(false);
    setButton5Pressed(false);
    setButton6Pressed(false);
  };

  const handleButton4Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(false);
    setButton3Pressed(false);
    setButton4Pressed(true);
    setButton5Pressed(false);
    setButton6Pressed(false);
  };

  const handleButton5Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(false);
    setButton3Pressed(false);
    setButton4Pressed(false);
    setButton5Pressed(true);
    setButton6Pressed(false);
  };

  const handleButton6Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(false);
    setButton3Pressed(false);
    setButton4Pressed(false);
    setButton5Pressed(false);
    setButton6Pressed(true);
  };

  return (
    <View className="ml-3 my-3">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-3 mr-3"
          style={[
            styles.button,
            button1Pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleButton1Press}
        >
          <Text className="text-base">House</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-3 mr-3"
          style={[
            styles.button,
            button2Pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleButton2Press}
        >
          <Text className="text-base">Apartment</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-3 mr-3"
          style={[
            styles.button,
            button3Pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleButton3Press}
        >
          <Text className="text-base">Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-3 mr-3"
          style={[
            styles.button,
            button4Pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleButton4Press}
        >
          <Text className="text-base">Villa</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-3 mr-3"
          style={[
            styles.button,
            button5Pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleButton5Press}
        >
          <Text className="text-base">Mansion</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-3 mr-3"
          style={[
            styles.button,
            button6Pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleButton6Press}
        >
          <Text className="text-base">Other</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: '#42AAE5',
  },
});

export default MenuBar