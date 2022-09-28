import {View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { customers } from '../customers';

export default function Home( { navigation }) {
    const [users, setUsers] = useState(customers)

    const handlePress = (user) => {
        navigation.navigate("Details", {
            user:user
        })
    }
    console.log(users);
  return (
    <View>
      {users.map(user=>(
        <View key={user.id}>
          <Text>{user.name}</Text>
          <Button
            title="Go to Details"
            onPress={() => handlePress(user)}
            />
        </View>

      ))}
    </View>
  )
}