function storeUser() {
    let username, email, password1, password2, agb, gebdate, brief_desc, long_desc, goals, goals1, goals2, picture;

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

        let user = new User(null, username, email, password1, gebdate, picture, brief_desc, long_desc, [
            goals,
            goals1,
            goals2
        ]);
        
        sendUser(user)
        alert("Erfolgreich");
    }

}

function storeProject() {

    let picture, title, autor, slz, elz, shortdesc, longdesc, goals, goals1, goals2;

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

    let project = new Project(null, title, slz, elz, picture, autor, [
        goals,
        goals1,
        goals2
    ], [], shortdesc, longdesc);
    
    sendProject(project);
    alert("Erfolgreich");
}

function storeComment() {
    
    let user=localStorage.getItem("currentUserID")
    if(user==0){
        alert("bitte einloggen");
        return;
    }

    let comment, r1, r2, r3, r4, r5, rating;
    
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
       rating = "nicht bewertet";
       console.log("kein rating abgegeben");
    }


    let comm = new Comments(null, comment, rating, user);
    sendComment(comm);  
}

async function sendComment(comment) {
   // let comments = await CommentsJson();
    let maxid = await get_maxID();
    comment.id = maxid;
   // comments.push(comment);
    
    let response = await fetch("/Projectcage/api/comments", {
            method: 'POST',
            body: JSON.stringify(comment),
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    
    if(!response.ok) {
        console.log("Error sending comment");
        return null;
    }
    
}

async function sendProject(project) {
  //  let projects = await ProjectsJson();
    let maxid = await get_maxID();
    project.id = maxid;
   // projects.push(project);
    
    let response = await fetch("/Projectcage/api/projects", {
            method: 'POST',
            body: JSON.stringify(project),
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    
    if(!response.ok) {
        console.log("Error sending comment");
        return null;
    }
    
}

async function sendUser(user) {
    //let users = await UserJson();
    let maxid = await get_maxID();
    user.id = maxid;
    //users.push(user);
    
    let response = await fetch("/Projectcage/api/user", {
            method: 'POST',
            body: JSON.stringify(user),
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    
    if(!response.ok) {
        console.log("Error sending comment");
        return null;
    }

}

async function get_maxID(){
    let pr = await jsonData("projects");
    let us = await jsonData("user");
    let co = await jsonData("comments");
    
    let all = [pr, us, co];

    let max = 0;
    for (let i=0 ; i<3; i++) {
        for (let x of all[i]){
            //console.log("in maxid:",x)
            if (x.id > max) {
                max = x.id;
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
            } else if (temp instanceof Comments){
                c.push(temp);
            }
    }
    return [c, p, u];
}

function emptyStorage() {
    let stor_data = allStorage();
    
    return stor_data !== "undefined" && stor_data[0].length === 0 &&  stor_data[1].length === 0 && stor_data[2].length === 0;
}

function getLastProjects(number){
    let arr = [],i=0;
    ProjectJson(function(projects) {
        projects.sort((a,b) => (a.id-b.id)*-1);
        while( i<number ){
            arr.push(projects[i]);
            i++;
        }
    });
    return arr;
}