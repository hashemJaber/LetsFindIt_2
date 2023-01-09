import { View, Text, Image } from 'react-native'
import React from 'react'

/**
 * @typedef {Object} Lister
 * @property {String} Name
 * @property {String} descripiton
 * @property {(String | Object | Image)} image
 */

/**
 * 
 * @param {Lister} props 
 * @returns 
 */
export default function MessageBox(props) {

return (
    
    <View style={{flexDirection:'row'}}>

    <Image style={{borderRadius:360,width:'10%', height:'100%'}} source={props.image}></Image>
    
    <View style={{marginLeft:20}}>
    
        <Text style={{fontSize:23}}>{props.Name}</Text>
    
        <Text style={{color:'silver', fontWeight:'800' }}>{props.descripiton} </Text>
    </View>
 </View>

  )

}