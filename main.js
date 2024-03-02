const btn = document.getElementById("btn");
const form = document.querySelector("form");
console.log(form);
const input = document.querySelectorAll("input");
const erorr = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  let message = [];

  e.preventDefault();

  let obj = {
    // fname: "",
    // email: "",
    // password: "",
    // confirmPassword: "",
  };
  input.forEach((item) => {
    if (item.value === "") {
      message.push(item.name + " is required");
      erorr.innerHTML = message;
    } else {
      obj[item.name] = item.value;
      localStorage.setItem("user", JSON.stringify(obj));
      const data = localStorage.getItem("user");
      console.log(JSON.parse(data));
    }
  });
});
