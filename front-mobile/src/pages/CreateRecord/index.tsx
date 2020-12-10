import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import Header from '../../components/Header';
import { RectButton } from 'react-native-gesture-handler';

const CreateRecord = () => {

  return (
   <>
   <Header/>
   <View style={styles.container}>
     <TextInput
      style={styles.inputText}
      placeholder="Nome:"
      placeholderTextColor="#9E9E9E"/>
     <TextInput
      keyboardType="numeric"
      maxLength={8}
      style={styles.inputText}
      placeholder="Data de nasc:"
      placeholderTextColor="#9E9E9E"/>
     <TextInput
      style={styles.inputText}
      placeholder="Email:"
     placeholderTextColor="#9E9E9E"/>
     <TextInput 
      style={styles.inputText}
      placeholder="Login:"
      placeholderTextColor="#9E9E9E"/>
     <TextInput
      style={styles.inputText}
      placeholder="Senha de 8 dígitos:"
      placeholderTextColor="#9E9E9E"
      maxLength={8}/>

   </View>
   <View style={styles.footer}>
      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>
          SALVAR
        </Text>
      </RectButton>

   </View>
   
   </>

  );
}

const styles = StyleSheet.create(
  {
    container: {
      marginTop: '15%',
      paddingRight: '5%',
      paddingLeft: '5%',
      paddingBottom: 50
    },
    inputText: {
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 10,
      color: '#ED7947',
      fontFamily: "Play_700Bold",
      fontSize: 16,
      paddingLeft: 20,
      marginBottom: 21
    },
    platformContainer: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    footer: {
      marginTop: '15%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10,
      height: 60,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
  }
);

export default CreateRecord;