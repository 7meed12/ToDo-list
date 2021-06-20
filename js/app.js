const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

// create todos function
const generateTemp = todo => {
    const html = `
    <li class="list-group-item justify-content-between align-items-center d-flex">
    <span>${todo}</span>
    <i class=" far fa-trash-alt delete text-dark"></i>
    </li>
    `;
    ul.innerHTML += html;

};;


// create todos
addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemp(todo);
        addForm.reset();
    };

});

// delete todos
ul.addEventListener('click',e=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();

};
});

//filter todos function 
const filterTodos = (word) =>{
Array.from(ul.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(word))
    .forEach((todo)=> todo.classList.add('filtered'));
    
Array.from(ul.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(word))
    .forEach((todo)=> todo.classList.remove('filtered'));
    
};



//search and filter todos 
search.addEventListener('keyup', e=>{
const word = search.value.trim().toLowerCase();
filterTodos(word);
});