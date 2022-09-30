export default class Sprint {
    constructor(sprintList = []) {
        this._sprintList = sprintList;
    }
    //-------ACCESSORS---------------
    get sprintList() { return this._sprintList };
    //-------MUTATORS-----------------
    set sprintList(newSprintList) { this._sprintList = newSprintList };
    //-------METHOD---------------
    fromData(data) {
        this._sprintList = data._sprintList;
    }
}