import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../utils/request';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';
import ProductCard from '../Component/ProductCard';
import CartHeader from '../Component/CartHeader';
import { HomeScreenstyle } from '../Style/HomeScreenstyle';
import { useNavigation } from '@react-navigation/native';
import { addItem, decrementItem } from './Store/Slice/cartSlice';
import ActivityIndicatorComman from '../Component/ActivityIndicatorComman';

const HomeScreen = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); // Pull-to-refresh state
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await request('https://fakestoreapi.com/products');
      setProducts(data);
    } catch (error) {
      ToastAndroid.show(error?.message,10)
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const data = await request('https://fakestoreapi.com/products');
      setProducts(data);
    } catch (error) {
      ToastAndroid.show(error?.message,10)
    } finally {
      setRefreshing(false);
    }
  };

  const addToCart = (item: any) => {
    dispatch(addItem(item));
    ToastAndroid.show("Add In Cart",10)
  };

  const removeFromCart = (itemId: number) => {
    dispatch(decrementItem(itemId));
  };

  const isInCart = (itemId: number) => {
    return cartItems.some((item: any) => item.id === itemId);
  };

  const renderProduct = ({ item }: { item: any }) => {
    const inCart = isInCart(item.id);
    return (
      <ProductCard
        item={item}
        inCart={inCart}
        onAddToCart={(item) => {
          if (inCart) {
            removeFromCart(item.id);
          } else {
            addToCart(item);
          }
        }}
      />
    );
  };

  return (
    <View style={HomeScreenstyle.container}>
      <CartHeader
        onPress={() => navigation.navigate('CartScreen')}
        title="HOME"
        cartCount={cartItems?.length}
      />
      {loading ? (
 <ActivityIndicatorComman  />      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item,index) => index.toString()}
          numColumns={2}
          contentContainerStyle={HomeScreenstyle.list}
          refreshing={refreshing} 
          onRefresh={handleRefresh} 
        />
      )}
    </View>
  );
};

export default HomeScreen;
