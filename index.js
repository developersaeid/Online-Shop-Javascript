import { getCookie } from "./utils/cookie.js";
import { getDate } from "./utils/httpReq.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");

const showProducts = () => {};

const init = async () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
  const allProducts = await getDate("products");
  showProducts(allProducts);
};
document.addEventListener("DOMContentLoaded", init);
