import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { BottomTabNavigatorScreens } from '../../../navigations/TabNavigator';
import { setToyToEdit, deleteToy } from '../../../redux/actions';

export function ToyCard(props) {
  const { name, species, description, id } = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onEditHandler = () => {
    dispatch(setToyToEdit({ name, species, description, id }));
    navigation.navigate(BottomTabNavigatorScreens.HOME);
  };
  const onDeleteHandler = () => {
    dispatch(deleteToy({ id }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Name: {name}</Text>
        <Text style={styles.cardTitle}>Species: {species}</Text>
        <Text style={styles.cardTitle}>Description: {description}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onEditHandler}>
          <Text style={styles.text}>Edit Toy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDeleteHandler}>
          <Text style={styles.text}>Delete Toy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: Colors.White,
    shadowColor: Colors.Black,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  card: {
    padding: 12,
    flexDirection: 'column',
  },
  cardTitle: {
    flexShrink: 1,
    fontSize: 16,
    paddingLeft: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    lineHeight: 22,
    color: Colors.LightBlue,
  },
  download: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  downloadTitle: {
    flexShrink: 1,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  downloadDate: {
    flexShrink: 1,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
    backgroundColor: Colors.LightBlue,
  },
  buttons: {
    flexDirection: 'row',
  },
});
