import React from 'react';
import { View, Text, FlatList } from 'react-native';

// API Call
class API extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    let resp = await fetch('https://facebook.github.io/react-native/movies.json')
    let respJson = await resp.json()
    //console.warn(respJson)
    this.setState({data:respJson.movies})
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 75}}>API Call</Text>
        <FlatList 
        data={this.state.data}
        renderItem={({item}) =>
        <Text style={{fontSize: 35, backgroundColor: 'skyblue', margin: 10}}>{item.title},{item.releaseYear}</Text>}
        />
      </View>
    )
  }
}

export default API;