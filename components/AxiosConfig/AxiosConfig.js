import axios from 'axios'

  const getClient=()=>{
    const client = axios.create({
        baseURL: 'http://172.17.0.209:8090/api',
        headers:{
            'Content-Type': 'multipart/form-data',
          }
      })
    return client;
  }
 

  export{getClient};