import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-hybrid-saga-258704.cloudfunctions.net/api' 
    //'http://localhost:5001/hybrid-saga-258704/us-central1/api' // The API(cloud function) URL
});


export default instance;