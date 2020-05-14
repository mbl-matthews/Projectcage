/*
    NEUES PROJEKT SEITE weißes registrien durch css?
*/



navigator.geolocation.watchPosition(showPosition);
function showPosition(position) {
    console.log("Aktuelle Position ---  Latitude: " + position.coords.latitude +"  Longitude: " + position.coords.longitude);
}


let bar = new Project(1,"Projket1",new Date(2020,5,3),new Date(2020,5,26,10),undefined,"Arnold");
let bar1 = new Project(1,"Projket2",new Date(2020,1,25),new Date(2020,4,26,10),undefined,"Gerald");
let bar2 = new Project(1,"Projket3",new Date(2020,3,8),new Date(2020,8,26,10),undefined,"Bernd");
let bar3 = new Project(1,"Projket4",new Date(2020,5,15),new Date(2020,5,26,10),undefined,"Heidi");

let list = [bar,bar1,bar2,bar3];


let user = new User(1,"Frank","test@mail.de","123",new Date(1980,3,20));

myJSON = generateJson(user);
console.log("Generated JSON:\n"+myJSON)

myOBJ = generateObject(myJSON);
console.log("Generated Object from JSON:\n",myOBJ);





//test manager sorting
console.log("manager - unsorted list");
console.log(list[0]._manager+"\n"+list[1]._manager+"\n"+list[2]._manager+"\n"+list[3]._manager);

sortProject_manager(list)
console.log("manager - sorted list");
console.log(list[0]._manager+"\n"+list[1]._manager+"\n"+list[2]._manager+"\n"+list[3]._manager);


//test startDate sorting
console.log("startDate - unsorted list");
console.log(list[0]._start+"\n"+list[1]._start+"\n"+list[2]._start+"\n"+list[3]._start);

sortProject_startDate(list)
console.log("startDate - sorted list");
console.log(list[0]._start+"\n"+list[1]._start+"\n"+list[2]._start+"\n"+list[3]._start);



// test duration sorting
console.log("duration - unsorted list");
console.log(list[0].calcDuration()+"\n"+list[1].calcDuration()+"\n"+list[2].calcDuration()+"\n"+list[3].calcDuration());

sortProject_duration(list)
console.log("duration - sorted list");
console.log(list[0].calcDuration()+"\n"+list[1].calcDuration()+"\n"+list[2].calcDuration()+"\n"+list[3].calcDuration());




console.log("Objekte im locale Storage:\n",allStorage());