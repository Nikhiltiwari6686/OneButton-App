import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Action');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>ONE BUTTON</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>TAP</Text>
      </TouchableOpacity>

      <Text style={styles.poweredText}>Powered by Nikhil Tiwari</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#00ffe0',
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#00ffe0',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 100,
    elevation: 10,
  },
  poweredText: {
  position: 'absolute',
  bottom: 80,
  textAlign: 'center',
  color: '#00ffe0',
  fontSize: 14,
  fontStyle: 'italic',
  opacity: 0.6,
},
  buttonText: {
    color: '#0f0f0f',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
