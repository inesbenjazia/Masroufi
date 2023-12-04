import React, { useState, useEffect } from 'react';
import { View, Image, Text ,StyleSheet} from 'react-native';

const Transactions = () => {
  return(
            <View style={styles.transactionsContainer}>
                <View style={styles.transactionContainer}>
                    <View style={styles.transactionRight}>
                        <Image 
                            source={require("../assets/dish.png")}  // Assurez-vous que la casse est correcte
                            style={styles.transactionLogo}
                        />
                        <Text style={styles.transactionType}>
                            Food
                        </Text>
                    </View>
                    <View style={styles.transactionRight}>
                        <Text style={styles.transactionMontant}>
                         - 5 Dt
                        </Text>
                    </View>
                    

                </View>
                


            </View>
  )
};

export default Transactions;


const styles = StyleSheet.create({


    transactionType:{
          
        color: "#363030",
        fontFamily: 'Inter',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
       
    },
    transactionLogo:{
        // flex:1,
        // marginTop:"20%",
         height:50,
         width:50,      
     },
    transactionContainer: {
        width:"70%",
        backgroundColor:"#ffffff",
        borderRadius: 10,
        backgroundColor: '#F6F7F9',
        height:"33%",
        flexDirection:"row",
        //justifyContent:"space-between",
        //paddingRight:"20%",
        //paddingLeft:"20%",
        backgroundColor:"#000000",
      },

    transactionsContainer: {
        //backgroundColor:"#000000",
      
        marginRight:"10%",
        marginLeft:"8%",
        
      },
    transactionRight: {
        backgroundColor:"#ffffff",
        marginLeft:"10%"

    },
    transactionLeft: {
        backgroundColor:"#ffffff",
        marginLeft:"50%",
        marginRight:"1%"

    },

   
   

})
