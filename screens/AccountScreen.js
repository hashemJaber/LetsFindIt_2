import { DeviceEventEmitter,Touchable,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity ,StyleSheet, Text, View,SafeAreaView,Image, Alert, Platform, StatusBar, Dimensions, ImageBackground, FlatList } from 'react-native';
import Icon from '../componants/Icon';
import ListItem from '../componants/ListItem';
import colors from '../colors';
import react from 'react';
import AuthContext from '../AuthContext';
import authstorage from '../app/auth/authStorage';

export  default function AccountScreen({navigation}){
  const context = react.useContext(AuthContext);
  function handleLogOut(){
  context.setUser(null);
  navigation.navigate("WelcomeScreen");
  authstorage.removeToken();
  
  }

  function handleRouting(RouteName){
    navigation.navigate(RouteName);
    }



  const menuItems=[
  {title:'My Listings', 
  icon:{name:'format-list-bulleted', 
  backgroundColor:colors.primary,
  action: ()=>(this.handleMessages())
  }   },{title:'My Messages', 
  icon:{name:'email', 
  backgroundColor:colors.secondary

  },  route: "MessageScreen"
   }]

const url=[require('../assets/cat.png'),require('../assets/elephant.png'),require('../assets/toucan.png'),require('../assets/cow.png'),require('../assets/sloth.png')];

    return (
        
        
<SafeAreaView style={{flex:1, backgroundColor:colors.light}}>

<ListItem  title='Account' image={url[Math.floor(Math.random()*(url.length))]} subTitle={context?.user?.email? context?.user?.email :"No user"}></ListItem>
<View style={{padding:18}}></View>    


<FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem

            action={item.action ? ()=>item.action(): ()=>{if(navigation)handleRouting(item.route) }}
              title={item.title}
              ImageComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} ></Icon>
              }
            />
          )}
        />

<View style={{marginTop:0, flex:1}}>

{ context?.user?.email? true:false && <ListItem  action={function logout(){ Alert.alert("Log Out");    
if(navigation)handleLogOut() }}   title='Log Out'  
 ImageComponent={<Icon name={"logout"} 
 backgroundColor={'red'} ></Icon>} >

 </ListItem>}
 { context?.user?.email? false:true && <ListItem  action={function logout(){ Alert.alert("Log Out");    
if(navigation)handleLogOut() }}   title='Log In'  
 ImageComponent={<Icon name={"login"} 
 
 backgroundColor={'green'} ></Icon>} >

 </ListItem>}

</View>


</SafeAreaView>
    
  )

}