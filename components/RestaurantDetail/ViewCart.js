import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items
      .map((item => Number(item.price.replace('NGN', ''))))
      .reduce((prev,curr) => prev + curr, 0);

    const totalNGN = total.toLocaleString("en", {
        style: "currency",
        currency: "NGN"
    });

    console.log(totalNGN)

    return (
        <>
            {total ? (
            <View
            style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 310,
                zIndex: 999,
            }}
            >
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                }}
                >
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 15,
                            alignItems: 'center',
                            padding: 13,
                            borderRadius: 30,
                            width: 300,
                            position: 'relative',
                        }}
                    >
                    <Text style={{ color: "white", fontSize: 20, marginRight: 30  }}>
                        View Cart
                    </Text>
                    <Text style={{ color: 'white', fontSize: 20, }}>{totalNGN}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            ) : (
            <></>
            )}
        </>
    )
}
