
import Cookies from 'js-cookie';

const getHeaders = token => {
    return {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    };
  };

/*   const makeGet = (url, options = {}) => {
    const headers = options['headers'] || {};
    const params = options['params'] || {}
    const query = Object.keys(params).map(k => encodeURIComponent(k) + '=' +
        encodeURIComponent(params[k])).join('&')
    const urlFinal = url + '?' + query
    return fetch(urlFinal, { headers, method: 'GET' }).then(res => res.json());
}; */

  const makePost = (url, body, options = {}) => {
    const headers = options['headers'] || {};
  
    return fetch(url, { body, headers, method: 'POST' }).then(res => res.json());
};

  const makeJSONPost = (url, data, options = {}) => {
    const body = JSON.stringify(data);
    const headers = options['headers'] || {};
    headers['Content-Type'] = 'application/json';
  
    return makePost(url, body, { headers });
};

export const makeLogin = (credentials) =>{
    const url = "http://127.0.0.1:8000/api-login"
    const token = Cookies.get('sessionid')
    const headers = getHeaders(token);
    return makeJSONPost(url,credentials,{headers})
}