import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let res;
    switch (operacao) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Erro: divisão por 0';
        break;
      default:
        res = 'Operação inválida';
    }
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Simples</Text>

      <TextInput
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttons}>
        <Button title="+" onPress={() => calcular('+')} />
        <Button title="-" onPress={() => calcular('-')} />
        <Button title="*" onPress={() => calcular('*')} />
        <Button title="/" onPress={() => calcular('/')} />
      </View>

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
