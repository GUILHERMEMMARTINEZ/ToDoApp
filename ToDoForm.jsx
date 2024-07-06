import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={handleAddTask} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ToDoForm;
