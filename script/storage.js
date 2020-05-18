function storeUser() {
    let username, email, password1, password2, agb, gebdate, brief_desc, long_desc, goals, goals1, goals2, picture;
    let id = get_maxID();

    username = document.querySelector("#username").value
    email = document.querySelector("#email").value;
    password1 = document.querySelector("#pw1").value;
    password2 = document.querySelector("#pw2").value;
    gebdate = document.querySelector("#gebdate").value;
    brief_desc = document.querySelector("#brief_desc").value;
    long_desc = document.querySelector("#long_desc").value;
    goals = document.querySelector("#goals").value;
    goals1 = document.querySelector("#goals1").value;
    goals2 = document.querySelector("#goals2").value;
    picture = document.querySelector("#picture").value;
    agb = document.querySelector("#agb").checked;

    if (password1 !== password2) {
        alert("Passwoerter stimmen nicht ueberein!");
    } else if (!agb) {
        alert("Bitte AGBs akzeptieren!");
    } else {

        let user = new User(id, username, email, password1, gebdate, picture, brief_desc, long_desc, [
            goals,
            goals1,
            goals2
        ]);
        localStorage.setItem(id, generateJson(user));
        alert("Erfolgrech");
    }

}

function storeProject() {

    let picture, title, autor, slz, elz, shortdesc, longdesc, goals, goals1, goals2;
    let id = get_maxID();

    title = document.querySelector("#titel").value;
    picture = document.querySelector("#file-input").value;
    autor = document.querySelector("#autor").value;
    slz = document.querySelector("#slz").value;
    elz = document.querySelector("#elz").value;
    shortdesc = document.querySelector("#shortdesc").value;
    longdesc = document.querySelector("#longdesc").value;
    goals = document.querySelector("#goals").value;
    goals1 = document.querySelector("#goals1").value;
    goals2 = document.querySelector("#goals2").value;


    let project = new Project(id, title, slz, elz, picture, autor, [
        goals,
        goals1,
        goals2
    ], undefined, shortdesc, longdesc,[undefined,undefined]);
    localStorage.setItem(id, generateJson(project));
    alert("Erfolgrech");
}

function storeComment() {
    let comment, r1, r2, r3, r4, r5, rating;
    let id = get_maxID();

    r1 = document.querySelector("#r1").checked;
    r2 = document.querySelector("#r2").checked;
    r3 = document.querySelector("#r3").checked;
    r4 = document.querySelector("#r4").checked;
    r5 = document.querySelector("#r5").checked;
    comment = document.querySelector("#comment").value;

    if (r1) {
        rating = 1;
    } else if (r2) {
        rating = 2;
    } else if (r3) {
        rating = 3;
    } else if (r4) {
        rating = 4;
    } else if (r5) {
        rating = 5;
    } else {
       rating =undefined; console.log("kein rating abgegeben");
    }

    let user = localStorage.getItem("currenUserID");

    let comm = new Comments(id, comment, rating, user);
    localStorage.setItem(id, generateJson(comm));

    //update project with new comment
    let project = generateObject(localStorage.getItem(localStorage.getItem("ProjectID")));
    project._comments.push(id);
    localStorage.setItem(project._id, generateJson(project));
    console.log( project._comments)
    console.log( project)
}


function get_maxID(){
    let max=0;

    for (let i=0 ; i<3; i++) {
        for (let x of allStorage()[i]){
            if (x._id > max) {
                max = x._id;
            }
        }
    }
    return max+1;
}

function allStorage() {
    let temp;
    let p = [];
    let u = [];
    let c = [];
    let keys = Object.keys(localStorage), i = keys.length;

    while (i--) {
        temp = generateObject(localStorage.getItem(keys[i]));
        if (temp instanceof Project) {
            p.push(temp);
        } else if (temp instanceof User) {
            u.push(temp);
        } else {
            c.push(temp);
        }
    }
    return [c, p, u];
}

function getLastProjects(number){
    let arr = [],i=0;
    let projects=allStorage()[1];
    projects.sort((a,b) => (a._id-b._id)*-1);
    while( i<number ){
        arr.push(projects[i]);
        i++;
    }
    return arr;
}