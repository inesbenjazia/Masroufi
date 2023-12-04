import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet, Image,Platform ,TouchableOpacity} from 'react-native';

import { RadioButton } from 'react-native-paper'; // Importez le composant RadioButton



const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();

 

  const handleSubmit = () => {
    
    // Ajoutez ici la logique de gestion de la soumission du formulaire
    console.log('Montant:', amount);
    console.log('Date:', date);
    alert('Revenu ajouté avec succés !')
     navigation.navigate("HomeScreen")  };

  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("./background.png")} />
      <Text style={styles.text}>Revenue</Text>
      <View style={styles.champ}>
        <Text>Ajouter Montant </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Montant"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      
     
     
   
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>  

        
      </View>
    
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
  bottom: -1,  
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
  },
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