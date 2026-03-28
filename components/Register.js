import { StyleSheet, Text, View, Pressable } from 'react-native';

function Register(props) {
  return (
    <View style={styles.cont3}>
      <Text style={styles.newbie}>Are you new to using the app?</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed 
        ]} 
        
        onPress={props.onNavigate}
      >
        <Text style={styles.login}>Register</Text>
      </Pressable>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  cont3: {
    flex: 0.75,
    marginBottom: 10,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  newbie: {
    fontSize: 18,
    marginBottom: 10,
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
    width: '70%',
    alignSelf: 'center'
  },
  buttonPressed: {
    opacity: 0.75,              
    transform: [{ scale: 0.95 }], 
  },
  login: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',          
    letterSpacing: 2,           
    textAlign: 'center',
  }
});