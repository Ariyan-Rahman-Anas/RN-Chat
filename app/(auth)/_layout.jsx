import { Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{ headerShown: false, title: "Sign in" }} />
      <Stack.Screen name='sign-up' />
    </Stack>
  )
}

export default AuthLayout