
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AppInput from './AppInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'
import AppPicker from './AppPicker';
import AppImagePicker from './AppImagePicker';
export default function AppFormImagePicker({name, ...otherProps}) {
const {setFieldTouched,handleChange,errors, touched, setFieldValue  } =useFormikContext()

  return (

    <>

      <AppImagePicker
      
      action={(value)=>{setFieldValue(name,value,true);  handleChange(name);  }} 

      onBlur={  handleChange(name)} 
     
      {...otherProps}


      ></AppImagePicker>

{  touched[name] &&  <ErrorMessage visible={touched[name]} error={errors[name]} ></ErrorMessage>}

    
    </>
  
  )

}

const styles = StyleSheet.create({});