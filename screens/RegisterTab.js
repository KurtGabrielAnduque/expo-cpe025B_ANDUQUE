import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Registration Page!</Text>
      <View style={styles.subcontainer}>
        <TextInput placeholder='USER NAME' style={styles.userInput}/>
        <TextInput placeholder='STUDENT NUMBER' style={styles.userInput}/>
        <TextInput secureTextEntry={true} placeholder='PASSWORD' style={styles.userInput}/>
        <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed 
                ]}>

                <Text style={styles.login}>Register</Text>
              </Pressable>
      </View>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fac34e',
  },
  subcontainer:{
    marginTop:50,
    flex:2,
    alignItems:'center'
  },
  text: {
    marginTop:20,
    fontSize: 24,
    fontWeight: 'bold'
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
    width: '300',
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