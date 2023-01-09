
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AppInput from './AppInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'
export default function AppFormField({name, ...otherProps}) {
const {setFieldTouched,handleChange,errors, touched  } =useFormikContext()

  return (
    <>
      <AppInput 
      
      onBlur={()=>{setFieldTouched(name)}} 

      onChangeText={   handleChange(name)} 
      
      {...otherProps}

      ></AppInput>

{  touched[name] &&  <ErrorMessage visible={touched[name]} error={errors[name]} ></ErrorMessage>}

    </>
  )
}

const styles = StyleSheet.create({})