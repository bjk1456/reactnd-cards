import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry, TextInput, Button, AsyncStorage, FlatList } from 'react-native'
import { saveDeck, getDecks, clear, saveDeckTitle, addCardToDeck } from './utils/api'
import { timeToString } from './utils/helpers'
import './ReactotronConfig'
import { CARDS_STORAGE_KEY } from './utils/_cards'
import { StackNavigator } from 'react-navigation'
import { List, ListItem } from "react-native-elements"
import DeckList from './components/DeckList'
import NewQuestion from './components/NewQuestion'
import NewDeck from './components/NewDeck'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'



const MainNavigator = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  NewQuestion: {
    screen: NewQuestion
  },
  NewDeck: {
    screen: NewDeck
  },
  DeckView: {
    screen: DeckView
  },
  QuizView: {
    screen: QuizView
  }
})

export default class App extends Component {
  render() {
    
    return (
      <View style={{flex: 1}}>

          <MainNavigator />
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  box: {
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#f0ffff',
    margin: 50,
  }
})
