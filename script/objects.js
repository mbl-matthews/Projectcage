class Bimbo{
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
        if (this.constructor === Bimbo) {
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

class Project extends Bimbo{
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


    constructor(id,title,start,end,logo,manager,goals,comments,ratings,brief_desc,long_desc) {
        super(id,title,brief_desc,long_desc,goals,logo);
        this._start = start;
        this._end = end;
        this._manager = manager;
        this._comments = comments;
        this._ratings = ratings;
    }

    calsDuration(){
        let days = (this._end.getTime()-this._start.getTime())/(1000*3600*24);
        let hours = days%1*24;
        return "Days: "+Math.round(days) + " Hours: "+ Math.round(hours);
    }

}

class User extends Bimbo{
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
