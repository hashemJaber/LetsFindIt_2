import { View, Text, Touchable, FlatList, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import CardScreen from '../componants/card'
import MessageBox from './MessageBox'
import ListItem from '../componants/ListItem'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItemDeleteAction from '../componants/ListItemDeleteAction'
import colors from '../colors'


const url=[require('../assets/cat.png'),require('../assets/elephant.png'),require('../assets/toucan.png'),require('../assets/cow.png'),require('../assets/sloth.png')];


let messages=[{

id:1, image:require('../assets/mosh.jpg'),
descripiton:"Hey !, we are still developing this section ",
title:'Mosh Hamedani'

},{id:2, image:require('../assets/jacket.jpg'),
descripiton:'of the app, till then',
title:'ALEC MURPHY'
},{id:3, image:require('../assets/mosh.jpg'),
descripiton:'support us',
title:'AJ Green'
},{id:4, image:require('../assets/jacket.jpg'),
descripiton:'Tap to Chat',
title:'Ben Shepard'

}

]
/**
 * Returns the Messages screen
 * @param {Object} props 
 * @returns 
 */
export default function MessagesScreen(props) {
const [mess, setMessages]=React.useState(messages);


const handleDelete=({id})=>{

let items=[];

for(let i=0;i<messages.length;i++){
if(id==messages[i].id){

}else items.push(messages[i]);

}



messages=items;

setMessages(messages);


}

  return (

    <SafeAreaView style={{flex:1, backgroundColor:colors.white  }}>

<FlatList data={mess} keyExtractor={(message)=>{message.id.toString()}} renderItem=

{({item})=>

<ListItem  renderRightActions={() =>

    (
      
    <TouchableOpacity style={{with:'90%', borderColor:"black"}} onPress={()=>{  
      
      handleDelete(item);

      console.log('deleted ',item)}}>

<ListItemDeleteAction></ListItemDeleteAction>

</TouchableOpacity>
    
    )
    }  title={item.title}  subTitle={item.descripiton}  image={url[Math.floor(Math.random()*(url.length))]}  ></ListItem>}
    
    

    
    ItemSeparatorComponent={()=>{return <View  style={{width:'100%', height:10, margin:10 }} />}} refreshing={false}  onRefresh={()=>{



   }} ></FlatList>

</SafeAreaView>

  )

}