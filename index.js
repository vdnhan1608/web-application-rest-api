import { getAllDessertData, getAllPizzaData, getMeal } from "./service.js";

$(document).ready(async function () {
  const data = await getMeal();
  console.log({ 1: data[0] });
  // GET API AND THEN AND HTML INTO THIS

  let section = $("section");
  section.empty(); // CLEAR ALL THE HTML CODE BETWEEN

  // APPEND NEW HTML CODE BASED ON DATA
  data.forEach((item) => {
    section.append(`
    <div class="item">
    <img
      src=${item.strCategoryThumb}
      alt="pizza"
    />
    <h4>${item.strCategory}</h4>
    <button>Order</button>
  </div>
`);
  });
  //   let button = $("button");

  //   button.click(function () {
  //     alert("Pressed");
  //   });
});
