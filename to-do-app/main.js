let form = document.getElementById("form"),
  textInput = document.getElementById("textInput"),
  dateInput = document.getElementById("dateInput"),
  textarea = document.getElementById("textarea"),
  msg = document.getElementById("msg"),
  tasks = document.getElementById("tasks"),
  add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button clicked");
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = {};

let acceptData = () => {
  data["task"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;
  createTask();
};

let createTask = () => {
  tasks.innerHTML += `
  <div>
      <span class="fw-bold">${data.task}</span>
      <span class="text-secondary small">${data.date}</span>
      <p>${data.description}</p>
    <span class="options">
      <i data-bs-toggle="modal" data-bs-target="#form" onClick="editTask(this)" class="fas fa-edit"></i>
      <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;

  formReset();
};

let formReset = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  selectedTask.remove();
};
