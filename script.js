const tasks = [
    "Study javaScript",
    "Sleep at 1AM",
    "Wake up early at 8AM",
    "Do your task"
]
function showTask(event) {
    event.preventDefault()
    const indexInput = document.querySelector(".task-index")
    const index = indexInput.value

    if (index >= tasks.length || index < 0) {
        document.querySelector(".selected-task").textContent = "This task doesn't exist"
    } else {
        document.querySelector(".selected-task").textContent = tasks[index]
        indexInput.value = ""
    }}

document.querySelector(".tasks-length").textContent = tasks.length

document.querySelector(".task-form").onsubmit = showTask
