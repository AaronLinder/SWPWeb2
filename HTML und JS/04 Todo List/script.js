let todos = [
];

printTasks();
let maxId = 4;
document.getElementById("input").addEventListener("change", function(event){
    console.log(event.target.value);
    maxId++;
    todos.push({id:maxId, title:event.target.value, isDone:false})
    printTasks();
})

function printTasks(){
    let html = "";
    todos.forEach(element =>{
        let style = element.isDone?"green":"none";
        html += "<div class='task' style='background-color:" + style + "'>" + element.title + " " + element.isDone + "<div onClick='setIsDone(" +element.id + ")'>Done</done><div onClick='deleteTask(" + element.id + ")'>Delete</div></div></div>";
    });

    document.getElementById("todos").innerHTML = html;
}

function setIsDone(id){
    let todo = todos.find(element =>{
        if(element.id == id){
            return true;
        }
    })
    todo.isDone = !todo.isDone;
    printTasks();
}

function deleteTask(id){
    let index = todos.findIndex(element =>{
        if(element.id == id){
            return true;
        }
    })
    todos.splice(index,1);
    printTasks();
}