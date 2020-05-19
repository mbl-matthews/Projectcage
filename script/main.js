navigator.geolocation.watchPosition(showPosition);
function showPosition(position) {
    console.log("Aktuelle Position ---  Latitude: " + position.coords.latitude +"  Longitude: " + position.coords.longitude);
}


storeAllObjects();

//Objekte aus edem lokalen speicher zurückholeen
let user = generateObject(localStorage.getItem("1"));
let user1 = generateObject(localStorage.getItem("2"));
let user2 = generateObject(localStorage.getItem("3"));
let ulist = [user,user1,user2];

let comment = generateObject(localStorage.getItem("8"));
let comment1 = generateObject(localStorage.getItem("9"));
let comment2 = generateObject(localStorage.getItem("10"));
let clist = [comment,comment1,comment2];

let proj = generateObject(localStorage.getItem("4"));
let proj2 = generateObject(localStorage.getItem("5"));
let proj3 = generateObject(localStorage.getItem("6"));
let proj4 = generateObject(localStorage.getItem("7"));
let plist = [proj,proj2,proj3,proj4];



//Von User zu json und zurück
myJSON = generateJson(user);
console.log("Generated JSON:\n"+myJSON)

myOBJ = generateObject(myJSON);
console.log("Generated Object from JSON:\n",myOBJ);


//test calcAge
console.log("Alter von "+user.name+" "+user.calcAge())

printSorting()

//print localStorage
console.log("Objekte im locale Storage:");
console.log("Projekte: ",allStorage()[1]);
console.log("User: ",allStorage()[2]);
console.log("Kommentare: ",allStorage()[0]);
console.log("\n\n");

console.log("Brwosersprache: ",getLanguage());
console.log("\n");


function storeAllObjects(){
    let user = new User(1,"Frank","test@mail.de","123",new Date(1980,3,20),undefined,"kurze Beschreibung","lange beschreibung",["Ziel1","Ziel2","Ziel3"]);
    let user1 = new User(2,"Horst","test@mail.de","123",new Date(1980,3,20),undefined,"kurze Beschreibung","lange beschreibung",["Ziel1","Ziel2","Ziel3"]);
    let user2 = new User(3,"Odin","test@mail.de","123",new Date(1980,3,20),undefined,"kurze Beschreibung","lange beschreibung",["Ziel1","Ziel2","Ziel3"]);

    let comment = new Comments(8,"toller Kommentartext",5,5);
    let comment1 = new Comments(9,"Kommentartext",3,6);
    let comment2 = new Comments(10,"2Sterne",2,7);

    let proj = new Project(4,"Projket1",new Date(2020,5,3),new Date(2020,5,26,10),undefined,"Arnold",["Ziel1","Ziel2","Ziel3"],[1,2],undefined,"kurze Beschreibung","lange beschreibung");
    let proj2 = new Project(5,"Projket2",new Date(2020,1,25),new Date(2020,4,26,10),undefined,"Gerald",["Ziel1","Ziel2","Ziel3"],[3],undefined,"kurze Beschreibung","lange beschreibung");
    let proj3 = new Project(6,"Projket3",new Date(2020,3,8),new Date(2020,8,26,10),undefined,"Bernd",["Ziel1","Ziel2","Ziel3"],undefined,undefined,"kurze Beschreibung","lange beschreibung");
    let proj4 = new Project(7,"Projket4",new Date(2020,5,15),new Date(2020,5,26,10),undefined,"Heidi",["Ziel1","Ziel2","Ziel3"],undefined,undefined,"kurze Beschreibung","lange beschreibung");
    let list = [proj,proj2,proj3,proj4,comment,comment1,comment2,user,user1,user2];


    for (let item of list) {
        localStorage.setItem(item._id, generateJson(item));
    }
}


function printSorting() {

    console.log("\n\n");
    console.log("Sortieren der Projekte:");
//test manager sorting
    console.log("manager - unsorted list");
    console.log(plist[0]._manager + "\n" + plist[1]._manager + "\n" + plist[2]._manager + "\n" + plist[3]._manager);

    sortProject_manager(plist)
    console.log("manager - sorted list");
    console.log(plist[0]._manager + "\n" + plist[1]._manager + "\n" + plist[2]._manager + "\n" + plist[3]._manager);
    console.log("\n");

//test startDate sorting
    console.log("startDate - unsorted list");
    console.log(plist[0]._start + "\n" + plist[1]._start + "\n" + plist[2]._start + "\n" + plist[3]._start);

    sortProject_startDate(plist)
    console.log("startDate - sorted list");
    console.log(plist[0]._start + "\n" + plist[1]._start + "\n" + plist[2]._start + "\n" + plist[3]._start);
    console.log("\n");


// test duration sorting
    console.log("duration - unsorted list");
    console.log(plist[0].calcDuration() + "\n" + plist[1].calcDuration() + "\n" + plist[2].calcDuration() + "\n" + plist[3].calcDuration());

    sortProject_duration(plist)
    console.log("duration - sorted list");
    console.log(plist[0].calcDuration() + "\n" + plist[1].calcDuration() + "\n" + plist[2].calcDuration() + "\n" + plist[3].calcDuration());

    console.log("\n\n");
}