import React from 'react';
import axios from 'axios';
import { View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  };

  componentDidMount() {
    const { navigation } = this.props;
    const categoryId = navigation.getParam('categoryId');
    axios.get(`/products?category=${categoryId}`)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  constructor(props) {
    super(props);
    this.state = {
      products: []
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
