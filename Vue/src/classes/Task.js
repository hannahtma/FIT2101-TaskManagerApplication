export default class Task {
    constructor(taskList = []) {
        this._taskList = taskList;
    }

    //-------ACCESSORS---------------
    get taskList() {
        return this._taskList
    }

    //-------MUTATORS-----------------
    set taskList(newTaskList) {
        this._taskList = newTaskList
    }

    //-------METHOD---------------
    fromData(data) {
        this._taskList = data._taskList;
    }
}