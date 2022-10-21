// 텍스트 작성 후 ADD버튼 누르면 추가

const add = document.querySelector('.add-button');
const write = document.querySelector('.write');

add.addEventListener('click', event => {
    const move = document.createElement('li');
    const ddd = document.createTextNode('sss');
    move.appendChild(ddd);
    document.body.appendChild('li');
});

// 버튼 누르면 삭제