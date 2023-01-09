import react from 'react';
import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import AppPicker from '../componants/AppPicker';
import strore from '../strore';
export default function MyWeb({listings=
  {name:'A wallet',

Image:{URL:"erfgtegetg"},

description:'Found on 22/02/2022',"location":{

  "latitude": 37.7749,
  "longitude": -122.4194

}

},source,center, onMessage,style={height:"100%",wedth:'100%'},globalRef,setGloabalRef })  {




const [ref,setRef]=react.useState(false);

  setTimeout(()=>{
if(strore.items.length!=markers.length){
setRef(!ref);
}
  },2000)


const runBeforeFirst = 

`
 window.isNativeApp = true;
 true; // note: this is required, or you'll sometimes get silent failures

 `;

/**

* var marker = L.marker([60, -0.10]).addTo(map);  

marker.bindPopup("`+listings.name+` `+listings.description+`").openPopup();
     
 */

   
  
    
const markers=[listings];

let draw='';

strore.items.forEach((item,index)=>{
  
  markers.push(item);
  
})
draw+=`
  function iconUrlFun(icon_src){
 
  let icon_is='https://img.icons8.com/color/344/skateboard.png';
  switch(icon_src) {
    
    case 1:
      icon_is='https://img.icons8.com/doodle/344/touchscreen-smartphone.png'
      break;
    case 2:
      icon_is='https://img.icons8.com/color/344/laptop--v3.png'
     
      // code block
      break;
    case 3:
      icon_is='https://img.icons8.com/bubbles/344/camera.png'

        // code block
        break;
    case 4:

      icon_is= 'https://img.icons8.com/plasticine/344/earbud-headphones.png'
        // code block
        break;
        
    case 5:
      icon_is= 'https://img.icons8.com/ios/344/car-rental.png'
      break;
    case 6:
      icon_is= 'https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-jacket-autumn-clothes-justicon-lineal-color-justicon.png'
      // code block
      break;

    case 7:
      icon_is= 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-scooter-personal-transportation-flaticons-lineal-color-flat-icons-2.png'
      // code block
      break;
    case 8:

      icon_is= 'https://img.icons8.com/color/344/skateboard.png'
      // code block
      break;

    case 9:
      icon_is= 'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-books-lifestyles-flaticons-flat-flat-icons-2.png'
      // code block
      break;
    case 10:
      icon_is=  'https://img.icons8.com/external-justicon-flat-justicon/344/external-school-bag-education-justicon-flat-justicon.png'

      // code block
      break;

    case 11:
      icon_is=  'https://img.icons8.com/external-soft-fill-juicy-fish/344/external-ufo-space-exploration-soft-fill-soft-fill-juicy-fish-2.png'
      // code block
      break;


    default:
      icon_is='https://img.icons8.com/external-soft-fill-juicy-fish/344/external-ufo-space-exploration-soft-fill-soft-fill-juicy-fish-2.png'
     
      // code block
  }
  return icon_is

}

`
markers.forEach((item,index)=>{
  
  item.description?item.description:"No Date was provided";
  draw+=` var markerFor`+index+` = L.marker([`+item.location.latitude+`, `+item.location.longitude+`]).addTo(map); 
 \n markerFor`+index+`.bindPopup("`+item.name+` `+item.description+`").openPopup(); \n


 var circleFor`+index+` = L.circle([`+item.location.latitude+`, `+item.location.longitude+`], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.2,
  radius: 200
  
  }).addTo(map);
  
  
  var icon_is_`+index+`='https://img.icons8.com/external-soft-fill-juicy-fish/344/external-ufo-space-exploration-soft-fill-soft-fill-juicy-fish-2.png';

    
  icon_is_`+index+`=iconUrlFun(`+item.categoryId+`);
   
  //'https://img.icons8.com/doodle/344/touchscreen-smartphone.png'

  var myIconFor`+index+` = L.icon({
    iconUrl: icon_is_`+index+`,
    iconSize: [45, 45],
    iconAnchor: [38, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]

  });

L.marker([`+item.location.latitude+`,`+item.location.longitude+`], {icon: myIconFor`+index+`}).addTo(map);
 
  `
})

let html=`

          
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
crossorigin=""></script>

 <div id="map"></div>
 <style>

 #map { height: 1800px; }

 </style>

 <script>

     var links_fr_icons=[
        'https://img.icons8.com/doodle/344/touchscreen-smartphone.png',
        'https://img.icons8.com/color/344/laptop--v3.png',
        'https://img.icons8.com/bubbles/344/camera.png',
        'https://img.icons8.com/plasticine/344/earbud-headphones.png',
        'https://img.icons8.com/ios/344/car-rental.png',
        'https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-jacket-autumn-clothes-justicon-lineal-color-justicon.png',
        'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-scooter-personal-transportation-flaticons-lineal-color-flat-icons-2.png',
        'https://img.icons8.com/color/344/skateboard.png',
        'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-books-lifestyles-flaticons-flat-flat-icons-2.png',
        'https://img.icons8.com/external-justicon-flat-justicon/344/external-school-bag-education-justicon-flat-justicon.png',
        'https://img.icons8.com/external-soft-fill-juicy-fish/344/external-ufo-space-exploration-soft-fill-soft-fill-juicy-fish-2.png'
        ]

      var map = L.map('map').setView([37.78495331688786, -122.43348215958677], 13);
      
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'

    }).addTo(map);
   
      `+draw+` 

var circle = L.circle([51.5, -0.09], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 600

}).addTo(map);


circle.bindPopup("Cover this area in searching ?");
polygon.bindPopup("I am a polygon.");


true;// This is required or you will get silent failures


      </script>


      `;

    return (

      <SafeAreaView style={style}>

        <WebView 

          source={source? source:{html:html}} 
          
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}

        />

      </SafeAreaView>
  
);
  
}