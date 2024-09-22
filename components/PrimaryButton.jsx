import { Text, TouchableOpacity} from 'react-native'
import React from 'react'

const PrimaryButton = ({title, onClickFunc}) => {
  return (
    <TouchableOpacity onPress={onClickFunc} activeOpacity={0.5} className="my2 bg-green-500  px-6 py-3  rounded-md  ">
      <Text className="text-xl font-semibold text-center text-white">{title}</Text>
    </TouchableOpacity>
  )
}
export default PrimaryButton