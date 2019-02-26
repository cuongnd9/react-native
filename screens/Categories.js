import React from 'react';
import axios from 'axios';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

axios.defaults.baseURL = 'http://10.0.2.2:8000';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios.get('/categories')
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList 
          data={categories} 
          renderItem={({item}) => 
            <CategoryListItem
              category={item}
              onPress={() => navigation.navigate('Category', {
                categoryName: item.name,
                categoryId: item.id
              })}
            />
          }
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 8
  },
});
