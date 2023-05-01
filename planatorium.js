import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Planerus = () => {

  const [widokPoniedzialek, setWidokPoniedzialek] = useState(false);
  const [widokWtorek, setWidokWtorek] = useState(false);
  const [widokSroda, setWidokSroda] = useState(false);
  const [widokCzwartek, setWidokCzwartek] = useState(false);
  const [widokPiatek, setWidokPiatek] = useState(false);
  const [widokSobota, setWidokSobota] = useState(false);
  const [widokNiedziela, setWidokNiedziela] = useState(false);
  

  const [listaPoniedzialek, setListaPoniedzialek] = useState(['chuj', 'mega chuj']);
  const [listaWtorek, setListaWtorek] = useState(['chuj', 'mega chuj']);
  const [listaSroda, setListaSroda] = useState(['chuj', 'mega chuj']);
  const [listaCzwartek, setListaCzwartek] = useState(['chuj', 'mega chuj']);
  const [listaPiatek, setListaPiatek] = useState(['chuj', 'mega chuj']);
  const [listaSobota, setListaSobota] = useState(['chuj', 'mega chuj']);
  const [listaNiedziela, setListaNiedziela] = useState(['chuj', 'mega chuj']);


  
  const pressPoniedzialek = () => {
    setWidokPoniedzialek(!widokPoniedzialek);
  };
  const pressWtorek = () => {
    setWidokWtorek(!widokWtorek);
  };
  const pressSroda = () => {
    setWidokSroda(!widokSroda);
  };
  const pressCzwartek = () => {
    setWidokCzwartek(!widokCzwartek);
  };
  const pressPiatek = () => {
    setWidokPiatek(!widokPiatek);
  };
  const pressSobota = () => {
    setWidokSobota(!widokSobota);
  };
  const pressNiedziela = () => {
    setWidokNiedziela(!widokNiedziela);
  };


  return (
    <View style={styles.ekran}>
      <View style={styles.container}>
        <TouchableOpacity onPress={pressPoniedzialek} style={styles.guzik}>
          <Text>Poniedziałek</Text>
        </TouchableOpacity>

        {widokPoniedzialek && (
          <View style={styles.cwiczenia}>
            <Text>{listaPoniedzialek.join(' | ')}</Text>
          </View>
        )}



        <TouchableOpacity onPress={pressWtorek} style={styles.guzik}>
          <Text>Wtorek</Text>
        </TouchableOpacity>

        {widokWtorek && (
          <View style={styles.cwiczenia}>
            <Text>{listaWtorek.join(' | ')}</Text>
          </View>
        )}



        <TouchableOpacity onPress={pressSroda} style={styles.guzik}>
          <Text>Środa</Text>
        </TouchableOpacity>

        {widokSroda && (
          <View style={styles.cwiczenia}>
            <Text>{listaSroda.join(' | ')}</Text>
          </View>
        )}
        


        <TouchableOpacity onPress={pressCzwartek} style={styles.guzik}>
          <Text>Czwartek</Text>
        </TouchableOpacity>

        {widokCzwartek && (
          <View style={styles.cwiczenia}>
            <Text>{listaCzwartek.join(' | ')}</Text>
          </View>
        )}
        


        <TouchableOpacity onPress={pressPiatek} style={styles.guzik}>
          <Text>Piątek</Text>
        </TouchableOpacity>

        {widokPiatek && (
          <View style={styles.cwiczenia}>
            <Text>{listaPiatek.join(' | ')}</Text>
          </View>
        )}
        


        <TouchableOpacity onPress={pressSobota} style={styles.guzik}>
          <Text>Sobota</Text>
        </TouchableOpacity>

        {widokSobota && (
          <View style={styles.cwiczenia}>
            <Text>{listaSobota.join(' | ')}</Text>
          </View>
        )}
        


        <TouchableOpacity onPress={pressNiedziela} style={styles.guzik}>
          <Text>Niedziela</Text>
        </TouchableOpacity>

        {widokNiedziela && (
          <View style={styles.cwiczenia}>
            <Text>{listaNiedziela.join(' | ')}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ekran: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  guzik: {
    backgroundColor: '#009966',
    width: 240,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: 50,
    margin: 10,
  },

  cwiczenia: {
    backgroundColor:'#444654',
    borderRadius: 10,
    width: 220,
    padding: 10,
  }
});

export default Planerus;