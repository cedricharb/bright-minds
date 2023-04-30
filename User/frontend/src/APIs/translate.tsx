type Props = {
  from: string;
  to: string;
  content: string;
};

const translateAPI = async ({ from, to, content }: Props) => {
  let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_API_KEY}`;
  url += "&q=" + encodeURI(content);
  url += `&source=${from}`;
  url += `&target=${to}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const response = await res.json();
    return response.data.translations[0].translatedText;
  } catch (error) {
    console.log("There was an error with the translation request: ", error);
    return "";
  }
};

export default translateAPI;
