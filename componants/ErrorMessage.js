import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ErrorMessage({error, visible}) {
  
  if(!visible || !error)return null

    return (


    <View>
      {error && <Text style={{color:'red'}}>{error}</Text>}
    </View>
  )

}

const styles = StyleSheet.create({})