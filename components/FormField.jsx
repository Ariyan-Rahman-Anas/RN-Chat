import { useState } from 'react'
import {  Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import Feather from '@expo/vector-icons/Feather';
const FormField = ({ title, placeholder, handleChangeText, otherStyle, keyboardType, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)
  return (
      <View className={`${otherStyle} `} >
          <View
              className="w-full border border-green-200 bg-white h-14 rounded-lg p-4 bg-black-100 flex-row items-center focus:border-secondary " >
              <TextInput
                  className="flex-1 text-green-500 text-base"
                  placeholder={placeholder} 
                  onChangeText={handleChangeText}
                  secureTextEntry={placeholder === "Password" && !showPassword} />
              
              {title === "Password" && <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                  <Image source={!showPassword ?<Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" /> } className="w-6 h-6" resizeMode='contain' />
              </TouchableOpacity> }
          </View>
    </View>
  )
}
export default FormField