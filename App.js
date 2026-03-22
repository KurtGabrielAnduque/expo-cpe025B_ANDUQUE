import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalsInputHandler(enteredText){
    setEnteredGoalText(enteredText);

  };

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() }
    ]);
    console.log(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Welcome To Course Tracker</Text>
      </View>
      <View style={styles.cont1}>
        <Text style={styles.bodytext}>Enter course you want to track</Text>
        <TextInput 
          placeholder='Input Your Course Goal' 
          style={styles.userInput}
          onChangeText={goalsInputHandler} 
          value={enteredGoalText}   
        />

        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed 
          ]} 
          onPress={addGoalHandler}>

          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </View>
      <View style={styles.cont2}>
        <Text style={styles.notif}> Current Courses Taking</Text>
        <View style={styles.rederCourse}>
          <FlatList 
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
              return (
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
    
  );
}



const styles = StyleSheet.create({
  appContainer:{
    margin:0,
    backgroundColor: '#fac34e',
    flex:1,
  },
  header:{
    flex:1,
    justifyContent: 'center',
    alignSelf:'center'
  },
  headertext:{
    fontSize:25,
    fontWeight:500,
    paddingBottom:10,
    paddingHorizontal:20,
    borderBottomWidth:3,
  },
  cont1:{
    flex:3,
    alignItems:'center',
    paddingHorizontal:20,
  },
  cont2:{
    flex:3,
    borderWidth:2,
    backgroundColor:'#eeeeee',
    borderTopEndRadius:50,
    borderTopLeftRadius:50,
  },
  bodytext:{
    marginBottom:100,
    fontSize:20,
    fontWeight:600
  },
  userInput:{
    marginBottom:30,
    paddingHorizontal:50,
    height:60,
    fontSize:16,
    backgroundColor:'#eeeeee',
    borderRadius:20,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.20)',
    textAlign:'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#1E1E1E', 
    paddingVertical: 16,        
    paddingHorizontal: 50,      
    borderRadius: 30,           
    elevation: 8,               
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonPressed: {
    opacity: 0.75,              
    transform: [{ scale: 0.95 }], 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',          
    letterSpacing: 2,           
    textAlign: 'center',
  },
  notif:{
    marginTop:10,
    alignSelf: 'center',
    fontSize:18,
    paddingBottom:5,
    paddingHorizontal:20,
    borderBottomWidth:2,
    borderColor:'#adadad',
  },
  rederCourse:{
    justifyContent: 'center',
    alignItems:'center',
  },
  rederCourse: {          
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  goalItem: {
    backgroundColor: '#fac34e', 
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,               
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  goalText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
