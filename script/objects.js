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

    constructor(id,name,brief_desc,long_desc,goals,picture) {
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
    }

}

class Project extends AbstractBase{
    get comments() {
        return this._comments;
    }

    set comments(value) {
        this._comments = value;
    }

    get ratings() {
        return this._ratings;
    }

    set ratings(value) {
        this._ratings = value;
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


    constructor(id,title,start,end,logo,manager,goals,ratings,brief_desc,long_desc) {
        super(id,title,brief_desc,long_desc,goals,logo);
        this._start = start;
        this._end = end;
        this._manager = manager;
        this._comments = [];
        this._ratings = ratings;
    }

    calcDuration(){
        let days = (this._end.getTime()-this._start.getTime())/(1000*3600*24);

        return days;
        // let hours = days%1*24;
        // return "Days: "+Math.round(days) + " Hours: "+ Math.round(hours);
    }

}

class User extends AbstractBase{
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

    constructor(id,username,email,password,gebDate,picture,brief_desc,long_desc,goals) {
        super(id,username,brief_desc,long_desc,goals,picture);
        this._email = email;
        this._password = password;
        this._gebDate = gebDate;
    }

    calcAge(){
        //floor - abrunden
        return Math.floor((Date.now() - this._gebDate.getTime())/(1000*3600*24*360));
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

    constructor(id,comment,rating,user) {
        this._id = id;
        this._comment = comment;
        this._rating = rating;
        this._user = user;
    }

}

function generateJson(object) {
    let jsonString = JSON.stringify(object);
    let lastIndex = jsonString.lastIndexOf("}");
    jsonString = jsonString.substring(0, lastIndex)
    if (object instanceof Project) {
        jsonString += ",\"cType\":1}";
    } else if (object instanceof User) {
        jsonString += ",\"cType\":2}";
    } else if (object instanceof Comments) {
        jsonString += ",\"cType\":3}";
    } else {
        throw new TypeError("Unknown Type of Object");
    }
    return jsonString;
}

function generateObject(jsonString) {
    let jobj = JSON.parse(jsonString);

    if (jobj.cType === 1) {
        jobj = new Project(jobj._id, jobj._name, jobj._start, jobj._end, jobj._picture, jobj._manager, jobj._goals, jobj._comments, jobj._ratings, jobj._brief_desc, jobj._long_desc)
    } else if (jobj.cType === 2) {
        jobj = new User(jobj._id, jobj._name, jobj._email, jobj._password, jobj._gebDate, jobj._picture, jobj._brief_desc, jobj._long_desc, jobj._goals)
    } else {
        jobj = new Comments(jobj._id, jobj._comment, jobj._rating, jobj._user)
    }

    return jobj;
}