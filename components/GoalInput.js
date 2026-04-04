import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('');
  // lets verify the status of the button while we do each properties
  const [status, setStatus] = useState('Idle');
  const [isHovered, setIsHovered] = useState(false);


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
                pressed && styles.buttonPressed,
                isHovered && styles.buttonPressed 
                ]} 
                onPress={()=>{
                  addGoalHandler();
                  setStatus('Course Added Successfully');
                }}
                /*
                // AFTER RELEASE OF FINGER IN BUTTON
                onPressOut={() => setStatus('onPressOut Activated')}

                //LONG PRESS ON BUTTON
                onLongPress={() => setStatus('OnLongPress Activated')}

                //WHEN MOVING FINGERS INSIDE THE BUTTON
                onPressMove={() => setStatus('OnPressMove Activated')}
                
                // WHEN PRESS THE BUTTON
                onPressIn={() => setStatus('OnPressIn Acivated')}

                // HOVER IN BUT IT ONLY WORKS IN PC
                onHoverIn={() => {
                  setIsHovered(true);
                  setStatus('HoveredIn');
                }}*/
                /*

                // HOVER OUT BUT IT ONLY WORKS IN PC
                onHoverOut={() => {
                  setIsHovered(false);
                  setStatus('HoveredIn');
                }}

                // DISABLE BUTTON
                disabled={true}

                // ENLARGE HITBOX
                hitSlop={{ top: 50, bottom: 50, left: 50, right: 20 }}
                
                // ACCEPT ENTRY FOR BUTTON HOLDS
                delayLongPress={800}
                onLongPress={()=> setStatus('Delay longpress accepted')}


                // DELAYING PRESSIN
                unstable_pressDelay={80000}

                onPressIn={() => {
                  console.log('PressIn triggered after delay');
                  setStatus('onPressIn (Delayed)');
                }}
                onPressOut={() => setStatus('onPressOut')}
                */
                >

                <Text style={styles.buttonText}>Add Goal</Text>
            </Pressable>
            <Text style={styles.statusResult}>{status}</Text>
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
  },
  statusResult:{
    marginTop:10,
    fontSize:17,
    fontWeight:500,
  }

});