import { postData } from "./utils/httpReq.js";
import { getCookie, setCookie } from "./utils/cookie.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  const username = inputsBox[0].value;
  const password = inputsBox[1].value;

  const response = await postData("auth/login", {
    username,
    password,
  });
  // stored in cookie
  setCookie(response.token)
  location.assign("index.html")
};

// checked if the cookie is set , if not redirect to login page
const init = () => {
    const cookie = getCookie
    if(cookie) {
        location.assign("index.html")
    }
}

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded",init)