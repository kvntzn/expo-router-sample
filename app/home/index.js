import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
