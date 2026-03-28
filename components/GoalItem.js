import { StyleSheet, Text, View, TextInput, Button, Pressable, FlatList } from 'react-native';

function GoalItem(props){
    return(
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
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