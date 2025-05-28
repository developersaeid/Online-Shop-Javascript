import authHandler from "./utils/authorization.js";
import { getDate } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");

const renderUsers = (users) => {
  mainContent.innerHTML = "";
  users.forEach((user)=>{
    const userEl = `
    <div id="card">
      <h3>${user.id}</h3>
      <div>
        <p><i class="fa-solid fa-user"></i> Name:</p>
        <span>${user.name.firstname} ${user.name.lastname}</span>
      </div>
      <div>
        <p><i class="fa-solid fa-paperclip"></i> Username:</p>
        <span>${user.name.username}</span>
      </div>
      <div>
        <p><i class="fa-solid fa-envelope"></i> Email:</p>
        <span>${user.name.email}</span>
      </div>
      <div>
        <p><i class="fa-solid fa-phone"></i> Phone:</p>
        <span>${user.name.phone}</span>
      </div>
      <div>
        <p><i class="fa-solid fa-location-dot"></i> Address:</p>
        <span>${user.address.city} - ${user.address.street} - ${user.address.zipcode} </span>
      </div>
    </div>
    `
    mainContent.innerHTML += userEl;
  })
};

const init = async () => {
  authHandler();
  const user = await getDate("users");
  renderUsers(user);
};

document.addEventListener("DOMContentLoaded", init);
