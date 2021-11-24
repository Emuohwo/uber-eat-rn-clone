import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetail/About'
import MenuItems from '../components/RestaurantDetail/MenuItems'
import ViewCart from '../components/RestaurantDetail/ViewCart'

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.6} style={{ marginVertical: 20 }} />
            {/* <ViewCartTest /> */}
            <MenuItems restaurantName={route.params.name} />
            <ViewCart
              navigation={navigation}
              restaurantName={route.params.name}
            />
        </View>
    )
}
