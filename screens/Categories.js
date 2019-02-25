import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'hoodie' },
        { id: 2, name: 'jacket' },
        { id: 3, name: 'underwear' },
        { id: 4, name: 'shoes' },
        { id: 5, name: 'skirt' },
        { id: 6, name: 'boots' },
        { id: 7, name: 'hat' }
      ]
    };
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
                categoryName: item.name
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
