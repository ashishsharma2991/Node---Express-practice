const login = document.getElementById("login");
const id = document.getElementById("id");
const add = () => {
  document.getElementById("password").value = id.value;
  document.getElementById("id").value = "";
  //  alert(id.value);
  //console.log(obj[age]);
};
login.addEventListener("click", add);

var obj = {
  age: 28,
};
