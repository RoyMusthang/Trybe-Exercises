// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  const fetch = await fetch(API_URL, myObject);
  const dataJson = await fetch.json();
  return dataJson;
};

window.onload = () => fetchJoke();
