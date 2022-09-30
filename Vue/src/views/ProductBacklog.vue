<template>
    <body>
        <nav class="navbar navbar-expand-sm">
            <!-- Brand -->
            <a class="navbar-brand" href="index.html">SCRUMFY</a>
            <!-- Links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" id="navLink" href="#">Dashboard</a>
                </li>
                <li class="nav-item dropdown" style="position:relative; left:30px;">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Sprints</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
                <!-- Dropdown -->
                <li class="nav-item dropdown" style="position:relative; left:60px;">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Tasks</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
                <li class="nav-item dropdown" style="position:relative; left:90px;">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Teams</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="app">
            <div class="lists">
                <div class="list">
                    <div class="list-item" draggable="true">User Story 1</div>
                    <div class="list-item" draggable="true">User Story 2</div>
                    <div class="list-item" draggable="true">User Story 3</div>
                </div>
                <div class="list"></div>
            </div>
        </div>
    </body>
</template>    

<script>
    function addSprint() {
        let title = document.getElementById("title-name").value;
        var button = document.createElement("button");
        button.innerHTML = title;
        button.type = "button";
        button.className = "btn btn-primary";
        button.onclick = location.href = "sprintboard.html";
        document.getElementById("container").appendChild(button);
    }

    function newSprintPage() {
        var opened = window.open("");
        opened.document.write(
            "<html><head><title>MyTitle</title></head><body>test</body></html>"
        );
    }

    // -------------------------------------------------------------------------------------

    const list_items = document.querySelectorAll(".list-item");
    const lists = document.querySelectorAll(".list");

    let draggedItem = null;

    for (let i = 0; i < list_items.length; i++) {
        const item = list_items[i];

        item.addEventListener("dragstart", function () {
            draggedItem = item;
            setTimeout(function () {
                item.style.display = "none";
            }, 0);
        });

        item.addEventListener("dragend", function () {
            setTimeout(function () {
                draggedItem.style.display = "block";
                draggedItem = null;
            }, 0);
        });

        for (let j = 0; j < lists.length; j++) {
            const list = lists[j];

            list.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            list.addEventListener("dragenter", function (e) {
                e.preventDefault();
                this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            });

            list.addEventListener("dragleave", function (e) {
                this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            });

            list.addEventListener("drop", function (e) {
                console.log("drop");
                this.append(draggedItem);
                this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            });
        }
    }

</script>

<style>
    nav.navbar.navbar-expand-sm {
    background-color: #ec746c;
}

ul.navbar-nav {
    position: relative;
    left: 30px;
}

#navbarDropdown,
#navbarDropdown2,
#navbarDropdown3,
#navLink {
    font-weight: 500;
    text-transform: uppercase;
}

a.nav-link.active {
    color: white;
}

a.navbar-brand {
    color: black;
    position: relative;
    left: 20px;
    top: -1px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
}
a.navbar-brand:hover {
    color: black;
}

a.dropdown-item {
    color: white;
}

div.dropdown-menu {
    background-color: black;
}

#createId {
    position: relative;
    left: 120px;
    background-color: black;
    text-transform: uppercase;
    font-size: smaller;
    top: 2.5px;
}

div.card {
    margin-left: 10px;
    margin-top: 10px;
}

.btn-primary {
    background-color: #ec746c;
}

/* ----------------------------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #ffce00;
    font-family: "Roboto", Helvetica, sans-serif;
}

.app {
    display: flex;
    flex-flow: column;

    width: 100vw;
    height: 100vh;
}

.lists {
    display: flex;
    flex: 1;
    width: 100%;
    overflow-x: scroll;
}

.lists .list {
    display: flex;
    flex-flow: column;
    flex: 1;

    width: 100%;
    min-width: 250px;
    max-width: 350px;
    height: 100%;
    min-height: 150px;

    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 15px;
    padding: 8px;
    transition: all 0.2s linear;
}

.lists .list .list-item {
    background-color: #f3f3f3;
    border-radius: 8px;
    padding: 15px 20px;
    text-align: center;
    margin: 4px 0px;
}

</style>