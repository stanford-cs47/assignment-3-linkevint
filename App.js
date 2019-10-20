/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Platform } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    //uncomment this to run an API query!
    this.loadArticles();
  }

  async loadArticles(searchTerm = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  onChangeText = text => {
    this.setState({ searchText: text });
  }

  handleClick = () => {
    this.loadArticles(this.state.searchText);
    this.setState( { searchText: '' });
  }

  render() {
    const {articles, loading} = this.state;

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>

          {/*First, you'll need a logo*/}
          <View style={styles.title}>
            <Image
              style={styles.titleImage}
              source={Images.logo}
              resizeMode='contain'
            />
          </View>

          {/*Then your search bar*/}
          <View>
            <Search
              text={this.state.searchText}
              onChangeText={text => this.onChangeText(text)}
              onPress={() => this.handleClick()}
            />
          </View>

          {/*And some news*/}
          <View style={styles.news}>
            {this.state.loading ? (
              <ActivityIndicator size='large' color='gray' />
            ) : (
              <News articles={this.state.articles} />
            )}
          </View>


          {/*Though, you can style and organize these however you want! power to you 😎*/}

          {/*If you want to return custom stuff from the NYT API, checkout the APIRequest file!*/}

        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: (Platform.OS === 'ios') ? 64 : 54,
  },
  titleImage: {
    width: '95%',
    height: '100%',
  },
  news: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
