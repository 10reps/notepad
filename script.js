const items = document.querySelector('.items');
const write = document.querySelector('.write');
const addBtn = document.querySelector('.add__button');

function onAdd() {
    const text = write.value;

    const item = createItem(text);

    items.appendChild(item);

}


function createItem(text) {

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const name = document.createElementNS('div');
    name.setAttribute('class', 'item__name');

    const deleteBtn = document.createElementNS('button');
    deleteBtn.setAttribute('class', 'trashBtn');

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    itemRow.appendChild(name);
    itemRow.appendChild(deleteBtn);

    return itemRow;
}


addBtn.addEventListener('click', event => {
    console.log('dfdf');
    onAdd();
});