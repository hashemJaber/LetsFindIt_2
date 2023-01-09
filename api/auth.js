import client from './client';
import endPoints from './endPoints';

const login=(email,password)=> client.post(endPoints.forAccount,{email,password})



export default {login,};