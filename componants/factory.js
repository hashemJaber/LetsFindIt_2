import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function factory({name,itemsTo_return,post,index}) {
    const k=[
        <Image  style={{width:'100%', height:'65%', borderBottomLeftRadius:0,borderBottomRightRadius:0,borderRadius:25}} source={post.categoryId? strore.appAssets[post.categoryId-1] : post.url? {uri:post.url}: props.image ?props.image:post.image?post.image:require('../assets/chair.jpg') }></Image>,
        <Text   style={{marginTop:12,marginLeft:10, fontSize:20, fontWeight:'600'}}  > {props.title ? props.title:post.title? post.title:"No Title Was provided" }</Text>,
        <Text   style={{fontSize:20,marginTop:12,marginLeft:10,color:'#34ebab'}} > {post.description?post.description: props.price? props.price: post.price?post.price : " No price exists " }</Text>,
        <Text   style={{fontSize:20,marginTop:12,marginLeft:10,color:'#C0C0C0'}} > {post.price?post.price: props.price? props.price: post.price?post.price : "0 hours ago " } hours ago </Text>];
  return (
   <>
   {k.map((item)=>item)}
   </>
  )
  
}

const styles = StyleSheet.create({})