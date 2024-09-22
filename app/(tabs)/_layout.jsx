import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';

const _layout = () => {
  return (
      <Tabs>
          <Tabs.Screen
              name='index'
              options={{
                  title: "Home",
                  headerShown: false,
                  tabBarIcon: ({ color }) => (
                      <FontAwesome name='home' color={color} size={25} />
                  ),
                  tabBarLabelStyle: {
                      fontSize: 12,
                      fontWeight: "bold"
                  }
              }} />
          
          <Tabs.Screen
              name='profile'
              options={{
                  title: "Profile",
                  headerShown: false,
                  tabBarIcon: ({ color }) => (
                      <FontAwesome name='user' color={color} size={25} />
                  ),
                  tabBarLabelStyle: {
                      fontSize: 12,
                      fontWeight: "bold"
                  }
              }} />

    </Tabs>
  )
}
export default _layout