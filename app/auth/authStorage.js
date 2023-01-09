import * as secureStore from 'expo-secure-store';


const authToken="authToken";

/**
 * @typedef {Object}  userToken
 * @property {Number} userId
 * @property {STRING} email
 * @property {Number} iat
 * @property {STRING} name
 * 
 */

/**
 * stores user token to the secure storage aysncrously
 * @param {userToken} token
 */

const storeToken=async(token)=>{
    try{
        await secureStore.setItemAsync(authToken,token);
    }catch(e){
        console.log(e);

    }

}

/**
 * returns user token from the secure storage aysncrously
 * @returns {userToken} userToken
 */
const getToken=async()=>{

const fault={
    "_U": 0,
    "_V": 1,
    "_W": null,
    "_X": null,
  };
    try{

        const user=await secureStore.getItemAsync(authToken)

const user2=user?.["_U"]==0? null: user ;

return user2;
    }catch(e){
        console.log(e);
    }

}
/**
 * Remvoes user token from the secure storage aysncrously
 */
const removeToken=async()=>{
    try{
        await secureStore.deleteItemAsync(authToken);
    }catch(e){
        console.log(e)
    }
    
}

export default {storeToken,getToken,removeToken}