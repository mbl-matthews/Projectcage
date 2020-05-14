/*
    NEUES PROJEKT SEITE weißes registrien durch css?
*/
navigator.geolocation.watchPosition(showPosition);
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +"  Longitude: " + position.coords.longitude);
}


let bar = new Project(1,"faking",new Date(2020,5,3),new Date(2020,5,26,10),undefined,"fucker2");
let bar1 = new Project(1,"faking",new Date(2020,5,25),new Date(2020,5,26,10),undefined,"fucker3");
let bar2 = new Project(1,"faking",new Date(2020,5,8),new Date(2020,5,26,10),undefined,"fucker1");
let bar3 = new Project(1,"faking",new Date(2020,5,15),new Date(2020,5,26,10),undefined,"heidi");

let list = [bar,bar1,bar2,bar3];


let user = new User(1,"Frank","arsch@kacke.de","123",new Date("1980"));

myJSON = generateJson(user);
console.log("Generated JSON:\n"+myJSON)

myOBJ = generateObject(myJSON);
console.log("Generated Object from JSON:\n",myOBJ);




/*
//test manager sorting
console.log("unsorted list");
console.log(list[0]._manager+list[1]._manager+list[2]._manager+list[3]._manager);

sortProject_manager(list)
console.log("sorted list");
console.log(list[0]._manager+list[1]._manager+list[2]._manager+list[3]._manager);


 //test startDate sorting
console.log("unsorted list");
console.log(list[0]._start+list[1]._start+list[2]._start+list[3]._start);

sortProject_startDate(list)
console.log("sorted list");
console.log(list[0]._start+list[1]._start+list[2]._start+list[3]._start);



// test duration sorting
console.log("unsorted list");
console.log(list[0].calcDuration()+" - "+list[1].calcDuration()+" - "+list[2].calcDuration()+" - "+list[3].calcDuration());

sortProject_duration(list)
console.log("sorted list");
console.log(list[0].calcDuration()+" - "+list[1].calcDuration()+" - "+list[2].calcDuration()+" - "+list[3].calcDuration());
*/



console.log("Objekte im locale Storage:\n",allStorage());