var list = document.getElementById("list");



function addTodo(){
    var todo_item = document.getElementById("todo-item")



    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    list.appendChild(li)

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")

    delBtn.appendChild(delText)

   li.appendChild(delBtn)


    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("onclick", "editText(this)")
    editBtn.setAttribute("class","btn")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)


   

    

    todo_item.value=""


    

}
function deleteItem(e){
    
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editText(e){
    var val =  e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter edit value", val)
    
   e.parentNode.firstChild.nodeValue = editValue
   
}