navigator.geolocation.watchPosition(showPosition);
function showPosition(position) {
    console.log("Aktuelle Position ---  Latitude: " + position.coords.latitude +"  Longitude: " + position.coords.longitude);
}

//Objekte nur beim ersten laden in den Storage speichern
if(localStorage.getItem("10")==undefined){
    storeAllObjects();
}


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
    let user1 = new User(2,"Test-User","test@mail.de","123",new Date(1980,3,20),undefined,"kurze Beschreibung","lange beschreibung",["Ziel1","Ziel2","Ziel3"]);
    let user2 = new User(3,"Odin","test@mail.de","123",new Date(1980,3,20),undefined,"kurze Beschreibung","lange beschreibung",["Ziel1","Ziel2","Ziel3"]);

    let comment = new Comments(8,"toller Kommentartext",5,1);
    let comment1 = new Comments(9,"Kommentartext",3,2);
    let comment2 = new Comments(10,"2Sterne",2,3);

    let proj = new Project(4, "Bierpipeline", new Date(1970, 1, 1), new Date(2038, 1, 19, 10), undefined, "Alfons Hätler", ["Pipeline legen", "Bier trinken", "Volle Möhre ab-metal-n"], [8, 9], "Auf dem Festivalgelände des Wacken Open Air soll zwischen den einzelnen Bierständen und dem Haupttank des Bieres eine pipeline zur Bierversorgung entstehen.", "Auf dem Wacken Open Air wird viel Bier verzerht. Die Menge nach Angaben der Veranstalter: Viel. Zuvor wurden die Bierf&auml;ser &uuml;ber Karren und Lastwagen zu den St&auml;nde transportiert, was sich nun durch den Einsatz einer Pipeline &auml;ndern soll. F&uuml;r die Pipeline werden Rohre verwendet, welche in den Wiesen des Festivalgel&auml;ndes eingegraben werden. Nachdem die Pipeline gelegt wurde, geht es darum ordentlich Bier durch zu pumpen, um den Besuchern ihr Bier zu zapfen, damit danach volle Möhre Metal gehört werden kann.");
    let proj2 = new Project(5, "Weserlieder Open Air 2021", new Date(1970, 1, 1), new Date(2038, 01, 19, 10), undefined, "Andreas Schöneberg", ["Bühne mieten", "Bands buchen", "Aufbau"], [10], "Das Weserlieder Open Air findet seit über 10 Jahren jährlich an der Weserpromenade in Minden statt.", "Die Veranstalter des Festivals haben aus einer privaten Initative heraus das legend&auml;re Musikfestival in Minden an der Weser gegr&uuml;ndet. Man m&ouml;chte lokalen und Regionalen K&uuml;nstlern eine Plattform bieten zu spielen und ihre Musik zu pr&auml;sentieren. Neben lokalen und regionalen Acts sind auch immer wieder &Uuml;berregionale K&uuml;nstler anwesend, um auch einer breiten Masse von Besucher zu gefallen. Das Weserlieder Open Air nimmt keine Eintritt und ist deshalb auf F&ouml;rderung und Spende von Vereinen, Unternehmen und Personen angewiesen. Mittlerweile ist das Weserlieder Open Air zu einer festen Gr&ouml;sse im Mindener Eventkalender geworden und kann sich an der Unterst&uuml;tzung vieler Personen aus dem Umkreis erfreuen. Das soll nat&uuml;rlich auch 2021 wieder so sein!");
    let proj3 = new Project(6, "Cage for President", new Date(2020, 3, 8), new Date(2020, 8, 26, 10), undefined, "Kevin Spacey", ["Nominierung", "Wahl", "Regierung"], [], "Es ist an der Zeit, dass der beste Schauspieler Amerika wieder seine volle Stärke zurück gibt!", "Nicolas Cage ist der beste und sollte deshalb auch Präsident der Vereinigten Staaten von Amerika werden.");
    let proj4 = new Project(7, "Black Lives Matter", new Date(2020, 5, 15), new Date(2020, 5, 26, 10), undefined, "Schwarze Bevölkerung", ["Prostestieren", "Auzfmerksamkeit schaffen", "FCKNAZIS"], [], "Rassismus gegen Schwarze beenden.", "Die Systematische Unterdrückung von Schwarzen in Amerika muss ein Ende finden. Der brutale Ermordung von Goerge Floyd war nur der Tropen, der das Fass zum überlaufen gebracht hat.");
    let list = [proj,proj2,proj3,proj4,comment,comment1,comment2,user,user1,user2];

    console.log(proj4)
    for (let item of list) {
        localStorage.setItem(item.id, generateJson(item));
    }
}


function printSorting() {

    console.log("\n\n");
    console.log("Sortieren der Projekte:");
//test manager sorting
    console.log("manager - unsorted list");
    console.log(plist[0].manager + "\n" + plist[1].manager + "\n" + plist[2].manager + "\n" + plist[3].manager);

    sortProject_manager(plist)
    console.log("manager - sorted list");
    console.log(plist[0].manager + "\n" + plist[1].manager + "\n" + plist[2].manager + "\n" + plist[3].manager);
    console.log("\n");

//test startDate sorting
    console.log("startDate - unsorted list");
    console.log(plist[0].start + "\n" + plist[1].start + "\n" + plist[2].start + "\n" + plist[3].start);

    sortProject_startDate(plist)
    console.log("startDate - sorted list");
    console.log(plist[0].start + "\n" + plist[1].start + "\n" + plist[2].start + "\n" + plist[3].start);
    console.log("\n");


// test duration sorting
    console.log("duration - unsorted list");
    console.log(plist[0].calcDuration() + "\n" + plist[1].calcDuration() + "\n" + plist[2].calcDuration() + "\n" + plist[3].calcDuration());

    sortProject_duration(plist)
    console.log("duration - sorted list");
    console.log(plist[0].calcDuration() + "\n" + plist[1].calcDuration() + "\n" + plist[2].calcDuration() + "\n" + plist[3].calcDuration());

    console.log("\n\n");
}