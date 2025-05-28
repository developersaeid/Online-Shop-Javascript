import authHandler from "./utils/authorization.js";
import { getDate } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");

const renderUsers = (users) => {
  mainContent.innerHTML = "";
  
};

const init = async () => {
  authHandler();
  const user = await getDate("users");
  renderUsers(user);
};

document.addEventListener("DOMContentLoaded", init);
