

function sortProject_manager(projectlist) {
    function compare(a, b) {
        const ma = a.manager.toUpperCase();
        const mb = b.manager.toUpperCase();

        let comparison = 0;
        if (ma > mb) {
            comparison = 1;
        } else if (ma < mb) {
            comparison = -1;
        }
        return comparison;
    }

    projectlist.sort(compare);
}

function sortProject_startDate(projectlist) {
    function compare(a, b) {
        return a._start - b._start;
    }

    projectlist.sort(compare);
}

function sortProject_duration(projectlist) {
    function compare(a, b) {
        return -1 * (a.calcDuration() < b.calcDuration());
    }

    projectlist.sort(compare);
}


function getLanguage() {
    let language = window.navigator.language;
    return language;
}


function welcome() {
    let fenster1 = window.open("", "welcome", "width=500,height=250,left=600,top=400");
    fenster1.document.write("<h1>Wilkommen auf Projketportal</h1><h2 id='lang'></h2>");
    let lang = fenster1.document.getElementById("lang");
    lang.innerHTML += "Language: " + getLanguage();
    fenster1.setTimeout("close()", 5000);
}


function login(){
    let users=allStorage()[2];
    let user = document.querySelector("#uname").value;
    let pw = document.querySelector("#pw").value;

    for(x of users){
        if(x._name==user){
            if(x._password==pw){
                let login = document.getElementById("login");

                let new_login = login.cloneNode(false);
                login.parentNode.replaceChild(new_login, login);
                console.log(login);
                let btn = document.createElement("button");
                btn.textContent="Ausloggen";
                btn.setAttribute("class","logout");
                btn.addEventListener("click", function(){
                    new_login.parentNode.replaceChild(login,new_login)
                });
                new_login.appendChild(btn);
            }else{
                alert("Passwort falsch")
            }
        }
    }

}

/*


registrieren typw password IN JAVASCRIPT

 */





function index_projectList(number){
    let list = document.getElementById("projectList");
    let clone = list.cloneNode(false);
    list.parentNode.replaceChild(clone, list);
    let projects=getLastProjects(number);
    for(let i=0; i<number; i++){
        if(projects[i]==undefined){
            continue;
        }
        let li=document.createElement("li");
        let a=document.createElement("a");
        li.appendChild(a);
        a.textContent=projects[i]._name;
        //href ändern
        a.setAttribute("href","sites/Projekt1.html");
        clone.appendChild(li);
    }
}

function showAllProjects(){
    let projects=allStorage()[1];
    projects.sort((a,b) => (a._id-b._id)*-1);
    console.log(projects)
    let section = document.getElementById("allProjects");
    for(let i=0; i<projects.length; i++){
        let article = document.createElement("article");
        let header = document.createElement("header");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let footer = document.createElement("footer");
        let span = document.createElement("span");
        let a = document.createElement("a");

        header.appendChild(h2);
        article.appendChild(header);
        article.appendChild(p);
        article.appendChild(footer);
        footer.appendChild(span);
        footer.appendChild(a);

        h2.textContent=projects[i]._name + " - " + projects[i]._manager;
        p.textContent=projects[i]._brief_desc;
        span.textContent="Projektzeitraum: " + projects[i]._start + " - " + projects[i]._end;
        a.textContent=" Details"
        //href ändern
        a.setAttribute("href","sites/Projekt1.html");
        section.appendChild(article);
    }
}

function showProject(id){
    let project = generateObject(localStorage.getItem(id));
    if(!project){
        alert("showProject kaputt")
        return -1;
    }

    let header = document.getElementById("topcontainer");
    let logo = document.getElementById("logo");
    let milestones = document.getElementById("milestones");

  /* wie soll ein bild gehenb????
    logo.setAttribute("src",project._picture)*/
    header.getElementsByTagName("h1")[0].textContent=project._name;
    header.getElementsByTagName("h2")[0].textContent=project._manager;
    header.getElementsByTagName("p")[0].textContent="Laufzeit: " + project._start + " bis " + project._end;

    document.getElementById("shortdesc").getElementsByTagName("p")[0].textContent=project._brief_desc;
    document.getElementById("longdesc").getElementsByTagName("p")[0].textContent=project._long_desc;

    milestones = milestones.getElementsByTagName("ol")[0];
    let new_milestones = milestones.cloneNode(false);
    milestones.parentNode.replaceChild(new_milestones, milestones);

    for(x of project._goals){
        console.log(x)
        let li = document.createElement("li");
        li.textContent=x;
        new_milestones.appendChild(li);
    }

}

