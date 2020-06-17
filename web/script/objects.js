class AbstractBase{
    get goals() {
        return this._goals;
    }

    set goals(value) {
        this._goals = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
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

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get picture() {
        return this._picture;
    }

    set picture(value) {
        this._picture = value;
    }
    
    get cType() {
        return this._cType;
    }

    set cType(value) {
        this._cType = value;
    }

    constructor(id, name, brief_desc, long_desc, goals, picture, cType) {
        if (this.constructor === AbstractBase) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        this._id = id;
        this._name = name;
        this._brief_desc = brief_desc;
        this._long_desc = long_desc;
        this._goals = goals;
        this._picture = picture;
        this._cType = cType;
    }

}

class Project extends AbstractBase {

    get comments() {
        return this._comments;
    }

    set comments(value) {
        this._comments = value;
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

    get manager() {
        return this._manager;
    }

    set manager(value) {
        this._manager = value;
    }


    constructor(id, title, start, end, logo, manager, goals, comments, brief_desc, long_desc) {
        super(id, title, brief_desc, long_desc, goals, logo, 1);
        this._start = start;
        this._end = end;
        this._manager = manager;
        this._comments = comments;
    }

    calcDuration() {
        let days = (this._end.getTime() - this._start.getTime()) / (1000 * 3600 * 24);

        return days;
    }

}

class User extends AbstractBase {
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get gebDate() {
        return this._gebDate;
    }

    set gebDate(value) {
        this._gebDate = value;
    }

    constructor(id, username, email, password, gebDate, picture, brief_desc, long_desc, goals) {
        super(id, username, brief_desc, long_desc, goals, picture, 2);
        this._email = email;
        this._password = password;
        this._gebDate = gebDate;
    }

    calcAge() {
        //floor - abrunden
        return Math.floor((Date.now() - this._gebDate.getTime()) / (1000 * 3600 * 24 * 360));
    }
}

class Comments {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get comment() {
        return this._comment;
    }

    set comment(value) {
        this._comment = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get cType() {
        return this._cType;
    }

    set cType(value) {
        this._cType = value;
    }

    constructor(id, comment, rating, user) {
        this._id = id;
        this._comment = comment;
        this._rating = rating;
        this._user = user;
        this._cType = 3;
    }

}

function generateJson(object) {
   
    let jsonString = JSON.stringify(object);

    return jsonString;
}

function generateObject(jobj) {
    //let jobj;

    try {
        //jobj = JSON.parse(jsonString);
        if (jobj._cType == 1 || jobj.cType == 1) {
            jobj = new Project(jobj._id, jobj._name, new Date(jobj._start), new Date(jobj._end), jobj._picture, jobj._manager, jobj._goals, jobj._comments, jobj._brief_desc, jobj._long_desc)
        } else if (jobj._cType == 2 || jobj.cType == 2) {
            jobj = new User(jobj._id, jobj._name, jobj._email, jobj._password, new Date(jobj._gebDate), jobj._picture, jobj._brief_desc, jobj._long_desc, jobj._goals)
        } else if (jobj._cType == 3 || jobj.cType == 3) {
            jobj = new Comments(jobj._id, jobj._comment, jobj._rating, jobj._user)
        } else {
            console.log("ripititi",jobj);
        }

        return jobj;
    }catch(e){
        console.log(e)
       console.log("Error at generating object geparstes jsonObjekt:",jobj);
       console.log("\njson string:",jsonString);
    }


}