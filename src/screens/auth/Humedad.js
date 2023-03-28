import { View, Text } from 'react-native'
import React from 'react'
import { GeneralStyles, TempStyles } from '../../theme/Styles'
import HumeContainer from '../../components/HumeContainer'
import HumedadList from '../../components/HumedadList'

const Humedad = () => {
  return (
    <View style={GeneralStyles.container}>
      <HumeContainer/>
      <Text style={TempStyles.TempSubTitle}> Ultima semana </Text>
      <HumedadList/>
    </View>
  )
}

export default Humedad