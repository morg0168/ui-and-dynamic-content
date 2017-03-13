/* Access new-item button. 
Access unordered list.
Declare variable list-item. */
var newButton,
    unorderedList,
    listItem,
    i;
newButton = document.querySelector("button");
unorderedList = document.getElementById("newunorderedlist");
/*
Start function removeItem (use event object to find out which item is clicked).
    Remove clicked item from unordered list. 
End function removeItem. */

function removeItem(e) {
    "use strict";
    unorderedList.removeChild(e.target);
}
/*
Start function addItem.
    Create list item and store output in a variable.
    Use innerHTML on created list item and assign it with user input 
    from prompt("Enter a new item for to-do list:"). */
function addItem(e) {
    "use strict";
    listItem = document.createElement("li");
    listItem.innerHTML = window.prompt("Enter a new item for to-do list:");
    /*If list item has a content:   
        Append list item to unordered list.
        Add event listener to list item to listen for click event - event 
        handler will be removeItem function.*/
    if (listItem.innerHTML !== null && listItem.innerHTML !== "") {
        unorderedList.appendChild(listItem);
        listItem.addEventListener("click", removeItem, false);
    }
}
/*Add event listener to button to listen for click event - event handler will be addItem function*/
newButton.addEventListener("click", addItem, false);

//Fade in function
function fadeIn(id, delay) {
    var e = document.getElementById(id);
    setTimeout(function () {
        e.style.opacity = 1;
    }, delay * 1200)
}

window.onload = function () {
    fadeIn("fadein-h1", 1);
     fadeIn("fadein-h2", 2);
     fadeIn("fadein-main", 3);
    fadeIn("fadein-footer", 4);
}
