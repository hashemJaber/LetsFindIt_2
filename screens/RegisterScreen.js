import { Alert, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icon from '../componants/Icon'
import ListItem from '../componants/ListItem'
import AppInput from '../componants/AppInput'
import AppPicker from '../componants/AppPicker'
import Margin12 from '../componants/Margin12'
import Button from '../componants/ Button'
import {Formik} from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../componants/ErrorMessage'
import AppFormField from '../componants/AppFormField';
import AppForm from '../componants/AppForm'
export default function LoginScreen() {
const validateSchema=Yup.object().shape({
User:Yup.string().required().min(4).label("User").max(18),    
Email:Yup.string().required().email().label('Email'),
Password:Yup.string().required().min(5).label("Password")

});

  return (


    

    <View style={{justifyContent:'center', alignItems:'center'}}>
<Margin12></Margin12>

<Margin12></Margin12>




<Formik    
initialValues={{Password:'',Email:'',User:''}}  
validationSchema={validateSchema}  
onSubmit={values=>{
alert("Email:"+ values.Email);
alert("Password: "+values.Password);
alert("UserName: "+values.User);
}} 
> 

{({handleChange,handleSubmit,errors, setFieldTouched,touched})=>(<>


    <AppFormField 
name={"User"} 
textContentType={"emailAddress"} 
keyBoardType={'ascii'} 
autoCorrect={false} 
iconName='account' 
placeholder={"User Name"} 

></AppFormField>
<Margin12></Margin12>
<AppFormField 
name={"Email"} 
textContentType={"emailAddress"} 
keyBoardType={'email-address'} 
autoCorrect={false} 
iconName='email' 
placeholder={"Email"} 

></AppFormField>

<Margin12></Margin12>
<AppFormField 
name={"Password"} 
textContentType={"emailAddress"} 
keyBoardType={'email-address'} 
autoCorrect={false} 
iconName='lock' 
placeholder={"Password"} 
secureTextEntry={true}

></AppFormField>
<Margin12/>

<Margin12/>

<Margin12></Margin12>

<Button  title={"Sign Up"}  onPress={handleSubmit} ></Button>

</>)}

   </Formik>

 
    </View>

  )

}

const styles = StyleSheet.create({});