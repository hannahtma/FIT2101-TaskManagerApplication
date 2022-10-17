<template>
  <div class="task-container" id="task-container">
    <div class="show-task" id="show-task">
      <h1 id="task-header">Task Name here</h1>
      <p id="task-content">Task Desc here</p>
      <div class="dropdown">
        <div class="select">
          <span class="selected">Tags</span>
          <div class="caret"></div>
        </div>
        <u1 class="menu">
          <li>Core</li>
          <li>UI</li>
          <li>All</li>
        </u1>
      </div>
    </div>
  </div>
  <div class="popup-container" id="popup-container">
    <div class="popup">
      <h1>Task Name still here</h1>
      <p>The whole task description will show up when you click the card.</p>
      <button class="delete-card" id="delete-card">Remove</button>
      <button class="edit-card" id="edit-card">Edit Task</button>
      <div class="dropdown">
        <div class="select">
          <span class="selected">Tags</span>
          <div class="caret"></div>
        </div>
        <u1 class="menu">
          <li>Core</li>
          <li>UI</li>
          <li>All</li>
        </u1>
      </div>
      <div class="priority-dropdown">
        <div class="select-priority">
          <span class="selected-priority">Priority</span>
          <div class="caret-priority"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="edit-container" id="edit-container">
    <div class="edit">
      <input id="task-name"><br>
      <input id="task-desc"><br>
      <button class="cancel-edit" id="cancel-edit">Cancel</button>
      <button class="save-and-exit" id="save-and-exit">Save & Exit</button>
      <div class="dropdown">
        <div class="select">
          <span class="selected">Tags</span>
          <div class="caret"></div>
        </div>
        <u1 class="menu">
          <li>Core</li>
          <li>UI</li>
          <li>All</li>
        </u1>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  mounted() {
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

    showTask.addEventListener('click', () => {
      popupContainer.classList.add('show');
    });

    editCard.addEventListener('click', () => {
      editContainer.classList.add('show');
    });

    cancelEdit.addEventListener('click', () => {
      editContainer.remove('show');
    });

    saveAndExit.addEventListener('click', function () {
      editContainer.remove('show');
      popupContainer.classList.remove('show');
      localStorage.setItem('task-name', taskName);
      localStorage.setItem('task-desc', taskDesc);
      taskHeader.textContent = taskName;
      taskContent.textContent = taskDesc;
    });

    dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector('.select');
      const caret = dropdown.querySelector('.caret');
      const menu = dropdown.querySelector('.menu');
      const options = dropdown.querySelectorAll('.menu li')
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
  }
}

</script>

<style scoped>
body {
  background-color: #fff;
  font-family: "Poppins", serif;
}

.task-container {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
}

.show-task {
  background-color: #e6746c;
  border-radius: 5px;
  padding: 30px 60px;
  width: 250px;
  height: 150px;
  max-width: 100%;
  text-align: center;
  cursor: pointer;
}

.popup-container {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.popup {
  background-color: #e6746c;
  border-radius: 5px;
  padding: 30px 60px;
  width: 250px;
  height: 150px;
  max-width: 100%;
  text-align: center;
}

.popup h1 {
  margin: 0;
}

.popup p {
  font-size: 14px;
  opacity: 0.7;
}

.edit-task button {
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px 25px;
  cursor: pointer;
}

.edit-container {
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.edit {
  background-color: #e6746c;
  border-radius: 5px;
  padding: 30px 60px;
  width: 250px;
  height: 150px;
  max-width: 100%;
  text-align: center;
}

.save-and-exit button {
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px 25px;
  cursor: pointer;
}

.dropdown {
  width: 80px;
  height: 50px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  margin: 2em;
}

.dropdown * {
  box-sizing: border-box;
}

.select {
  background: #01819A;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;
  transition: 0.3s;
}

.select:hover {
  background: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;
}


.menu {
  list-style: none;
  padding: 0.2em 0.5em;
  background: #01819A;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li {
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
}

.menu li:hover {
  background: #2a2d35;
}

</style>