import React from 'react';
import { View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        { 
          id: 1, 
          name: 'ManUtd Away', 
          price: 99, 
          image:'https://jerseygreat.com/wp-content/uploads/2018/09/Manchester-United-Adidas-Away-2018-2019-600x800.jpg' 
        },
        { 
          id: 2, 
          name: 'ManUtd Home', 
          price: 99, 
          image:'https://images.sportsdirect.com/images/products/37716208_l.jpg' 
        },
      ]
    };
  }

  render() {
    const { products } = this.state;
    return (
      <View style={{ paddingHorizontal: 8 }}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({item}) => 
            <ProductListItem product={item} />
          }
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
