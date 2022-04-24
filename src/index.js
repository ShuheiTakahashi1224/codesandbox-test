const addTask = () => {
  const incompleteTaskList = document.getElementById("js-incomplete_task_list");
  const targetInput = document.getElementById("js-add_task_input");
  const inputText = targetInput.value;
  targetInput.value = "";

  const newTask = document.createElement("li");
  newTask.className = "c-task_list__item";

  const newTask_name = document.createElement("p");
  newTask_name.className = "c-task_list__item_name";
  newTask_name.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.className = "c-button";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("complete");
  });
  const deleteButton = document.createElement("button");
  deleteButton.className = "c-button";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    incompleteTaskList.removeChild(deleteTarget);
  });

  newTask.appendChild(newTask_name);
  newTask.appendChild(completeButton);
  newTask.appendChild(deleteButton);

  incompleteTaskList.appendChild(newTask);
};

const addButton = document.getElementById("js-add_task__button");
addButton.addEventListener("click", () => {
  addTask();
});
