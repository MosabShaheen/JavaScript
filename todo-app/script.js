const input = document.getElementById("taskInput")
const addTask = document.getElementById("addTask")
const allTasks = document.getElementById("allTasks")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(element => {
    showTasks(element)
});
// for(let i = 0; i<tasks.length; i++){
//     console.log(tasks[i])
//     showTasks(tasks[i])
// }

addTask.addEventListener("click", function () {
    const newTask = {
        id: Date.now(),
        title: input.value.trim(),
        completed: false,
    }
    tasks.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(tasks))
})

function showTasks(task) {
    const li = document.createElement("li")
    if (task.completed) {
        li.innerHTML = `<span style="color:red;">${task.title}</span><button>Delete</button>`
        allTasks.appendChild(li)
    } else {
        li.innerHTML = `<span>${task.title}</span><button>Delete</button>`
        allTasks.appendChild(li)
    }
    li.querySelector("span").addEventListener("click", function () {
        task.completed = !(task.completed)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        location.reload()
    })
}
