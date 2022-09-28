import { View, Text } from 'react-native'
import React from 'react'

export default function Details( {route,navigation} ) {
    const {user} = route.params;
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  )
}