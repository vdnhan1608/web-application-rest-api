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
    <div class="item" id=${item.idCategory}>
    <img
      src=${item.strCategoryThumb}
      alt="pizza"
    />
    <h4>${item.strCategory}</h4>
    <button id=button${item.idCategory}>Order</button>
  </div>
`);
  });

  const dialog = document.querySelector("dialog");

  // SHOW MODAL TO SHOW DETAILS
  $('[id^="button"]').click(function () {
    const id = parseInt($(this).attr("id").slice(6)) - 1; // remove 'button' => id of the item

    const img = $("#dialogImg");
    img.attr("src", data[id].strCategoryThumb);
    console.log(data[id].strCategoryThumb);

    const category = $("#category");
    category.text(data[id].strCategory);

    const description = $("#description");
    description.text(data[id].strCategoryDescription);

    dialog.showModal();
  });

  // CLOSE MODAL
  const closeBtn = $("#btnDialog");
  closeBtn.click(function () {
    // $("dialog").dialog("close");
    dialog.close();
  });
});
