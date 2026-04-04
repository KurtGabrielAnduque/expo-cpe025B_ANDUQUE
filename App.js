import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Register from './components/Register'; 
import RegisterScreen from './screens/RegisterTab';
import HomeScreen  from './screens/HomeScreenTab';

import { Ionicons } from '@expo/vector-icons';

// Since we are new in creating the tab lets import instead
// import the bottom tab creator
const Tab = createBottomTabNavigator();

function AppScreen({ navigation }) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [tooMuchVisible, setTooMuchVisible] = useState(false);

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    
    if (courseGoals.length > 5){
      setTooMuchVisible(true);
    }
  };

  // add the new deleter function
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Welcome To Course Tracker</Text>
      </View>
      
      <Modal
          animationType="fade"
          transparent={true}
          visible={tooMuchVisible}
          onRequestClose={() => {
            Alert.alert('Login Modal has been closed.');
            setTooMuchVisible(!tooMuchVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Warning</Text>
                <Text style={styles.Subtext}>Bro you taking too much course pls calm down '_'</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setTooMuchVisible(!setTooMuchVisible)}>
                    <Text style={styles.buttonFont}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </Modal>
      

      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.cont2}>
        <Text style={styles.notif}>Current Courses Taking</Text>
        <View style={styles.rederCourse}>
          <FlatList 
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <GoalItem 
                // get the id so we can delete specific course
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                />
            )}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const homeName = 'Home';
const appName = 'Tracker';
const regName = 'Account';

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions = {({ route }) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          
          if(route.name === 'Home'){
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tracker'){
            iconName = focused ? 'list' : 'list-outline';
          }else if (route.name === 'Account'){
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} color = {color} size = {size}/>
        },
        tabBarActiveTintColor: '#fac34e',
        tabBarInactiveTintColor: 'gray',
      })} 
      >

        <Tab.Screen name = {homeName} component={HomeScreen}/>
        <Tab.Screen name = {appName} component={AppScreen}/>
        <Tab.Screen name = {regName} component={RegisterScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
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
    fontWeight:'500',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal:10,
    paddingVertical:20,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
    height: '40%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:50,
  },
  buttonClose: {
    backgroundColor: '#fac34e',
  },
  Subtext:{
    fontSize:18,
    textAlign:'center',
    marginBottom:50,
  },
  button: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15,
    width: '60%',
    borderRadius: 20
  },
  buttonFont: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight:500
  }
});
