const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.write');
const addBtn = document.querySelector('.add__button');


function onAdd() {
    const text = input.value;

    const item = createItem(text);

    items.appendChild(item);

    item.scrollIntoView({block: 'center'});

    input.value = '';
    input.focus();
};


let id = 0;

function createItem(text) {

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);

    itemRow.innerHTML = `
        <div class="item__name">${text}</div>
        <button class="trashBtn">
            <i class="fa-solid fa-trash-can" data-id=${id}></i>
        </button>
    `;

    return itemRow;
};

form.addEventListener('submit', event => {
    onAdd();
});


items.addEventListener('click', event => {
    const id = event.target.dataset.id;

    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    };
});