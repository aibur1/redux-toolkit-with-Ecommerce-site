import axios from "axios";

let URL;

switch(process.env.REACT_APP_ENVIRONMENT){
    case "DEVELOPMENT":
        URL = "https://moontech-aibur.vercel.app";
        break;
    case "PRODUCTION":
        URL = "https://productionserver.com/";
        break;
    default:
        URL = "https://moontech-aibur.vercel.app";
};


const instance = axios.create({
    baseURL: "https://moontech-aibur.vercel.app",
});

export default instance;