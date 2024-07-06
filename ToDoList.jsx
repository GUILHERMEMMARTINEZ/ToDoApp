import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  task: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 18,
  },
});

export default ToDoList;
