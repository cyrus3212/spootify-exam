import config from '../config';
import axios from 'axios';

const httpAuth = async () => {
    const { data } = await axios(config.api.authUrl, {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(config.api.clientId + ':' + config.api.clientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    });
  
    localStorage.setItem('access_token', data.access_token);
  
    return data;
};

export default httpAuth;