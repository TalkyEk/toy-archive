import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Colors } from '../../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import { ToyCard } from '../toy-card/ToyCard';
import { useSelector } from 'react-redux';
import { Header } from '../header/Header';

export function AllToys() {
  const navigation = useNavigation();
  const { allToys } = useSelector(state => state.toyReducer);
  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header />
      <Text style={styles.title}>All Toys</Text>
      <View>
        {allToys ? (
          allToys.map(item => {
            console.log(item);
            return <ToyCard id={item.id} name={item.name} species={item.species} description={item.description} />;
          })
        ) : (
          <Text>No toys in your collection</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
  title: {
    marginTop: 24,
    marginBottom: 8,
    fontSize: 20,
    color: Colors.LightBlue,
  },
  updates: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.Red,
    fontWeight: '600',
    marginTop: 17,
    marginBottom: 106,
  },
});
