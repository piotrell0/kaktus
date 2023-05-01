import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Clipboard, Button, StyleSheet } from 'react-native';

const MyComponent = () => {
  const quotes1 = [
    "Ja chce powiedzieć jedną rzecz",
    "Trzeba powiedzieć",
    "Jak powiedział wybitny krakowianin Stanisław Lem",
    "Proszę mnie dobrze zrozumieć",
    "Ja chciałem państwu przypomnieć, że",
    "Niech państwo nie mają złudzeń",
    "Powiedzmy to wyraźnie",
  ];
  const quotes2 = [
    "przedstawiciele czerwonej hołoty",
    "ci wszyscy (tful)",
    "funkcjonariusze reżymowej telewizji",
    "tak zwani ekolodzy",
    "ci wszyscy (tful) demokraci",
    "agenci i bezpieki",
    "feminiazistki",
  ];
  const quotes3 = [
    "zupełnie bezkarnie",
    "całkowicie bezczelnie",
    "o poglądach na lewo i prawo",
    "celowo i świadomie",
    "z premedytacją",
    "od czasów Okrągłego Stołu",
    "w ramach postępu",
  ];
  const quotes4 = [
    "nawołują do podniesienia podatków",
    "próbują wyrzucić kierowców z miast",
    "próbują skłócić Polskę z Rosją",
    "głoszą brednię o globalnym ociepleniu",
    "zakazują posiadania broni",
    "nie dopuszczają prawicy do władzy",
    "uczą dzieci homoseksualizmu",
  ];
  const quotes5 = [
    "bo dzięki temu mogą kraść",
    "bo dostają za to pieniądze",
    "bo tak się uczy w państwowej szkole",
    "bo bez tego (tful) demokracja nie może istnieć",
    "bo głupich jest więcej niż mądrych",
    "bo chcą tworzyć raj na ziemi",
    "bo chcą niszczyć cywilizację białego człowieka",
  ];
  const quotes6 = [
    "przez kolejne kadencje",
    "o czym się nie mówi",
    "i właśnie dlatego Europa umiera",
    "ale przyjdą muzułmanie i zrobią porządek",
    "- tak samo zresztą jak za Hitlera",
    "- prosze zobaczyć co się dzieje na Zachodzie, jesli mi państwo nie wierzą",
    "co lat temu sto nikomu nie przyszłoby nawet do głowy",
  ];
  
  const generateSentence = () => {      
      index1 = Math.floor(Math.random() * quotes1.length);
      index2 = Math.floor(Math.random() * quotes2.length);
      index3 = Math.floor(Math.random() * quotes3.length);
      index4 = Math.floor(Math.random() * quotes4.length);
      index5 = Math.floor(Math.random() * quotes5.length);
      index6 = Math.floor(Math.random() * quotes6.length);
      slowo1 = quotes1[index1] + " ";
      slowo2 = quotes2[index2] + " ";
      slowo3 = quotes3[index3] + " ";
      slowo4 = quotes4[index4] + " ";
      slowo5 = quotes5[index5] + " ";
      slowo6 = quotes6[index6];
      const sentence = slowo1+slowo2+slowo3+slowo4+slowo5+slowo6;

      return sentence;
  };

  const [generatedSentence, setGeneratedSentence] = useState('');

  return (

    <View style={styles.container}>
      <Button onPress={() => { setGeneratedSentence(generateSentence())}} style={styles.button }>Generuj</Button>
      <Text>{generatedSentence}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  }
  });

export default MyComponent;