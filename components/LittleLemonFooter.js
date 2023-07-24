import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={ styles.container }>
      <Text
        style={ styles.text }>
        All rights reserved by Little Lemon, 2022{ ' ' }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  container: {
    backgroundColor: '#EE9972',
    marginBottom: 10,
  }
})
