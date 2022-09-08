localStorage;

// task card before enlarging
const showCard = document.getElementById('show-card');

// enlarged task card popup
const popupContainer = document.getElementById('popup-container');
const editCard = document.getElementById('edit-card');
const editContainer = document.getElementById('edit-container');
const saveAndExit = document.getElementById('save-and-exit');
const cancelEdit = document.getElementById('cancel-edit');
const dropdowns = document.querySelectorAll('.dropdown');
const taskName = document.getElementById('task-name');
const taskDesc = document.getElementById('task-desc');
const taskHeader = document.getElementById('task-header');
const taskContent = document.getElementById('task-content');
const showTask = document.getElementById('show-task');

const priorityDropdown = document.querySelectorAll('.dropdown-priority');

/*
const taskNameDiv = document.getElementById('taskNameDiv');
const taskDescDiv = document.getElementById('taskDescDiv')
*/

showTask.addEventListener('click', () => {
    popupContainer.classList.add('show');
});

editCard.addEventListener('click', () => {
    editContainer.classList.add('show');
});

cancelEdit.addEventListener('click', () => {
    editContainer.remove('show');
});

saveAndExit.addEventListener('click', function() {
    editContainer.remove('show');
    popupContainer.classList.remove('show');
    localStorage.setItem('task-name', taskName);
    localStorage.setItem('task-desc', taskDesc);
    taskHeader.textContent = taskName;
    taskContent.textContent = taskDesc;
});

/*
function nameDisplayCheck() {
    if (localStorage.taskName) {
        h1.textContent = taskName;
    }
}
*/

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown. querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });  
});
