import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-pie';

//import { getPercentsForCategories } from './votre-chemin-vers-le-backend'; // Assurez-vous d'importer votre fonction
const CustomPieChart  = () => {
  const [categoryPercents, setCategoryPercents] = useState([]);

  useEffect(() => {
    // Charger les pourcentages depuis le backend
    const fetchCategoryPercents = async () => {
      try {
        const percents = await getPercentsForCategories();
        setCategoryPercents(percents);
      } catch (error) {
        console.error('Erreur lors de la récupération des pourcentages', error);
      }
    };

    fetchCategoryPercents();
  }, []); // Assurez-vous de gérer correctement les dépendances pour éviter les appels excessifs

  const colors = ['#E38627', '#C13C37', '#6A2135', '#5F9EA0', '#008080'];

  return (
    <View>
      {categoryPercents.length > 0 ? (
        <PieChart
          chart_wh={250}
          series={categoryPercents.map((percent) => percent.value)}
          sliceColor={colors}
        />
      ) : (
        <Text>Chargement...</Text>
      )}
    </View>
  );
};

export default CustomPieChart;
