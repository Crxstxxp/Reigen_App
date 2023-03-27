import { View, Text } from 'react-native'
import React from 'react'
import { GeneralStyles } from '../../theme/Styles'
import TempList from '../../components/TempList'

const Humedad = () => {
  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.subTitle}>Humedad</Text>
    </View>
  )
}

export default Humedad