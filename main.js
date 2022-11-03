const items = document.querySelector('.items');
const input = document.querySelector('.write');
const addBtn = document.querySelector('.add__button');

function onAdd() {
    const text = input.value;

    const item = createItem(text);

    items.appendChild(item);

};


function createItem(text) {

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const name = document.createElement('div');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'trashBtn');

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    itemRow.appendChild(name);
    itemRow.appendChild(deleteBtn);

    return itemRow;
};


addBtn.addEventListener('click', () => {
    onAdd();
});