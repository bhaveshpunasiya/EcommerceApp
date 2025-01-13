import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../utils/request';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';
import ProductCard from '../Component/ProductCard';
import CartHeader from '../Component/CartHeader';
import { HomeScreenstyle } from '../Style/HomeScreenstyle';
import { useNavigation } from '@react-navigation/native';

import ActivityIndicatorComman from '../Component/ActivityIndicatorComman';
import { addItemToWishlist, removeItemFromWishlist } from './Store/Slice/wishlistSlice';

const HomeScreen = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); // Pull-to-refresh state
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // Whether more data is available
  const wishlistItems = useSelector((state: any) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (page: number) => {
    try {
      if (!loading) setLoading(true);
      const data = await request(`https://reqres.in/api/users?page=${page}`);
      if (page === 1) {
        setProducts(data.data);
      } else {
        setProducts((prev) => [...prev, ...data.data]);
      }
      setHasMore(page < data.total_pages);
    } catch (error) {
      ToastAndroid.show(error?.message, ToastAndroid.LONG);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const addToWishlist = (item: any) => {
    dispatch(addItemToWishlist(item));
    ToastAndroid.show('Added to Wishlist', ToastAndroid.SHORT);
  };

  const removeFromWishlist = (itemId: number) => {
    dispatch(removeItemFromWishlist(itemId));
  };

  const isInWishlist = (itemId: number) => {
    return wishlistItems.some((item: any) => item.id === itemId);
  };

  const renderProduct = ({ item }: { item: any }) => {
    const inWishlist = isInWishlist(item.id);

    return (
      <ProductCard
        item={item}
        isLiked={inWishlist}
        onLikeToggle={(item) => {
          if (inWishlist) {
            removeFromWishlist(item?.id);
          } else {
            addToWishlist(item);
          }
        }}
      />
    );
  };

  return (
    <View style={HomeScreenstyle.container}>
      <CartHeader
        title="HOME"
        cartCount={wishlistItems?.length}
      />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={HomeScreenstyle.list}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicatorComman/>}
      />
    </View>
  );
};

export default HomeScreen;
