import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { actions } from '../utils/actions';
import { useNavigation } from '@react-navigation/native';

export default function ActionScreen() {
  const navigation = useNavigation();
  const today = new Date().getDate();
  const action = actions[today % actions.length];

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{action}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back  (Come Tomorrow)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  resultText: {
    color: '#00ffe0',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 40,
  },
  backButton: {
    borderColor: '#00ffe0',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  backText: {
    color: '#00ffe0',
    fontSize: 18,
  },
});
