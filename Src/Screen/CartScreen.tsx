import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { decrementItem } from './Store/Slice/cartSlice';
import { CartScreenStyle } from '../Style/CartScreenStyle';
import RenderCartItem from '../Component/RenderCartItem';
import SocialButton from '../Component/SocialButton';

const CartScreen = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const removeFromCart = (itemId: number) => {
    dispatch(decrementItem(itemId));
  };

  return (
    <View style={CartScreenStyle.container}>
      <Text style={CartScreenStyle.title}> Cart</Text>  
      {cartItems.length === 0 ? (
        <Text style={CartScreenStyle.emptyCartText}>No Items!</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <RenderCartItem item={item} onRemove={removeFromCart} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={CartScreenStyle.list}
        />
      )}

      {cartItems.length > 0 && (
        <SocialButton text="Proceed to Checkout" gradientColors={['#00b894', '#6f948c']} />
      )}
    </View>
  );
};

export default CartScreen;
