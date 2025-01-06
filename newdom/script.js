const input = document.getElementById("taskinput")
const addTask = document.getElementById("addTask")
const taskUl  = document.getElementById("alltasks")

let tasks = JSON.parse(localStorage.getItem("tasks"))||[]
tasks.forEach(task => {
    renderTask(task)
});
addTask.addEventListener("click",function(){
    const newtask = {
        id : Date.now(),
        task: input.value,
        completed: false
    }
    console.log(tasks)
    tasks.push(newtask)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    input.value = ""
    location.reload()
})
function renderTask(task){
    const li = document.createElement("li")
    li.innerHTML = `<span>${task.task}</span><button>Delete<button>`
    taskUl.appendChild(li)

    li.querySelector("button").addEventListener("click",function(){
        li.remove()
        tasks = tasks.filter(t => t.id !== task.id)
        localStorage.setItem("tasks",JSON.stringify(tasks))
    })
}
