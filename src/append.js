function appendTo(parentID, childTag, todo) {
    const newNode = document.createElement(childTag);
    const parent = document.getElementById(parentID);
    newNode.innerHTML = todo.getTitle();
    newNode.setAttribute('style', 'background-color: wheat; padding: 10px; border: 1px solid black;');
    parent.appendChild(newNode);
}

export default appendTo;