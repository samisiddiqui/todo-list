import './style.css';
import './reset.css';
import todo from './todo';
import appendTo from './append';
import dataHandler from './datahandler';

const text = document.getElementById('todoText');
const prio = document.getElementById('priority');
const desc = document.getElementById('desc');
const button = document.getElementById('submitButton');
const selectList = document.getElementById('selectList');
const data = new dataHandler();
/*const dropdown = document.createElement('select');
const option = document.createElement('option');
option.innerHTML = 'default';
dropdown.appendChild(option);
const form = document.getElementById('form');
form.appendChild(dropdown); */



init();

function init() {
    //App behavior on first initialization
    if (localStorage.getItem('activeList') === null) {
        localStorage.setItem('lists', 'default');
        localStorage.setItem('activeList', 'default');
    }
    if ((localStorage.getItem('lists') === 'default')) {
        let dropdownOption = document.createElement('option');
        dropdownOption.setAttribute('option', 'default');
        dropdownOption.innerHTML = 'default';
        selectList.appendChild(dropdownOption);
    } else {
        let lists = data.getList('lists');
        for (let c = 0; c < Object.keys(lists).length; c++) {
            let dropdownOption = document.createElement('option');
            dropdownOption.setAttribute('option', lists[c]);
            dropdownOption.innerHTML = lists[c];
            selectList.appendChild(dropdownOption);
        }
    }
    let activeList = (localStorage.getItem('activeList') === null) ? selectList.value : localStorage.getItem('activeList');
    let activeListJSON = data.getList(activeList);
    if (activeListJSON !== null) {
        for (let obj = 0; obj < Object.keys(activeListJSON).length; obj++) {
            let currentObj = activeListJSON[obj];
            let newTodo = new todo(currentObj.id, currentObj.priority, currentObj.title, currentObj.description);
            appendTo('list', 'li', newTodo);
        };
    }
}

button.addEventListener('click', function (e) {
    //Retrive values for new todo, create and attach to <ul id="list">
    let newID = (localStorage.getItem('maxID') === null) ? 0 : parseInt(localStorage.getItem('maxID')) + 1;
    let textValue = text.value;
    let newPrio = parseInt(prio.value);
    let setList = selectList.value;
    let newTodo = new todo(newID, newPrio, textValue, desc.value);
    appendTo('list', 'li', newTodo);

    data.appendItem(setList, newTodo);
    localStorage.setItem('maxID', newID);
    localStorage.setItem('activeList', selectList.value);
});