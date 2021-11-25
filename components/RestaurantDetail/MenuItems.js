import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheck from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';


const foods = [
    {
        title: "Pixa",
        description: "description",
        price: "NGN40",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        title: "Hot dog",
        description: "description",
        price: "NGN40",
        image: "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Bitter Leaves Soup",
        description: "description",
        price: "NGN40",
        image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        title: "vegetable salad",
        description: "vegetable salad",
        price: "NGN40",
        image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        title: "title",
        description: "description",
        price: "NGN40",
        image: "https://images.pexels.com/photos/376463/pexels-photo-376463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        title: "Indian Food",
        description: "description",
        price: "NGN40",
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        title: "title",
        description: "description",
        price: "NGN40",
        image: "https://www.pexels.com/photo/close-up-photo-of-a-cheese-burger-1633578/",
    },
    {
        title: "title",
        description: "description",
        price: "NGN40",
        image: "https://www.pexels.com/@snapwire/",
    },
]


export default function MenuItems({ restaurantName }) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: { 
            ...item,
            restaurantName: restaurantName,
            checkboxValue: checkboxValue
        }
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    <BouncyCheck
                      iconStyle={{ borderColor: 'lightgray', borderRadius: 0}}
                      fillColor="purple"
                      onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} />
                </View>
                <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
            </View>
        ))}
        </ScrollView>
    )
}

// export function MenuItem() {
//     return (
//         <View>
//             {/* <FoodInfo food={foods[0]} /> */}
//             {/* <FoodImage food={foods[0]} /> */}
//         </View>
//     )
// }


const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image 
        source={{ uri: props.food.image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
)

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    }
})