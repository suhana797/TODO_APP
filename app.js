var list=document.getElementById("list");




function todoitem(){
// create li
var todo = document.getElementById("todo");
var li = document.createElement('li');
var litext=document.createTextNode(todo.value)
li.appendChild(litext);
// delete button

var delbtn =document.createElement("button")
var deltext =document.createTextNode("DELETE")
delbtn.appendChild(deltext)
li.appendChild(delbtn)
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","deleteitem(this)")

// editbutton
var editbtn =document.createElement("button");
var edittext =document.createTextNode("EDIT ITEM");
editbtn.appendChild(edittext);
li.appendChild(editbtn)
editbtn.setAttribute("class","btn")
editbtn.setAttribute("onclick","editbutton(this)")


list.appendChild(li)
todo.value =" "

}

function deleteitem(e){
e.parentNode.remove();


}
function deleteall(){
    list.innerHTML="";
}
function editbutton(e){

 var val=prompt("enter updated value",e.parentNode.firstChild.nodeValue);
 e.parentNode.firstChild.nodeValue=val;
}