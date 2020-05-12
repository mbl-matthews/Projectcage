
class JsonKonverter{

    constructor() {
        this._object = undefined;
        this._jsonString = undefined;
    }

    generateJson(object){
        this._jsonString = JSON.stringify(object);
        let lastIndex = this._jsonString.lastIndexOf("}");
        this._jsonString = this._jsonString.substring(0,lastIndex)
        if(object instanceof Project){
            this._jsonString += ",\"cType\":1}";
        }else if(object instanceof User) {
            this._jsonString += ",\"cType\":2}";
        }else if(object instanceof Comments) {
            this._jsonString += ",\"cType\":3}";
        }else{
            throw new TypeError("Unknown Type of Object");
        }
        console.log("jstring generiert: "+this._jsonString);
        return this._jsonString;
    }

    generateObject(jsonString){
        let jobj = JSON.parse(jsonString);

        if (jobj.cType === 1){
            console.log("JAWWOLLLLLL JAAAA ICH BIN EIN FUCKING PROJEKT");
            this._object = new Project(jobj._id,jobj._name,jobj._start,jobj._end,jobj._picture,jobj._manager,jobj._goals,jobj._comments,jobj._ratings,jobj._brief_desc,jobj._long_desc)
        }else if (jobj.cType === 2){
            this._object = new User(jobj._id,jobj._name,jobj._email,jobj._password,jobj._gebDate,jobj._picture,jobj._brief_desc,jobj._long_desc,jobj._goals)
        }else{
            this._object = new Comments(jobj._id,jobj._comment,jobj._rating,jobj._user)
        }

        return this._object;
    }

}