let bar = new Project(1,"faking",new Date(2020,5,10),new Date(2020,5,26,10));
let user = new User(1,"Frank","arsch@kacke.de","123",new Date("1980"));


let json = new JsonKonverter();

myJSON = json.generateJson(user);
myOBJ = json.generateObject(myJSON);

