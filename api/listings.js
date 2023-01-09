import { Platform } from "react-native";
import apiClient from "./client";
import endPoints from "./endPoints";

const getListings=()=>(

    apiClient.get(endPoints.forListings )
)

const postListings=(post)=>{

const data= new FormData();

data.append("title","titleECF");

data.append("subTitle","FOUND 6969 days ago");

data.append("description","FOUND 6969 days ago");

data.append("price","efrfe");

data.append("catagoryId","e");


let img=require('../assets/jacket.jpg');
  
   data.append('image',{type,size,text,stream,slice});
/**
 * grabbing from iphone 
 * source 
 * 
 */

    data.append("images",{type:'image/jpeg',uri:img,name:""})

    if(true){data.append("location",{"location": {
        "latitude":   "37.80544015431601",
        "longitude":  "-122.43105250763503"}}) }


try{
    alert('posting');
     apiClient.post(endPoints.forListings,data);

    alert('finished posting');

}catch(e){alert(e)}
    
}

const updateListings=(post)=>{
    apiClient.patch(endPoints.forListings,{post});
}

const deletingListings=(post)=>{

apiClient.patch('efe',{post});

}

export default {
getListings,
postListings,
updateListings,
deletingListings

}