import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../assets/styles';
import { Header } from '../common/components/header/Header';
import Logo2 from '../assets/icons/logo2.png';
import { BottomTabNavigatorScreens } from '../navigations/TabNavigator';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setSpecies, setDescription, addToy, editToy } from '../redux/actions';

export function HomeScreen() {
  const navigation = useNavigation();
  const { name, species, description, id, editMode } = useSelector(state => state.toyReducer);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    editMode
      ? dispatch(editToy({ name, species, description, id }))
      : dispatch(addToy({ name, species, description, id: Math.random().toString(36).substring(6) }));
    navigation.navigate(BottomTabNavigatorScreens.ARCHIVE);
  };

  return (
    <View>
      <Header />
      <View>
        <ImageBackground style={styles.welcome} source={Logo2}>
          <Text style={styles.boldTextHeader}>Welcome to </Text>
          <Text style={styles.textHeader}>Toys Archive </Text>
        </ImageBackground>
        <View style={styles.wrapper}>
          {editMode ? <Text style={styles.boldText}>Edit Toy</Text> : <Text style={styles.boldText}>Add New Toy</Text>}
          <TextInput
            value={name}
            onChangeText={text => dispatch(setName(text))}
            placeholder={'Name of the toy'}
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TextInput
            value={species}
            onChangeText={text => dispatch(setSpecies(text))}
            placeholder={'Species of the toy'}
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TextInput
            value={description}
            onChangeText={text => dispatch(setDescription(text))}
            placeholder={'Description of the toy'}
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.button} onPress={onClickHandler}>
            {editMode ? <Text style={styles.text}>Edit Toy</Text> : <Text style={styles.text}>Add Toy</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 400,
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.Red,
  },
  welcome: {
    height: 125,
  },
  boldTextHeader: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.White,
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    marginTop: 52,
    lineHeight: 27,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2.5,
    shadowRadius: 4,
  },
  textHeader: {
    fontSize: 20,
    color: Colors.White,
    paddingHorizontal: 16,
    paddingVertical: 8,
    lineHeight: 22,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2.5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    color: Colors.White,
    paddingHorizontal: 16,
    paddingVertical: 8,
    lineHeight: 22,
  },
  boldText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.LightBlue,
    textTransform: 'uppercase',
    paddingVertical: 10,
    lineHeight: 27,
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
  textInput: {
    height: 48,
    width: '100%',
    fontSize: 20,
    borderRadius: 8,
    backgroundColor: Colors.LightBlue,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#03395e',
    paddingLeft: 16,
    color: 'white',
    marginVertical: 5,
  },
});
