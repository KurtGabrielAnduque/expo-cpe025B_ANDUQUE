import { View, Text, StyleSheet, Pressable, Modal, Alert, TextInput} from 'react-native';
import React, { useState } from 'react';

function HomeScreen() {

  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.subcon1}>
        <View style={styles.fontcont}>
          <Text style={styles.textHead}>Welcome To Course Tracer</Text>
          <Text style={styles.textsub}>Where you are able to create and track all the list of courses that you create</Text>
        </View>
      </View>

      <View style={styles.subcon2}>
        

        <Modal
          animationType="fade"
          transparent={true}
          visible={loginVisible}
          onRequestClose={() => {
            Alert.alert('Login Modal has been closed.');
            setLoginVisible(!loginVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Login</Text>
                <TextInput placeholder='UserName' style={styles.userInput}/>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.userInput}/>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setLoginVisible(!loginVisible)}>
                    <Text style={styles.buttonFont}>Login</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setLoginVisible(!loginVisible)}>
                    <Text style={styles.buttonFont}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </Modal>


        <Modal
          animationType="slide"
          transparent={true}
          visible={registerVisible}
          onRequestClose={() => {
            Alert.alert('Register Modal has been closed.');
            setRegisterVisible(!registerVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Register</Text>

                <TextInput placeholder='UserName' style={styles.userInput}/>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.userInput}/>
                <TextInput placeholder='gmail' style={styles.userInput}/>
                <TextInput placeholder='student Number' style={styles.userInput}/>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setRegisterVisible(!registerVisible)}>
                    <Text style={styles.buttonFont}>Login</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setRegisterVisible(!registerVisible)}>
                    <Text style={styles.buttonFont}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </Modal>

        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => setLoginVisible(true)}
        >
          <Text style={styles.buttonFont}>Login</Text>
        </Pressable>

        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => setRegisterVisible(true)}
        >
          <Text style={styles.buttonFont}>Register</Text>
        </Pressable>

      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    margin: 0,
    backgroundColor: '#fac34e',
  },
  subcon1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  fontcont: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: 'white', 
  },
  textHead: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold'
  },
  textsub: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500' 
  },
  subcon2: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.95 }]
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
    height: '70%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonClose: {
    backgroundColor: '#fac34e',
  },
  userInput:{
    borderWidth:2,
    width:'80%',
    marginVertical:10,
    paddingVertical:15,
    paddingHorizontal:10
  }
});