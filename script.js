function addTaskCard() {
    // TODO: Task 4
    //Collecting Data from ID's
    let newTitle = document.getElementById("task-title").value;
    let newDesc = document.getElementById("task-desc").value;

    // Try again if empty input
    while (newTitle == "" || newDesc == "") {
        alert("That input is invalid");
        if (newTitle == null || newTitle == "") {
            newTitle = prompt("Name of Title?");
        } else if (newDesc == null || newDesc == "") {
            newDesc = prompt("Description?");
        }
    }

    //Updating the display table/inventory with the user entered data
    // update LS
    // updateLSData(WAREHOUSE_KEY, inventory);
    // update display
    displayCard(newTitle, newDesc);
    $("#exampleModal").modal("hide");
    $("#exampleModal").on("hidden.bs.modal", function (e) {
        $("#exampleModal").find("input[type=text], textarea").val("");
    });
}

function displayCard(title, desc) {
    // TODO: Task 3
    let displayRef = document.getElementById("my-container");
    let displayData = "";
    // This is used to display the entered data and add an edit button next to it
    displayData += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text" id="studentEnrolSummary">${desc}</p>
    <a href="HTML File.html" class="card-link stretched-link">Card link</a>
  </div>
</div>`;

    return (displayRef.innerHTML = displayData);
}

function addClothingCategory() {
    // Get category name
    let newCategory = prompt("Name of new category?");
    // if user clicks cancel
    if (newCategory == null) {
        return;
    }
    // Try again if empty input
    while (newCategory == "") {
        alert("That input is invalid");
        newCategory = prompt("Name of new category?");
    }
    // Confirm add category
    if (confirm(`Confirm to add ${newCategory} as a category?`)) {
        // add to inventory
        inventory.addCategory(newCategory);
        // update LS
        updateLSData(WAREHOUSE_KEY, inventory);
        // update display
        displayInventory(inventory);
    }
}

function edit(category, item) {
    // store data in LS
    localStorage.setItem(CATEGORY_KEY, category);
    localStorage.setItem(ITEM_KEY, item);
    // redirect to edit page
    window.location = "edit.html";
}

/**
 * checkLSData function
 * Used to check if any data in LS exists at a specific key
 * @param {string} key LS Key to be used
 * @returns true or false representing if data exists at key in LS
 */
function checkLSData(key) {
    if (localStorage.getItem(key) != null) {
        return true;
    }
    return false;
}

/**
 * retrieveLSData function
 * Used to retrieve data from LS at a specific key.
 * @param {string} key LS Key to be used
 * @returns data from LS in JS format
 */
function retrieveLSData(key) {
    let data = localStorage.getItem(key);
    try {
        data = JSON.parse(data);
    } catch (err) {
    } finally {
        return data;
    }
}

/**
 * updateLSData function
 * Used to store JS data in LS at a specific key
 * @param {string} key LS key to be used
 * @param {any} data data to be stored
 */
function updateLSData(key, data) {
    let json = JSON.stringify(data);
    localStorage.setItem(key, json);
}

function changeColor(getColor){
    let color = document.querySelector('.color');
    let selectColor = getColor.value;
    color.style.background = selectColor;
}