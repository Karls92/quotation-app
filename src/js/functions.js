
// create nodes
export function createNode(typeElement, classes, id, content, parent) {
    const element = document.createElement(typeElement);
    element.innerText = content; // insert the content
    //insert the classes
    if (typeof(classes) !== 'object'){
        console.log("The classes must be inserted as array");
    }
    else{
        if(classes.length > 0){ // check if the array of classes has one or more element
            for (let val of classes) {
                element.classList.add(val);
            }
        }
    }
    if(id !== "") element.id = id; // create an id to the node
    parent.appendChild(element); // add node to parent
    return element; // return the node
}



