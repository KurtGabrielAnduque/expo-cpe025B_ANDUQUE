import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Register from './components/Register'; 
import RegisterScreen from './screens/RegisterTab';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Welcome To Course Tracker</Text>
      </View>
      
      <GoalInput addGoalHandler={addGoalHandler} />
      <Register onNavigate={() => navigation.navigate('Register')} />

      <View style={styles.cont2}>
        <Text style={styles.notif}>Current Courses Taking</Text>
        <View style={styles.rederCourse}>
          <FlatList 
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <GoalItem text={itemData.item.text} />
            )}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    margin:0,
    backgroundColor: '#fac34e',
    flex:1,
    marginTop:30,
  },
  header:{
    flex:1,
    justifyContent: 'center',
    alignSelf:'center'
  },
  cont3: {
    flex:0.75,
    marginBottom:10,
    justifyContent: 'center',
    paddingBottom:20,
    paddingHorizontal:20,
    alignItems:'center'
  },
  headertext:{
    fontSize:25,
    fontWeight:500,
    paddingBottom:10,
    paddingHorizontal:20,
    borderBottomWidth:3,
  },
  cont2:{
    flex:3,
    borderWidth:2,
    backgroundColor:'#eeeeee',
    borderTopEndRadius:50,
    borderTopLeftRadius:50,
    paddingBottom: 20,
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
    marginTop:10,
    marginBottom:25
  },
  
  
});
