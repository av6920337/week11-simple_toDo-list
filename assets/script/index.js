const addBtn = document.getElementById('addBtn');
const myInput = document.getElementById('myInput');
const mainList = document.querySelector('.main_list');

function addTask () {
    const itemLi = document.createElement('li');
    itemLi.textContent=myInput.value;
    mainList.append(itemLi);
    myInput.value='';

    itemLi.addEventListener('click', function() {
        this.classList.toggle('checked'); // Это добавит или уберет класс при каждом клике.
    });
    
    let span=document.createElement('span');
        span.textContent='\u00d7';
        itemLi.appendChild(span);
    
    span.addEventListener('click', function(){
        this.parentElement.remove();//удаляет родительский элемент.
    });
} 
function handleKeyPress(e){
    let key=e.keyCode || e.which;
     if (key === 13){ // Клавиша Enter
        addTask();
    }
}
