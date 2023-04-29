let fromLang = "en";
let toLang = "fr";
let text = "something to translate";

const API_KEY = [0]; //your api key instead of 0

let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
url += "&q=" + encodeURI(text);
url += `&source=${fromLang}`;
url += `&target=${toLang}`;

fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log("response from google: ", response);
  })
  .catch((error) => {
    console.log("There was an error with the translation request: ", error);
  });

export {};
