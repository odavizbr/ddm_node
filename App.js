import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, Text, View, Image, TextInput } from 'react-native';
import styles from 'assets/css/style.js'; 
export default function App() {
  const [name, setNome] = React.useState('');
  const [imagem, setImagem] = React.useState(require('./assets/img/img01.jpg'));

  function trocarImagem() {
    if (imagem === "67") {
      setImagem(require('./assets/img/img01.jpg'));
    }
    if (imagem === "Mustard") {
      setImagem(require('./assets/img/img02.jpg'));
    }
    if (imagem === "El pepe") {
      setImagem(require('./assets/img/img03.jpg'));
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.label}>Nome:</Text> 

      <TextInput
        style={styles.input}
        onChangeText={(value) => setNome(value)}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
      />

      <Pressable style={styles.button} onPress={trocarImagem}>
        <Text style={styles.buttonText}>VER</Text>
      </Pressable>

      {name.length ? (
        <Text style={styles.welcome}>Olá, {name}!</Text>
      ) : null}

      <Image source={imagem} style={styles.image}/>
    </View>
  );
}
