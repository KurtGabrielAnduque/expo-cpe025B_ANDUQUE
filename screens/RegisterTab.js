import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Using the icons from your app

function RegisterScreen() {
  // State for our new welcome pop-up
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={welcomeVisible}
        onRequestClose={() => setWelcomeVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons name="happy-outline" size={50} color="#fac34e" style={styles.modalIcon} />
            <Text style={styles.modalText}>Welcome to Course Tracker!</Text>
            <Text style={styles.Subtext}>We're glad to have you here. Let's crush those courses!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setWelcomeVisible(false)}
            >
              <Text style={styles.buttonFont}>Awesome</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.headerText}>My Account</Text>

      
      <View style={styles.subcontainer}>
        <Pressable
          onPress={() => setWelcomeVisible(true)}
          style={({ pressed }) => [
            styles.iconContainer,
            pressed && styles.pressedItem
          ]}
        >
          
          <Ionicons name="person-circle" size={150} color="#1E1E1E" />
          <Text style={styles.tapText}>Tap Icon for a Greeting!</Text>
        </Pressable>

        
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>USER NAME</Text>
          <Text style={styles.infoValue}>Kurt Gabriel A. Anduque</Text>
          
          <Text style={styles.infoLabel}>STUDENT NUMBER</Text>
          <Text style={styles.infoValue}>2311442</Text>
        </View>
      </View>

    </View>
  );
}


export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fac34e', 
    alignItems: 'center',
    paddingTop: 80, 
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  subcontainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  pressedItem: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  tapText: {
    marginTop: -10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#eeeeee',
    width: '80%',
    padding: 25,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 20,
    color: '#1E1E1E',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)', 
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1E1E1E',
  },
  Subtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 3,
  },
  buttonClose: {
    backgroundColor: '#1E1E1E', 
  },
  buttonFont: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  }
});