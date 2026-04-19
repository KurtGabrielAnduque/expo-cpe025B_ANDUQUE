import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
// Import our Reanimated hooks!
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming, 
  interpolateColor 
} from 'react-native-reanimated';

function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [status, setStatus] = useState('Idle');

  // 1. Reanimated Shared Values
  const buttonScale = useSharedValue(1);
  const colorProgress = useSharedValue(0);

  // 2. Define the animated styles for the button
  const animatedButtonStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      ['#1E1E1E', '#4CAF50'] // Smoothly transitions from Dark Grey to Green
    );

    return {
      transform: [{ scale: buttonScale.value }],
      backgroundColor,
    };
  });

  function goalsInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  // 3. Our upgraded handler with animations
  function handleAddGoalPress(){
    if (!enteredGoalText) return; // Don't animate if empty

    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
    setStatus('Course Added Successfully');

    // Animate color to Green
    colorProgress.value = withTiming(1, { duration: 300 });

    // Reset color and status back to normal after 2 seconds
    setTimeout(() => {
      colorProgress.value = withTiming(0, { duration: 500 });
      setStatus('Idle');
    }, 2000);
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
        
          {/* We use Pressable to detect the touch, but animate the View inside it! */}
          <Pressable 
              onPressIn={() => buttonScale.value = withSpring(0.9)} // Squish down
              onPressOut={() => buttonScale.value = withSpring(1)}  // Bounce back
              onPress={handleAddGoalPress}
          >
              <Animated.View style={[styles.button, animatedButtonStyle]}>
                  <Text style={styles.buttonText}>Add Goal</Text>
              </Animated.View>
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
    marginTop: 50, // Added slight margin so it doesn't hit the top of the screen
  },    
  bodytext:{
    marginBottom:40,
    fontSize:20,
    fontWeight: '600'
  },
  userInput:{
    marginBottom:30,
    paddingHorizontal:50,
    height:60,
    fontSize:16,
    backgroundColor:'#eeeeee',
    borderRadius:20,
    textAlign:'center',
    width: '80%',
    // Replaced web-only boxShadow with cross-platform elevation
    elevation: 4, 
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)',
  },
  button: {
    paddingVertical: 16,        
    paddingHorizontal: 50,      
    borderRadius: 30,           
    elevation: 8,               
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.3)',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',          
    letterSpacing: 2,           
    textAlign: 'center',
  },
  statusResult:{
    marginTop:20,
    fontSize:17,
    fontWeight: '500',
  }
});