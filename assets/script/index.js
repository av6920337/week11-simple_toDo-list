const addBtn = document.getElementById('addBtn');
const myInput = document.getElementById('myInput');
const mainList = document.querySelector('.main_list');

function addTask () {
    const itemLi = document.createElement('li');
    itemLi.textContent=myInput.value;
    mainList.append(itemLi);
    myInput.value='';
} 
function handleKeyPress(e){
    let key=e.keyCode || e.which;
     if (key === 13){ // Клавиша Enter
        addTask();
    }
}