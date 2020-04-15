import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Demo Report Viewer</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});