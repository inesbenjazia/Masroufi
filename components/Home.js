import { ScrollView, StyleSheet ,Text, Image, View ,TouchableOpacity } from "react-native";
import UserProfile from "./UserProfile";
import Transactions from "./Transactions";
//import Pie from 'react-native-pie'
//import { useFonts } from 'expo-font';
import CustomPieChart from "./CustomPieChart";



const Home = () =>{
    
    return(

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.imageContainer} >
                    <UserProfile/> 
                </View>
                <View style={styles.nameContainer}>
                    <Text  style={styles.welcome}> Welcome </Text>
                    <Text  style={styles.name}> User Name</Text>
                </View>

                <View>
                    <CustomPieChart />
                </View>
                
            </View>

           
          
          
            
            
            
            <Image source={require("../assets/dash.jpeg")}  // Assurez-vous que la casse est correcte
             style={styles.image}
            />
            <View style={styles.transactionHeader}>
                <Text style={styles.transactions}>
                   Transactions
                </Text>
                <TouchableOpacity style={styles.press} onPress={() => alert("View All pressed")}>
                    <Text style={styles.viewAll}>
                        View All
                    </Text>
                </TouchableOpacity>
                

            </View>
            <View>
            <Transactions/>
            
            </View>
        </ScrollView>
    );
};
export default Home;

const styles = StyleSheet.create({
    

    transactionHeader:
    { 
        flexDirection: 'row',
    justifyContent: 'space-between',  // Cela va pousser les éléments à chaque extrémité
    padding: 16, 
        
    },
    transactions:
    { 
        
        flex: 1,
        alignItems:"flex-start",
        flexDirection:"row",
        color: '#464646',
       // fontFamily: 'Inter',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 21,

    },
    press:
    {
        marginRight:"5%",
    },
    viewAll:
    {
 
        color: "#858484",
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    },

   
    name: {
        
        color: '#646464',
        
        textShadowRadius: 0.5, 
        fontSize: 15,
        fontWeight: "800",
        
    },
    welcome: {
        
        color: "#858484",
        //fontFamily: "Inter",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        
    },

    container:{
        alignItems :"center",
        backgroundColor : "#EEF0F3",
        height:900,
        width:400,
        paddingTop:50,
    },
    image: {
        marginTop:"auto",
        margin:"6%",
        height:400,
        width:370,
        resizeMode:"contain",
        
    },
    headerContainer:{
        alignItems:"flex-start",
        flexDirection:"row",
        paddingLeft:"5%",
        width:"93%"
       
    },

    imageContainer:{
        
        alignItems :"center",
       
    },
    nameContainer:{
        
        alignItems :"center",
        margin:"3%",
        
      
    },
   

})