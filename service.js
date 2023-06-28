import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";
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

export const getAllDessertData = async () => {
  try {
    options = { ...options, url: urlDessert }; // Add url for all dessert
    const response = await axios.request(options);
    console.log(response.data);
    console.log({ length: response.data.length }); // 5 object
  } catch (error) {
    console.error(error);
  }
};

export const getAllPizzaData = async () => {
  try {
    options = { ...options, url: urlPizza }; // Add url for all pizza
    const response = await axios.request(options);
    console.log(response.data);
    // return response.data;
    console.log({ length: response.data.length }); // 31 object
  } catch (error) {
    console.error(error);
  }
};

export const getSpecificPizaData = async (index) => {
  try {
    options = { ...options, url: urlPizza + "/" + index }; // Add url for specific pizza
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getSpecificPizaDessert = async (index) => {
  try {
    options = { ...options, url: urlDessert + "/" + index }; // Add url for specific dessert
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getMeal = async () => {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    });
    // console.log({ data: response.data.categories });
    return response.data.categories;
  } catch (error) {
    console.log("error");
  }
};
