// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { decrementItem } from './Store/Slice/wishlistSlice';
// import { CartScreenStyle } from '../Style/CartScreenStyle';
// import RenderCartItem from '../Component/RenderWishlistItem';
// import SocialButton from '../Component/SocialButton';

// const CartScreen = () => {
//   const cartItems = useSelector((state: any) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const removeFromCart = (itemId: number) => {
//     dispatch(decrementItem(itemId));
//   };

//   return (
//     <View style={CartScreenStyle.container}>
//       {/* <TouchableOpacity style={CartScreenStyle.backButton} onPress={() => navigation.goBack()}>
//         <Icon name="arrow-back" size={24} color="#000" />
//       </TouchableOpacity> */}

//       <Text style={CartScreenStyle.title}> Cart</Text>
//       {cartItems.length === 0 ? (
//         <Text style={CartScreenStyle.emptyCartText}>No Items!</Text>
//       ) : (
//         <FlatList
//           data={cartItems}
//           renderItem={({ item }) => (
//             <RenderCartItem item={item} onRemove={removeFromCart} />
//           )}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={CartScreenStyle.list}
//         />
//       )}
//     </View>
//   );
// };

// export default CartScreen;


import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeItemFromWishlist } from './Store/Slice/wishlistSlice'; // Updated action for wishlist

import RenderWishlistItem from '../Component/RenderWishlistItem'; // Changed component name
import SocialButton from '../Component/SocialButton';
import { WishlistScreenStyle } from '../Style/WishlistScreenStyle';

const WishlistScreen = () => {
  const wishlistItems = useSelector((state: any) => state.wishlist.items); // Updated state for wishlist
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const removeFromWishlist = (itemId: number) => {
    dispatch(removeItemFromWishlist(itemId)); // Updated function for wishlist
  };

  return (
    <View style={WishlistScreenStyle.container}>

      <Text style={WishlistScreenStyle.title}>Wishlist</Text>
      <View>
      {wishlistItems?.length == 0 ? (
        <Text style={{}}>No Items in Wishlist!</Text>
      ) : (
        <FlatList
          data={wishlistItems}
          renderItem={({ item }) => (
            <RenderWishlistItem item={item} onRemove={removeFromWishlist} /> // Changed component name
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={WishlistScreenStyle.list}
        />
      )}
      </View>
    </View>
  );
};

export default WishlistScreen;
