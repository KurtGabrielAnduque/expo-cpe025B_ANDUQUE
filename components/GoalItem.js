import { StyleSheet, Text, View, Pressable, Modal, Alert } from 'react-native';
import { useState } from 'react';
// 1. Import Reanimated Layout Transitions!
import Animated, { 
  FadeInRight, 
  FadeOutLeft, 
  Layout, 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

function GoalItem(props) {
  const [WardelVisible, setWardelVisible] = useState(false);

  // 2. Shared value for the 'X' button squish
  const deleteScale = useSharedValue(1);
  const animatedDeleteStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: deleteScale.value }] };
  });

  return (
    // 3. The Magic! We wrap the whole item in Animated.View and add layout props
    <Animated.View 
      entering={FadeInRight.duration(500)} // Slides in when created
      exiting={FadeOutLeft.duration(400)}  // Slides out when deleted
      layout={Layout.springify()}          // Other items smoothly slide up
      style={styles.goalItem}
    >
      <Text style={styles.goalText}>{props.text}</Text>

      {/* Your Modal logic remains completely untouched! */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={WardelVisible}
        onRequestClose={() => {
          Alert.alert('Login Modal has been closed.');
          setWardelVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={styles.modalText}>Warning</Text>
              <Text style={styles.Subtext}>Are you sure to delete this course?</Text>
              <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setWardelVisible(false)}>
                  <Text style={styles.buttonFont}>Cancel</Text>
              </Pressable>
              <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setWardelVisible(false); 
                    props.onDeleteItem(props.id);}}>
                  <Text style={styles.buttonFont}>Delete</Text>
              </Pressable>
          </View>
        </View>
      </Modal>

      {/* 4. We animate the View inside the Pressable for the 'X' button */}
      <Pressable 
        onPressIn={() => deleteScale.value = withSpring(0.7)}
        onPressOut={() => deleteScale.value = withSpring(1)}
        onPress={() => setWardelVisible(true)} 
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
      >
        <Animated.View style={[styles.deleteButton, animatedDeleteStyle]}>
          <Text style={styles.deleteText}>✕</Text>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1, 
    marginRight: 10, 
  },
  deleteButton: {
    backgroundColor: '#333333', 
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
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
  },
  modalText: {
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
    marginBottom:40,
  },
  button: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 10,
    width: '60%',
    borderRadius: 20
  },
  buttonFont: {
    fontSize: 18,
    color: 'white', // Changed to white so it's readable against the dark button!
    textAlign: 'center',
    fontWeight: '500' // Added quotes to prevent web errors
  }
});