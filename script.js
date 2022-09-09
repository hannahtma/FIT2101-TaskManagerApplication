localStorage;

// Showing the Task
const showCard = document.getElementById('show-card');
const showTask = document.getElementById('show-task');

// Display enlarged Task with all details of the card with "Edit Task" button
const popupContainer = document.getElementById('popup-container');

showTask.addEventListener('click', () => {
    popupContainer.classList.add('show');
});

// Popup window that prompts for user to enter new task details
const editCard = document.getElementById('edit-card');
const editContainer = document.getElementById('edit-container');

editCard.addEventListener('click', () => {
    editContainer.classList.add('show');
});

// When "Cancel" button is clicked, popup disappears and goes back to original card layout
const cancelEdit = document.getElementById('cancel-edit');

cancelEdit.addEventListener('click', () => {
    editContainer.remove('show');
});

// When "Save and Exit" button is clicked, new task details will be replaced
const saveAndExit = document.getElementById('save-and-exit');
const taskName = document.getElementById('task-name');
const taskDesc = document.getElementById('task-desc');
const taskHeader = document.getElementById('task-header');
const taskContent = document.getElementById('task-content');

saveAndExit.addEventListener('click', function() {
    editContainer.remove('show');
    popupContainer.classList.remove('show');
    localStorage.setItem('task-name', taskName);
    localStorage.setItem('task-desc', taskDesc);
    taskHeader.textContent = $('taskName');
    taskContent.textContent = taskDesc;
});

// Created a drop down menu that allows user to tag the task
const dropdowns = document.querySelectorAll('.dropdown');

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
