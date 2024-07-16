import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <MainLayout>
      <Text style={styles.title}>About Screen</Text>
      <Text>Name of the app: ToDoApp</Text>
      <TouchableOpacity onPress={() => setEasterEgg(!easterEgg)}>
        <Text style={styles.name}>Developer: Guilherme de Andrade Martinez Marques</Text>
      </TouchableOpacity>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
      {easterEgg && <Text style={styles.easterEgg}>You found the Easter Egg!</Text>}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  easterEgg: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default AboutScreen;
