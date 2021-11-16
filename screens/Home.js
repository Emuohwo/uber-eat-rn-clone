import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/BottomTabs'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY = "bdRJutLhFAQ336t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx"; 

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("Lagos")
    const [activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        }

        return fetch(yelpUrl, apiOptions).then(res => res.json()).then((json) => 
          setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLocaleLowerCase())
              )
            )
        )
    }

    // replace yelp key and uncomment below
    useEffect(() => {
        // getRestaurantsFromYelp()
    }, [city, activeTab])

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
              <HeaderTabs 
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
              />
              <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                  restaurantData={restaurantData}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}
