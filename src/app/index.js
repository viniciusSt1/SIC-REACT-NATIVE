import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>

      <TextInput
        placeholder="Digite uma tarefa"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Adicionar" onPress={addTask} />

      {tasks.map((t, i) => (
        <View key={i} style={styles.taskContainer}>
          <Text style={styles.taskText}>{t}</Text>
          <Button title="Remover" onPress={() => removeTask(i)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
  },
});
