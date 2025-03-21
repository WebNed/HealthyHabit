const AddApplication = document.getElementById("AddButton");
AddApplication.addEventListener("click", function() {
  AddApplication.style.color = 'green';
  AddApplication.style.textDecoration = 'underline';
});

var textInput = document.getElementById("AppName").value;
var obj = JSON.parse(textInput);

