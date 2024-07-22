import {StyleSheet, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import logo from '../../assets/images/Logo_1.png';

const SignInScreens = () => {
    const {height} = useWindowDimensions()
  return (
    <View style={styles.root}>
      <Image source={logo} style={[styles.logo ,{height: height * 0.3}]} resizeMode="contain" />
    </View>
  );
};

export default SignInScreens;

const styles = StyleSheet.create({
  root: {
    alignItems :'center',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxheight: 200,
  },
});
