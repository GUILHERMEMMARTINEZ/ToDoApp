import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    if (!tasks.includes(task) && task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <MainLayout>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.listContainer}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} color="#007bff" />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
