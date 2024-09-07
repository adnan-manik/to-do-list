const headingText = document.getElementById('heading');
const classIdLabel = document.querySelector('.classIdLabel');
const classIdSearchBar = document.getElementById('classId');
const searchBtn = document.getElementById('searchBtn');
const addTaskInput = document.getElementById('addTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const task = document.querySelector('.task');
const taskList = document.getElementById('taskList');
const favBtn = document.getElementById('favBtn');
const delBtn = document.getElementById('deleteBtn');
const taskForm = document.getElementById('taskForm');
const searchForm = document.getElementById('searchForm');

let classId;

let data = [];


searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    classId = classIdSearchBar.value;
    headingText.textContent = "Class";
    classIdLabel.textContent = classId;
});

searchForm.addEventListener("reset", (e)=>{
    e.preventDefault();
    classId = "";
    headingText.textContent = "Enter";
    classIdLabel.textContent = "Class ID";
    classIdSearchBar.value = "";
});

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const link = addTaskInput.value;
    addTask(link);

    console.log("added");
    
})

function addTask(text){
    // if(classId in data){
    let i=3;
    // }
    // else{
        const newTask = task.cloneNode(true);
        console.log(newTask.childNodes);
        
        newTask.firstChild.href = text;
        newTask.firstChild.textContent = text;
        
        newTask.id = `task${i}`;

        document.getElementById('taskList').appendChild(newTask);
        
    // }
        
}




