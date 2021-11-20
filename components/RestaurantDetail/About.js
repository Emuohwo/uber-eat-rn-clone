import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisines",
    image: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: "NGN",
    reviews: "4532+",
    rating: 5,
    categories: [
        { title: "Thai" },
        {title: "Comfort Food" },
        { title: "Coffee" } ,
        { title: "Snacks" } ,
        { title: "Pixa" } ,
    ]
}



export default function About(props) {
    const { name, image, price, reviews, rating, categories } = 
    props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" * ")
    
    const description = `${formattedCategories} ${price ? " * " + price : ""} \u{1F3AB} ${rating} \u2B50 ${reviews}+`
    
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
            
        </View>
    )
}


const RestaurantImage = (props) => (
    <Image
      source={{ uri: props.image}}
      style={{ width: "100%", height: 180 }}
    />
);

const RestaurantName = (props) => (
    <Text
       style={{
           fontSize: 30,
           fontWeight: "600",
           marginTop: 10,
           marginHorizontal: 15,
       }}
    >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
       style={{
           fontSize: 15,
           fontWeight: "400",
           marginTop: 10,
           marginHorizontal: 15,
       }}
    >
        {props.description}
    </Text>
)