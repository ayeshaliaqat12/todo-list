const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

window.onload = loadTasks;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    taskInput.value = task;
    addTask();
  });
  taskInput.value = "";
}
