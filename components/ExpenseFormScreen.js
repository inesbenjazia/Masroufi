import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet, Image,Platform ,TouchableOpacity,ScrollView} from 'react-native';

import { RadioButton } from 'react-native-paper'; // Importez le composant RadioButton



const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState(selectedCategory);
  const [date, setDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('loisir');
  const navigation = useNavigation();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    

    // Mettez en place la logique pour ajuster le montant en fonction de la catégorie choisie
    switch (category) {
      case 'nutrition':
        setAmount(/* Montant pour la catégorie 'nutrition' */);
        break;
      case 'éducation':
        setAmount(/* Montant pour la catégorie 'éducation' */);
        break;
      case 'loisir':
        setAmount(/* Montant pour la catégorie 'loisir' */);
        break;
      case 'loyer':
        setAmount(/* Montant pour la catégorie 'loyer' */);
        break;
        case 'Autre':
        setAmount(/* Montant pour la catégorie 'Autre' */);
      default:
        setAmount(0);
    }
  };

  const handleSubmit = () => {
    
    // Ajoutez ici la logique de gestion de la soumission du formulaire
    console.log('Montant:', amount);
    console.log('Type:',  selectedCategory);
    console.log('Date:', date);
    alert('Dépense ajoutée avec succés !');
    navigation.navigate("HomeScreen")
    };

  return (
    <ScrollView>
    <View style={styles.container}>
       <Image style={styles.image} source={require("./background.png")} />
      <Text style={styles.text}>Dépense</Text>
      <View style={styles.champ}>
        <Text>Ajouter Montant payé</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Montant"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <View style={styles.container}>
        <Text>{`Catégorie sélectionnée: ${selectedCategory}`}</Text>

        <RadioButton.Group onValueChange={handleCategoryChange} value={selectedCategory}>
          <View style={styles.radioButtonContainer}>
            <Text>Nutrition</Text>
            <RadioButton value="nutrition" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Éducation</Text>
            <RadioButton value="éducation" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Loisir</Text>
            <RadioButton value="loisir" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Loyer</Text>
            <RadioButton value="loyer" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Autre</Text>
            <RadioButton value="Autre" />
          </View>
        </RadioButton.Group>
      </View>

     
     
   
      <TouchableOpacity style={styles.button} onPress={handleSubmit} >
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>  

        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button:{width: '80%',
  height: 50,
  backgroundColor: 'pink',
  borderRadius: 10,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: -135,  
},
  container: {
    flex:0.7,
    justifyContent: 'center',
    alignItems: 'center',
 },
  image:{height:'40%', },
  input: {
    height: '10%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 95,
    width: '80%',
    paddingHorizontal: 10,
  },
  text:{marginBottom:'10%',
  fontSize:25,
  fontFamily:'bold'},
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:1
  },
  champ:{
    justifyContent: 'center',

  }
});

export default ExpenseForm;