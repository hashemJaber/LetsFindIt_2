import HomePage from './screens/WelcomeScreen'
import CardScreen from './componants/card';
import ListingDetails from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ListingEditScreen from './screens/ListingEditScreen';


/**
 * WebsitePolicies.com 
 */
/*

<NavigationContainer >

<AppNavigator></AppNavigator>

</NavigationContainer>

*/

const Tab = createMaterialBottomTabNavigator();

const Stack= createStackNavigator();

let HomePageNavigator=()=>(

  
<Stack.Navigator screenOptions={{headerShown:false, title:""}} initialRouteName="" mode="modal">
<Stack.Screen name={"HomePage"}  options={{headerShown:false}} component={HomePage} ></Stack.Screen>


</Stack.Navigator>

)

let StackNavigator=()=>(
<Stack.Navigator screenOptions={{headerShown:false, title:"ListingsScreen"}} initialRouteName="" mode="modal">
<Stack.Screen name={"AccountScreen"}  options={{headerShown:false}} component={AccountScreen} ></Stack.Screen>
<Stack.Screen name={"HomePage"}  options={{headerShown:false}} component={HomePage} ></Stack.Screen>

<Stack.Screen name={"LoginScreen"} options={{headerShown:false}} component={LoginScreen} ></Stack.Screen>
<Stack.Screen name={"ListingDetails"} component={ListingDetails} ></Stack.Screen>
<Stack.Screen name={"listingsScreen"} component={ListingsScreen} ></Stack.Screen>
<Stack.Screen name={"ListingEditScreen"} component={ListingEditScreen} ></Stack.Screen>
<Stack.Screen name={"CardScreen"} component={CardScreen} ></Stack.Screen>


<Stack.Screen name={"RegisterScreen"}  options={{headerShown:false}} component={RegisterScreen} ></Stack.Screen>
<Stack.Screen name={"MessagesScreen"}  options={{headerShown:false}} component={MessagesScreen} ></Stack.Screen>


</Stack.Navigator>)


const example=
<Tab.Navigator   tabBarOptions={{activeBackgroundColor:"yellow",inActiveBackgroundColor:"red", activeTintColor:'green',inActiveTintColor:'brown'}} >

      <Tab.Screen    name="AccountScreen"  options={{tabBarIcon:({color})=>
      < MaterialCommunityIcons color={color} name="account" size={30}></MaterialCommunityIcons>,title:false}} component={StackNavigator} />
      <Tab.Screen 
    
      name="ListingsScreen" 
      options={{
        tabBarIcon:({color})=> 
         
       < MaterialCommunityIcons color={color} size={30} name="map"></MaterialCommunityIcons>
       ,
        title:false}}  
       component={ListingsScreen} />
      <Tab.Screen
      
    
      name={"ListingEditScreen"} 
      options={{
        tabBarIcon:({color})=>
       ( < MaterialCommunityIcons 
        size={30} 
color={color}
        name="book-plus-multiple">
           
        </MaterialCommunityIcons>),title:false}}
         component={ListingEditScreen} />
    </Tab.Navigator>

