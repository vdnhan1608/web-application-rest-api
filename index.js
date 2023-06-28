const axios = require("axios");

const urlPizza = "https://pizza-and-desserts.p.rapidapi.com/pizzas";
const urlDessert = "https://pizza-and-desserts.p.rapidapi.com/desserts";

let options = {
  method: "GET",
  //   url: "https://pizza-and-desserts.p.rapidapi.com/pizzas",
  headers: {
    "X-RapidAPI-Key": "916f13e9c7mshbede9e4ee9d3040p127f52jsna04aa77b900c",
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  },
};

const getAllDessertData = async () => {
  try {
    options = { ...options, url: urlDessert }; // Add url for all dessert
    const response = await axios.request(options);
    console.log(response.data);
    console.log({ length: response.data.length }); // 5 object
  } catch (error) {
    console.error(error);
  }
};

const getAllPizaData = async () => {
  try {
    options = { ...options, url: urlPizza }; // Add url for all pizza
    const response = await axios.request(options);
    console.log(response.data);
    console.log({ length: response.data.length }); // 31 object
  } catch (error) {
    console.error(error);
  }
};

const getSpecificPizaData = async (index) => {
  try {
    options = { ...options, url: urlPizza + "/" + index }; // Add url for specific pizza
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getSpecificPizaDessert = async (index) => {
  try {
    options = { ...options, url: urlDessert + "/" + index }; // Add url for specific dessert
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getSpecificPizaDessert(1);
