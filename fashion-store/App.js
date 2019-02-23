import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import CategoryListItem from './components/CategoryListItem';

export default class App extends React.Component {
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
    return (
      <View style={styles.container}>
        <ScrollView>
          {categories.map(category => 
            <CategoryListItem 
              key={category.id} 
              category={category} 
            />
          )
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
