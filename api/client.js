import { create } from "apisauce";
import endPoints from '../api/endPoints';
const apiClient=create({
    baseURL:'http://localhost:9000/api'

});





export default apiClient; 