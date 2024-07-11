import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.listContainer}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
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

export default App;
