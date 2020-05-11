
var dict = {
    "Projekt": "Project",
    "Menü": "Menu",
    "Kurzbeschreibung": "Brief description",
    "Langbeschreibung": "Long description",
    "Details": "Details",
    "Laufzeit": "Duration",
    "Projektziele": "Project goals",
    "Titel": "Title",
    "Autor": "Author",
};

class Bimbo{
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    constructor(id) {
        if (this.constructor === Bimbo) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        this._id = id;
    }

}

class Project extends Bimbo{
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get end() {
        return this._end;
    }

    set end(value) {
        this._end = value;
    }

    get brief_desc() {
        return this._brief_desc;
    }

    set brief_desc(value) {
        this._brief_desc = value;
    }

    get long_desc() {
        return this._long_desc;
    }

    set long_desc(value) {
        this._long_desc = value;
    }

    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }

    get manager() {
        return this._manager;
    }

    set manager(value) {
        this._manager = value;
    }

    get goals() {
        return this._goals;
    }

    set goals(value) {
        this._goals = value;
    }

    constructor(id,title,start,end,brief_desc,long_desc,logo,manager,goals) {
        super(id);
        this._title = title;
        this._start = start;
        this._end = end;
        this._brief_desc = brief_desc;
        this._long_desc = long_desc;
        this._logo = logo;
        this._manager = manager;
        this._goals = goals;
    }
    
    calsDuration(){
        let days = (this._end.getTime()-this._start.getTime())/(1000*3600*24);
        let hours = days%1*24;
        return "Tage: "+Math.round(days) + " Stunden: "+ Math.round(hours);
    }

}


let bar = new Project(1,"faking",new Date(2020,5,10),new Date(2020,5,26,10));
console.log(bar);

