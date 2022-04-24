const incompleteTaskList = document.getElementById("js-incomplete_task_list");
const completeTaskList = document.getElementById("js-complete_task_list");

const deleteFromIncompleteList = (target) => {
  incompleteTaskList.removeChild(target);
};

const createIncompleteTask = (taskName) => {
  const newTask = document.createElement("li");
  newTask.className = "c-task_list__item";

  const newTask_name = document.createElement("p");
  newTask_name.className = "c-task_list__item_name";
  newTask_name.innerText = taskName;

  const completeButton = document.createElement("button");
  completeButton.className = "c-button";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTask = completeButton.parentNode;
    deleteFromIncompleteList(completeTask);
    const completeTask_nameText = completeTask.firstElementChild.innerText;

    completeTask.textContent = null;
    const completeTask_name = document.createElement("p");
    completeTask_name.className = "c-task_list__item_name";
    completeTask_name.innerText = completeTask_nameText;

    const cancelButton = document.createElement("button");
    cancelButton.className = "c-button";
    cancelButton.innerText = "戻す";
    cancelButton.addEventListener("click", () => {
      const cancelTask = cancelButton.parentNode;
      completeTaskList.removeChild(cancelTask);

      const cancelTask_nameText = cancelTask.firstElementChild.innerText;
      createIncompleteTask(cancelTask_nameText);
    });

    completeTask.appendChild(completeTask_name);
    completeTask.appendChild(cancelButton);

    completeTaskList.appendChild(completeTask);
  });
  const deleteButton = document.createElement("button");
  deleteButton.className = "c-button";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  newTask.appendChild(newTask_name);
  newTask.appendChild(completeButton);
  newTask.appendChild(deleteButton);

  incompleteTaskList.appendChild(newTask);
};

const addTask = () => {
  const targetInput = document.getElementById("js-add_task_input");
  const inputText = targetInput.value;
  targetInput.value = "";

  createIncompleteTask(inputText);
};

const addButton = document.getElementById("js-add_task__button");
addButton.addEventListener("click", () => {
  addTask();
});
