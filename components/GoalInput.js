import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalsInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
  }

    return(
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
    );
};

export default GoalInput;


const styles = StyleSheet.create({
    cont1:{
    flex:3,
    alignItems:'center',
    paddingHorizontal:20,
  },    
    bodytext:{
    marginBottom:40,
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
  }
});