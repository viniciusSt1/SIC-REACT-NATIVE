import { StatusBar } from 'expo-status-bar';
import { Link, Stack, useRouter } from 'expo-router';

import { useState } from 'react';

import {
  Text, View, Button, TextInput,
  Pressable, SafeAreaView, ScrollView,
  Image, Alert, StyleSheet,
  useColorScheme
} from 'react-native';

import MeuComponente from '../components/MeuComponente';
import If from '../components/If';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  /*
  let numero = 0;

  function acrescentar(){
    numero++
    console.log(numero)
  }

  function decrescentar(){
    numero--;
    console.log(numero)
  }
  */

  const [numero, setNumero] = useState(0)
  const router = useRouter();

  function acrescentar() {
    setNumero(numero + 1)
  }
  function decrescentar() {
    setNumero(numero - 1)
  }

  return (
    <View style={styles.container(isDarkMode)}>
      <If condicao={numero % 2 === 0}>
        <Text>O número {numero} é par</Text>
      </If>
      <If condicao={numero % 2 !== 0}>
        <Text>O número {numero} é ímpar</Text>
      </If>

      <Text>Contador: {numero}</Text>
      <View style={styles.contador}>
        <Button title='+' onPress={acrescentar} color={isDarkMode ? 'blue' : 'black'} />
        <Button title='-' onPress={decrescentar} color={isDarkMode ? 'blue' : 'black'}/>
      </View>

      <Link href="/Tela1">Link Tela 1</Link>

      <Pressable onPress={() => router.navigate("/Tela1")}>
        <Text>Navigate Tela 1</Text>
      </Pressable>

      {/*
      <MeuComponente 
        propriedade = "Texto1" 
        num={1} />
      <MeuComponente 
        propriedade = "Texto2" 
        num={2} />
      <MeuComponente 
        propriedade = "Texto3" 
        num={3} />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (isDarkMode) => ({
    flex: 1,
    backgroundColor: isDarkMode ? '#555':'#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  contador: {
    flexDirection: "row",
    gap: 10
  }
});
