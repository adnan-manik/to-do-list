const headingText = document.getElementById('heading');
const classIdLabel = document.querySelector('.classIdLabel');
const classIdSearchBar = document.getElementById('classId');
const addTaskInput = document.getElementById('addTaskInput');
const task = document.querySelector('.task');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const searchForm = document.getElementById('searchForm');
const found = document.querySelector('.dataFound');
const empty = document.querySelector('.empty');

let currentClassIndex, classId;

class classTask {
    constructor(classId) {
        this.id = classId;
        this.tasks = [];
        this.taskCount = 0;

    }
    pushTask(link) {
        const newTask = task.cloneNode(true);

        newTask.querySelector('.link').href = link;
        newTask.querySelector('.link').textContent = link;
        newTask.id = `task${this.taskCount}`;
        newTask.lastChild.id = this.taskCount;
        this.taskCount++;
        this.tasks.push(newTask);
    }
}

let data = [];


function displaySavedData(index) {

    const objTasks = data[index].tasks;
    taskList.replaceChildren();

    if (objTasks.length > 0) {
        for (let i = 0; i < objTasks.length; i++) {
            taskList.appendChild(objTasks[i]);
        }
        empty.style.display = 'none';
        found.style.display = "block";
    }
    else {
        empty.style.display = 'block';
        found.style.display = "none";
    }
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    classId = classIdSearchBar.value;
    headingText.textContent = "Class";
    classIdLabel.textContent = classId;

    document.querySelector('.initial').style.display = 'none';
    document.querySelector('.data').style.display = 'block';

    for (let i = 0; i < data.length; i++) {

        if (classId === data[i].id) {
            currentClassIndex = i;
            displaySavedData(i);
            return;
        }
    }

    empty.style.display = 'block';
    found.style.display = "none";
    currentClassIndex = data.length;
});


searchForm.addEventListener("reset", (e) => {
    classId = "";
    headingText.textContent = "Enter";
    classIdLabel.textContent = "Class ID";
    classIdSearchBar.value = "";

    document.querySelector('.initial').style.display = 'block';
    document.querySelector('.data').style.display = 'none';
});


taskForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const link = addTaskInput.value;
    addTaskInput.value = '';

    if (!classId) {
        window.alert('Enter Class Id first');
    }
    else {
        if (currentClassIndex != data.length) {
            data[currentClassIndex].pushTask(link);
        }
        else {
            data.push(new classTask(classId));
            data[currentClassIndex].pushTask(link);
        }
    }
    displaySavedData(currentClassIndex);
})

function deleteTask(button) {
    console.log(button);
    let id = button.id;

    button.parentNode.remove();
    data[currentClassIndex].tasks.splice(id, 1);
    displaySavedData(currentClassIndex);
}