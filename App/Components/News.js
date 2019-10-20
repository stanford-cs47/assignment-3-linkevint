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
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Linking } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = {
    articles: []
  }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        console.log("Can't open url")
      }
    });
  };

  renderArticle = (item) => (
    <View style={styles.article}>
      <TouchableOpacity onPress={ () => this.handleClick(item.url) }>
        <Text style={material.headline}>{item.title}</Text>
        <Text style={material.body1}>{item.snippet}</Text>
        <Text style={styles.byline}>
          {item.byline === null ? (
            'Special to The New York Times'
          ) : (
            item.byline
          )}
        </Text>
        <Text style={material.caption}>{item.date}</Text>
      </TouchableOpacity>
    </View>
  )

  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={articles}
          renderItem={ ({item}) => this.renderArticle(item) }
          keyExtractor={ (item) => item.url }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '95%'
  },
  article: {
    marginBottom: 20
  },
  byline: {
    fontWeight: 'bold'
  }
});
