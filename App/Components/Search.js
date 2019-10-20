/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'

const { width, height } = Dimensions.get('window')

export default function Search(props) {
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        onChangeText={props.onChangeText}
        value={props.text}
        placeholder='Search for News'
        placeholderTextColor='#C8C8C8'
      />
      <TouchableOpacity onPress={() => props.onPress()}>
        <FontAwesome
          style={{marginRight: 13}}
          name='search'
          size={15}
          color='#e73536'
        />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    width: 0.9*width,
  },
  textinput: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8
  }
});
