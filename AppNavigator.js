import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const color = {
  ACTIVE: 'blue',
  INACTIVE: 'grey'
}

const CategoriesStack = createStackNavigator({
  Categories,
  Category
});
CategoriesStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name='home'
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};

const CartStack = createStackNavigator({ Cart });
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name='shoppingcart'
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};

const OrdersStack = createStackNavigator({ Orders });
OrdersStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name='profile'
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};

const SettingsStack = createStackNavigator({ Settings });
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name='setting'
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
};

const AppNavigator = createBottomTabNavigator({
  CategoriesStack,
  CartStack,
  OrdersStack,
  SettingsStack
});

export default AppNavigator;