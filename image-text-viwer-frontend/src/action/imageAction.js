import {SEND_IMAGE} from './Type';
import axios from 'axios';

export const sendImage = ({file}) => async dispath =>{
    console.log({file});
    const formData = new FormData();

    formData.append('filePath',file);

    const config ={
        headers:{
            'Content-type' : 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post('http://localhost:8080/read',formData,config);
        console.log(res.data);

        dispath({
            type:SEND_IMAGE,
            payload: res.data,
        })
    } catch (err) {
        
    }

}