import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { View, Text, Image, TouchableOpacity } from 'react-native'

export const localRestaurants = [
    {
        name: "MK Kitchen & Catering",
        img_url: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 41,
        reviews: 123,
        rating: 4.8,
    },
    {
        name: "Sweat Savor",
        img_url: "https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 41,
        reviews: 123,
        rating: 4.4,
    },
    {
        name: "Eloshines Foods",
        img_url: "https://images.pexels.com/photos/6004758/pexels-photo-6004758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 41,
        reviews: 1203,
        rating: 5,
    },
    {
        name: "Guzee Restaurants",
        img_url: "https://images.pexels.com/photos/5490933/pexels-photo-5490933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 11,
        reviews: 1203,
        rating: 4.6,
    },
    {
        name: "Kitchen",
        img_url: "https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 41,
        reviews: 1203,
        rating: 2.9,
    },
    {
        name: "Kitchen",
        img_url: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 41,
        reviews: 1203,
        rating: 3.6,
    },
    {
        name: "Kitchen",
        img_url: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        categories: [ "Cafe", "Bar"],
        price: 41,
        reviews: 1203,
        rating: 4.0,
    },
]

export default function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity 
                  key={index} activeOpacity={1} 
                  style={{ marginBottom: 30}}
                  onPress={ () => 
                    navigation.navigate("RestaurantDetail", {
                          name: restaurant.name,
                          image: restaurant.img_url,
                          price: restaurant.price,
                          reviews: restaurant.reviews,
                          rating: restaurant.rating,
                          categories: restaurant.categories,
                      })
                    }
                >
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: '#fff', }}>
                        <RestaurantImage image={restaurant.img_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}


const RestaurantImage = (props) => (
    <>
        <Image
        source={{ uri: props.image}}
        style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View 
        style={{ 
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10 
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{ fontSize: 15, color: 'gray'}}>30-45 * mins</Text>
        </View>
        <View 
            style={{ 
                backgroundColor: "#eee", 
                height: 30, width: 30, 
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }} 
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
)