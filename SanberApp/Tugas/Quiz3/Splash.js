import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Splash = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Image source={require('./Images/logo.png')} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  circle: {
    height: 300,
    width: 300,
    backgroundColor: '#211F65',
    opacity: 0.1,
    borderRadius: 150,
  },
  logo: {
    position: 'absolute',
    width: 223,
    height: 133
  },
});
