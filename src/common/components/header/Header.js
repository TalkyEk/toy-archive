import React from 'react';
import { Alert, StyleSheet, View, Image } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import ToyLogo from '../../../assets/icons/ToyLogo.png';
import { Colors } from '../../../assets/styles';

export function Header() {
  return (
    <View>
      <Appbar.Header style={styles.header}>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={ToyLogo} />
        </View>
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.LightBlue,
  },
  container: {
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
});
